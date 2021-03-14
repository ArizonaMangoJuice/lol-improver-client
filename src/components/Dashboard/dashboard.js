import React from 'react';
// import {connect} from 'react-redux';
// import fetchChampions from '../../actions/champions';
// import LoginWrapper from '../LoginWrapper';
// import ChampionInfo from '../ChampionInfo';
// import NoteArea from '../NoteArea';
// import PlayerSearch from '../PlayerSearch';
import Header from '../Header';
import Note from '../Note';
import './dashboard.css';
import DashBoardSearchBar from '../DashboardSearchBar';
import DashboardCreateNote from '../DashboardCreateNote';

// i need to account for the margins and padding so flex basis wont freak out
export class Dashboard extends React.Component {
    // componentDidMount(){   
    //     this.props.dispatch(fetchChampions())
    // }
    render() {
        return (
            <main className='main-content'>
                <Header />
                <div className='dashboard'>
                    <div className='dashboard-left-side'>
                        <DashboardCreateNote />
                        <DashBoardSearchBar />
                        <div className='notes-container left-container-width'>
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
                            <Note />
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

// export default LoginWrapper()(connect()(Dashboard));
export default Dashboard;