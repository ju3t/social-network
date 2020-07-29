import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Login from './components/LoginPage/loginPage';
import Main from './components/Main';
import Friends from './components/Friends';
import Bookmarks from './components/Bookmarks';

const App = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/social-network" component={Login} />
    <Route path="/friends" component={Friends} />
    <Route path="/bookmarks" component={Bookmarks} />
  </Switch>
);

export default App;
