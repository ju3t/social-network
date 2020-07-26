import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Groups from './components/Groups';

const App = () => (
  <Switch>
    <Route path="/social-network" component={Login} />
    <Route path="/groups" component={Groups} />
  </Switch>
);

export default App;
