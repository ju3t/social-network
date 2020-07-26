import React, { useState } from 'react';
import styled from 'styled-components';

import searchLogo from '../icons/search-logo.svg';
import UserNote from './UserNote';
import Note from './Note';

const Wrapper = styled.div`
  border-bottom: 1px solid #515151;
  margin-left: 106px;
  max-width: 83.6%;
  font-family: Montserrat,serif;
  font-style: normal;
`;
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  border-bottom: 1px solid #515151;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin-bottom: 61px;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  color: black;
  &:not(:last-child) {
    margin-right: 60px;
  }

  &.active {
    border-bottom: 3px solid #ffb11b;
  }

  &:hover {
    color: #ffb11b;
  }
`;
const ComponentSearch = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${searchLogo});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const InputSearch = styled.input`
  width: 200px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #515151;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
  padding: 10px;
  box-sizing: border-box;
`;

const TagsList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 45px 0 55px 0;
`;
const TagItem = styled.li`
  list-style: none;
  font-size: 16px;
  color: black;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const arrayTags = [
  { id: 0, tag: '#nunc' },
  { id: 1, tag: '#dolor' },
];

const BlockNotes = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const renderSearch = () => {
    return isOpenSearch ? (
      <InputSearch placeholder="Поиск..." />
    ) : (
      <ComponentSearch onClick={() => setIsOpenSearch(!isOpenSearch)} />
    );
  };

  return (
    <Wrapper>
      <MenuWrapper>
        <Menu>
          <MenuItem className="active">Все</MenuItem>
          <MenuItem>Мои заметки</MenuItem>
          <MenuItem>Рекомендации</MenuItem>
        </Menu>
        {renderSearch()}
      </MenuWrapper>
      <UserNote />
      <Note />
      <TagsList>
        {arrayTags.map((item) => (
          <TagItem key={item.id}>{item.tag}</TagItem>
        ))}
      </TagsList>
    </Wrapper>
  );
};
export default BlockNotes;
