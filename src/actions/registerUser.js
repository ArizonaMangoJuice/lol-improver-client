import lolImproverUrl from '../config';
import { signedUp, authError, addUser } from './auth';
// import {SubmissionError} from 'redux-form';

//convert this to async so it could be more readable and manageable
// export const registeruser = async user => dispatch => {

// }

export const registerUser = user => dispatch => {

    return fetch(`${lolImproverUrl}/api/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.status === 401) {
                dispatch(authError(response.json()));
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

