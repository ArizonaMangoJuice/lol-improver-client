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
            // console.log(action.spellInfo[0].key)

            let isInSummonerSpells = state.summonerSpells.find((e) => e.key === action.spellInfo[0].key);

            // console.log(isInSummonerSpells);

            if(!isInSummonerSpells){
                return {
                    ...state,
                    summonerSpells: [...state.summonerSpells, action.spellInfo[0]]
                }
            }

            return {
                ...state
            }    
        default: 
            return state
    }
}

export default playerReducer;