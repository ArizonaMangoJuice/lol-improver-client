import React, { useEffect, useState } from 'react';

export const UserSummonerSpells = ({ player }) => {
    return (
        <section className='user-spells'>
            <p className='summoner-spell'>{player.spell2Id}</p>
            <p className='summoner-spell'>{player.spell1Id}</p>
        </section>
    )
};

export default UserSummonerSpells;