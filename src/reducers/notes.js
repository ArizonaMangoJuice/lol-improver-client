import { CLOSE_CREATE_NOTE, OPEN_CREATE_NOTE, LOAD_NOTES } from "../actions/notes";


const initialState = {
    notes: [],
    currentNote: null,
    error: null,
    createNote: false,
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NOTES:
            return {
                ...state,
                notes: action.notes
            }
        case CLOSE_CREATE_NOTE:
            return {
                ...state,
                createNote: false
            }
        case OPEN_CREATE_NOTE:
            return {
                ...state,
                createNote: true
            }
        default:
            return state
    }
};

export default notesReducer;