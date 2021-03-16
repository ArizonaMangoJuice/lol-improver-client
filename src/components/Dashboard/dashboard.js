import React, { useEffect, useState } from 'react';
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
import Masonry from 'react-responsive-masonry';
import UserMatchHistory from '../UserMatchHistory';

// I will use a masonry package but will look at source code to make my own.

// i need to account for the margins and padding so flex basis wont freak out
export const Dashboard = (props) => {
    // componentDidMount(){   
    //     this.props.dispatch(fetchChampions())
    // }
    const [windowWidth, setWidth] = useState(window.innerWidth);

useEffect(() => {
   
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
        window.addEventListener("resize", resizeListener);
    }
})

console.log(windowWidth)

// will add masonry package but will read source code to create my own
return (
    <main className='main-content'>
        <Header />
        <div className='dashboard'>
            <div className='dashboard-left-side'>
                <DashboardCreateNote />
                <DashBoardSearchBar />
                <div className='notes-container left-container-width'>
                    {windowWidth < 600
                        ? (
                            <div>
                                <Note img={true} />
                                <Note />
                                <Note />
                                <Note />
                                <Note />
                                <Note img={true} />
                                <Note />
                                <Note img={true} />
                                <Note />
                                <Note />
                                <Note />
                                <Note />
                                <Note img={true} />
                                <Note />
                            </div>
                        )
                        : (
                            <Masonry columnsCount={4} className='test'>
                                <Note img={true} />
                                <Note />
                                <Note />
                                <Note />
                                <Note />
                                <Note img={true} />
                                <Note />
                                <Note img={true} />
                                <Note />
                                <Note />
                                <Note />
                                <Note />
                                <Note img={true} />
                                <Note />
                            </Masonry>
                        )}
                </div>
            </div>
            <div className='dashboard-right-side'>
                <h2 className='dashboard-match-history-title'>Match History</h2>
                <UserMatchHistory />
                <UserMatchHistory />
                <UserMatchHistory />
                <UserMatchHistory />
                <UserMatchHistory />
                <UserMatchHistory />

            </div>
        </div>
        {/* <ChampionInfo /> */}
        {/* <NoteArea /> */}
        {/* <PlayerSearch /> */}
    </main>
)
}

// export default LoginWrapper()(connect()(Dashboard));
export default Dashboard;