import React, { useEffect, useState } from 'react';
import './index.css';
// import { registerUser } from '../../actions/registerUser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import lolImproverUrl from '../../config';
import { login } from '../../actions/auth';

// use context becuase 
//needs form validation for the username and
const mapStateToProps = state => ({
    signedUp: state.loginReducer.signedUp
});


function userNameValidation(string, error) {
    if (string.includes(' ')) return error('Username can\'t have spaces');
    if (string.length === 0) return error('Username can\'t be empty');
    if (string.length < 5) return error('Username can\'t be less than 7 characters long');
    return error('');
}


const SignUp = ({ setSignUp, ...props }) => {

    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

    async function userSignUp(user) {
        await fetch(`${lolImproverUrl}/api/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.status >= 401 && response.status < 600) {
               return setError("Username is taken");
            }
            props.dispatch(login(user));
        })
    }

    // console.log(props)
    const createUser = (e) => {
        e.preventDefault();
        if(!agree) return setError('You haven\'t agreed the terms of service');
        if (agree && !error) {
            userSignUp({ username, password });
            
            // props.dispatch(registerUser());
            // setUsername('');
            // setPassword('');
            // setConfirmPass('');
        }
    }

    useEffect(() => {
        if (confirmPass === password) setError('');
        if (confirmPass !== password) setError('passwords do not match');
        if (typeof password === "string" &&  password.length < 5 ) setError('password is too short');
        if(agree) setError('');
    }, [confirmPass, password, agree])


    return (
        <section className={`sign-up-container ${props.hidden ? 'hidden' : ''}`} >
            {props.signedUp ? <Redirect to='/dashboard' /> : undefined}
            <section className='sign-up-bg' onClick={() => setSignUp(false)} />
            <div className='sign-up '>
                {error ? <p className='sign-up-sign-in validation-error'>{error}</p> : undefined}
                <h1 className='sign-up-h1'>Create account</h1>
                <p className='sign-up-sign-in'>Already have an account? <a href='sing-in-link'>Sign in</a></p>
                <form className='sign-up-form'>
                    <input
                        value={username}
                        onChange={e => {
                            setUsername(e.currentTarget.value)
                            userNameValidation(e.currentTarget.value, setError);
                        }}
                        className='sign-up-input' type='text' placeholder='Username'
                    />
                    <input
                        value={!password ? '' : password}
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
                        // sign up button will have to have a diffrent class that wont let it hover
                        className={`${agree && (username === '' || password === '' || confirmPass === '') ? 'disabled-sign-up-button' : 'sign-up-button'}`}
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