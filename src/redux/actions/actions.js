import { createAction } from 'redux-actions';
import { FETCH_GET_ALL_AUDIOS_SUCCESS } from './actionTypes';
import { fetchAudiosAll } from '../../services/allFetch';


export const fetchGetAllAudiosSuccess = createAction(FETCH_GET_ALL_AUDIOS_SUCCESS);

export const audiosAction = () => async (dispatch) => {
  // const response = await fetchAudiosAll()
  // console.log('response', response);
  // dispatch(fetchGetAllAudiosSuccess(response.data))
};
