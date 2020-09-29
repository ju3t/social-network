import { combineReducers } from '@reduxjs/toolkit';
import { groupsReducer } from './groupSlice';
import { userReducer } from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupsReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
