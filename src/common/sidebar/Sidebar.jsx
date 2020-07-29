import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Wrapper, List } from '../styledComponents';

import Player from './Player';

const ItemLink = styled(Link)`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:hover {
    color: #ffb11b;
  }
`;

const Sidebar = () => (
  <Wrapper>
    <List>
      <ItemLink to="#">Моя страница</ItemLink>
      <ItemLink to="#">Друзья</ItemLink>
      <ItemLink to="#">Сообщения</ItemLink>
      <ItemLink to="#">Новости</ItemLink>
      <ItemLink to="#">Закладки</ItemLink>
      <ItemLink to="#">Группы</ItemLink>
      <ItemLink to="#">Фотографии</ItemLink>
      <ItemLink to="#">Видеозаписи</ItemLink>
      <ItemLink to="#">Аудиозаписи</ItemLink>
      <ItemLink to="#">Настройки</ItemLink>
    </List>
    <Player />
  </Wrapper>
);

export default Sidebar;
