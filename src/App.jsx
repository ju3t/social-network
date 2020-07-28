import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Login from './components/LoginPage/loginPage';
import Messages from './components/Messages';
import Main from './components/Main';
import Friends from './components/Friends';

const App = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/social-network" component={Login} />
    <Route path="/messages" component={Messages} />
    <Route path="/friends" component={Friends} />
  </Switch>
);

export default App;
