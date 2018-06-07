import {
    SEARCH_CHAMPION,
    searchChampion,
    CHAMPION_FETCH_REQUEST,
    championFetchRequest,
    CHAMPION_FETCH_SUCCESS,
    championFetchSuccess,
    CHAMPION_FETCH_ERROR,
    championFetchError,
    CHAMPION_IS_CLICKED,
    championIsClicked,
    CLEAR_CHAMPION_CLICKED_SEARCHED,
    clearChampionClickedSearched,
    UPDATE_CHAMPION_NOTE,
    updateChampionNote
} from './champions';

describe('searchChampion', () => {
    it('should return an action', () => {
        const champion = 'olaf';
        const action = searchChampion(champion);
        expect(action.type).toEqual(SEARCH_CHAMPION);
        expect(action.value).toEqual(champion);
    });
});

describe('championFetchRequest', () => {
    it('should return an action', () => {
        const action = championFetchRequest();
        expect(action.type).toEqual(CHAMPION_FETCH_REQUEST);
    });
});

describe('championFetchSuccess', () => {
    it('should return an action', () => {
        const champions = ['olaf', 'aatrox'];
        const action =  championFetchSuccess(champions);
        expect(action.type).toEqual(CHAMPION_FETCH_SUCCESS);
        expect(action.champions).toEqual(champions);
    });
});

describe('championFetchError', () => {
    it('should return an action', () => {
        const error = 'error';
        const action =  championFetchError(error);
        expect(action.type).toEqual(CHAMPION_FETCH_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('championIsClicked', () => {
    it('should return an action', () => {
        const id = '321312';
        const action =  championIsClicked(id);
        expect(action.type).toEqual(CHAMPION_IS_CLICKED);
        expect(action.id).toEqual(id);
    });
});

describe('clearChampionClickedSearched', () => {
    it('should return an action', () => {
        const action = clearChampionClickedSearched();
        expect(action.type).toEqual(CLEAR_CHAMPION_CLICKED_SEARCHED);
    });
});

describe('updateChampionNote', () => {
    it('should return an action', () => {
        const value = '32dsadsa1312';
        const action =  updateChampionNote(value);
        expect(action.type).toEqual(UPDATE_CHAMPION_NOTE);
        expect(action.value).toEqual(value);
    });
});