import React from 'react';
import UserItems from '../UserItems';
import UserProfileImage from '../UserProfileImage';
import UserSummonerSpells from '../UserSummonerSpells';
import './PlayerMatchCard.css';

export const PlayerMatchCard = ({ matchDetails }) => {
    const { champion, pIdentity, ...player } = matchDetails;
    console.log('this is the match details', matchDetails)
    return (
        <section className='player-match-card-container' key={`${champion} + ${pIdentity[0].player.summonerName}`}>
            <div className="player-match-card">
                <UserProfileImage
                    divStyles='user-match-history-img-container' imgStyles='user-match-history-img'
                    altText={champion[0].blurb}
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${champion[0].image.full.replace(/\s+/g, '')}`} />
                <section className="user-match-history-text">
                    <p className="user-champion-name">
                        {pIdentity[0].player.summonerName}
                    </p>
                    <p>{player.timeline.lane}</p>
                    <p className='user-champion-kda'>{player.stats.kills}/{player.stats.deaths}/{player.stats.assists}</p>
                </section>
                <UserSummonerSpells player={player} />
                <UserItems stats={player.stats}/>
            </div>
        </section>
    )
}

export default PlayerMatchCard;
// champion && champion[0] && champion[0].name ?
// : ''