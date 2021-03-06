import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import './index.css';
// import LoginForm from '../LoginForm'
// import { signUpAgain } from '../../actions/auth'
// import Jumbotron from '../Jumbotron'
// import TopCharts from '../TopCharts'
// import NewLogin from '../NewLogin'
// import { login } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import { login } from '../../actions/auth';

export const LandingPage = (props) => {
    // const redirect = (username, password) => {
    //     return props.dispatch(login(username, password))
    // }
    // convert to use reducer 
    const [signUp, setSignUp] = useState(false);
    const [signIn, setSignIn] = useState(false);
    
    if(props.signedUpUser && !props.error){
        props.dispatch(login(props.signedUpUser))
    }

    if(props.authToken){
        return <Redirect to='/dashboard'/>
    }

    return (
        <main className='landing-page-container'>
            {signUp ? <SignUp setSignUp={setSignUp} signUp={signUp} /> : undefined}
            {signIn ? <SignIn setSignIn={setSignIn} signIn={signIn} /> : undefined}
            <header className='landing-page-header'>
                <h3 className='landing-page-title'>lol Improver Site Under Construction</h3>
                <nav className='landing-page-nav'>
                    {/* <Link className='landing-links' to='/dashboard'>Features</Link> */}
                    <button onClick={() => setSignIn(true)} className='landing-links'>Sign In</button>
                    <Link className='landing-links' to='/dashboard'>Search</Link>
                    <Link className='landing-links' to='/dashboard'>Dashboard</Link>
                    {/* <button className='landing-links'></button> */}
                </nav>
            </header>
            <section className='landing-page-hero'>
                <h1 className='landing-page-h1'>
                    Grow Your Skill For Free!
                    </h1>
                <button onClick={() => setSignUp(true)} className='landing-page-sign-up'>
                    SIGN UP!
                </button>
                {/* <div className='landing-page-features'> */}
                <section className='landing-page-inner-container feature-notes'>
                    <FontAwesomeIcon icon={faStickyNote} className='landing-page-features-icon' />
                    <p className='landing-page-features-text'>Take notes of your matches</p>
                </section>
                <div className='line note-line note-color'></div>
                <section className='landing-page-inner-container player-search'>
                    <FontAwesomeIcon icon={faSearch} className='landing-page-features-icon' />
                    <p className='landing-page-features-text'>Search for players</p>
                </section>
                <div className='line user-account-line user-account-color'></div>
                <section className='landing-page-inner-container user-account'>
                    <FontAwesomeIcon icon={faUser} className='landing-page-features-icon' />
                    <p className='landing-page-features-text'>Track your stats with an account</p>
                </section>
                <div className='line player-search-line player-search-color'></div>
                {/* </div> */}
                <div className='landing-page-line'>
                </div>
            </section>
           
        </main>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.currentUser !== null,
        signedUpUser: state.loginReducer.signedUp,
        authToken: state.loginReducer.authToken
    };
};

export default connect(mapStateToProps)(LandingPage);