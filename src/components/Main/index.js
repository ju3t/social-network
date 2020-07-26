import React from 'react';

import Header from '../../common/header';
import LeftBlock from '../../common/leftBlock';
import RightBlock from '../../common/rightBlock';
import { MainContainer } from '../../common/styledComponents';

function Main() {
  return (
    <>
      <Header />
      <MainContainer>
        <LeftBlock />
        <RightBlock />
      </MainContainer>
    </>
  );
}

export default Main;
