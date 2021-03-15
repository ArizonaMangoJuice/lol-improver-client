import React from 'react';
import './index.css';

const SignUp = ({ setSignUp }) => {
    return (
        <section className='sign-up-container'>
            <section className='sign-up-bg' onClick={() => setSignUp(false)} />
            <div className='sign-up '>
                <h1 className='sign-up-h1'>Create account</h1>
                <p className='sign-up-sign-in'>Already have an account? <a href='sing-in-link'>Sign in</a></p>
                <form className='sign-up-form'>
                        <input className='sign-up-input' type='email' placeholder='Username'/>
                        <input className='sign-up-input' type='password' placeholder='Password'/>
                        <input className='sign-up-input' type='password' placeholder='Confirm Password'/>
                        <button className='sign-up-button'>
                            <p className='sign-up-button-p'>Sign Up</p>
                        </button>
                        <label className='sign-up-input sign-up-label'>
                            <input className='sign-up-checkbox' type='checkbox' />
                            <span className='checkmark'>I have read and agree to the <a href='google.com'>Terms of Service</a></span>
                        </label>
                </form>
            </div>
        </section>
    )
}

export default SignUp;