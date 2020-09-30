import { combineReducers } from '@reduxjs/toolkit';
import { groupsReducer } from './groupSlice';
import { userReducer } from './userSlice';
import allAudiosReducer from './audios/allAudiosSlice';
import myAudiosReducer from './audios/myAudiosSlice';

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupsReducer,
  allAudiosReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
