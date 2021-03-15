import React from 'react';
import './index.css';

const SignUp = ({ setSignUp }) => {
    return (
        <React.Fragment>
            <section className='sign-up-bg' onClick={() => setSignUp(false)} />
            <div className='sign-up-container'>
                <h1 className='sign-up-h1'>HELLO</h1>
            </div>
        </React.Fragment>
    )
}

export default SignUp;