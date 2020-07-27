import React from 'react';
import Friends from '../components/Friends';
import SingleFriend from '../components/Friends/SingleFriend';

export default { title: 'Friends Page' };
/* eslint-disable */
export const Magin_Page = () => <Friends />;
export const Single_Friend = () => (
  <SingleFriend
    key={1}
    firstname={'Имя'}
    lastname={'Фамилия'}
    profesion={'Профессия'}
    avatarka={'https://dummyimage.com/600x400/000/fff'}
  />
);

/* eslint-enable */
