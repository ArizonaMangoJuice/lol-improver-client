import React, { useState } from 'react';
import './index.css';
import { registerUser } from '../../actions/registerUser';
import {connect} from 'react-redux';

// use context becuase 

const SignUp = ({ setSignUp, ...props}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [agree, setAgree] = useState(false);


    const createUser = (e) => {
        e.preventDefault();
        props.dispatch(registerUser({username, password}));
    }

    console.log('this is the props for the sign up', props)
    return (
        <section className='sign-up-container'>
            <section className='sign-up-bg' onClick={() => setSignUp(false)} />
            <div className='sign-up '>
                <h1 className='sign-up-h1'>Create account</h1>
                <p className='sign-up-sign-in'>Already have an account? <a href='sing-in-link'>Sign in</a></p>
                <form className='sign-up-form'>
                    <input
                        value={username}
                        onChange={e => setUsername(e.currentTarget.value)}
                        className='sign-up-input' type='text' placeholder='Username'
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                        className='sign-up-input' type='password' placeholder='Password'
                    />
                    <input
                        value={confirmPass}
                        onChange={e => setConfirmPass(e.currentTarget.value)}
                        className='sign-up-input' type='password' placeholder='Confirm Password'
                    />
                    <button
                        onClick={(e) => createUser(e)}
                        disabled={username === '' || password === '' || confirmPass === ''}
                        className='sign-up-button'
                    >
                        <p className='sign-up-button-p'>Sign Up</p>
                    </button>
                    <label onChange={() => setAgree(!agree)} className='sign-up-input sign-up-label'>
                        <input onChange={() => setAgree(!agree)} className='sign-up-checkbox' checked={agree} type='checkbox' />
                        <span className='checkmark'>I have read and agree to the <a href='google.com'>Terms of Service</a></span>
                    </label>
                </form>
            </div>
        </section>
    )
}

export default connect()(SignUp);