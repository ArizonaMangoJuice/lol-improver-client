import React from 'react';
import UserProfileImage from '../UserProfileImage';
import UserSummonerSpells from '../UserSummonerSpells';

export const PlayerMatchCard = ({matchDetails}) => {
    const {champion, pIdentity, ...player} = matchDetails;
    console.log(champion,pIdentity,player, "THIS IS THE PROPS OF THE PLAYER MATCH CARD")
    return (
        <section key={`${champion} + ${pIdentity[0].player.summonerName}`}>
            <div className="user-match-history-right-side">
                <UserProfileImage
                    divStyles='user-match-history-img-container' imgStyles='user-match-history-img' 
                    altText={champion[0].blurb}
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${champion[0].image.full.replace(/\s+/g, '') }`} />
                <section className="user-match-history-text">
                    <p className="user-champion-name">
                        {pIdentity[0].player.summonerName}
                    </p>
                    <p>{player.timeline.lane}</p>
                    <p className='user-champion-kda'>{player.stats.kills}/{player.stats.deaths}/{player.stats.assists}</p>
                </section>
                <UserSummonerSpells player={player} />
                <section className='user-items'>
                    <img alt={`item of ${player.stats.item0}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item0}.png`} />
                    <img alt={`item of ${player.stats.item1}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item1}.png`} />
                    <img alt={`item of ${player.stats.item2}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item2}.png`} />
                    <img alt={`item of ${player.stats.item3}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item3}.png`} />
                    <img alt={`item of ${player.stats.item4}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item4}.png`} />
                    <img alt={`item of ${player.stats.item5}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item6}.png`} />
                    <img alt={`item of ${player.stats.item6}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item6}.png`} />
                </section>
            </div>
        </section>
    )
}

export default PlayerMatchCard;
// champion && champion[0] && champion[0].name ? 
// : ''