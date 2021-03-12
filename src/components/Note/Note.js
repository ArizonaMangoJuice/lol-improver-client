import React from 'react';
import './Note.css';

const Note = ({img}) => {
    img = 'https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2FglasshmorphismMain.jpg?alt=media';
    return (
        <div className='note '>
            <p className='note-title'>Sign In Flow</p>
            <div className='notes-container'>
                <p className='notes'>Show Email, password, Password Recovery...</p>
            </div>
            {img ? <img alt='visual note taken by user' className='note-image' src={img}/> : null}
            <div className='note-progress-container'>
                <div className='note-progress-bar'></div>
            </div>
            <button className='note-update-progress'>
                Update
            </button>
            <div className='note-footer'>
                <div className='user-image-container user-note-image'>
                    <img alt='how the user sees themselves' src='https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4' className='user-image ' />
                </div>
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