import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import __ from 'lodash';
import Slider from 'react-slick';
import arrowIcon from '../img/icons/arr_left.svg';
import 'slick-carousel/slick/slick.css';

import 'swiper/swiper.scss';

const Container = styled.div`
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  width: 15px;
  height: 25px;
  background-color: #515151;
  mask-image: url(${arrowIcon});
  transform: ${(props) => (props.reverseArrow ? '' : 'rotate(180deg)')};
  top: 158px;
  left: ${(props) => (props.reverseArrow ? '-40px' : 'auto')};
  right: ${(props) => (props.reverseArrow ? 'auto' : '-40px')};
  &:hover {
    cursor: pointer;
  }
`;

const Slide = styled.div`
  margin-left: ${(props) => `${props.spaceBetween / 2}px`};
  margin-right: ${(props) => `${props.spaceBetween / 2}px`};
  width: auto !important;
`;

const SliderComp = ({ children, spaceBetween, ...props }) => {
  const slides = children.map((slide) => (
    <Slide spaceBetween={spaceBetween} key={__.uniqueId()}>
      {slide}
    </Slide>
  ));

  const settings = {
    ...props,
    nextArrow: <Arrow />,
    prevArrow: <Arrow reverseArrow />,
  };

  return (
    <Container>
      <Slider style={{ spaceBetween: `0 ${spaceBetween / 2}` }} {...settings}>
        {slides}
      </Slider>
    </Container>
  );
};

export default SliderComp;

SliderComp.defaultProps = {
  slidesPerView: 3,
  spaceBetween: 10,
  margin: 0,
};

SliderComp.propTypes = {
  slidesPerView: PropTypes.number,
  margin: PropTypes.number,
  spaceBetween: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};
