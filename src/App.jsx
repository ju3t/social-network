import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';

const App = () => (
  <Switch>
    <Route path="/social-network" component={Login} />
  </Switch>
);

export default App;
