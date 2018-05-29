import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {loadToken} from './localStorage';
import {setAuthToken} from './actions/auth';

const store = createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
,compose(applyMiddleware(thunk)));

const authToken = loadToken();
if(authToken){
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store;