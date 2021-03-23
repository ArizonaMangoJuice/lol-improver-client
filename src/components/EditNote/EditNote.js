import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { closeUpdateNote } from '../../actions/notes';

const mapStateToProps = state => ({
    note: state.notesReducer.currentNote
});

const EditNote = ({ dispatch, note, ...props }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        if (note.title) {
            setTitle(note.title);
            setText(note.text);
        }
    }, [note])

    return (
        <div className='sign-up-container'>
            <section className='sign-up-bg' onClick={() => dispatch(closeUpdateNote())} />
            <div className='create-note sign-up'>
                <h1 className='sign-up-h1'>Edit Note {note.title}</h1>
                <form className='sign-up-form'>
                    <input
                        value={title}
                        onChange={e => setTitle(e.currentTarget.value)}
                        className='sign-up-input' type='text' placeholder='title' />
                    <textarea
                        onChange={e => setText(e.currentTarget.value)}
                        value={text}
                        className='sign-up-input'
                        rows='8'
                        placeholder='write here'
                    />
                    <p>update image coming Soon !</p>
                    <button
                        // disabled={loading}
                        onClick={(e) => {
                            e.preventDefault();
                            // dispatch(createNoteServer(authToken, {
                            //     title,
                            //     text,
                            //     progress: 0
                            // }))
                        }}
                        className='sign-up-button'>
                        <p className='sign-up-button-p'>Update</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(EditNote);