const fp = require('fastify-plugin');

const env = async (fastify, options, done) => {
  try {
    const config = options;
    const confKey = 'config';
    fastify.decorate(confKey, config);
    done();
  } catch (err) {
    done(err);
  }
};

module.exports = fp(env, {
  name: 'env',
});
