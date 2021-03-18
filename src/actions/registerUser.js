import lolImproverUrl from '../config';
import {signedUp, authError} from './auth';
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
        if(response.status === 401){
            //this will be sent to error state of sign up
            dispatch(authError(response.json()));
            // .then(err => Promise.reject(err));
            // return Promise.reject();
        }
        // dispatch(login({user.username, userpassword}))
        return response.json();
    })
    .then((response) => {
        // const [username, password] = user;
        // dispatch(login({username, password}))
        dispatch(signedUp());
    })
    .catch(err => {
        let message = 'The username already exists';
        dispatch(authError(message));
    })
}

