import { combineReducers } from '@reduxjs/toolkit';
import allAudiosSlice from './allAudiosSlice';

const rootReducer = combineReducers({
  allAudiosSlice,
});

console.log('rootReducer', rootReducer);

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
