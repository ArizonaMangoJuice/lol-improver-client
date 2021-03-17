import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { withRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import lolImproverUrl from '../../config';
import Dashboard from '../Dashboard';
import LandingPage from '../LandingPage';
// import Header from '../Header';
// import Footer from '../Footer';
// import RegisterPage from '../RegisterPage';

export const App = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
         async function fetchTest() {
            let response = await fetch(`${lolImproverUrl}/api/static/test`);
            response = await response.json();
            setData(response)
        }

        fetchTest();
    }, [])

    if (data) console.log(data);
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

// export default withRouter(connect()(App));
export default App;
