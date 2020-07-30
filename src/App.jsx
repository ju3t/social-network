import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Main from './components/Main';
import Friends from './components/Friends';
import VideoPage from './components/VideoPage/VideoPage';
import News from './components/News';
import routes from './routes';

const App = () => (
  <Switch>
    <Route path={routes.main} component={Main} exact />
    <Route path={routes.login} component={Login} />
    <Route path={routes.friends} component={Friends} />
    <Route path={routes.news} component={News} />
    <Route path={routes.video} component={VideoPage} />
  </Switch>
);

export default App;
