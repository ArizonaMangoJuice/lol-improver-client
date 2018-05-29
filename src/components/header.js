import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearToken} from '../localStorage';

class Header extends React.Component{
    logout(){
        this.props.dispatch(clearAuth());
        clearToken();
    }
    render(){
        let logout;
        if(this.props.loggedIn){
            logout = (
                <button onClick={() => this.logout()}>Log Out</button>
            );
        }
        return (
            <div>
                hello your'e not logged in.
                {logout}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.loginReducer.currentUser !== null
})

export default connect(mapStateToProps)(Header);

