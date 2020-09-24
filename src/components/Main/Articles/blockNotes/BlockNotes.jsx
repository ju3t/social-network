import React, { useState } from 'react';
import Note from './Note';
import userFoto from './userFoto.png';
import userFotoComment1 from '../blockComment/userFotoComment1.png';

import { Wrapper, MenuWrapper, Menu, MenuItem, ComponentSearch, InputSearch } from './styles';

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
      'Nulla in metus dictum, dapibus ' +
      'justo sit amet, tristique purus. ' +
      'Pellentesque blandit nibh at leo ' +
      'venenatis, in semper ipsum dictum. ' +
      'Nulla porttitor ligula quam, quis ' +
      'auctor felis consectetur non. Praesent ' +
      'at auctor metus. Etiam molestie ' +
      'tincidunt justo eget laoreet. Quisque ' +
      'vestibulum pretium tortor in mattis. ' +
      'Nullam nec elit vitae tellus interdum vehicula. ' +
      'Orci varius natoque penatibus et ' +
      'magnis dis parturient montes, nascetur ridiculus mus. ' +
      'Praesent congue arcu at accumsan ' +
      'luctus. Nam sed diam nibh. In at lectus sodales, ' +
      'interdum turpis at, semper nisl.',
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

  const renderSearch = () =>
    isOpenSearch ? (
      <InputSearch placeholder="Поиск..." onBlur={() => setIsOpenSearch(!isOpenSearch)} />
    ) : (
      <ComponentSearch onClick={() => setIsOpenSearch(!isOpenSearch)} />
    );

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
