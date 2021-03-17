import jwtDecode from 'jwt-decode';
import lolImproverUrl from '../config';
import {SubmissionError} from 'redux-form';
import {saveToken} from '../localStorage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
})

export const SIGNED_UP = 'SIGNED_ UP';
export const signedUp = () => ({
    type: SIGNED_UP
});

export const CLEAR_SIGN_UP = 'CLEAR_SIGNED_ UP';
export const clearSignedUp = () => ({
    type: CLEAR_SIGN_UP
});

export const SIGN_UP_AGAIN = 'SIGN_UP_AGAIN';
export const signUpAgain = () => ({
    type: SIGN_UP_AGAIN
})

export const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveToken(authToken);
}

export const login = (username, password) => dispatch => {
    return (
        fetch(`${lolImproverUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': lolImproverUrl
            },
            body: JSON.stringify({
                username, 
                password
            })
        })
        .then(response => {
            if(response.status === 401){
                return response.json().then(err => Promise.reject(err))
            }
            return response.json();
        })
        .then(({authToken}) => {
            // console.log(authToken)
            storeAuthInfo(authToken, dispatch)
            clearSignedUp();
            // dispatch(fetchChampions(authToken))
        })
        .catch(err => {
            let {message} = err.error;
            // let message;
            //incorrect username or password on server side
            if(message === 'Unauthorized'){
                message = 'Invalid username or password';
            }else{
                message = 'Unable to login, please try again later';
            }

            dispatch(authError(err));
            
            return Promise.reject(
                new SubmissionError({
                    _error: message
                })
            )
        })
    )
}