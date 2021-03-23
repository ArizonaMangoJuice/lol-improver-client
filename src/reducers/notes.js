import { CLOSE_CREATE_NOTE, OPEN_CREATE_NOTE, LOAD_NOTES, CREATE_NOTE_TITLE } from "../actions/notes";


const initialState = {
    notes: [],
    currentNote: {},
    error: null,
    openCreateNote: false,
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NOTES:
            return {
                ...state,
                notes: action.notes
            }
        case CREATE_NOTE_TITLE:
            return {
                ...state,
                title: action.title
            }
        case CLOSE_CREATE_NOTE:
            return {
                ...state,
                openCreateNote: false
            }
        case OPEN_CREATE_NOTE:
            return {
                ...state,
                openCreateNote: true
            }
        default:
            return state
    }
};

export default notesReducer;