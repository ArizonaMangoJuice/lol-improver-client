import React, { useEffect, useState } from 'react';
import lolImproverUrl from '../../config';
import SimpleLoader from '../SimpleLoader';

export const UserSummonerSpells = ({ player }) => {
    // move this to own hook components should not worry about logic
    const [summonerSpells, setSummonerSpells] = useState([]);
    useEffect(() => {
        const fetchSummonerSpells = async (player) => {
            const fetchSummonerSpellInfo1 = await fetch(`${lolImproverUrl}/api/static/summonerspell/${player.spell1Id}`);
            const summonerSpell1 = await fetchSummonerSpellInfo1.json();
            const fetchSummonerSpellInfo2 = await fetch(`${lolImproverUrl}/api/static/summonerspell/${player.spell2Id}`);
            const summonerSpell2 = await fetchSummonerSpellInfo2.json();
            // console.log('HEY IM THE FIRST SPELL', summonerSpell1[0]);
            // console.log(summonerSpell1, summonerSpell2);
            setSummonerSpells(() => [summonerSpell1[0], summonerSpell2[0]]);
        }

        fetchSummonerSpells(player);
    }, [player])

    // move url to own file and call it here
    // refactor to make it easier to read and add some animation
    return (
        <section className='user-spells'>
            {
                summonerSpells.length > 0
                    ? (
                        <img alt={summonerSpells.length > 0 ? summonerSpells[0].tooltip : 'text loading'} className='summoner-spell'
                            src={`https://ddragon.leagueoflegends.com/cdn/11.8.1/img/spell/${summonerSpells.length > 0 ? summonerSpells[0].image.full : ''}`} />
                    )
                    : <SimpleLoader />
            }
            {
                summonerSpells.length > 0
                    ? (
                        <img alt={summonerSpells.length > 0 ? summonerSpells[1].tooltip : 'text loading'} className='summoner-spell'
                            src={`https://ddragon.leagueoflegends.com/cdn/11.8.1/img/spell/${summonerSpells.length > 0 ? summonerSpells[1].image.full : ''}`} />
                    )
                    : <SimpleLoader />
            }
        </section>
    )
};

export default UserSummonerSpells;