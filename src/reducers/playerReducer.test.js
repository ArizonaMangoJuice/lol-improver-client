import {
    searchPlayer,
    fetchMatches,
    matchesError,
    fetchStaticChampName,
    clearPlayer
} from '../actions/playerInfo';

import playerReducer from './playerReducer';

describe('playerReducer', () => {
    it('should give the default object if action is not valid', () => {
        const state = playerReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
                matches: [],
                accountInfo: null,
                playerChampInfo: [],
                error: null 
            })
    });

    describe('searchPlayer', () => {
        it('add the player info to the state', () => {
            let  accountInfo =  'name';

            let state = {
                accountInfo: null,
                error: null
            }

            state = playerReducer(state, searchPlayer(accountInfo));
            expect(state).toEqual({
                accountInfo,
                error: null
            })
        });
    });

    describe('fetchMatches', () => {
        it('should place matches into the state', () => {
            let matches = [1,2,3,4];

            let state = {
                matches: [],
                error: null
            };

            state = playerReducer(state, fetchMatches(matches));
            expect(state).toEqual({
                matches,
                error: null
            });
        });
    });

    describe('matchesError', () => {
        it('should place the error to the state', () => {
            let error = 'error';
            
            let state = {
                error: null
            };

            state = playerReducer(state, matchesError(error));
            expect(state).toEqual({
                error
            });
        });
    });

    describe('fetchStaticName', () => {
        it('should set the champion the player played to the state', () => {
            let playerChampInfo = ['zac'];
            let championInfo = 'volibear';

            let state = {
                playerChampInfo
            };

            state = playerReducer(state, fetchStaticChampName(championInfo));
            expect(state).toEqual({
                playerChampInfo: ['zac', 'volibear']
            })
        });
    });

    describe('clearPlayer', () => {
        let state = {
            matches: [1,2,3,4],
            accountInfo: 'username',
            playerChampInfo: ['zac'],
            error: null
        };

        state = playerReducer(state, clearPlayer());
        expect(state).toEqual({
            matches: [],
            accountInfo: null,
            playerChampInfo: [],
            error: null
        })
    })
});