import lolImproverUrl from '../config';
import {signedUp} from './auth';

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
        console.log(err)
    })
}

//still need to add error handling to forms add notes schema to backend