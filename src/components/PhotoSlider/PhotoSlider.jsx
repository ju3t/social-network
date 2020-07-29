import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slider from '../../common/slider/Slider';

const Headline = styled.h2`
  margin-left: 80px;
`;

const Container = styled.div`
  position: relative;
`;

const PhotoSlider = ({ ...props }) => (
  <Container>
    <Headline>Альбомы</Headline>
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
