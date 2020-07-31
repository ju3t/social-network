/* eslint-disable import/prefer-default-export */
import React from 'react';
import ContentBoxSt from '../common/contentBox/ContentBox';

export default { title: 'Box' };

export const ContentBox = () => (
  <ContentBoxSt headline="Заголовок">Содержимое контейнера</ContentBoxSt>
);
