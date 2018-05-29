import jwtDecode from 'jwt-decode';
import lolImproverUrl from '../config';
// import fetchChampions from './champions';
import {saveToken, clearToken} from '../localStorage';

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

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveToken(authToken);
}

export const login = (username, password) => dispatch => {
    return (
        fetch(`${lolImproverUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, 
                password
            })
        })
        .then(response => response.json())
        .then(({authToken}) => {
            storeAuthInfo(authToken, dispatch)
            // dispatch(fetchChampions(authToken))
        })
        .catch(err => {
            console.log(err);
        })
    )
}