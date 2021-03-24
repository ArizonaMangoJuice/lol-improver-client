import React from 'react';
import UserProfileImage from '../UserProfileImage';
import './Note.css';
import { connect } from 'react-redux';
import { deleteNoteAndClear, openAndLoadNote } from '../../actions/notes';

const mapStateToProps = state => ({
    noteIsClicked: state.notesReducer.openUpdateNote,
    authToken: state.loginReducer.authToken
});

const Note = ({ title, img, text, id, dispatch, noteIsClicked, authToken }) => {
    img = img
        ? 'https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2FglasshmorphismMain.jpg?alt=media'
        : false;
    return (
        <div className='note '>
            {/* {noteIsClicked ? <EditNote /> : undefined} */}
            <p className='note-title'>{title}</p>
            <div className='notes-container'>
                <p className='notes'>{text}</p>
            </div>
            {img ? <img alt='visual note taken by user' className='note-image' src={img} /> : null}
            <div className='note-progress-container'>
                <div className='note-progress-bar'></div>
            </div>
            <button
                onClick={() => dispatch(openAndLoadNote(id))}
                className='note-update-progress'>
                Update
            </button>
            <div className='note-footer'>
                <UserProfileImage src='https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4' />
                <button className='note-options' onClick={() => dispatch(deleteNoteAndClear(authToken, id))}>
                    <div className='three-dots-container'>
                        <div className='dot card-dot'></div>
                        <div className='dot card-dot'></div>
                        <div className='dot card-dot'></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Note);