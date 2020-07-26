import React from 'react';
import './App.css';
import Login from './components/LoginPage/loginPage';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
        <Route path='/social-network' component={Login} />
    </Switch>
  );
}

export default App;
