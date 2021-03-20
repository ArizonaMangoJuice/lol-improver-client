import lolImproverUrl from '../config';
import { signedUp, authError, addUser, clearError } from './auth';
// import {SubmissionError} from 'redux-form';

//convert this to async so it could be more readable and manageable
// export const registeruser = async user => dispatch => {

// }

export const registerUser = user => dispatch => {
    dispatch(clearError());
    return fetch(`${lolImproverUrl}/api/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.status >= 401 && response.status < 600) {
                dispatch(authError('Username is taken or password is too short'));
            }
            return response.json();
        })
        .then((response) => {
            dispatch(addUser(user));
        })
        .catch(err => {
            let message = 'The username already exists';
            dispatch(authError(message));
        })
}

