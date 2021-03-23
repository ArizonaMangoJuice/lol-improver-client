import { CLOSE_CREATE_NOTE, OPEN_CREATE_NOTE, LOAD_NOTES, CREATE_NOTE_TITLE, CREATE_NOTE, CREATE_NOTE_LOADING, CREATE_NOTE_STOP_LOADING } from "../actions/notes";


const initialState = {
    notes: [],
    currentNote: {},
    error: null,
    openCreateNote: false,
    loading: false,
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
        case CREATE_NOTE_LOADING: 
            return {
                ...state,
                loading: true
            }
        case CREATE_NOTE_STOP_LOADING: 
            return {
                ...state,
                loading: false
            }
        case CREATE_NOTE: 
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        default:
            return state
    }
};

export default notesReducer;