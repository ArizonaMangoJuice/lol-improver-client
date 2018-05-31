import lolImproverUrl from '../config';
import {signedUp} from './auth';
import {SubmissionError} from 'redux-form';

export const registerUser = user => dispatch => {
    // console.log(user);
    return fetch(`${lolImproverUrl}/users`, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
        dispatch(signedUp());
    })
    .catch(err => {
        const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
    })
}

//still need to add error handling to forms add notes schema to backend