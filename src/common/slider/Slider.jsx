import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Swiper } from 'swiper/react';

import 'swiper/swiper.scss';

const Container = styled.div`
  position: relative;
  margin: 0 80px;
`;

const Arrow = styled.button`
  position: absolute;
  display: block;
  background: transparent;
  width: 20px;
  height: 20px;
  right: -40px;
  left: ${(props) => (props.reverseArrow ? '-40px' : 'auto')};
  top: calc(40% - 10px);
  border: 4px solid #515151;
  border-top: none;
  border-left: none;
  transform: ${(props) => (props.reverseArrow ? 'rotate(135deg)' : 'rotate(-45deg)')};
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const Slider = ({ children, ...props }) => {
  let newSwiper;

  const { slidesPerView, spaceBetween } = props;
  const settings = {
    slidesPerView,
    spaceBetween,
    onSwiper: (swiper) => {
      newSwiper = swiper;
    },
  };
  return (
    <Container>
      <Arrow onClick={() => newSwiper.slidePrev()} reverseArrow />
      <Swiper {...settings}>{children}</Swiper>
      <Arrow onClick={() => newSwiper.slideNext()} />
    </Container>
  );
};

export default Slider;

Slider.defaultProps = {
  slidesPerView: 3,
  spaceBetween: 10,
};

Slider.propTypes = {
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};
