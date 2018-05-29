import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//create wrapper to redirect if not logged in

export default () => Component => {
    function LoginWrapper(props){
        const {loggedIn, error, ...passThroughProps} = props;
        if(!loggedIn || error){
            return <Redirect to='/' />
        }
        return <Component {...passThroughProps} />
    }

    const mapStateToProps = (state, props) => ({
        loggedIn: state.loginReducer.currentUser !== null,
        error: state.loginReducer.error,
    });

    return connect(mapStateToProps)(LoginWrapper);
}