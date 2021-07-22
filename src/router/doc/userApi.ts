exports.addTestSchema = {
  description: 'this is addUser api',
  tags: ['Test'],
  summary: 'Creates new Test',
  body: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      password: { type: 'number' },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      headers: {
        'X-Foo': {
          type: 'string',
        },
      },
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
      },
    },
    500: {
      description: 'Error',
      type: 'object',
      properties: {
        _id: { type: 'number' },
      },
    },
  },
};
exports.getTestsSchema = {
  description: 'this is getTests api',
  tags: ['Test'],
  summary: 'get Tests',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id',
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
      },
    },
    500: {
      description: 'Error',
      type: 'object',
      properties: {
        _id: { type: 'number' },
      },
    },
  },
};
