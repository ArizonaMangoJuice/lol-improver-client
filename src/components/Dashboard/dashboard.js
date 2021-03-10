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
                <header className='newHeader darker-glass-background'>
                    {/* this will be changed to a dot menu */}
                    <button className='header-menu darker-glass-background'>menu</button>
                    <div className='dashboard-logo-container'>
                        <img className='dashboard-logo' src={require('../../images/logo.png')} />
                        <p className='dashboard-title'>lol Improver</p>
                    </div>
                    <nav className='new-nav'>
                        <button className='new-nav-button '>Board</button>
                        <button className='new-nav-button '>Map</button>
                        <button className='new-nav-button '>Chronology</button>
                        <button className='new-nav-button '>Panel</button>
                    </nav>
                    <div className='user-container'>
                        <div className='notification'></div>
                        <div className='user-profile'>
                            
                        </div>
                    </div>
                </header>
                {/* <ChampionInfo /> */}
                {/* <NoteArea /> */}
                {/* <PlayerSearch /> */}
            </main>
        )
    }
}

export default LoginWrapper()(connect()(Dashboard));

