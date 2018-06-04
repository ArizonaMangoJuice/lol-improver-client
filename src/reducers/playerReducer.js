import {FETCH_PLAYER, FETCH_MATCHES, FETCH_STATIC_NAME, CLEAR_PLAYER} from '../actions/playerInfo';

const initialState = {
    matches: [],
    accountInfo: null,
    playerChampInfo: []
}

const playerReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_PLAYER: 
            return {
                ...state,
                accountInfo: action.accountInfo
            }
        case FETCH_MATCHES: 
            return {
                ...state,
                matches: action.matches
            }
        case CLEAR_PLAYER:
        return {
            ...state,
            matches: [],
            accountInfo: null,
            playerChampInfo: []
        }
        case FETCH_STATIC_NAME:
            console.log(action.championInfo);
            return {
                ...state,
                playerChampInfo: [...state.playerChampInfo, action.championInfo]
            }
        default: 
            return state
    }
}

export default playerReducer;