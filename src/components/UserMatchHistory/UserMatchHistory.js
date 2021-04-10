import React from 'react';
import UserProfileImage from '../UserProfileImage';
import './UserMatchHistory.css';
import useGetPlayer from '../../hooks/useGetPlayer';
import useGetMatchImage from '../../hooks/useGetMatchImage';
import createMatchDate from '../../utils/createMatchDate';

const UserMatchHistory = ({ match }) => {
    const champ = useGetMatchImage(match);
    const player = useGetPlayer(match);
    const gameDate = createMatchDate(match);

    let kills = 0;
    let deaths = 0;
    let assists = 0;
    let win;

    if (player && player.stats) kills = player.stats.kills;
    if (player && player.stats) deaths = player.stats.deaths;
    if (player && player.stats) assists = player.stats.assists;
    if (player && player.outcome) player.outcome === 'Fail' ? win = false : win = true;

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