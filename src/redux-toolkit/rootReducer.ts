import { combineReducers } from '@reduxjs/toolkit';
import groupsReducer from './sliceGroup';

const rootReducer = combineReducers({ groupsReducer });

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
