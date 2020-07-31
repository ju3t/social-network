import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slider from '../../common/slider/Slider2';

const Container = styled.div`
  position: relative;
  border-bottom: 1px solid #000000;
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
