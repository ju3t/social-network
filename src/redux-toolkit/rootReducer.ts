import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { postsReducer } from './postsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
