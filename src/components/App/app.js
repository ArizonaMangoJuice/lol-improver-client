import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Dashboard from '../Dashboard';
import LandingPage from '../LandingPage';
import Header from '../Header';
import RegisterPage from '../RegisterPage';

export class App extends React.Component{
    componentDidMount(){   
        
    }

    render(){
        
        return (
            <div className='main-body'>
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