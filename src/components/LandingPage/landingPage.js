import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './index.css';

// import LoginForm from '../LoginForm'
// import { signUpAgain } from '../../actions/auth'
// import Jumbotron from '../Jumbotron'
// import TopCharts from '../TopCharts'
// import NewLogin from '../NewLogin'
import { login } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStickyNote, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';



export class LandingPage extends React.Component{
    constructor(props){
        super(props)

        this.redirectTest = this.redirectTest.bind(this)
    }


    redirectTest(username, password){
        return this.props.dispatch(login(username, password))
    }
    
    render(){

        // if(this.props.loggedIn){
        //     return <Redirect to='/dashboard'/>
        // }
        
        

        return (
            <main className='landing-page-container'>
                <header className='landing-page-header'>
                    <h3 className='landing-page-title'>lol Improver</h3>
                    <nav className='landing-page-nav'>
                        <button className='landing-links'>Features</button>
                        <button className='landing-links'>Search</button>
                        <button className='landing-links'>Sign In</button>
                        {/* <button className='landing-links'></button> */}
                    </nav>
                </header>
                <section className='landing-page-hero'>
                    <h1 className='landing-page-header'>
                        Grow Your Skill For Free!
                    </h1>
                    <button className='landing-page-sign-up'>
                         SIGN UP!
                    </button>
                    {/* <div className='landing-page-features'> */}
                        <section className='landing-page-inner-container feature-notes'>
                            <FontAwesomeIcon icon={faStickyNote} className='landing-page-features-icon'/>
                            <p className='landing-page-features-text'>Take notes of your matches</p>
                        </section>
                        <div className='line note-line note-color'></div>
                        <section className='landing-page-inner-container player-search'>
                            <FontAwesomeIcon icon={faSearch} className='landing-page-features-icon'/>
                            <p className='landing-page-features-text'>Search for players</p>
                        </section>
                        <div className='line user-account-line user-account-color'></div>
                        <section className='landing-page-inner-container user-account'>
                            <FontAwesomeIcon icon={faUser} className='landing-page-features-icon'/>
                            <p className='landing-page-features-text'>Track your stats with an account</p>
                        </section>
                        <div className='line player-search-line player-search-color'></div>
                    {/* </div> */}
                    <div className='landing-page-line'>
                    </div>
                </section>
                {/* <Jumbotron /> */}
                {/* <TopCharts /> */}
                {/* <p className='landing-page-p'>
                League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes.
                    LoL Improver lets you take your gaming to a whole new level.
                </p>
                <p className='landing-page-p'>
                    DemoLogin: testuser
                </p>
                <p className='landing-page-p'>
                    DemoPassword: alongpassword
                </p> */}
                {/* testing only */}
                {/* this needs to be in a seperate component, and the form need to be connected with the made form component */}
                
                {/* <NewLogin  redirectTest={this.redirectTest}/> */}
                {/* <LoginForm /> */}
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.currentUser !== null,
        signedUp: state.loginReducer.signedUp
    };
};

export default connect(mapStateToProps)(LandingPage);