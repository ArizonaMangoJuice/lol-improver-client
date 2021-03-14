import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './index.css'
// import LoginForm from '../LoginForm'
// import { signUpAgain } from '../../actions/auth'
import Jumbotron from '../Jumbotron'
import TopCharts from '../TopCharts'
import NewLogin from '../NewLogin'
import { login } from '../../actions/auth'




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