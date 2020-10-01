import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import allAudiosReducer from './audios/allAudiosSlice';
import { postsReducer } from './postsSlice';
import chatReducer from './chatSlice';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  allAudiosReducer,
  chat: chatReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
