import React from 'react';
import { storiesOf } from '@storybook/react';

import { МодальныйЧат } from './modal-chat/index.stories';
import Login from '../components/LoginPage/loginPage';
import BlockComments from '../components/Main/Articles/blockComment/BlockComments';
import BlockNotes from '../components/Main/Articles/blockNotes/BlockNotes';
import UserInfoHeader from '../components/Main/UserInfoHeader';
import Wall from '../components/Main/Wall';
import WallCreateArticle from '../components/Main/WallCreateArticle';

storiesOf('Social network', module)
  .add('МодальныйЧат', () => <МодальныйЧат />)
  .add('Страница авторизации', () => <Login />)
  .add('Блок комментариев', () => <BlockComments />)
  .add('Блок записей', () => <BlockNotes />)
  .add('Аватар', () => <UserInfoHeader />)
  .add('Стена', () => <Wall />)
  .add('Создание записи на стене', () => <WallCreateArticle />);
