import React from 'react';

export const UserItems = ({ stats }) => {
    return (
        <section className='user-items'>
            {
                stats.item0 !== 0
                    ? <img alt={`item of ${stats.item0}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${stats.item0}.png`} />
                    : null
            }
            {
                stats.item1 !== 0
                    ? <img alt={`item of ${stats.item1}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${stats.item1}.png`} />
                    : null
            }
            {
                stats.item2 !== 0
                    ? <img alt={`item of ${stats.item2}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${stats.item2}.png`} />
                    : null
            }
            {
                stats.item3 !== 0
                    ? <img alt={`item of ${stats.item3}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${stats.item3}.png`} />
                    : null
            }
            {
                stats.item4 !== 0
                    ? <img alt={`item of ${stats.item4}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${stats.item4}.png`} />
                    : null
            }
            {
                stats.item5 !== 0
                    ? <img alt={`item of ${stats.item5}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${stats.item5}.png`} />
                    : null
            }
            {
                stats.item6 !== 0
                    ? <img alt={`item of ${stats.item6}`} className='item' src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${stats.item6}.png`} />
                    : null
            }
        </section>
    )
}

export default UserItems;