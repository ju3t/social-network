import React, { useState } from 'react';
import styled from 'styled-components';

import searchLogo from '../icons/search-logo.svg';
import Note from './Note';
import userFoto from './userFoto.png';
import userFotoComment1 from '../blockComment/userFotoComment1.png';

const Wrapper = styled.div`
  border-bottom: 1px solid #515151;
  margin-left: 106px;
  max-width: 83.6%;
  font-family: Montserrat, serif;
  font-style: normal;
`;
export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  border-bottom: 1px solid #515151;
`;
export const Menu = styled.ul`
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

export const MenuItem = styled.li`
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
export const ComponentSearch = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${searchLogo});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const InputSearch = styled.input`
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
const TextOne = `Dolor sit amet, consectetur adipiscing elit. Maecenas sed congue urna. Etiam in pretium
orci. Nunc id nulla sit amet ex lacinia euismod a eu risus. Sed consequat viverra libero
congue vestibulum. Ut dolor odio, posuere vitae accumsan a, placerat ut odio. Proin in lorem
dui. Maecenas viverra convallis nisi eget tincidunt. Vivamus nec tempus nunc, sit amet
auctor massa. Morbi lobortis, elit eu malesuada malesuada, quam mauris semper turpis, vitae
dapibus erat nibh at purus. Ut id odio massa.
Nulla in metus dictum, dapibus justo sit amet, tristique purus. Pellentesque blandit nibh at
leo venenatis, in semper ipsum dictum. Nulla porttitor ligula quam, quis auctor felis
consectetur non. Praesent at auctor metus. Etiam molestie tincidunt justo eget laoreet.
Quisque vestibulum pretium tortor in mattis. Nullam nec elit vitae tellus interdum vehicula.
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Praesent congue arcu at accumsan luctus. Nam sed diam nibh. In at lectus sodales, interdum
turpis at, semper nisl.`;

const arrayComments = [
  {
    id: 0,
    userName: 'Стефан Багдасар',
    userFoto: userFotoComment1,
    date: '07.07.2020 в 00:11',
    text:
      'Nulla in metus dictum, dapibus '
      + 'justo sit amet, tristique purus. '
      + 'Pellentesque blandit nibh at leo '
      + 'venenatis, in semper ipsum dictum. '
      + 'Nulla porttitor ligula quam, quis '
      + 'auctor felis consectetur non. Praesent '
      + 'at auctor metus. Etiam molestie '
      + 'tincidunt justo eget laoreet. Quisque '
      + 'vestibulum pretium tortor in mattis. '
      + 'Nullam nec elit vitae tellus interdum vehicula. '
      + 'Orci varius natoque penatibus et '
      + 'magnis dis parturient montes, nascetur ridiculus mus. '
      + 'Praesent congue arcu at accumsan '
      + 'luctus. Nam sed diam nibh. In at lectus sodales, '
      + 'interdum turpis at, semper nisl.',
  },
];

const users = {
  users: {
    first_name: 'Богдан',
    last_name: 'Леста',
    avatarka: userFoto,
    posts: [
      {
        title: 'Lorem ipsum',
        text: TextOne + TextOne,
        persist_date: '07.07.2020 в 00:07',
        bookmarks_count: '7',
        repost_count: '4',
        likes_count: '15',
        comments_count: '1',
        tags: [
          { id: 0, tag: '#nunc' },
          { id: 1, tag: '#dolor' },
        ],
        comments: arrayComments,
      },
    ],
  },
};

const BlockNotes = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const renderSearch = () => (isOpenSearch ? (
    <InputSearch placeholder="Поиск..." />
  ) : (
    <ComponentSearch onClick={() => setIsOpenSearch(!isOpenSearch)} />
  ));

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
      <Note users={users} />
    </Wrapper>
  );
};
export default BlockNotes;
