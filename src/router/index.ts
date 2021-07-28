// Import Swagger documentation
const doc = require('./doc/userApi');
const testFunct = require('../controllers');

export interface IRoute {
  method: string;
  url: string;
  handler: any;
  schema?: any;
}
function routes(fastify, options, done) {
  const ROUTING_MAP: IRoute[] = [
    {
      method: 'GET',
      url: '/test/:summonerName',
      handler: testFunct,
      schema: doc.getTestSchema,
    },
  ];
  ROUTING_MAP.forEach((route: IRoute) => {
    fastify.route(route);
  });
  done();
}

module.exports = routes;
