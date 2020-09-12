import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './redux/reducers';
import * as serviceWorker from './serviceWorker';
import App from './App.jsx';
import store from './redux-toolkit/store';

// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const render = () => {
  const App = require('./app/App').default

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
