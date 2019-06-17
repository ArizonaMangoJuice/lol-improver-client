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


export const CLEAR_PLAYER = 'CLEAR_PLAYER';
export const clearPlayer = () => ({
    type: CLEAR_PLAYER
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

export const findPlayer = name => dispatch => {
    return fetch(`${lolImproverUrl}/players/${name}`)
        .then(response => {
            if(!response.ok) throw new Error('Player Not Found');
            return response.json()
        })
        .then(response => {
            console.log(response);
            let matches = response.matchDetails.map(match => JSON.parse(match))

            dispatch(searchPlayer(response.playerInfo));
            dispatch(fetchMatches(matches))
    
        })
        .catch(err => dispatch(matchesError(err.message)))
}

