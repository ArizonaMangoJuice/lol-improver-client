import {useEffect, useState} from 'react';

export const useGetTeam = (match, id) => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        if(match){
            const {participants, participantIdentities} = match;
            let team = participants.filter(player => player.teamId === id);
            let teamIdentities = team.map(player => {
                let id = participantIdentities.filter(
                    participant => 
                    participant.participantId === player.participantId);
                return {...player, pIdentity: id};
            });
            setTeam(() => teamIdentities);
        }
    }, [match])

    return team;
}