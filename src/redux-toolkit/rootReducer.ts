import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import allAudiosReducer from './audios/allAudiosSlice';
import myAudiosReducer from './audios/myAudiosSlice';
import { frendsReducer } from './frendsListSlice';

const rootReducer = combineReducers({
  user: userReducer,
  allAudiosReducer,
  frendList: frendsReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
