import {
    CHAMPION_FETCH_REQUEST,
    CHAMPION_FETCH_SUCCESS,
    CHAMPION_FETCH_ERROR,
    CHAMPION_IS_CLICKED
} from '../actions/champions';

const initalState = {
    loading: false,
    champions: [],
    clickedChampions: [],
    error: null
}

const championReducer = (state=initalState, action) => {
    switch(action.type){
        case CHAMPION_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CHAMPION_FETCH_SUCCESS: 
            return {
                ...state,
                loading: false,
                champions: action.champions,
                error: null
            }
        case CHAMPION_FETCH_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default championReducer;