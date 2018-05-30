import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {loadToken} from './localStorage';
import {setAuthToken, authSuccess} from './actions/auth';
import jwtDecode from 'jwt-decode';

const store = createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
,compose(applyMiddleware(thunk)));

const authToken = loadToken();

if(authToken){
    const token = authToken;
    const decodedToken = jwtDecode(token);
    store.dispatch(setAuthToken(token));
    store.dispatch(authSuccess(decodedToken.user));
}

export default store;