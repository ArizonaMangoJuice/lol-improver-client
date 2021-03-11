import React from 'react';
import {connect} from 'react-redux';
import fetchChampions from '../../actions/champions';
import LoginWrapper from '../LoginWrapper';
import ChampionInfo from '../ChampionInfo';
import NoteArea from '../NoteArea';
import PlayerSearch from '../PlayerSearch';
import Header from '../Header';
import './dashboard.css';
export class Dashboard extends React.Component{
    // componentDidMount(){   
    //     this.props.dispatch(fetchChampions())
    // }
    render(){
        return (
            <main className='main-content'>
                <Header />
                <div className='dashboard'>
                    <div className='dashboard-left-side'>
                        <div className='left-container-width'>
                            <h1 className='left-container-title'>Level up your skill</h1>
                            <div className='left-container-buttons'>
                                <div className='backdrop-wrapper-orange flex'>
                                    <button className='left-container-button'>Create Note</button>
                                </div>
                                <div className='three-dots-container'>
                                    <div className='dot'></div>
                                    <div className='dot'></div>
                                    <div className='dot'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard-right-side'>

                    </div>
                </div>
                {/* <ChampionInfo /> */}
                {/* <NoteArea /> */}
                {/* <PlayerSearch /> */}
            </main>
        )
    }
}

export default LoginWrapper()(connect()(Dashboard));

