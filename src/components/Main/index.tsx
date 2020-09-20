// eslint-disable-next-line
import * as React from 'react';

import Header from '../../common/header';
import PageWrapper from '../../common/pageWrapper';
import { MainContainer } from '../../common/styledComponents';
import UserInfoHeader from './UserInfoHeader';
import Wall from './Wall';

const Main: React.FunctionComponent<unknown> = () => (
  <>
    <Header />
    <MainContainer>
      <PageWrapper messages={false}>
        <UserInfoHeader />
        <Wall />
      </PageWrapper>
    </MainContainer>
  </>
);

export default Main;
