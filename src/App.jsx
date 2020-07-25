import React from 'react';
import './App.css';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Friends from './components/Friends';

const App = () => (
  <Router>
    <Switch>
      <Route path="/social-network" component={Login} />
      <Route path="/friends" component={Friends} />
    </Switch>
  </Router>
);

export default App;
