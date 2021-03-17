import React, { useState } from 'react';
import './index.css';
import { registerUser } from '../../actions/registerUser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../actions/auth';

// use context becuase 
//needs form validation for the username and
const mapStateToProps = state => ({
    signedUp: state.loginReducer.signedUp 
});


const SignUp = ({ setSignUp, ...props }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [agree, setAgree] = useState(false);

    // console.log(props)
    const createUser = (e) => {
        e.preventDefault();
        if (agree) {
            props.dispatch(registerUser({ username, password }));
        }
    }

    if(props.signedUp){
        props.dispatch(login(username, password));
    }

    return (
        <section className={`sign-up-container ${props.hidden ? 'hidden' : ''}`} >
            {props.signedUp ? <Redirect to='/dashboard' /> : undefined}
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
                        disabled={agree && (username === '' || password === '' || confirmPass === '')}
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

export default connect(mapStateToProps)(SignUp);