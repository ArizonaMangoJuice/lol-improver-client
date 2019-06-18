import {
    FETCH_PLAYER, 
    FETCH_MATCHES, 
    FETCH_STATIC_CHAMP_NAME, 
    CLEAR_PLAYER, 
    MATCHES_ERROR,
    FETCH_STATIC_SUMMONER_SPELL,
    FETCH_STATIC_ITEM} from '../actions/playerInfo';

const initialState = {
    matches: [],
    accountInfo: null,
    playerChampInfo: [],
    summonerSpells: [],
    items:[],
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

            let isInSummonerSpells = state.summonerSpells.find((e) => e.key === action.spellInfo[0].key);

            return !isInSummonerSpells
                ? {
                    ...state,
                    summonerSpells: [...state.summonerSpells, action.spellInfo[0]]
                }
                : {
                    ...state
                }  
        case FETCH_STATIC_ITEM:
            let isInItems = state.items.find((e) => e.idName === action.item.toString());            
            
            return !isInItems
              ? {
                ...state,
                items: [...state.items, action.item]
              }
              : {
                ...state
              }  
        default: 
            return state
    }
}

export default playerReducer;