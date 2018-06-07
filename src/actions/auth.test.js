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

describe('login', () => {
    it('should dispatch storeAuthInfo', () => {
        const authToken = {
            authToken : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaXNhZWxsaXphbWEiLCJwYXNzd29yZCI6IiQyYSQxMCRhVGhlUkExdFBYaUpCQmw4aWVjZExPSWMzeFJUTXkzL0RaR3AwRDcyZGZDTlN1QlFSZ25ZYSIsImNyZWF0ZWRBdCI6IjIwMTgtMDYtMDRUMTQ6MDI6MjEuMDU0WiIsInVwZGF0ZWRBdCI6IjIwMTgtMDYtMDRUMTQ6MDI6MjEuMDU0WiIsImlkIjoiNWIxNTQ2NmQ0YTdmOGEyNDExYTE3OGRiIn0sImlhdCI6MTUyODM0MTk0NywiZXhwIjoxNTI4OTQ2NzQ3LCJzdWIiOiJpc2FlbGxpemFtYSJ9.CpI224ccVLn-1fcW_q5nSKimswpwvdDIf_l225tueig'
        }
        const username = 'user';
        const password = 'password';
        
        global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok:true,
                json(){
                    return authToken
                }
            })
        );

        const dispatch = jest.fn();
        return login()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${lolImproverUrl}/login`);
        })
    });
});