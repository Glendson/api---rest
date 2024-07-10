import { FastifyReply, FastifyRequest } from "fastify";

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const sesssionId = request.cookies.sesssionId;

  if (!sesssionId) return reply.status(401).send({ error: "Invalid session" });
}
