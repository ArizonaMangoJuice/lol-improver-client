import {
    setAuthToken,
    authSuccess,
    authError,
    clearAuth,
    signedUp
} from '../actions/auth';

import loginReducer from './loginReducer';

describe('loginReducer', () => {
    it('should return the initial state when nothing is passed', () => {
        const state = loginReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            authToken: null,
            currentUser: null,
            error: null,
            signedUp: null
        })
    });

    describe('setAuthToken', () => {
        it('should set the auth token to the state', () => {
            const authToken = 'dsadsadas';

            let state = {
                authToken: null,
            }

            state = loginReducer(state, setAuthToken(authToken));

            expect(state).toEqual({
                authToken
            })
        })
    });

    describe('clearAuth', () => {
        it('should clear the auth token from the state', () => {
            let state = {
                authToken: 'dsadsadsadsa',
                currentUser: 'user'
            }

            state = loginReducer(state, clearAuth());
            expect(state).toEqual({
                authToken: null,
                currentUser: null
            });
        });
    });

    describe('authSuccess', () => {
        it('should add the user to the state', () => {
            let currentUser = 'user';

            let state = {
                currentUser: null,
                signedUp: false,
                error: null
            };

            state = loginReducer(state, authSuccess(currentUser));
            expect(state).toEqual({
                currentUser,
                signedUp: false,
                error: null
            })
        })
    });

    describe('authError', () => {
        it('should put the error in the state', () => {
            let error = 'error';

            let state = {
                error: null
            };

            state = loginReducer(state, authError(error));
            expect(state).toEqual({
                error
            });
        });
    });

    describe('signedUp', () => {
        it('should switch the signedUp value to true', () => {
            let state = {
                signedUp: false
            }

            state = loginReducer(state, signedUp());
            expect(state).toEqual({
                signedUp: true
            })
        });
    })
});