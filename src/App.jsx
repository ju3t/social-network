import React from 'react';
import './App.css';
import Login from './components/LoginPage/loginPage';
import Messages from './components/Messages';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
        <Route path='/social-network' component={Login} />
        <Route path='/messages' component={Messages} />
    </Switch>
  );
}

export default App;
