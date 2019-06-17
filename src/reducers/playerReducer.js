import {
    FETCH_PLAYER, 
    FETCH_MATCHES, 
    FETCH_STATIC_CHAMP_NAME, 
    CLEAR_PLAYER, 
    MATCHES_ERROR,
    FETCH_STATIC_SUMMONER_SPELL} from '../actions/playerInfo';

const initialState = {
    matches: [],
    accountInfo: null,
    playerChampInfo: [],
    summonerSpells: [],
    error: null
}

const playerReducer = (state=initialState, action) => {
    switch(action.type){
        case MATCHES_ERROR:
            return {
                ...state,
                error: action.error
            }
        case FETCH_PLAYER: 
            return {
                ...state,
                accountInfo: action.accountInfo,
                error: null
            }
        case FETCH_MATCHES: 
            return {
                ...state,
                matches: action.matches,
                error: null
            }
        case CLEAR_PLAYER:
        return {
            ...state,
            matches: [],
            accountInfo: null,
            playerChampInfo: [],
            error: null
        }
        case FETCH_STATIC_CHAMP_NAME:
            return {
                ...state,
                playerChampInfo: [...state.playerChampInfo, action.championInfo]
            }
        case FETCH_STATIC_SUMMONER_SPELL:
            let spellInfo;
            let summonerSpells;
            let test;
            // console.log(state.summonerSpells, 'test')
            if( state.summonerSpells ){
                test = state.summonerSpells.filter(x => x[0].timestamp === action.spellInfo.timestamp)
                console.log(test.length)
                if (test.length <= 2) {
                    console.log('lestt tahn 2 ')
                  spellInfo = action.spellInfo; 
                  summonerSpells = [...state.summonerSpells, spellInfo]
                } 
                // if (test.length >= 2 ) {
                //     console.log('greater than 2')
                //   summonerSpells = [...state.summonerSpells]
                // }
            }
            return {
                ...state,
                summonerSpells
            }
        default: 
            return state
    }
}

export default playerReducer;