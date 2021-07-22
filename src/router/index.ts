// Import Swagger documentation
const doc = require('./doc/userApi');
const testFunt = async (req: any, reply: any) => {
  return { test: 'hi' };
};

export interface IRoute {
  method: string;
  url: string;
  handler: any;
  schema?: any;
}
const routes: IRoute[] = [
  {
    method: 'POST',
    url: '/api/test',
    handler: testFunt,
    schema: doc.addTestSchema,
  },
  {
    method: 'GET',
    url: '/api/user',
    handler: testFunt,
    schema: doc.getUserSchema,
  },
];

module.exports = routes;
