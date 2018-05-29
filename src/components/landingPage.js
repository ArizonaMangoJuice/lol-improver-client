import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props){
    //create a redirect if logged in 
    console.log(props.loggedIn);
    if(props.loggedIn){
        return <Redirect to='/dashboard'/>
    }

    return (
        <div>
            <h2>Lol Improver</h2>
            <LoginForm />
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        loggedIn: state.loginReducer.currentUser !== null
    };
};

export default connect(mapStateToProps)(LandingPage);