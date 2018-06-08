import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './index.css';
import LoginForm from '../LoginForm';
import { signUpAgain } from '../../actions/auth';


export function LandingPage(props){
    let signedUp;
    if(props.loggedIn){
        return <Redirect to='/dashboard'/>
    }
    
    if(props.signedUp){
        props.dispatch(signUpAgain());
        signedUp = (
            <p className='signed-up'>Thank You for Registering. Please Login</p>
        )
    }

    return (
        <main>
            <p className='landing-page-p'>
                LoL Improver lets you take your gaming to a whole new level.
            </p>
            <p className='landing-page-p'>
                DemoLogin: testuser
            </p>
            <p className='landing-page-p'>
                DemoPassword: alongpassword
            </p>

            {signedUp}
            <LoginForm />
        </main>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.currentUser !== null,
        signedUp: state.loginReducer.signedUp
    };
};

export default connect(mapStateToProps)(LandingPage);