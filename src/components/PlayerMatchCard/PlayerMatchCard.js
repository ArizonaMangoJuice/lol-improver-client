import React from 'react';
import UserProfileImage from '../UserProfileImage';

export const PlayerMatchCard = ({matchDetails}) => {
    const {champion, pIdentity, ...player} = matchDetails;
    // console.log(champion,pIdentity,player, "THIS IS THE PROPS OF THE PLAYER MATCH CARD")
    return (
        <section key={`${champion} + ${pIdentity[0].player.summonerName}`}>
            <div className="user-match-history-right-side">
                <UserProfileImage
                    divStyles='user-match-history-img-container' imgStyles='user-match-history-img'
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${champion && champion[0] && champion[0].name ? champion[0].image.full.replace(/\s+/g, '') : ''}`} />
                <div className="user-match-history-text">
                    <p className="user-champion-name">
                        {pIdentity[0].player.summonerName}
                    </p>
                    <p className='user-champion-kda'>{player.stats.kills}/{player.stats.deaths}/{player.stats.assists}</p>
                </div>
            </div>
        </section>
    )
}

export default PlayerMatchCard;