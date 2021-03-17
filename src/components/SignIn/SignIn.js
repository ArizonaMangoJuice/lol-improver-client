import React from 'react';
// 
const SignIn = ({setSignIn, signIn, ...props}) => {
    return (
        <section className={`sign-up-container ${props.hidden ? 'hidden' : ''}`}>
            <section className='sign-up-bg'  onClick={() => setSignIn(false)}/>
            <div className='sign-up '>
                <h1 className='sign-up-h1'>Sign In</h1>
                <form className='sign-up-form'>
                        <input className='sign-up-input' type='email' placeholder='Username'/>
                        <input className='sign-up-input' type='password' placeholder='Password'/>
                        <button className='sign-up-button'>
                            <p className='sign-up-button-p'>Sign Up</p>
                        </button>
                </form>
            </div>
        </section>
    )
}

export default SignIn;