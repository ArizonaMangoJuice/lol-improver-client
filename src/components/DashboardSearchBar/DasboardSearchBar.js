import React from 'react';
import UserProfileImage from '../UserProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFilter, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { findPlayer } from '../../actions/playerInfo';

const userLink = 'https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4';

const mapStateToProps = state => ({
    // playerSearch: state.playerReducer.playerSearch,
    accountInfo: state.playerReducer.accountInfo
});

const formPlayerSearch = (e, dispatch, playerSearch) => {
    e.preventDefault();
    const urlString = encodeURI(playerSearch.toLowerCase().trim());
    dispatch(findPlayer(urlString));
}

const DashBoardSearchBar = ({ dispatch, playerSearch, accountInfo, ...props }) => {
    // useEffect(() => {
    //     if(accountInfo) dispatch(fetchMatchlist(accountInfo[0].accountId));
    //     console.log(accountInfo[0].accountId);
    // }, [accountInfo])

    return (
        <div className='left-container-width main-bg left-container-search-bar'>
            <button className='left-container-search'>
                <FontAwesomeIcon icon={faFilter} className='white icon-margin-right' />
                <p className='left-container-search-text'>Quick Filters</p>
                <FontAwesomeIcon icon={faChevronDown} className='white icon-margin-left small-icon-size' />
                <div className='half-border'></div>
            </button>
            <form onSubmit={(e) => formPlayerSearch(e, dispatch, playerSearch)} className='left-container-search-input'>
                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                {/* <input onChange={(e) => dispatch(updatePlayerSearch(e.target.value))} type='text' placeholder='Search Player' className='left-container-search-input-text' /> */}
                {/* <button >Find Player</button> */}
            </form>
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

export default connect(mapStateToProps)(DashBoardSearchBar);