import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChampionInfo from './components/champion-info';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ChampionInfo />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
