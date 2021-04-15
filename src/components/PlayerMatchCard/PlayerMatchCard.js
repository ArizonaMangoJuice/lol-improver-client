import React from 'react';
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
                {/* refactor this so you dont have to do one by one */}
                <section className='user-items'>
                    {
                        player.stats.item0 !== 0
                            ? <img alt={`item of ${player.stats.item0}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item0}.png`} />
                            : null
                    }
                    {
                        player.stats.item1 !== 0
                            ? <img alt={`item of ${player.stats.item1}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item1}.png`} />
                            : null
                    }
                    {
                        player.stats.item2 !== 0
                            ? <img alt={`item of ${player.stats.item2}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item2}.png`} />
                            : null
                    }
                    {
                        player.stats.item3 !== 0
                            ? <img alt={`item of ${player.stats.item3}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item3}.png`} />
                            : null
                    }
                    {
                        player.stats.item4 !== 0
                            ? <img alt={`item of ${player.stats.item4}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item4}.png`} />
                            : null
                    }
                    {
                        player.stats.item5 !== 0
                            ? <img alt={`item of ${player.stats.item5}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item5}.png`} />
                            : null
                    }
                    {
                        player.stats.item6 !== 0
                            ? <img alt={`item of ${player.stats.item6}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${player.stats.item6}.png`} />
                            : null
                    }
                </section>
            </div>
        </section>
    )
}

export default PlayerMatchCard;
// champion && champion[0] && champion[0].name ?
// : ''