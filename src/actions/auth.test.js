import React from 'react';
import {
    SET_AUTH_TOKEN, 
    setAuthToken,
    AUTH_SUCCESS,
    authSuccess,
    AUTH_ERROR,
    authError,
    CLEAR_AUTH,
    clearAuth,
    SIGNED_UP,
    signedUp,
    storeAuthInfo,
    login
} from './auth';
import lolImproverUrl from '../config';
import {mount} from 'enzyme';
import {LoginForm} from '../components/LoginForm';

describe('setAuthToken', () => {
    it('should return an action', () => {
        const authToken = 'token';
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('authSuccess', () => {
    it('should return an action', () => {
        const currentUser = 'user';
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
    });
})

describe('authError', () => {
    it('should return an action', () => {
        const error = 'error';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    });
})

describe('clearAuth', () => {
    it('should return an action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    });
})

describe('signedUp', () => {
    it('should return an action', () => {
        const action = signedUp();
        expect(action.type).toEqual(SIGNED_UP);
    });
})
