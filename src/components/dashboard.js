import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../actions/champions';
import LoginWrapper from './loginWrapper';
import ChampionInfo from './champion-info';
import NoteArea from './noteArea';
import PlayerSearch from './playerSearch'

export class Dashboard extends React.Component{
    componentDidMount(){   
        this.props.dispatch(fetchChampions())
    }
    render(){
        return (
            <main>
                <ChampionInfo/>
                <NoteArea />
                <PlayerSearch />
            </main>
        )
    }
}

const mapStateToProps = state => ({
    username: state.loginReducer.currentUser.username,
    authToken: state.loginReducer.authToken,
});

export default LoginWrapper()(connect(mapStateToProps)(Dashboard));