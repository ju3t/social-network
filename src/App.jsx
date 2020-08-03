import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Main from './components/Main';
import Audio from './components/Audio';
import Friends from './components/Friends';
import News from './components/News';
import routes from './routes';

const App = () => (
  <Switch>
    <Route path={routes.main} component={Main} exact />
    <Route path={routes.login} component={Login} />
    <Route path={routes.audio} component={Audio} />
    <Route path={routes.friends} component={Friends} />
    <Route path={routes.news} component={News} />
  </Switch>
);

export default App;
