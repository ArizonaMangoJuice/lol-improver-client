// import jwtDecode from 'jwt-decode';
import lolImproverUrl from '../config';


export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = (notes) => ({
    type: LOAD_NOTES,
    notes
});

export const OPEN_CREATE_NOTE = 'OPEN_CREATE_NOTE';
export const openCreateNote = () => ({
    type: OPEN_CREATE_NOTE
});

export const CLOSE_CREATE_NOTE = 'CLOSE_CREATE_NOTE';
export const closeCreateNote = () => ({
    type: CLOSE_CREATE_NOTE
});

export const CREATE_NOTE_TITLE = 'CREATE_NOTE_TITLE';
export const createNoteTitle = (title) => ({
    type: CREATE_NOTE_TITLE,
    title
});

export const CREATE_NOTE = 'CREATE_NOTE';
export const createNote = (note) => ({
    type: CREATE_NOTE,
    note
});

export const CREATE_NOTE_LOADING = 'CREATE_NOTE_LOADING';
export const createNoteLoading = () => ({
    type: CREATE_NOTE_LOADING
});

export const CREATE_NOTE_STOP_LOADING = 'CREATE_NOTE_STOP_LOADING';
export const createNoteStopLoading = () => ({
    type: CREATE_NOTE_STOP_LOADING
});


export const DELETE_NOTE = 'DELETE_NOTE';
export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    id
});

export const EDIT_NOTE = 'EDIT_NOTE';
export const editNote = (id) => ({
    type: EDIT_NOTE,
    id
});

export const UPDATE_NOTE = 'UPDATE_NOTE';
export const updateNote = (id, content) => ({
    type: UPDATE_NOTE,
    id,
    content
});

// add error handling to these but for now they work

export const getNotes = authToken => async dispatch => {
    let notes = await fetch(`${lolImproverUrl}/api/notes`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    });

    notes = await notes.json();

    dispatch(loadNotes(notes.result));

};

export const createNoteServer = (authToken, body) => async dispatch => {
    dispatch(createNoteLoading());

    let note = await fetch(`${lolImproverUrl}/api/notes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(body)
    });

    note = await note.json();
    console.log('success ', note)

    dispatch(createNote(note));
    dispatch(createNoteStopLoading());
};