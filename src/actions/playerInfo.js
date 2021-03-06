import lolImproverUrl from '../config';

export const SORT_MATCHES = 'SORT_MATCHES';
export const sortMatches = () => ({
    type: SORT_MATCHES
});

export const MATCH_LOADING = 'MATCH_LOADING';
export const matchLoading = () => ({
    type: MATCH_LOADING
});

export const STOP_MATCH_LOADING = 'STOP_MATCH_LOADING';
export const stopMatchLoading = () => ({
    type: STOP_MATCH_LOADING
});

export const PLAYER_ERROR = 'PLAYER_ERROR';
export const playerError = (error) => ({
    type: PLAYER_ERROR,
    error
});

export const CLEAR_PLAYER_ERROR = 'CLEAR_PLAYER_ERROR';
export const clearPlayerError = () => ({
    type: CLEAR_PLAYER_ERROR
});

export const ADD_MATCH = 'ADD_MATCH';
export const addMatch = match => ({
    type: ADD_MATCH,
    match
});

export const CLEAR_MATCHES = 'CLEAR_MATCHES';
export const clearMatches = () => ({
    type: CLEAR_MATCHES
});

export const UPDATE_MATCH_LIST = 'UPDATE_MATCH_LIST';
export const updateMatchList = matchList => ({
    type: UPDATE_MATCH_LIST,
    matchList
});

export const UPDATE_PLAYER_SEARCH = 'UPDATE_PLAYER_SEARCH';
export const updatePlayerSearch =  player => ({
    type: UPDATE_PLAYER_SEARCH,
    player
});

export const FETCH_PLAYER = 'SEARCH_PLAYER';
export const searchPlayer = accountInfo => ({
    type: FETCH_PLAYER,
    accountInfo
})

export const FETCH_MATCHES = 'FETCH_MATCHES';
export const fetchMatches = matches => ({
    type: FETCH_MATCHES,
    matches
})

export const MATCHES_ERROR = 'MATCHES_ERROR';
export const matchesError = error => ({
    type: MATCHES_ERROR,
    error
})

export const FETCH_STATIC_CHAMP_NAME = 'FETCH_STATIC_NAME';
export const fetchStaticChampName = championInfo => ({
    type: FETCH_STATIC_CHAMP_NAME,
    championInfo
});

export const FETCH_STATIC_SUMMONER_SPELL = 'FETCH_STATIC_SUMMONER_SPELL';
export const fetchStaticSummonerSpell = spellInfo => ({
    type: FETCH_STATIC_SUMMONER_SPELL,
    spellInfo
});

export const FETCH_STATIC_ITEM = 'FETCH_STATIC_ITEM';
export const fetchStaticItem = item => ({
    type: FETCH_STATIC_ITEM,
    item
});


export const CLEAR_PLAYER = 'CLEAR_PLAYER';
export const clearPlayer = () => ({
    type: CLEAR_PLAYER
});

export const DECODE_AUTH_TOKEN = 'DECODE_AUTH_TOKEN';
export const decodeAuthToken = () => ({

});

export const fetchNameDetails = championId => dispatch => {
    return fetch(`${lolImproverUrl}/static/${championId}`)
        .then(response => response.json())
        .then(result => dispatch(fetchStaticChampName(result)));
        
} 

export const fetchSummonerSpell = (key, timestamp) => dispatch => {
    return fetch(`${lolImproverUrl}/static/summonerspell/${key}`)
        .then(response => response.json())
        .then(result => {
            result[0]['timeStamp'] = timestamp;
            // console.log(result, "whjkwhjk")

            return dispatch(fetchStaticSummonerSpell(result));
        });
}

export const fetchItemDetails = (key) => dispatch => {
    return fetch(`${lolImproverUrl}/static/item/${key}`)
    .then(response => response.json())
    .then(result => dispatch(fetchStaticItem(result)))
}


//convert these to asyncs they are easier to read and work with
export const findPlayer = name => dispatch => {
    dispatch(clearPlayerError());

    fetch(`${lolImproverUrl}/api/players/${name}`)
        .then(response => {
            // console.log('this is the response', JSON.stringify(response))
            const playerNotFound = {message: 'Player Not Found'};
            if(response.status === 404) throw playerNotFound;
            return response.json();
        })
        .then(response => dispatch(searchPlayer(response)))
        .catch(err => {

            if(err && err.message) dispatch(playerError(err.message))
        })
};


export const fetchMatchlist = accountId => dispatch => {
    dispatch(clearMatches());
    dispatch(matchLoading());

    fetch(`${lolImproverUrl}/api/players/matches/${accountId}`)
        .then(response => {
            console.log('this is the response ', response)
            if(!response.ok) throw new Error('Account Id not found');
            return response.json();
        })
        .then(response => {
            dispatch(updateMatchList(response));
        })
        .catch(err => dispatch(matchesError(err.message)))
};


export const fetchMatch = (matchId, matchListObj) => dispatch => {
    const {champion, timestamp} = matchListObj;
    

    fetch(`${lolImproverUrl}/api/players/match/${matchId}`)
        .then(response => {
            if(!response.ok) throw new Error('Match not found');
            return response.json();
        })
        .then( response => {
            dispatch(stopMatchLoading());
            dispatch(addMatch({...response, champion, timestamp}));
    
            // dispatch(sortMatches());
        })
        .catch(err => dispatch(matchesError(err.message)))
}