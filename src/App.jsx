import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/LoginPage/loginPage';
import Messages from './components/Messages';
import Main from './components/Main';
import Audio from './components/Audio';
import Friends from './components/Friends';
import VideoPage from './components/VideoPage';
import News from './components/News';
import routes from './routes';
import Bookmarks from './components/Bookmarks';
import Photo from './components/Photo/Photo';
import Group from './components/Group';

const App = () => (
  <Switch>
    <Route path={routes.main} component={Main} exact />
    <Route path={routes.login} component={Login} />
    <Route path={routes.audio} component={Audio} />
    <Route path={routes.friends} component={Friends} />
    <Route path={routes.news} component={News} />
    <Route path={routes.video} component={VideoPage} />
    <Route path={routes.messages} component={Messages} />
    <Route path={routes.bookmarks} component={Bookmarks} />
    <Route path={routes.photo} component={Photo} />
    <Route path={routes.group} component={Group} />
  </Switch>
);

export default App;
