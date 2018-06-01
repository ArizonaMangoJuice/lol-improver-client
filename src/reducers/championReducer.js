import {
    CHAMPION_FETCH_REQUEST,
    CHAMPION_FETCH_SUCCESS,
    CHAMPION_FETCH_ERROR,
    CHAMPION_IS_CLICKED,
    SEARCH_CHAMPION,
    UPDATE_CHAMPION_NOTE,
    CLEAR_CHAMPION_CLICKED_SEARCHED
} from '../actions/champions';

const initalState = {
    loading: false,
    champions: [],
    filteredChampions: [],
    note: '',
    error: null,
    championId: null,
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
        case CHAMPION_IS_CLICKED: 
            const champion = state.champions.filter(champ => champ.id === action.id)
            // console.log(champion[0].content);
            return {
                ...state,
                note: champion[0].content,
                championId: action.id
            };
        case CLEAR_CHAMPION_CLICKED_SEARCHED: 
            return {
                ...state,
                note: '',
                championId: null,
                filteredChampions: []
            }
        case SEARCH_CHAMPION:
            return {
                ...state,
                filteredChampions: 
                state.champions.filter(champ => (
                    champ.name.toLowerCase().includes(action.value.toLowerCase())
                ))
            }
        case UPDATE_CHAMPION_NOTE: 
            return {
                ...state,
                note: action.value
            }
        default: 
            return state;
    }
}

export default championReducer;