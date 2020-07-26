import React from 'react';

import { RightBlockContainer } from '../styledComponents';
import UserInfoHeader from '../../components/Main/UserInfoHeader';
import Wall from '../../components/Main/Wall';

const RightBlock = () => (
  <RightBlockContainer>
    <UserInfoHeader />
    <Wall />
  </RightBlockContainer>
);

export default RightBlock;
