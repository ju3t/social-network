import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Messages from './components/Messages';

const App = () => (
  <Switch>
    <Route path="/social-network" component={Login} />
    <Route path="/messages" component={Messages} />
  </Switch>
);

export default App;
