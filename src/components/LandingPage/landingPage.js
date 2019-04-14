import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './index.css';
import LoginForm from '../LoginForm';
import { signUpAgain } from '../../actions/auth';
import Jumbotron from '../Jumbotron';
import TopCharts from '../TopCharts';


export class LandingPage extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
          moveLogin: false,
          moveSignup: false
        };
    }
    render(){
        const moveLogin = this.state.moveLogin;
        const moveSignup = this.state.moveSignup;

        if(this.props.loggedIn){
            return <Redirect to='/dashboard'/>
        }
        
        if(this.props.signedUp){
            this.props.dispatch(signUpAgain());
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
                        <h1>LOL IMPROVER</h1>
                        <h2>Game On</h2>
                    </div>
                    <div className={`${moveLogin ? 'moveSignup sign-up' : moveSignup ? 'moveSignupRight sign-up' : 'sign-up'} `}>
                    <div className='login-container'>
                            <form>
                                <label>
                                    Full Name:
                                    <input type='text' name='full Name' />
                                </label>
                            </form>
                        </div>
                        <h2>sign up</h2>
                        <button 
                          onClick={() => this.setState({moveLogin: false, moveSignup: true})}>                          
                          press</button>
                    </div>
                    <div 
                      className={`${moveLogin ? 'moveLogin login' : moveSignup ? 'moveLoginRight login' :'login'}`} 
                      // onAnimationEnd={() => this.setState({fade: false})}
                      >
                        <div className='signup-container'>
                            <form>
                                <label>
                                    <p>Full Name:</p>
                                    <input type='text' name='Name' />
                                    <div className='fake-line'></div>
                                </label>
                                <label>
                                    <p>Email Adress:</p>
                                    <input type='text' name='Email' />
                                    <div className='fake-line'></div>
                                </label>
                                <label>
                                    <p>Phone Number: - optional</p>
                                    <input type='tel' name='Phone'  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                                    <div className='fake-line'></div>
                                </label>
                                <label>
                                    <p>Password:</p>
                                    <input type='password' name='Password' />
                                    <div className='fake-line'></div>
                                </label>
                                <label>
                                    <p>confirm Password:</p>
                                    <input type='password' name='Password' />
                                    <div className='fake-line'></div>
                                </label>
                                <input className='signup-button' type="submit" value="Submit" />
                            </form>
                            {/* <h2>login</h2> */}
                            <button 
                                ref='button'
                                onClick={() => this.setState({moveLogin: true, moveSignup: false})}>
                            press</button>
                        </div>
                        
                    </div>
                </div>

                <LoginForm />
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