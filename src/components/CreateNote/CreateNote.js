import React, { useState } from 'react';
import { connect } from 'react-redux';
import { closeCreateNote } from '../../actions/notes';


export const CreateNote = props => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    return (
        <div className='sign-up-container'>
            <section className='sign-up-bg' onClick={() => props.dispatch(closeCreateNote())} />
            <div className='create-note sign-up'>
                <h1 className='sign-up-h1'>Create Note</h1>
                <form className='sign-up-form'>
                    <input
                        val={title}
                        onChange={e => setTitle(e.currentTarget.value)}
                        className='sign-up-input' type='text' placeholder='title' />
                    <textarea
                        onChange={e => setBody(e.currentTarget.value)}
                        val={body}
                        className='sign-up-input'
                        rows='8'
                        placeholder='write here'
                    />
                    <p>upload images coming Soon !</p>
                    <button className='sign-up-button' >
                        <p className='sign-up-button-p'>Create Note!</p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default connect()(CreateNote);