import React, { useEffect, useState } from "react";
import UserProfileImage from "../UserProfileImage";
import "./UserMatchHistory.css";
import useGetPlayer from "../../hooks/useGetPlayer";
import useGetMatchImage from "../../hooks/useGetMatchImage";
import createMatchDate from "../../utils/createMatchDate";
import { useGetTeam } from "../../hooks/useGetTeam";

const UserMatchHistory = ({ match }) => {
  const champ = useGetMatchImage(match);
  const player = useGetPlayer(match);
  const gameDate = createMatchDate(match);
  const teamOne = useGetTeam(match, 100);
  const teamTwo = useGetTeam(match, 200);
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

  useEffect(() => {
    if (teamOne.length !== 0) {
      console.log(teamOne);
      const firstTeamInfo = teamOne.map(({ pIdentity, ...player }) => (
        <section>
          <div className="user-match-history-right-side">
            {/* <UserProfileImage
                              divStyles='user-match-history-img-container' imgStyles='user-match-history-img'
                              src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${champ && champ.name ? champ.name.replace(/\s+/g, '') : ''}.png`} /> */}
            <div className="user-match-history-text">
              <p className="user-champion-name">
                {pIdentity[0].player.summonerName}
              </p>
              {/* <p className='user-champion-kda'>{kills}/{deaths}/{assists}</p> */}
            </div>
          </div>
        </section>
      ));
      setFirstTeam(() => firstTeamInfo);
    }
  }, [teamOne]);

  //   useEffect(() => {
  //     let mounted = true;
  //     if (mounted && teamOne && teamOne[0]) {
  //       console.log(teamOne[0].pId);
  //     }
  //     // if (match && teamOne)
  //     //   teamOne.map(({ pId, ...player }) => (
  //     //     <section>
  //     //       <div className="user-match-history-right-side">
  //     //         {/* <UserProfileImage
  //     //                   divStyles='user-match-history-img-container' imgStyles='user-match-history-img'
  //     //                   src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${champ && champ.name ? champ.name.replace(/\s+/g, '') : ''}.png`} /> */}
  //     //         <div className="user-match-history-text">
  //     //           <p className="user-champion-name">{pId[0].player.summonerName}</p>
  //     //           {/* <p className='user-champion-kda'>{kills}/{deaths}/{assists}</p> */}
  //     //         </div>
  //     //       </div>
  //     //     </section>
  //     //   ));
  //     return () => {
  //       mounted = false;
  //     };
  //   }, [teamOne, match]);

  // useEffect(() => {
  //     if(match){
  //         const {participants} = match;
  //         let team = participants.filter(player => player.teamId === 100);
  //         console.log(team, participants);
  //     }
  // }, [match])

  return (
    <div className="dashboard-user-match-history">
      <div tabIndex="1" className="user-match">
        <p className="user-match-time">{gameDate}</p>
        <div className={`outcome ${win ? "win" : ""}`}></div>
        <div className="user-match-history-right-side">
          <UserProfileImage
            divStyles="user-match-history-img-container"
            imgStyles="user-match-history-img"
            src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${
              champ && champ.name ? champ.name.replace(/\s+/g, "") : ""
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
