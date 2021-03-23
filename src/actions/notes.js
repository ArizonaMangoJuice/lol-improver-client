// import jwtDecode from 'jwt-decode';
import lolImproverUrl from '../config';


export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = (notes) => ({
    type: LOAD_NOTES,
    notes
});

export const OPEN_CREATE_NOTE = 'OPEN_CREATE_NOTE';
export const createNote = () => ({
    type: OPEN_CREATE_NOTE
});

export const CLOSE_CREATE_NOTE = 'CLOSE_CREATE_NOTE';
export const closeCreateNote = () => ({
    type: CLOSE_CREATE_NOTE
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

export const getNotes =  authToken =>  async dispatch => {
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