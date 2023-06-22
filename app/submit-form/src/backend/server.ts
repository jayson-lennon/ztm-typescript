import path from "path";
import cookie from "@fastify/cookie";
import formBody from "@fastify/formbody";
import staticFiles from "@fastify/static";
import dotenv from "dotenv";
import Fastify from "fastify";
import nunjucks from "nunjucks";
import { z } from "zod";
import { checkComplexity } from "../shared/password-rules";
import { checkUsername } from "../shared/username-rules";
import { comparePassword, hashPassword } from "./auth";
import { connect, newDb, SqliteSession, SqliteUserRepository } from "./db";
import { clearFlashCookie, FLASH_MSG_COOKIE } from "./flash";
import type { FastifyRequest } from "fastify";
import type { FastifyReply } from "fastify/types/reply";

dotenv.config();

const SESSION_COOKIE = "SESSION_ID";

const environment = process.env.NODE_ENV;
const cookieSecret = process.env.COOKIE_SECRET;
if (cookieSecret === undefined) {
  console.error("must set COOKIE_SECRET environment variable");
  process.exit(1);
}
const templates = new nunjucks.Environment(new nunjucks.FileSystemLoader("src/backend/templates"));
const USERS_DB = "./users.sqlite";

const accountLoginRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type AccountLoginRequest = z.infer<typeof accountLoginRequestSchema>;

const accountCreateRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
  agreedToTerms: z.string().optional(),
});

type AccountCreateRequest = z.infer<typeof accountCreateRequestSchema>;

const fastify = Fastify({
  logger: true,
});

// middlewares
{
  // process forms
  fastify.register(formBody);

  // enable cookies
  fastify.register(cookie, {
    secret: cookieSecret,
  });

  // middleware to clear out the "flash" cookie on every request
  fastify.register(clearFlashCookie);

  // serve static files
  fastify.register(staticFiles, {
    root: path.join(__dirname, '../../dist'),
  });
}

function setSessionCookie(reply: FastifyReply, sessionId: string): void {
  reply.setCookie(SESSION_COOKIE, sessionId, {
    path: "/",
  });
}

function readSessionCookie(request: FastifyRequest): string | undefined {
  return request.cookies[SESSION_COOKIE];
}

function setFlashCookie(reply: FastifyReply, msg: string): void {
  reply.setCookie(FLASH_MSG_COOKIE, msg, {
    path: "/",
  });
}

function readFlashCookie(request: FastifyRequest): string | undefined {
  return request.cookies[FLASH_MSG_COOKIE];
}

fastify.get("/welcome", async (request, reply) => {
  const sessionId = readSessionCookie(request);
  if (sessionId === undefined) {
    setFlashCookie(reply, "Please sign in to continue.");
    await reply.redirect("/signin");
    return;
  }

  const db = await connect(USERS_DB);
  const sessions = new SqliteSession(db);
  const user = await sessions.get(sessionId);
  if (user === undefined) {
    setFlashCookie(reply, "Your session has expired. Please sign in to continue.");
    await reply.redirect("/signin");
    return;
  }

  const rendered = templates.render("welcome.njk", { environment, email: user.email });
  await reply
    .header("Content-Type", "text/html; charset=utf-8")
    .send(rendered);
});

fastify.get("/", async (request, reply) => {
  await reply.redirect("/signin");
});

fastify.get("/signin", async (request, reply) => {
  const serverMsg = readFlashCookie(request);
  const rendered = templates.render("signin.njk", { server_msg: serverMsg, environment });
  await reply
    .header("Content-Type", "text/html; charset=utf-8")
    .send(rendered);
});

fastify.post("/account/signin", async (request, reply) => {
  let requestData: AccountLoginRequest;
  try {
    requestData = accountLoginRequestSchema.parse(request.body);
  } catch (err) {
    setFlashCookie(reply, "There was an error processing your request.");
    return await reply.redirect("/signin");
  }

  const db = await connect(USERS_DB);
  const userRepository = new SqliteUserRepository(db);
  try {
    const user = await userRepository.findByEmail(requestData.email);
    if (user === undefined) {
      setFlashCookie(reply, "Invalid login credentials");
      await reply.redirect("/signin");
      return;
    }
    const passwordMatches = await comparePassword(requestData.password, user.hashedPassword);
    if (!passwordMatches) {
      setFlashCookie(reply, "Invalid login credentials");
      return await reply.redirect("/signin");
    }
    const sessions = new SqliteSession(db);
    const sessionId = await sessions.create(user.id);
    setSessionCookie(reply, sessionId);
    return await reply.redirect("/welcome");
  } catch (e) {
    console.error(e);
    setFlashCookie(reply, "Invalid login credentials");
    return await reply.redirect("/signin");
  }
});

fastify.get("/signup", async (request, reply) => {
  const serverMsg = readFlashCookie(request);
  const rendered = templates.render("signup.njk", { server_msg: serverMsg, environment });
  await reply
    .header("Content-Type", "text/html; charset=utf-8")
    .send(rendered);
});

fastify.post("/account/signup", async (request, reply) => {
  let requestData: AccountCreateRequest;
  try {
    requestData = accountCreateRequestSchema.parse(request.body);
  } catch (e) {
    setFlashCookie(reply, "There was an error processing your request.");
    return await reply.redirect("/signup");
  }

  if (requestData.agreedToTerms !== "on") {
    setFlashCookie(reply, "You must agree to the terms to sign up.");
    return await reply.redirect("/signup");
  }

  const usernameFailures = checkUsername(requestData.email);
  if (usernameFailures.length > 0) {
    const formattedErrors = usernameFailures.join("<br>");
    setFlashCookie(reply, formattedErrors);
    return await reply.redirect("/signup");
  }

  const complexityFailures = checkComplexity(requestData.password);
  if (complexityFailures.length > 0) {
    const formattedErrors = complexityFailures.join("<br>");
    setFlashCookie(reply, formattedErrors);
    return await reply.redirect("/signup");
  }

  const db = await connect(USERS_DB);
  const userRepository = new SqliteUserRepository(db);

  const hashedPassword = await hashPassword(requestData.password);

  try {
    const newUser = {
      ...requestData,
      id: 0, // database will set appropriate ID number
      agreedToTerms: true,
      hashedPassword,
    };
    const user = await userRepository.create(newUser);
    const sessions = new SqliteSession(db);
    const sessionId = await sessions.create(user.id);
    setSessionCookie(reply, sessionId);
    return await reply.redirect("/welcome");
  } catch (e) {
    setFlashCookie(reply, "That account already exists.");
    return await reply.redirect("/signup");
  }
});

const start = async (): Promise<void> => {
  try {
    const db = await connect(USERS_DB);
    newDb(db);

    await fastify.listen({ port: 8089 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
