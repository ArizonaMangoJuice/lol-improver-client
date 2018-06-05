import {FETCH_PLAYER, FETCH_MATCHES, FETCH_STATIC_NAME, CLEAR_PLAYER, MATCHES_ERROR} from '../actions/playerInfo';

const initialState = {
    matches: [],
    accountInfo: null,
    playerChampInfo: [],
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
        case FETCH_STATIC_NAME:
            // console.log(action.championInfo);
            return {
                ...state,
                playerChampInfo: [...state.playerChampInfo, action.championInfo]
            }
        default: 
            return state
    }
}

export default playerReducer;