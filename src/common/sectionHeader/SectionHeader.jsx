import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Headline = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  vertical-align: middle;
<<<<<<< HEAD
  color: #000;
=======
>>>>>>> development
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
<<<<<<< HEAD
  align-items: center;
  height: 67px;
  margin: 65px 0;
=======
  height: 67px;
  margin: 50px 0;
>>>>>>> development
`;

const SectionHeader = ({ headline, children }) => (
  <Container>
    <Headline>{headline}</Headline>
    {children || null}
  </Container>
);

export default SectionHeader;

SectionHeader.defaultProps = {
  headline: '',
  children: [],
};

SectionHeader.propTypes = {
  headline: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array,
};
