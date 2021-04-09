import React, { useEffect } from 'react';
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
import { getNotes } from '../../actions/notes';
import CreateNote from '../CreateNote';
import EditNote from '../EditNote';
import { useWindowsWidth } from '../../hooks/useWindowsWidth';

// I will use a masonry package but will look at source code to make my own.
// i need to account for the margins and padding so flex basis wont freak out
// move parts to notes actions
// usereducer will help here 
//move the createNote to own Component

const mapStateToProps = state => ({
    authToken: state.loginReducer.authToken,
    notes: state.notesReducer.notes,
    openCreateNote: state.notesReducer.openCreateNote,
    currentNote: state.notesReducer.currentNote,
    noteIsClicked: state.notesReducer.openUpdateNote,
    deleteNote: state.notesReducer.deleteNote
});

export const Dashboard = ({ authToken, notes, deleteNote, ...props }) => {
    const windowWidth = useWindowsWidth();

    useEffect(() => {
        // let isMounted = true
        props.dispatch(getNotes(authToken))
        return () => {
            // isMounted = false;
        }
    }, [deleteNote])

    let columns = 4;
    if (windowWidth <= 1070) columns = 2;
    if (windowWidth < 600) columns = 1;
    if (!authToken) return (<Redirect to='/' />);
    let dashboardNotes;

    dashboardNotes = notes && notes.length !== 0
        ? notes.map(e => (<Note key={e._id} title={e.title} text={e.text} id={e._id} />))
        : undefined;
    // will add masonry package but will read source code to create my own
    return (
        <main className='main-content'>
            <Header />
            <div className='dashboard'>
                {props.noteIsClicked ? <EditNote /> : undefined}
                <div className='dashboard-left-side'>
                    <DashboardCreateNote />
                    <DashBoardSearchBar />
                    {props.openCreateNote
                        ? <CreateNote /> : null}
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