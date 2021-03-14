import React from 'react';
import UserProfileImage from '../UserProfileImage';
import './UserMatchHistory.css';

const UserMatchHistory = () => {
    return (
        <div className='dashboard-user-match-history'>
            <div className='user-match'>
                <p className='user-match-time'>1 Day Ago</p>
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