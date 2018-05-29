import {combineReducers} from 'redux';
import championReducer from './championReducer';
import loginReducer from './loginReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    championReducer,
    loginReducer,
    form: formReducer
});

export default rootReducer;
