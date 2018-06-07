import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../../actions/champions';
import LoginWrapper from '../LoginWrapper';
import ChampionInfo from '../ChampionInfo';
import NoteArea from '../NoteArea';
import PlayerSearch from '../PlayerSearch'

export class Dashboard extends React.Component{
    componentDidMount(){   
        this.props.dispatch(fetchChampions())
    }
    render(){
        return (
            <section className='main-content'>
                <ChampionInfo />
                <NoteArea />
                <PlayerSearch />
            </section>
        )
    }
}

const mapStateToProps = state => ({
    username: state.loginReducer.currentUser.username,
    authToken: state.loginReducer.authToken,
});

export default LoginWrapper()(connect(mapStateToProps)(Dashboard));