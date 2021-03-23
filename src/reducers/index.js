import {combineReducers} from 'redux';
import championReducer from './championReducer';
import playerReducer from './playerReducer';
import loginReducer from './loginReducer';
import notesReducer from './notes';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    championReducer,
    loginReducer,
    playerReducer,
    notesReducer,
    form: formReducer
});

export default rootReducer;
