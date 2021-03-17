import {
    SET_AUTH_TOKEN,
    AUTH_SUCCESS,
    AUTH_ERROR,
    CLEAR_AUTH, 
    SIGNED_UP,
    CLEAR_SIGN_UP
} from '../actions/auth';

const initialState = {
    authToken: null,
    currentUser: null,
    error: null,
    signedUp: null,
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_TOKEN: 
            return {
                ...state,
                authToken : action.authToken
            }
        case CLEAR_AUTH: 
            return {
                ...state,
                authToken: null,
                currentUser: null
            }
        case AUTH_SUCCESS: 
            return {
                ...state,
                currentUser: action.currentUser,
                signedUp: false,
                error: null
            }
        case AUTH_ERROR: 
            return {
                ...state,
                error: action.error
            }
        case SIGNED_UP: 
            return {
                ...state,
                signedUp: true
            }
        case CLEAR_SIGN_UP:
            return {
                ...state,
                signedUp:false
            }
        default: 
            return state
    }
}  

export default loginReducer;