import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { TypeRootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

// console.log('store', store);

const newRootReducer = require('./rootReducer').default;

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(newRootReducer);
  });
}

export type TypeDispatch = typeof store.dispatch;
export type TypeThunkAction = ThunkAction<void, TypeRootReducer, null, Action<string>>;

export default store;
