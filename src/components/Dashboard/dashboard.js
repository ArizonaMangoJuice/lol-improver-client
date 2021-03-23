import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
import { closeCreateNote, getNotes } from '../../actions/notes';

// I will use a masonry package but will look at source code to make my own.
// i need to account for the margins and padding so flex basis wont freak out
// move parts to notes actions
// usereducer will help here 
const mapStateToProps = state => ({
    authToken: state.loginReducer.authToken,
    notes: state.notesReducer.notes,
    createNote: state.notesReducer.createNote
});

export const Dashboard = ({ authToken, notes, ...props }) => {
    //need to move this to its seperate hook files
    const [windowWidth, setWidth] = useState(window.innerWidth);
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
        // let isMounted = true
        props.dispatch(getNotes(authToken))
        return () => {
            // isMounted = false;
        }
    }, [])

    let columns = 4;
    if (windowWidth <= 1070) columns = 2;
    if (windowWidth < 600) columns = 1;
    if (!authToken) return (<Redirect to='/' />);
    let dashboardNotes;


    dashboardNotes = notes && notes.length !== 0
        ? notes.map(e => (<Note key={e._id} title={e.title} text={e.text} />))
        : undefined;
    // will add masonry package but will read source code to create my own
    return (
        <main className='main-content'>
            <Header />
            <div className='dashboard'>
                <div className='dashboard-left-side'>
                    <DashboardCreateNote />
                    <DashBoardSearchBar />
                    {props.createNote
                        ? <div className='sign-up-container'>
                            <section className='sign-up-bg' onClick={() => props.dispatch(closeCreateNote())} />
                            <div className='create-note sign-up'>
                                <h1 className='sign-up-h1'>Create Note</h1>
                                <form className='sign-up-form'>
                                    <input
                                        // onChange={e => setUsername(e.currentTarget.value)}
                                        className='sign-up-input' type='text' placeholder='title' />
                                    <textarea className='sign-up-input' rows='8' placeholder='write here' />
                                    <p>upload images coming Soon !</p>
                                    <button className='sign-up-button' >
                                        <p className='sign-up-button-p'>Create Note!</p>
                                    </button>
                                </form>
                            </div>
                        </div> : null}
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
        </main>
    )
}

export default connect(mapStateToProps)(Dashboard);