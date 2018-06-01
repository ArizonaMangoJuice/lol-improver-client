import lolImproverUrl from '../config';
import {signedUp, authError} from './auth';
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
    .then(response => {
        console.log(response);
        if(response.status === 401){
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    })
    .then(response => {
        dispatch(signedUp());
    })
    .catch(err => {
        let {message} = err;
        const {reason} = err.error;

        dispatch(authError(err));

        if(reason !== 'ValidationError'){
            message = 'Unable to sign up, please try again later';
        }

        console.log(message);
        dispatch(authError(message));
        if(reason === 'ValidationError'){
            return Promise.reject(
                new SubmissionError({
                    _error: message
                })
            )
        }
    })
}

//still need to add error handling to forms add notes schema to backend