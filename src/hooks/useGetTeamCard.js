import { useEffect, useState } from "react";
import otherPlayersCard from "../utils/otherPlayersCard";
// have to read more on hooks don't know how can extract it
export const useGetTeamCard = (team) => {
  const [aTeam, setTeam] = useState(team);
  //   console.log("%cHEY THIS IS THE TEAM", "color: red", team);
  //
  useEffect(() => {
    // console.log("INSIDE THE USE EFFECT", aTeam.length);
    if (team.length > 0) {
      //   console.log("INSIDE THE IF STATEMENT");
      let test = async () => {
        const players = await otherPlayersCard(team);
        setTeam(() => players);
        // console.log("%c It ran", "color: green", players);
      };
      test();
    }
  }, [aTeam]);

  //   console.log("this is the team", aTeam);

  return aTeam;
};

export default useGetTeamCard;
