import React from 'react';
import './App.css';
import Login from './components/LoginPage/loginPage';
import Friends from './components/Friends'
import {Switch, Route, BrowserRouter as Router,} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path='/social-network' component={Login} />
          <Route path='/friends' component={Friends} />
      </Switch>
    </Router>
  );
}

export default App;