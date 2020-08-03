import React from 'react';

import Header from '../../common/header';
import LeftBlock from '../../common/leftBlock';
import RightBlock from '../../common/rightBlock';
import { MainContainer, WallContainer } from '../../common/styledComponents';
import Audio from './AudioPage';

const AudioPage = () => (
  <>
    <Header />
    <MainContainer>
      <LeftBlock />
      <RightBlock>
        <WallContainer>
          <Audio />
        </WallContainer>
      </RightBlock>
    </MainContainer>
  </>
);

export default AudioPage;
