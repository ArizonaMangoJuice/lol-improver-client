import championReducer from './championReducer';

import {
    championFetchError,
    championFetchSuccess,
    championIsClicked,
    searchChampion,
    updateChampionNote,
    clearChampionClickedSearched
} from '../actions/champions';

describe('championReducer', () => {
    //dummy data
    it('should return the initial state when nothing is passed in', () => {
        const state = championReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            loading: false,
            champions: [],
            filteredChampions: [],
            note: '',
            error: null,
            championId: null,
        });
    });

    it('should return the current state on an unkown action', () => {
        const currentState = {};
        const state = championReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('searchChampion', () => {
        it('should search for a champion', () => {
            let value = 'test';

            let state = {
                champions: [{name:'test'}],
                filteredChampions: [],
            };

            state = championReducer(state, searchChampion(value));
            expect(state).toEqual({
                 champions: [ { name: 'test' } ],
                 filteredChampions: [ { name: 'test' } ] 
            })
        });
    })

    describe('championSuccess', () => {
        it('should add the champions to the state', () => {
            let champs = [{name:'test'},{name:'test2'}, {name:'test3'}];

            let state = {
                champions: [],
                loading: false,
                error: null 
            }

            state = championReducer(state, championFetchSuccess(champs));

            expect(state).toEqual({
                champions: [ { name: 'test' }, { name: 'test2' }, { name: 'test3' } ],
                loading: false,
                error: null 
            });

        })
    });

    describe('championError', () => {
        it('should add the error to the state', () => {
            let error = 'error';
            
            let state = {
                error: null
            }

            state = championReducer(state, championFetchError(error));
            expect(state).toEqual({
                error: 'error', 
                loading: false 
            })
        });
    });

    describe('championIsClicked', () => {
        let id = '13';
        let champions = [
            {
                id: '13',
                name:'test',
                content: 'test'
            },
            {
                id: '14',
                name:'test2',
                content: 'test2'
            }, 
            {
                id: '15',
                name:'test3',
                content: 'test3'
            }]
        let state = {
            champions,
            note: null,
            championId: null
        }

        state = championReducer(state, championIsClicked(id));
        expect(state).toEqual(
            { champions:
                [ { id: '13', name: 'test', content: 'test' },
                  { id: '14', name: 'test2', content: 'test2' },
                  { id: '15', name: 'test3', content: 'test3' } ],
               note: 'test',
               championId: '13' }
        )
    });

    describe('clearChampionClickedSearched', () => {
        it('should clear the champId and note from the state', () => {
            let state = {
               note: 'test',
               championId: '13'
            }

            state = championReducer(state, clearChampionClickedSearched());
            expect(state).toEqual({
                note: '', 
                championId: null, 
                filteredChampions: []
            })
         });
    });

    describe('upateChampion', () => {
        it('should update the champion note with the new value', () => {
            let value = 'hey dj';

            let state = {
                note: 'hey'
            };

            state = championReducer(state, updateChampionNote(value));
            expect(state).toEqual({
                note: 'hey dj'
            });
        })
    })

});