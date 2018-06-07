import {
    FETCH_PLAYER,
    searchPlayer,
    FETCH_MATCHES,
    fetchMatches,
    MATCHES_ERROR,
    matchesError,
    FETCH_STATIC_NAME,
    fetchStaticName,
    CLEAR_PLAYER,
    clearPlayer
} from './playerInfo';

describe('fetchPlayer', () => {
    it('should return an action', () => {
        const accountInfo = '321312';
        const action =  searchPlayer(accountInfo);
        expect(action.type).toEqual(FETCH_PLAYER);
        expect(action.accountInfo).toEqual(accountInfo);
    });
});

describe('fetchMatches', () => {
    it('should return an action', () => {
        const matches = ['321312', '232137821'];
        const action =  fetchMatches(matches);
        expect(action.type).toEqual(FETCH_MATCHES);
        expect(action.matches).toEqual(matches);
    });
});

describe('matchesErrpr', () => {
    it('should return an action', () => {
        const error = 'error';
        const action =  matchesError(error);
        expect(action.type).toEqual(MATCHES_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('fetchStaticName', () => {
    it('should return an action', () => {
        const championInfo = 'info';
        const action =  fetchStaticName(championInfo);
        expect(action.type).toEqual(FETCH_STATIC_NAME);
        expect(action.championInfo).toEqual(championInfo);
    });
});

describe('clearPlayer', () => {
    it('should return an action', () => {
        const action =  clearPlayer();
        expect(action.type).toEqual(CLEAR_PLAYER);
    });
});