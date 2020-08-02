import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Messages from './components/Messages';
import Main from './components/Main';
import Friends from './components/Friends';
import VideoPage from './components/VideoPage/VideoPage';
import News from './components/News';
import routes from './routes';
import Bookmarks from './components/Bookmarks';
import Photo from './components/Photo/Photo';

const App = () => (
  <Switch>
    <Route path={routes.main} component={Main} exact />
    <Route path={routes.login} component={Login} />
    <Route path={routes.friends} component={Friends} />
    <Route path={routes.news} component={News} />
    <Route path={routes.video} component={VideoPage} />
    <Route path={routes.messages} component={Messages} />
    <Route path={routes.bookmarks} component={Bookmarks} />
    <Route path={routes.photo} component={Photo} />
  </Switch>
);

export default App;
