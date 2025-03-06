import fp from 'fastify-plugin';
import type {
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest,
} from 'fastify';

export const FLASH_MSG_COOKIE = 'flash';

const pluginCallback: FastifyPluginCallback = (fastify, opts, next) => {
  fastify.addHook(
    'onRequest',
    async (request: FastifyRequest, reply: FastifyReply) => {
      reply.setCookie(FLASH_MSG_COOKIE, '', { path: '/' });
    }
  );

  next();
};

export const clearFlashCookie: FastifyPluginCallback = fp(pluginCallback);
