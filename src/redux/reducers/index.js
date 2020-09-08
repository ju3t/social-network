import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';
import { failed, finished, requested } from '../../constants/fetchState';

const myAudiosState = handleActions({
  [actions.fetchMyAudiosRequest]() {
    return requested;
  },
  [actions.fetchMyAudiosSuccess]() {
    return finished;
  },
  [actions.fetchMyAudiosFailure]() {
    return failed;
  },
}, '');


const allAudiosState = handleActions({
  [actions.fetchGetAllAudiosRequest]() {
    return requested;
  },
  [actions.fetchGetAllAudiosSuccess]() {
    return finished;
  },
  [actions.fetchGetAllAudiosFailure]() {
    return failed;
  },
}, '');



const allAudiosReducer = handleActions({
  [actions.fetchGetAllAudiosSuccess](state, { payload }) {
    console.log('state audiosReducer', state);
    console.log('payload audiosReducer', payload);
    return payload;
  },
}, []);

export default combineReducers({
  myAudiosState,
  allAudiosState,
  allAudiosReducer,
});
