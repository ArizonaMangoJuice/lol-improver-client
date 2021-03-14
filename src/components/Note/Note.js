import React from 'react';
import UserProfileImage from '../UserProfileImage';
import './Note.css';

const Note = ({img}) => {
    img = 'https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2FglasshmorphismMain.jpg?alt=media';
    return (
        <div className='note '>
            <p className='note-title'>Learning To Side Step</p>
            <div className='notes-container'>
                <p className='notes'>Playing any role, it's important to learn...</p>
            </div>
            {img ? <img alt='visual note taken by user' className='note-image' src={img}/> : null}
            <div className='note-progress-container'>
                <div className='note-progress-bar'></div>
            </div>
            <button className='note-update-progress'>
                Update
            </button>
            <div className='note-footer'>
                <UserProfileImage src='https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4'/>
                <button className='note-options'>
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

export default Note;