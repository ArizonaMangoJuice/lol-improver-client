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
            <main className='main-content'>
                <section>
                </section>
                <p>
                    Try searching for these players:
                </p>

                <ChampionInfo />
                <NoteArea />
                <PlayerSearch />
            </main>
        )
    }
}

export default LoginWrapper()(connect()(Dashboard));

