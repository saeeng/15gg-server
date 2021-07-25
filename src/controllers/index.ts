import { FastifyRequest, FastifyReply } from 'fastify';

module.exports = async function (request: FastifyRequest, reply: FastifyReply) {
  const res = await this.axios.v1.get('/summoner/v4/summoners/by-name/hideonbush');
  reply.send(res.data);
};
