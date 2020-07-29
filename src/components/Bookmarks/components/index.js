import React, { useState } from 'react';
import { FriendsWrapper, PageMarker } from '../../Friends/Friends';
import {
  ComponentSearch,
  InputSearch,
  Menu,
  MenuItem,
  MenuWrapper,
} from '../../Main/Articles/blockNotes/BlockNotes';

const BookMarksPage = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const renderSearch = () =>
    isOpenSearch ? (
      <InputSearch placeholder="Поиск..." />
    ) : (
      <ComponentSearch onClick={() => setIsOpenSearch(!isOpenSearch)} />
    );
  return (
    <FriendsWrapper>
      <PageMarker>Закладки</PageMarker>
      <MenuWrapper>
        <Menu>
          <MenuItem className="active">Все</MenuItem>
          <MenuItem>Мои заметки</MenuItem>
          <MenuItem>Рекомендации</MenuItem>
        </Menu>
        {renderSearch()}
      </MenuWrapper>
    </FriendsWrapper>
  );
};

export default BookMarksPage;
