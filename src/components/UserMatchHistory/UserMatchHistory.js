import React, { useEffect, useState } from "react";
import UserProfileImage from "../UserProfileImage";
import "./UserMatchHistory.css";
import useGetPlayer from "../../hooks/useGetPlayer";
import useGetMatchImage from "../../hooks/useGetMatchImage";
import createMatchDate from "../../utils/createMatchDate";
import { useGetTeam } from "../../hooks/useGetTeam";
import lolImproverUrl from '../../config';
import PlayerMatchCard from "../PlayerMatchCard";

const UserMatchHistory = ({ match }) => {
  const champ = useGetMatchImage(match);
  const player = useGetPlayer(match);
  const gameDate = createMatchDate(match);
  const teamOne = useGetTeam(match, 100);
  // const teamTwo = useGetTeam(match, 200);
  const [firstTeam, setFirstTeam] = useState([]);
  let kills = 0;
  let deaths = 0;
  let assists = 0;
  let win;
  //   let firstTeam = [];

  if (player && player.stats) kills = player.stats.kills;
  if (player && player.stats) deaths = player.stats.deaths;
  if (player && player.stats) assists = player.stats.assists;
  if (player && player.outcome)
    player.outcome === "Fail" ? (win = false) : (win = true);

  //move to own useEffect hook file
  useEffect(() => {
    if (teamOne.length !== 0) {
      let test = async () => {
        const players = await otherPlayersCard();
        setFirstTeam(() => players);
      }
      test();
    }
  }, [teamOne]);

  console.log('THIS IS THE FIRST TEAM', firstTeam)


  // move to own function and refactor a bit 
  async function otherPlayersCard() {
    const firstTeamInfo = await teamOne.map(async (player) => {
      let champion = await fetch(`${lolImproverUrl}/api/static/${player.championId}`);
      champion = await champion.json();
      return { ...player, champion };
    });

    let result = await Promise.all(firstTeamInfo);
    console.log('THIS IS THE RESULTING ARRAY', result)
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


  return (
    <div className="dashboard-user-match-history">
      <div tabIndex="1" className="user-match">
        <p className="user-match-time">{gameDate}</p>
        <div className={`outcome ${win ? "win" : ""}`}></div>
        <div className="user-match-history-right-side">
          <UserProfileImage
            divStyles="user-match-history-img-container"
            imgStyles="user-match-history-img"
            src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${champ && champ.name ? champ.name.replace(/\s+/g, "") : ""
              }.png`}
          />
          <div className="user-match-history-text">
            <p className="user-champion-name">{champ.name}</p>
            <p className="user-champion-kda">
              {kills}/{deaths}/{assists}
            </p>
          </div>
        </div>
      </div>
      <section className="match-more">{firstTeam}</section>
    </div>
  );
};

export default UserMatchHistory;
