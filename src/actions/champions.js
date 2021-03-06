import lolImproverUrl from '../config';

export const SEARCH_CHAMPION = 'SEARCH_CHAMPION';
export const searchChampion = (value) => ({
    type: SEARCH_CHAMPION,
    value
})

export const CHAMPION_FETCH_REQUEST = 'CHAMPION_FETCH_REQUEST';
export const championFetchRequest = () => ({
    type: CHAMPION_FETCH_REQUEST
});

export const CHAMPION_FETCH_SUCCESS = 'CHAMPION_FETCH_SUCCESS';
export const championFetchSuccess = champions => ({
    type: CHAMPION_FETCH_SUCCESS,
    champions
})

export const CHAMPION_FETCH_ERROR = 'CHAMPION_FETCH_ERROR';
export const championFetchError = error => ({
    type: CHAMPION_FETCH_ERROR,
    error
})

export const CHAMPION_IS_CLICKED = 'CHAMPION_IS_CLICKED';
export const championIsClicked = id => ({
    type: CHAMPION_IS_CLICKED,
    id
});

export const CLEAR_CHAMPION_CLICKED_SEARCHED = 'CLEAR_CHAMPION_CLICKED_SEARCHED';
export const clearChampionClickedSearched = () => ({
    type: CLEAR_CHAMPION_CLICKED_SEARCHED
});

export const UPDATE_CHAMPION_NOTE = 'UPDATE_CHAMPION_NOTE';
export const updateChampionNote = value => ({
    type: UPDATE_CHAMPION_NOTE,
    value
})

export const updateBackEndChampionNote = () => {
    return (dispatch, getState) => {
        const authToken = getState().loginReducer.authToken;
        const id = getState().loginReducer.currentUser._id;
        const championId = getState().championReducer.championId;
        const note = getState().championReducer.note;

        const body = {
            userId: id,
            id: championId,
            note
        }

        fetch(`${lolImproverUrl}/champions/${championId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(() => {
                dispatch(fetchChampions());
            })
    }
}

const fetchChampions = () => {
    return (dispatch, getState) => {
        const authToken = getState().loginReducer.authToken;
        dispatch(championFetchRequest);
        fetch(`${lolImproverUrl}/champions`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(response => response.json())
            .then(champions => dispatch(championFetchSuccess(champions)))
            .catch(error => dispatch(championFetchError(error)))
    }
}

export default fetchChampions;