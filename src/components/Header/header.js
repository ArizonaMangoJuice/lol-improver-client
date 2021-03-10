import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearToken} from '../../localStorage';
import { clearChampionClickedSearched } from '../../actions/champions';
import {clearPlayer} from '../../actions/playerInfo';
import './index.css';

export class Header extends React.Component{
    logout(){
        this.props.dispatch(clearAuth());
        this.props.dispatch(clearPlayer());
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
            <header id='banner'>
                {/* <h1>LOL Improver</h1>
                {logout} */}
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.loginReducer.currentUser !== null
})

export default connect(mapStateToProps)(Header);

