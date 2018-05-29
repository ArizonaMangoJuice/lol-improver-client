import lolImproverUrl from '../config';

export const CHAMPION_FETCH_REQUEST = 'CHAMPION_FETCH_REQUEST';
const championFetchRequest = () => ({
    type: CHAMPION_FETCH_REQUEST
});

export const CHAMPION_FETCH_SUCCESS = 'CHAMPION_FETCH_SUCCESS';
const championFetchSuccess = champions => ({
    type: CHAMPION_FETCH_SUCCESS,
    champions
})

export const CHAMPION_FETCH_ERROR = 'CHAMPION_FETCH_ERROR';
const championFetchError = error => ({
    type: CHAMPION_FETCH_ERROR,
    error
})

export const CHAMPION_IS_CLICKED = 'CHAMPION_IS_CLICKED';
export const championIsClicked = id => ({
    type: CHAMPION_IS_CLICKED,
    id
});

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