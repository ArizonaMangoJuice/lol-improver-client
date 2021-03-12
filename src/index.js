import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        {/* <Router> */}
            <App />
        {/* </Router> */}
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
