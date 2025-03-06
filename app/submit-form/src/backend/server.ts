import path from 'path';
import cookie from '@fastify/cookie';
import formBody from '@fastify/formbody';
import staticFiles from '@fastify/static';
import dotenv from 'dotenv';
import Fastify from 'fastify';
import nunjucks from 'nunjucks';
import { z } from 'zod';
import { checkComplexity } from '../shared/password-rules';
import { checkUsername } from '../shared/username-rules';
import { comparePassword, hashPassword } from './auth';
import { connect, newDb, SqliteSession, SqliteUserRepository } from './db';
import { clearFlashCookie, FLASH_MSG_COOKIE } from './flash';
import type { FastifyReply, FastifyRequest } from 'fastify';

// Use environment variables
dotenv.config();

const environment = process.env.NODE_ENV;
const cookieSecret = process.env.COOKIE_SECRET;

if (cookieSecret === undefined) {
  console.error('Missing COOKIE_SECRET environment variable');
  process.exit(1);
}

// Set up session variables
// key:value || SESSION_ID: <id>
const SESSION_COOKIE = 'SESSION_ID';

// Set up Nunjucks templates
const templates: nunjucks.Environment = new nunjucks.Environment(
  new nunjucks.FileSystemLoader('src/backend/templates')
);

//  String for the database connection
const USERS_DB = './users.sqlite';

// Initialize Fastify server
const fastify = Fastify({
  logger: true,
});

// Schema and type declarations
const accountCreateRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
  agreedToTerms: z.string().optional(),
});
const accountLoginRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type AccountCreateRequest = z.infer<typeof accountCreateRequestSchema>;
type LoginRequest = z.infer<typeof accountLoginRequestSchema>;

/* Middleware

  - formbody: @fastify/formbody is a fastify plugin that allows you to parse form data from HTTP requests.
  - cookie: @fastify/cookie is a fastify plugin that allows you to parse and set cookies in HTTP responses.
  - static: @fastify/static is a fastify plugin that allows you to serve static files from a directory.
*/
{
  fastify.register(formBody);
  fastify.register(cookie, {
    secret: cookieSecret,
  });
  fastify.register(staticFiles, {
    root: path.join(__dirname, '../../dist'),
  });
  fastify.register(clearFlashCookie);
}

// Cookies
// Flash cookies are used to display messages to the
// user after a form submission. They are cleared after being read.
function setFlashCookie(reply: FastifyReply, msg: string): void {
  reply.setCookie(FLASH_MSG_COOKIE, msg, {
    path: '/',
  });
}

function readFlashCookie(request: FastifyRequest): string | undefined {
  return request.cookies[FLASH_MSG_COOKIE];
}
function setSessionCookie(reply: FastifyReply, sessionID: string): void {
  reply.setCookie(SESSION_COOKIE, sessionID, {
    path: '/',
  });
}

function readSessionCookie(request: FastifyRequest): string | undefined {
  return request.cookies[SESSION_COOKIE];
}

// Routes

fastify.get('/', async (request, reply) => {
  await reply.redirect('/signin');
});

fastify.get('/signin', async (request, reply) => {
  const serverMsg = readFlashCookie(request);

  const rendered = templates.render('signin.njk', {
    environment,
    server_msg: serverMsg,
  });
  await reply.header('Content-Type', 'text/html; charset=utf-8').send(rendered);
});

fastify.post('/account/signin', async (request, reply) => {
  // Get the request body data
  let requestData = request.body as LoginRequest;

  try {
    /* 
    The parse() method is from the zod library. 
    It looks through the request body and checks if it matches the schema 
    */
    requestData = accountLoginRequestSchema.parse(request.body);
  } catch (error) {
    // Show error message and redirect to sign in page
    setFlashCookie(reply, 'There was an error processing your request');
    await reply.redirect('/signin');
  }

  const db = await connect(USERS_DB);
  const userRepository = new SqliteUserRepository(db);

  try {
    const user = await userRepository.findByEmail(requestData.email);

    if (user === undefined) {
      setFlashCookie(reply, 'Invalid login details: no user');
      return await reply.redirect('/signin');
    }

    const passwordMatches = await comparePassword(
      requestData.password,
      user.password as unknown as string
    );

    if (!passwordMatches) {
      setFlashCookie(reply, 'Invalid login details: password');
      return await reply.redirect('/signin');
    }

    // Get user session
    const sessions = new SqliteSession(db);
    const sessionId = await sessions.create(user.id);
    setSessionCookie(reply, sessionId);

    return await reply.redirect('/welcome');
  } catch (error) {
    setFlashCookie(reply, `Invalid login details: ${error}`);
    return await reply.redirect('/signin');
  }
});

fastify.get('/signup', async (request, reply) => {
  const serverMsg = readFlashCookie(request);

  const rendered = templates.render('signup.njk', {
    environment,
    server_msg: serverMsg,
  });
  await reply.header('Content-Type', 'text/html; charset=utf-8').send(rendered);
});

fastify.get('/welcome', async (request, reply) => {
  const sessionId = readSessionCookie(request);
  if (sessionId === undefined) {
    setFlashCookie(reply, 'Please sign in to continue');
    return await reply.redirect('/signin');
  }
  const db = await connect(USERS_DB);
  const sessions = new SqliteSession(db);
  const user = await sessions.get(sessionId);
  if (user === undefined) {
    setFlashCookie(reply, 'Your session has expired, please login to continue');
    return await reply.redirect('/signin');
  }

  const rendered = templates.render('welcome.njk', {
    environment,
    email: user.email,
  });
  return await reply
    .header('Content-Type', 'text/html; charset=utf-8')
    .send(rendered);
});

fastify.post('/account/signup', async (request, reply) => {
  // Get the request body data
  let requestData: AccountCreateRequest;
  try {
    /* 
    The parse() method is from the zod library. 
    It looks through the request body and checks if it matches the schema 
    */
    requestData = accountCreateRequestSchema.parse(request.body);
  } catch (error) {
    setFlashCookie(reply, 'There was an error processing your request');
    return await reply.redirect('/signin');
  }

  // Check if user has agreed to terms
  if (requestData.agreedToTerms !== 'on') {
    setFlashCookie(reply, 'You must agree to the terms and conditions');
    return await reply.redirect('/signin');
  }

  // Server-side validation
  const usernameFailures = checkUsername(requestData.email);
  if (usernameFailures.length > 0) {
    const formattedErrors = usernameFailures.join('<br>');
    setFlashCookie(reply, formattedErrors);
    return await reply.redirect('/signup');
  }
  const passwordFailures = checkComplexity(requestData.password);
  if (passwordFailures.length > 0) {
    const formattedErrors = passwordFailures.join('<br>');
    setFlashCookie(reply, formattedErrors);
    return await reply.redirect('/signup');
  }

  // Connect to the database and get the user repository
  const db = await connect(USERS_DB);
  const UserRepository = new SqliteUserRepository(db);

  // Hash password
  const password = await hashPassword(requestData.password);

  // Create the user
  try {
    const newUser = {
      ...requestData,
      id: 0,
      agreedToTerms: true,
      password,
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const user = await UserRepository.create(newUser);

    // Get user session
    const sessions = new SqliteSession(db);
    const sessionId = await sessions.create(user.id);
    setSessionCookie(reply, sessionId);

    return await reply.redirect('/welcome');
  } catch (err) {
    setFlashCookie(reply, 'This email is already in use');
    await reply.redirect('/signup');
  }

  return await reply.redirect('/signup');
});

// start server

const start = async (): Promise<void> => {
  try {
    // imported from db.ts
    const db = await connect(USERS_DB);
    newDb(db);
    await fastify.listen({ port: 8089 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
