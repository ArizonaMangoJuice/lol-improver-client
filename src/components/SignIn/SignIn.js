import React, { useState } from 'react';
import {connect} from 'react-redux';
import { login } from '../../actions/auth';
import SimpleLoader from '../SimpleLoader';

const mapStateToProps = state => ({
    error: state.loginReducer.error,
    loading: state.loginReducer.loading,
})

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
                {props.error ? <h3 className='validation-error'>Invalid User Or Password</h3> : undefined}
                <h1 className='sign-up-h1'>Sign In</h1>
                <form className='sign-up-form'>
                        <input
                            onChange={e => setUsername(e.currentTarget.value)}
                            className='sign-up-input' type='text' placeholder='Username'/>
                        <input 
                            onChange={e => setPassword(e.currentTarget.value)}
                            className='sign-up-input' type='password' placeholder='Password'/>
                        {!props.loading ?(<button className='sign-up-button' onClick={(e) => buttonSignIn(e, {username, password})}>
                            <p className='sign-up-button-p'>Sign In</p>
                        </button>) : <SimpleLoader/>}
                </form>
            </div>
        </section>
    )
}

export default connect (mapStateToProps)(SignIn);