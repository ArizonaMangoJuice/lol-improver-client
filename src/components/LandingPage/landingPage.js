import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './index.css';
import LoginForm from '../LoginForm';

export function LandingPage(props){
    let signedUp;
    // console.log(props.loggedIn);
    if(props.loggedIn){
        return <Redirect to='/dashboard'/>
    }
    
    if(props.signedUp){
        signedUp = (
            <p className='signed-up'>Thank You for Registering. Please Login</p>
        )
    }

    return (
        <main>
            <p className='landing-page-p'>
                LoL Improver lets you take your gaming to a whole new level.
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