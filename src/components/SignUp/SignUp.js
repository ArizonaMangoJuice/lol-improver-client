import React, { useEffect, useState } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { registerUser } from '../../actions/registerUser';

// use useReducer to reduce some of the useState over usage becuase 
//needs form validation for the username and
//move the useEffect to be an action for signing the user up 
// move other useEffects to a seperate file
//move userNameValidation to a utils folder
const mapStateToProps = state => ({
    signedUp: state.loginReducer.signedUp,
    error: state.loginReducer.error,
    loading: state.loginReducer.loading
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

    const createUser = (e) => {
        e.preventDefault();
        if (!agree) return setError('You haven\'t agreed the terms of service');
        if (agree && !error) {
            props.dispatch(registerUser({ username, password }));
        }
    }

    useEffect(() => {
        if (confirmPass === password) setError('');
        if (confirmPass !== password) setError('passwords do not match');
        if (typeof password === "string" && password.length < 5) setError('password is too short');
        if (agree) setError('');
        if (props.error) setError(props.error);
    }, [confirmPass, password, agree, props.error])

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
                        { props.loading ? <p>Loading</p> : <p className='sign-up-button-p'>Sign Up</p>}
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