import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Login from './components/LoginPage/loginPage';
import Main from './components/Main';
import Friends from './components/Friends';
import VideoPage from './components/VideoPage/VideoPage';

const App = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/social-network" component={Login} />
    <Route path="/friends" component={Friends} />
    <Route path="/video" component={VideoPage} />
  </Switch>
);

export default App;
