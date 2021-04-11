import {
    FETCH_PLAYER,
    FETCH_MATCHES,
    FETCH_STATIC_CHAMP_NAME,
    CLEAR_PLAYER,
    MATCHES_ERROR,
    FETCH_STATIC_SUMMONER_SPELL,
    UPDATE_PLAYER_SEARCH,
    UPDATE_MATCH_LIST,
    FETCH_STATIC_ITEM,
    ADD_MATCH,
    SORT_MATCHES,
    CLEAR_MATCHES,
    MATCH_LOADING,
    STOP_MATCH_LOADING,
    PLAYER_ERROR,
    CLEAR_PLAYER_ERROR
} from '../actions/playerInfo';

const initialState = {
    matches: [],
    matchLoading: false,
    accountInfo: null,
    matchList: [],
    playerChampInfo: [],
    summonerSpells: [],
    items: [],
    playerSearch: '',
    playerError: null,
    error: null
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_MATCHES:
            const sorted = state.matches.slice(0).sort((a, b) => parseInt(a.timestamp, 10) < parseInt(b.timestamp, 10));
            console.log('sorted', sorted)
            return {
                ...state,
                matches: sorted
            }
        case MATCH_LOADING:
            return {
                ...state,
                matchLoading: true
            }
        case STOP_MATCH_LOADING: 
            return {
                ...state,
                matchLoading: false
            }
        case CLEAR_MATCHES:
            return {
                ...state,
                matches: []
            }
        case ADD_MATCH:
            return {
                ...state,
                matches: [...state.matches, action.match]
            }
        case UPDATE_PLAYER_SEARCH:
            return {
                ...state,
                playerSearch: action.player
            }
        case UPDATE_MATCH_LIST:
            return {
                ...state,
                matchList: action.matchList
            }
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

        case PLAYER_ERROR: 
            return {
                ...state,
                playerError: action.error
            }
        case CLEAR_PLAYER_ERROR: 
            return {
                ...state,
                playerError: null
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