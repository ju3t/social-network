import { createAction } from 'redux-actions';
import {
  FETCH_GET_ALL_AUDIOS_FAILURE,
  FETCH_GET_ALL_AUDIOS_REQUEST,
  FETCH_GET_ALL_AUDIOS_SUCCESS,
  FETCH_GET_MY_AUDIOS_FAILURE,
  FETCH_GET_MY_AUDIOS_REQUEST,
  FETCH_GET_MY_AUDIOS_SUCCESS,
} from './actionTypes';
import { fetchAudiosAll, fetchMyAudios } from '../../services/allFetch';

export const fetchGetAllAudiosRequest = createAction(FETCH_GET_ALL_AUDIOS_REQUEST);
export const fetchGetAllAudiosSuccess = createAction(FETCH_GET_ALL_AUDIOS_SUCCESS);
export const fetchGetAllAudiosFailure = createAction(FETCH_GET_ALL_AUDIOS_FAILURE);

export const fetchMyAudiosRequest = createAction(FETCH_GET_MY_AUDIOS_REQUEST);
export const fetchMyAudiosSuccess = createAction(FETCH_GET_MY_AUDIOS_SUCCESS);
export const fetchMyAudiosFailure = createAction(FETCH_GET_MY_AUDIOS_FAILURE);

export const myAudiosAction = () => async (dispatch) => {
  dispatch(fetchMyAudiosRequest());
  try {
    const response = await fetchMyAudios();
    console.log('response myAudiosAction', response);
    dispatch(fetchMyAudiosSuccess(response.data));
  } catch (err) {
    dispatch(fetchMyAudiosFailure());
  }
};

export const allAudiosAction = () => async (dispatch) => {
  dispatch(fetchGetAllAudiosRequest());
  try {
    const response = await fetchAudiosAll();
    console.log('response', response);
    dispatch(fetchGetAllAudiosSuccess(response.data));
  } catch (err) {
    dispatch(fetchGetAllAudiosFailure());
  }
};
