import { FastifyRequest, FastifyReply, RequestGenericInterface } from 'fastify';

interface requestGeneric extends RequestGenericInterface {
  Querystring: {
    gameId?: number;
    role?: string;
    season?: number;
    platformId?: string;
    champion?: number;
    queue?: number;
    lane?: string;
    timestamp?: number;
    date?: Date;
  };
  Params: {
    summonerName: string;
  };
}

export interface ISummoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}
export interface IData {
  summoner: ISummoner;
  mathches: any;
}

module.exports = async function (request: FastifyRequest<requestGeneric>, reply: FastifyReply) {
  const { status: summonerStatus, data: summonerData } = await this.riotApi.summonerByName(
    request.params.summonerName,
  );
  let { status: mathcesStatus, data: matchesData } = await this.riotApi.matchlistByAccount(
    summonerData.accountId,
  );
  matchesData = matchesData.matches;
  matchesData.forEach((match) => {
    match.date = new Date(match.timestamp);
  });

  const gameIds = matchesData.map((match) => {
    return match.gameId;
  });
  Promise.all(
    gameIds.map((gameId) => {
      return this.riotApi.matches(gameId);
    }),
  );
  const data: IData = { summoner: summonerData, mathches: matchesData };

  reply.send(data);
};
