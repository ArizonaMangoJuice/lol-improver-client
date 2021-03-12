import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
// import App from './components/App';
import Dashboard from './components/Dashboard';

ReactDOM.render(
    <Provider store={store}>
        {/* <Router> */}
            <Dashboard />
        {/* </Router> */}
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
