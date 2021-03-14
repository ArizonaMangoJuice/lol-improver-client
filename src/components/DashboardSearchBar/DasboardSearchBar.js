import React from 'react';
import UserProfileImage from '../UserProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faFilter, faSearch, faPlus} from '@fortawesome/free-solid-svg-icons';

const userLink = 'https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4';

const DashBoardSearchBar = () => {
    return (
        <div className='left-container-width main-bg left-container-search-bar'>
            <button className='left-container-search'>
                <FontAwesomeIcon icon={faFilter} className='white icon-margin-right' />
                <p className='left-container-search-text'>Quick Filters</p>
                <FontAwesomeIcon icon={faChevronDown} className='white icon-margin-left small-icon-size' />
                <div className='half-border'></div>
            </button>
            <div className='left-container-search-input'>
                <FontAwesomeIcon icon={faSearch} className=' search-icon' />
                <input type='text' placeholder='Search' className='left-container-search-input-text' />
            </div>
            <div className='left-container-search-people'>
                <button className='add-button'><FontAwesomeIcon icon={faPlus} className='default-button-size' /></button>
                <div className='players'>
                    <UserProfileImage src={userLink} />
                    <UserProfileImage src={userLink} />
                    <UserProfileImage src={userLink} />
                    <UserProfileImage src={userLink} />
                </div>
                <p className='player-followers'><span className='not-important-color'>and</span> 24 followers</p>
            </div>
        </div>
    )
}

export default DashBoardSearchBar;