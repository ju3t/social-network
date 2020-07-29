import React from 'react';

import Header from '../../common/header';
import LeftBlock from '../../common/leftBlock';
import RightBlock from '../../common/rightBlock';
import { MainContainer } from '../../common/styledComponents';
import BookMarksPage from './components';

function Bookmarks() {
  return (
    <>
      <Header />
      <MainContainer>
        <LeftBlock />
        <RightBlock>
          <BookMarksPage />
        </RightBlock>
      </MainContainer>
    </>
  );
}

export default Bookmarks;
