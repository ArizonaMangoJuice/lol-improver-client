import {combineReducers} from 'redux';
import championReducer from './championReducer';
import playerReducer from './playerReducer';
import loginReducer from './loginReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    championReducer,
    loginReducer,
    playerReducer,
    form: formReducer
});

export default rootReducer;
