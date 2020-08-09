import React from 'react';

import PageWrapper from '../../common/pageWrapper';
import UserInfoHeader from './UserInfoHeader';
import Wall from './Wall';

function Main() {
  return (
    <>
      <PageWrapper>
        <UserInfoHeader />
        <Wall />
      </PageWrapper>
    </>
  );
}

export default Main;
