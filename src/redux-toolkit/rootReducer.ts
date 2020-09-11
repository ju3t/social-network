import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
