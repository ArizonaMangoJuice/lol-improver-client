import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Redirect} from 'react-router-dom';
import Dashboard from './dashboard';
import LandingPage from './landingPage';
import Header from './header';
import RegisterPage from './registerPage';

export class App extends React.Component{
    componentDidUpdate(prevProps){
        
    }

    render(){
        
        return (
            <div>
                <Header />
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/register' component={RegisterPage}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthtoken: state.loginReducer.authToken !== null,
    loggedIn: state.loginReducer.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));