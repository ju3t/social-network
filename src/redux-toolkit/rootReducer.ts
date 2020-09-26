import { combineReducers } from '@reduxjs/toolkit';
import allAudiosReducer from './audios/allAudiosSlice';
import myAudiosReducer from './audios/myAudiosSlice';

const rootReducer = combineReducers({
  allAudiosReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
