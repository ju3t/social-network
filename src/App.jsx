import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Login from './components/LoginPage/loginPage';
import Main from './components/Main';

const App = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/social-network" component={Login} />
  </Switch>
);

export default App;
