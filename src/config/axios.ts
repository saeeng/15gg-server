export const axios_config = (env) => {
  const funct = (env) => {
    return {
      clients: {
        v1: {
          baseURL: 'https://kr.api.riotgames.com/lol/',
          headers: {
            'X-Riot-Token': env.riot_api_key,
          },
        },
        v2: {
          baseURL: 'https://kr.api.riotgames.com/lol/',
          headers: {
            'X-Riot-Token': 'Bearer UtOkO3UI9lPY1h3h9ygTn8pD0Va2pFDcWCNbSKlf2HE',
          },
        },
      },
    };
  };
  return funct;
};
