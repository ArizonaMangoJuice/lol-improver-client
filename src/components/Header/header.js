import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearToken} from '../../localStorage';
import { clearChampionClickedSearched } from '../../actions/champions';

class Header extends React.Component{
    logout(){
        this.props.dispatch(clearAuth());
        clearToken();
        this.props.dispatch(clearChampionClickedSearched());
    }
    render(){
        let logout;
        if(this.props.loggedIn){
            logout = (
                <button className='user-button' onClick={() => this.logout()}>Log Out</button>
            );
        }
        return (
            <section id='banner'>
                <h1>LOL Improver</h1>
                {logout}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.loginReducer.currentUser !== null
})

export default connect(mapStateToProps)(Header);

