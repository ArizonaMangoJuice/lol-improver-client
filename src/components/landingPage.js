import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props){
    let signedUp;
    // console.log(props.loggedIn);
    if(props.loggedIn){
        return <Redirect to='/dashboard'/>
    }
    
    if(props.signedUp){
        signedUp = (
            <span>Thank You for Registering. Please Login</span>
        )
    }

    return (
        <div>
            <h2>Lol Improver</h2>
            {signedUp}
            <LoginForm />
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        loggedIn: state.loginReducer.currentUser !== null,
        signedUp: state.loginReducer.signedUp
    };
};

export default connect(mapStateToProps)(LandingPage);