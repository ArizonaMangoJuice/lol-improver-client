import lolImproverUrl from '../config';
import React from 'react';
import PlayerMatchCard from "../components/PlayerMatchCard";

async function otherPlayersCard(team) {
    const firstTeamInfo = await team.map(async (player) => {
      let champion = await fetch(`${lolImproverUrl}/api/static/${player.championId}`);
      champion = await champion.json();
      return { ...player, champion };
    });

    let result = await Promise.all(firstTeamInfo);
    // console.log('THIS IS THE RESULTING ARRAY', result)
    result = result.map((matchDetails) => (
      <PlayerMatchCard
        key={`${matchDetails.pIdentity[0].player.summonerName} 
              ${matchDetails.champion[0].id} ${matchDetails.pIdentity[0].participantId}
              ${matchDetails.pIdentity[0].accountId}
              `}
        matchDetails={matchDetails} />
    ))
    return result;
}

export default otherPlayersCard;