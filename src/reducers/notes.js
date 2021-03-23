import { LOAD_NOTES } from "../actions/notes";


const initialState = {
    notes: [],
    currentNote: null,
    error: null
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NOTES: 
            return {
                ...state,
                notes: action.notes
            }
        default:
            return state
    }
};

export default notesReducer;