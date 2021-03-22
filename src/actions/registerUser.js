import lolImproverUrl from '../config';
import { authError, addUser, clearError, loading, stopLoading } from './auth';
// import {SubmissionError} from 'redux-form';

//convert this to async so it could be more readable and manageable
// export const registeruser = async user => dispatch => {
//use the thrown error object to show the message
// }

export const registerUser = user => dispatch => {
    dispatch(clearError());
    dispatch(loading());
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
                dispatch(stopLoading());
                throw new Error('The username already exists');
            }
            return response.json();
        })
        .then((response) => {

            setTimeout(() => {
                dispatch(stopLoading());
                return dispatch(addUser(user));
            }, 1500)

        })
        .catch(err => {
            let message = 'The username already exists';
            dispatch(authError(message));
        })
}

