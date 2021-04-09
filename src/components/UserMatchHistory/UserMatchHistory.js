import React from 'react';
import UserProfileImage from '../UserProfileImage';
import './UserMatchHistory.css';

const UserMatchHistory = ({ match }) => {
    // move to own function
    // const time = parseInt(match.timestamp);
    const readableTime = new Date(parseInt(match.timestamp, 10));
    // readableTime.setUTCSeconds(time * 1000);
    const dd = String(readableTime.getDate()).padStart(2, '0');
    const mm = String(readableTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = readableTime.getFullYear();

    const gameDate = `${mm}/${dd}/${yyyy}`;
    
    return (
        <div className='dashboard-user-match-history'>
            <div className='user-match'>
                <p className='user-match-time'>{gameDate}</p>
                <div className='outcome'></div>
                <div className='user-match-history-right-side'>
                    <UserProfileImage divStyles='user-match-history-img-container' imgStyles='user-match-history-img' src="http://opgg-static.akamaized.net/images/lol/champion/Ezreal.png?image=c_scale,q_auto,w_140&v=1614735388" />
                    <div className='user-match-history-text'>
                        <p className='user-champion-name'>Ezreal</p>
                        <p className='user-champion-kda'>13/4/5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMatchHistory;