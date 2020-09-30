import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import allAudiosReducer from './audios/allAudiosSlice';
import { postsReducer } from './postsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  allAudiosReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
