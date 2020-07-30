import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import LeftBlock from '../leftBlock';
import RightBlock from '../rightBlock';
import { MainContainer } from '../styledComponents';

const PageWrapper = ({ children }) => (
  <>
    <Header />
    <MainContainer>
      <LeftBlock />
      <RightBlock>{children}</RightBlock>
    </MainContainer>
  </>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
