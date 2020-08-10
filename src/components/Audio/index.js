import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../../common/pageWrapper';
import Audio from './AudioPage';
import { Box } from '../../common/styledComponents';

const ContentBox = styled(Box)`
  margin-top: 200px;
  padding: 0;
`;

const AudioPage = () => (
  <PageWrapper>
    <ContentBox>
      <Audio />
    </ContentBox>
  </PageWrapper>
);

export default AudioPage;
