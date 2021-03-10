import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../../actions/champions';
import LoginWrapper from '../LoginWrapper';
import ChampionInfo from '../ChampionInfo';
import NoteArea from '../NoteArea';
import PlayerSearch from '../PlayerSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-regular-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

export class Dashboard extends React.Component{
    // componentDidMount(){   
    //     this.props.dispatch(fetchChampions())
    // }
    render(){
        return (
            <main className='main-content'>
                <header className='newHeader darker-glass-background'>
                    {/* this will be changed to a dot menu */}
                    <div className='menu-container'>
                        <div className='bento-menu'>
                            <div className="bento-dot"></div>
                            <div className="bento-dot"></div>
                            <div className="bento-dot"></div>
                            <div className="bento-dot"></div>
                            <div className="bento-dot"></div>
                            <div className="bento-dot"></div>
                            <div className="bento-dot"></div>
                            <div className="bento-dot"></div>
                            <div className="bento-dot"></div>
                        </div>
                    </div>
                    {/* <button className='header-menu darker-glass-background'></button> */}
                    <div className='dashboard-logo-container'>
                        <img className='dashboard-logo' src={require('../../images/logo.png')} />
                        <p className='dashboard-title'>lol Improver</p>
                    </div>
                    <nav className='new-nav'>
                        <button className='new-nav-button nav-button-selected'>Board</button>
                        <button className='new-nav-button '>Map</button>
                        <button className='new-nav-button '>Chronology</button>
                        <button className='new-nav-button '>Panel</button>
                    </nav>
                    {/* fa fa-bell-o */}
                    <div className='user-container'>
                        <div className='notification'>
                            <FontAwesomeIcon icon={faBell} className='white'/>    
                        </div>
                        <div className='user-profile'>
                            <div className='user-image-container'>
                                <img className='user-image' src='https://avatars.githubusercontent.com/u/21373845?s=460&u=06623bc214c716a3ba9b90f0beea147d7b9cf6e1&v=4' />
                            </div>
                        </div>
                        <div className='user-name-container'>
                            <p className='user-name'>Isael Lizama</p>
                            <p className='rank'>GOLD 2</p>
                        </div>
                        <div className='carrot-container'>
                            <FontAwesomeIcon icon={faChevronDown} />
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

