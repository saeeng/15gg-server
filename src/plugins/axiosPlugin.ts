const fap = require('fastify-plugin');
const axiosPlugin = async (fastify, options, done) => {
  try {
    const config = options(fastify.config);
    fastify.register(require('fastify-axios'), config);
    done();
  } catch (err) {
    done(err);
  }
};

module.exports = fap(axiosPlugin, {
  name: 'axios',
});
