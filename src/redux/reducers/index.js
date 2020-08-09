import { combineReducers } from 'redux';

const reducer1 = () => 1;
const reducer2 = () => 2;

export default combineReducers({ reducer1, reducer2 });
