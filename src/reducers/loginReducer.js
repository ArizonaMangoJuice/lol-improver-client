import {
    SET_AUTH_TOKEN,
    AUTH_SUCCESS,
    AUTH_ERROR,
    CLEAR_AUTH,
    SIGNED_UP_USER,
    CLEAR_SIGNED_UP_USER,
    LOADING,
    STOP_LOADING,
} from '../actions/auth';

const initialState = {
    authToken: null,
    currentUser: null,
    error: null,
    signedUpUser: null,
    loading: false,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.authToken
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
        case SIGNED_UP_USER:
            return {
                ...state,
                signedUp: action.user
            }
        case CLEAR_SIGNED_UP_USER:
            return {
                ...state,
                signedUpUser: null
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default loginReducer;