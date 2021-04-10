import React, { useEffect, useState } from 'react';
import UserProfileImage from '../UserProfileImage';
import './UserMatchHistory.css';
import lolImproverUrl from '../../config';


const UserMatchHistory = ({ match }) => {
    const [champ, setChamp] = useState({});
    // move to own function
    // const time = parseInt(match.timestamp);
    const readableTime = new Date(parseInt(match.timestamp, 10));
    // readableTime.setUTCSeconds(time * 1000);
    const dd = String(readableTime.getDate()).padStart(2, '0');
    const mm = String(readableTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = readableTime.getFullYear();

    const gameDate = `${mm}/${dd}/${yyyy}`;

    // move this to own hook file to grab matchImages
    // useCallback for this
    useEffect(() => {
        const test = async () => {
            let response = await fetch(`${lolImproverUrl}/api/static/${match.champion}`);
            response = await response.json();
            setChamp(response[0]);
        }
        console.log('it should onlyu run once')
        test();

    }, [match.champion])

    // move to own useEffect file
    const [player, setPlayer] = useState({participants: []});

    useEffect(() => {
        const player = match && match.participants ? match.participants.filter( player => player.championId.toString() === match.champion.toString())[0] : undefined;
        // console.log('player id', player.teamId, player)
        const outcome = match.teams.filter(team => team.teamId === player.teamId)[0].win;
        // console.log('this is the outcome', match.teams, outcome);
        player.outcome = outcome;
        setPlayer(player);
    }, [match])
    

    let kills = 0;
    let deaths = 0;
    let assists = 0;
    let win;
    
    if(player && player.stats) kills = player.stats.kills;
    if(player && player.stats) deaths = player.stats.deaths;
    if(player && player.stats) assists = player.stats.assists;
    if(player && player.outcome) player.outcome === 'Fail' ? win = false :  win = true;

    // console.log('this is the champion info', player)

    return (
        <div className='dashboard-user-match-history'>
            <div className='user-match'>
                <p className='user-match-time'>{gameDate}</p>
                <div className={`outcome ${win ? 'win' : ''}`}></div>
                <div className='user-match-history-right-side'>
                    <UserProfileImage 
                        divStyles='user-match-history-img-container' imgStyles='user-match-history-img' 
                        src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${champ && champ.name ? champ.name.replace(/\s+/g, '') : ''}.png`} />
                    <div className='user-match-history-text'>
                        <p className='user-champion-name'>{champ.name}</p>
                        <p className='user-champion-kda'>{kills}/{deaths}/{assists}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMatchHistory;