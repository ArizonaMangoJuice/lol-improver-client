import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Dashboard from '../Dashboard';
import LandingPage from '../LandingPage';
import Header from '../Header';
import Footer from '../Footer';
import RegisterPage from '../RegisterPage';

export class App extends React.Component{
    render(){
        
        return (
            <main className='main-body'>
                <Header />
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/register' component={RegisterPage}/>
                <Footer />
            </main>
        );
    }
}

export default withRouter(connect()(App));