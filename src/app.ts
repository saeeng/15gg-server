const fastify = require('fastify')({
  logger: true,
});

// Register Swagger
const { options } = require('./config/swagger');
fastify.register(require('fastify-swagger'), options);

// Register MongoDB
// fastify.register(require('./plugins/dbConnector'))

// Register Router
const routes = require('./router');
import { IRoute } from './router';
routes.forEach((route: IRoute) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
export {};
