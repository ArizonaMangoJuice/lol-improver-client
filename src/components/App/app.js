import React from 'react';
import {connect} from 'react-redux';
// import { withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import LandingPage from '../LandingPage';
import Header from '../Header';
// import Footer from '../Footer';
// import RegisterPage from '../RegisterPage';

export class App extends React.Component{
    render(){
        
        return (
            <section className='main-body'>
                {/* <Header /> */}
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/dashboard' component={Dashboard} />
                {/* <Dashboard /> */}
                {/* <Route exact path='/register' component={RegisterPage}/> */}
                {/* <Footer /> */}
            </section>
        );
    }
}

// export default withRouter(connect()(App));
export default connect()(App);
