import { FastifyRequest, FastifyReply, RequestGenericInterface } from 'fastify';
import { fstat } from 'fs';
const fs = require('fs');
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
export interface ILeageu {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}
export interface IData {
  summoner: ISummoner;
  mathches: any;
  league: ILeageu[];
}

module.exports = async function (request: FastifyRequest<requestGeneric>, reply: FastifyReply) {
  // const { status: summonerStatus, data: summonerData } = await this.riotApi.summonerByName(
  //   request.params.summonerName,
  // );
  // const { status: mathcesStatus, data: matchesData } = await this.riotApi.matchlistByAccount(
  //   summonerData.accountId,
  // );
  // const { status: leagueStatus, data: leagueData } = await this.riotApi.leagueBySummonerId(
  //   summonerData.id,
  // );
  // matchesData = matchesData.matches;
  // matchesData.forEach((match) => {
  //   match.date = new Date(match.timestamp);
  // });

  // const gameIds = matchesData.map((match) => {
  //   return match.gameId;
  // });
  // Promise.all(
  //   gameIds.map((gameId) => {
  //     return this.riotApi.matches(gameId);
  //   }),
  // );
  // const data: IData = { summoner: summonerData, league: leagueData, mathches: matchesData };
  // fs.writeFileSync('sample3.json', JSON.stringify(data));
  const dataBuffer = fs.readFileSync('sample3.json');
  const data: IData = JSON.parse(dataBuffer.toString());
  reply.send(data);
};
