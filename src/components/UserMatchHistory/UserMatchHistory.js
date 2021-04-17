import React, { useEffect, useState } from "react";
import UserProfileImage from "../UserProfileImage";
import "./UserMatchHistory.css";
import useGetPlayer from "../../hooks/useGetPlayer";
import useGetMatchImage from "../../hooks/useGetMatchImage";
import createMatchDate from "../../utils/createMatchDate";
import { useGetTeam } from "../../hooks/useGetTeam";
import otherPlayersCard from "../../utils/otherPlayersCard";

const UserMatchHistory = ({ match }) => {
  const champ = useGetMatchImage(match);
  const player = useGetPlayer(match);
  const gameDate = createMatchDate(match);
  const teamOne = useGetTeam(match, 100);
  const teamTwo = useGetTeam(match, 200);
  const [firstTeam, setFirstTeam] = useState([]);
  const [secondTeam, setSecondTeam] = useState([]);
  const [clicked, setClicked] = useState(false);
  //move to own useEffect hook file
  useEffect(() => {
    if (teamOne.length !== 0) {
      let test = async () => {
        const players = await otherPlayersCard(teamOne);
        setFirstTeam(() => players);
      };
      test();
    }
  }, [teamOne]);

  useEffect(() => {
    if (teamTwo.length !== 0) {
      let test = async () => {
        const players = await otherPlayersCard(teamTwo);
        setSecondTeam(() => players);
      };
      test();
    }
  }, [teamTwo]);

  return (
    <div className="dashboard-user-match-history">
      <button
        className="user-match"
        onClick={() => setClicked((clicked) => setClicked(!clicked))}
      >
        <p className="user-match-time">{gameDate}</p>
        <div
          className={`outcome ${
            player && player.outcome !== "Fail" ? "win" : ""
          }`}
        ></div>
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
              {player && player.stats && player.stats.kills}/
              {player && player.stats && player.stats.deaths}/
              {player && player.stats && player.stats.assists}
            </p>
          </div>
        </div>
      </button>
      <section
        tabIndex="0"
        className={`more-matches-container ${clicked && "show-matches"}`}
      >
        <section className="match-more">{firstTeam}</section>
        <section className="match-more">{secondTeam}</section>
      </section>
    </div>
  );
};

export default UserMatchHistory;
