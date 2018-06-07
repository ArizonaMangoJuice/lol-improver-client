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

export default LoginWrapper()(connect()(Dashboard));