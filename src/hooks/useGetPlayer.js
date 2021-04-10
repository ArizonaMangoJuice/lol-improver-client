import { useEffect, useState } from 'react';

export const useGetPlayer = (match) => {
    const [player, setPlayer] = useState();

    useEffect(() => {
        if (match.participants && match.teams) {
            const playerObj = match.participants.filter(player => player.championId.toString() === match.champion.toString())[0];
            const outcome = match.teams.filter(team => team.teamId === playerObj.teamId)[0].win;
            playerObj.outcome = outcome;
            setPlayer(playerObj);
        }
    }, [match.participants, match.teams])


    return player;
}

export default useGetPlayer;