import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slider from '../../common/slider';

const Container = styled.div`
  position: relative;
  width: 1380px;
  margin-left: -70px;
`;

const PhotoSlider = ({ ...props }) => (
  <Container>
    <Slider {...props} />
  </Container>
);

export default PhotoSlider;

PhotoSlider.defaultProps = {
  headline: '',
};

PhotoSlider.propTypes = {
  headline: PropTypes.string,
};
