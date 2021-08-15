require('dotenv').config();

const fastify = require('fastify')({
  logger: true,
});

// Register Swagger
const { swagger_config } = require('./config/swagger');
const { axios_config } = require('./config/axios');
const { env_config } = require('./config/env');
const routers = require('./router');
fastify
  .register(require('./plugins/env'), env_config)
  .register(require('fastify-swagger'), swagger_config)
  .register(require('./plugins/axiosPlugin'), axios_config)
  .register(require('./plugins/riot'), axios_config)
  .register(require('./router'), { prefix: 'api' })
  .register(require('fastify-cors'), {
    origin: '*',
  })
  .ready((err) => {
    console.log(err);
  });

const start = async () => {
  try {
    await fastify.listen(8000);
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
