import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './index.css';
import LoginForm from '../LoginForm';
import { signUpAgain } from '../../actions/auth';
import Jumbotron from '../Jumbotron';
import TopCharts from '../TopCharts';


export function LandingPage(props){
    if(props.loggedIn){
        return <Redirect to='/dashboard'/>
    }
    
    if(props.signedUp){
        props.dispatch(signUpAgain());
    }

    return (
        <main>
            <Jumbotron test={
                {
                title: 'test',
                background: null,
                icon: null,
                link: null,
                text: 'lolololdksaoldjiosadjoasi ddjsiao das ijasdjklsd jasiokdjasi odkm asiodasmi odsmd oiasdm iasd smiodsa midoasd iasido ams'
                }
            }
            />
            <TopCharts />
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

            <div className='landing-page-login-container'>
                <div className='left-cover'>
                    <h2>left cover</h2>
                </div>
                <div className='login'>
                    <h2>login</h2>
                    <button onClick={() => console.log('hello')}>press</button>
                </div>
                <div className='sign-up'>
                    <h2>sign up</h2>
                    <button onClick={() => console.log('hello')}>press</button>
                </div>
            </div>

            <LoginForm />
        </main>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.currentUser !== null,
        signedUp: state.loginReducer.signedUp
    };
};

export default connect(mapStateToProps)(LandingPage);