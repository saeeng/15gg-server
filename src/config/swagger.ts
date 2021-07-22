export const options = {
  routePrefix: '/docs',
  openapi: '3.0.0',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify API',
      description: '아아 스웨거 입니다',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    tags: [
      { name: 'Test', description: 'Test related end-points' },
      { name: 'code', description: 'Code related end-points' },
    ],
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};
