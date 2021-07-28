import fp from 'fastify-plugin';

const riot = async (fastify, options, done) => {
  try {
    const config = options;
    const confKey = 'riotApi';
    const summonerByName = async (name: string): Promise<any> => {
      return await fastify.axios.v1.get(
        `/summoner/v4/summoners/by-name/${encodeURIComponent(name)}`,
      );
    };
    const matchlistByAccount = async (encryptedAccountId, params): Promise<any> => {
      return await fastify.axios.v1.get(
        `/match/v4/matchlists/by-account/${encryptedAccountId}`,
        params,
      );
    };
    const matches = async (matchId: string): Promise<any> => {
      return await fastify.axios.v1.get(`/match/v4/matches/${matchId}`);
    };

    fastify.decorate(confKey, { summonerByName, matchlistByAccount, matches });
    done();
  } catch (err) {
    done(err);
  }
};

module.exports = fp(riot, {
  name: 'riotApi',
});
