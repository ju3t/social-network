import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions'
import * as actions from '../actions/actions'

const reducer1 = () => 1;
const reducer2 = () => 2;

const audiosReducer = handleActions({
  [actions.fetchGetAllAudiosSuccess](state, { payload }) {
    console.log('state audiosReducer', state);
    console.log('payload audiosReducer', payload);
    return payload
  }
}, {})


export default combineReducers({ reducer1, reducer2, audiosReducer });
