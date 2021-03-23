import React, { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    authToken: state.loginReducer.authToken
});

export const EditNote = (props) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <div className='sign-up-container'>
            <section className='sign-up-bg' onClick={() => dispatch(closeCreateNote())} />
            <div className='create-note sign-up'>
                <h1 className='sign-up-h1'>Update Note</h1>
                <form className='sign-up-form'>
                    <input
                        val={title}
                        onChange={e => setTitle(e.currentTarget.value)}
                        className='sign-up-input' type='text' placeholder='title' />
                    <textarea
                        onChange={e => setText(e.currentTarget.value)}
                        val={text}
                        className='sign-up-input'
                        rows='8'
                        placeholder='write here'
                    />
                    <p>upload images coming Soon !</p>
                    <button
                        disabled={loading}
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(createNoteServer(authToken, {
                                title,
                                text,
                                progress: 0
                            }))
                        }}
                        className='sign-up-button'>
                        <p className='sign-up-button-p'>{loading ? 'loading' : 'Create Note!'}</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(EditNote);