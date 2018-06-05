import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import RegisterForm from './registerForm';

function RegisterPage(props){
    if(props.loggedIn){
        return <Redirect to='/dashboard'/>
    }
    if(props.signedUp){
        return <Redirect to='/' />
    }
    return (
        <div>
            <p id='register-title'>Sign Up</p>
            <RegisterForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.loginReducer.currentUser !== null,
    signedUp: state.loginReducer.signedUp
});

export default connect(mapStateToProps)(RegisterPage)
