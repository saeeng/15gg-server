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
        id: { type: 'string' },
        accountId: { type: 'string' },
        puuid: { type: 'string' },
        name: { type: 'string' },
        profileIconId: { type: 'number' },
        revisionDate: { type: 'number' },
        summonerLevel: { type: 'number' },
      },
    },
  },
};
