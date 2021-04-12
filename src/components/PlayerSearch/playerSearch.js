import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMatchlist, findPlayer, updatePlayerSearch } from '../../actions/playerInfo';

const mapStateToProps = state => ({
    playerSearch: state.playerReducer.playerSearch,
    accountInfo: state.playerReducer.accountInfo,
    playerError: state.playerReducer.playerError
});

const formPlayerSearch = (e, dispatch, playerSearch) => {
    e.preventDefault();
    if(playerSearch.length === 0) return;
    const urlString = encodeURI(playerSearch.toLowerCase().trim());
    dispatch(findPlayer(urlString));
}

const PlayerSearchInput = ({ dispatch, playerSearch, accountInfo, playerError, ...props }) => {
    useEffect(() => {
        if(accountInfo) dispatch(fetchMatchlist(accountInfo.accountId));
    }, [accountInfo])

// left-container-width main-bg left-container-search-bar
// left-container-search-input
// left-container-search-input-text
    return (
        <div className=''>
            <p className='player-error'>{playerError}</p>
            <form onSubmit={(e) => formPlayerSearch(e, dispatch, playerSearch)} className=''>
                {/* <FontAwesomeIcon icon={faSearch} className='search-icon' /> */}
                <input onChange={(e) => dispatch(updatePlayerSearch(e.target.value))} type='text' placeholder='Search Player' className='' />
                <button >Find Player</button>
            </form>
            
        </div>
    )
}

export default connect(mapStateToProps)(PlayerSearchInput);
