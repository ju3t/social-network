import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import PhotoAlbumsItem from '../PhotoAlbumsItem/PhotoAlbumsItem';

import data from './data';

const Headline = styled.h2`
  margin: 0;
`;

const Container = styled.div`
  /* background-color: gray; */
  border: 2px solid yellow;
  margin: 0 50px;
  height: 500px;
`;

const Arrow = styled.button`
  position: absolute;
  display: block;
  background: transparent;
  width: 20px;
  height: 20px;
  right: -35px;
  left: ${(props) => (props.reverse ? '-35px' : 'auto')};
  top: calc(50% - 10px);
  border: 4px solid #515151;
  border-top: none;
  border-left: none;
  transform: ${(props) => (props.reverse ? 'rotate(135deg)' : 'rotate(-45deg)')};
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const NextArrow = (props) => {
  const { onClick } = props;
  return <Arrow onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <Arrow onClick={onClick} reverse />;
};

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const sliderItems = data.map((item) => PhotoAlbumsItem(item));

const PhotoSlider = ({ headline }) => (
  <Container>
    <Headline>{headline}</Headline>
    <Carousel {...settings}>{sliderItems}</Carousel>
  </Container>
);

export default PhotoSlider;

PhotoSlider.defaultProps = {
  headline: '',
};

PhotoSlider.propTypes = {
  headline: PropTypes.string,
};

NextArrow.defaultProps = {
  // className: '',
};

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
