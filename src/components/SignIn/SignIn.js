import React, { useState } from 'react';
import {connect} from 'react-redux';
import { login } from '../../actions/auth';

// 
const SignIn = ({setSignIn, signIn, ...props}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const buttonSignIn = (e, user) => {
        e.preventDefault();
        props.dispatch(login(user));
    }

    return (
        <section className={`sign-up-container ${props.hidden ? 'hidden' : ''}`}>
            <section className='sign-up-bg'  onClick={() => setSignIn(false)}/>
            <div className='sign-up '>
                <h1 className='sign-up-h1'>Sign In</h1>
                <form className='sign-up-form'>
                        <input
                            onChange={e => setUsername(e.currentTarget.value)}
                            className='sign-up-input' type='text' placeholder='Username'/>
                        <input 
                            onChange={e => setPassword(e.currentTarget.value)}
                            className='sign-up-input' type='password' placeholder='Password'/>
                        <button className='sign-up-button' onClick={(e) => buttonSignIn(e, {username, password})}>
                            <p className='sign-up-button-p'>Sign Up</p>
                        </button>
                </form>
            </div>
        </section>
    )
}

export default connect ()(SignIn);