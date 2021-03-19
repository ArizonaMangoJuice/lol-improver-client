import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
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
import { Redirect } from 'react-router';
import jwt_decode from 'jwt-decode';
import lolImproverUrl from '../../config';

// I will use a masonry package but will look at source code to make my own.
// i need to account for the margins and padding so flex basis wont freak out
// usereducer will help here 
const mapStateToProps = state => ({
    authToken: state.loginReducer.authToken
});

export const Dashboard = ({ authToken, ...props}) => {
    
    const [windowWidth, setWidth] = useState(window.innerWidth);
    const[notes, setNotes] = useState([]);
    //need to move this to its seperate hook files
    useEffect(() => {

        let timeoutId = null;
        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);
            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 0);
        };

        window.addEventListener("resize", resizeListener);

        return () => {
            window.addEventListener("resize", resizeListener);
        }
    }, [windowWidth])

    useEffect(() => {
        let isMounted = true
        async function getNotes(){
            let notes = await fetch(`${lolImproverUrl}/api/notes`, {
                method: 'GET',
                headers:{
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            });
            notes = await notes.json();

            if(isMounted) setNotes(notes.result);
        }

        getNotes();
        return () => {
            isMounted = false;
        }
    }, [])
    
    let columns = 4;
    if(windowWidth <= 1070) columns = 2;
    if(windowWidth < 600) columns = 1;
    if(!authToken) return (<Redirect to='/' />);

    console.log('this is the authtoken ', authToken, notes)
    if(authToken){
        console.log(jwt_decode(authToken))
    }

    let dashboardNotes = notes.map(e => (<Note key={e._id} />))
    // will add masonry package but will read source code to create my own
    return (
        <main className='main-content'>
            <Header />
            <div className='dashboard'>
                <div className='dashboard-left-side'>
                    <DashboardCreateNote />
                    <DashBoardSearchBar />
                    <div className='notes-container left-container-width notes-flex-container'>
                        <Masonry columnsCount={columns} className='test'>
                            {dashboardNotes}
                        </Masonry>
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
export default connect(mapStateToProps)(Dashboard);