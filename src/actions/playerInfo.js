import lolImproverUrl from '../config';

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

export const FETCH_STATIC_NAME = 'FETCH_STATIC_NAME';
export const fetchStaticName = championInfo => ({
    type: FETCH_STATIC_NAME,
    championInfo
});

export const CLEAR_PLAYER = 'CLEAR_PLAYER';
export const clearPlayer = () => ({
    type: CLEAR_PLAYER
});

export const fetchNameDetails = championId => dispatch => {
    return fetch(`${lolImproverUrl}/static/${championId}`)
        .then(response => response.json())
        .then(result => dispatch(fetchStaticName(result)))
        .catch(err => console.log(err));
} 

export const findPlayer = name => dispatch => {
    return fetch(`${lolImproverUrl}/players/${name}`)
        .then(response => {
            // console.log(response);
            return response.json()
        })
        .then(response => {
            if(response.error){
                return Promise.reject(response.response);
            }
            // console.log(response);
            let matches = response.matchDetails.map(match => JSON.parse(match))

            dispatch(searchPlayer(response.playerInfo));
            dispatch(fetchMatches(matches))
    
            console.log(response.playerInfo, matches)
        })
        .catch(err => console.log(err))
}

//create route for players than for matches
//make a test call to them
// now create a schema for them 
//use the api 
//console.log(err.body, err.statusCode)