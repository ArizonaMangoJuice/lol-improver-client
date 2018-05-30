import {
    CHAMPION_FETCH_REQUEST,
    CHAMPION_FETCH_SUCCESS,
    CHAMPION_FETCH_ERROR,
    CHAMPION_IS_CLICKED,
    SEARCH_CHAMPION
} from '../actions/champions';

const initalState = {
    loading: false,
    champions: [],
    clickedChampions: [],
    filteredChampions: [],
    note: 'e',
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
        case CHAMPION_IS_CLICKED: 
            const champion = state.champions.filter(champ => champ.id === action.id)
            console.log(champion[0].content);
            return {
                ...state,
                note: champion[0].content
            };
        case SEARCH_CHAMPION:
            return {
                ...state,
                filteredChampions: 
                state.champions.filter(champ => (
                    champ.name.toLowerCase().includes(action.value.toLowerCase())
                ))
            }
        default: 
            return state;
    }
}

export default championReducer;