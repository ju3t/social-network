import React from 'react';
import { usePalette } from 'react-palette';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ image }) => {
  const { data } = usePalette(image);
  return <Img src={image} alt="cover" data={data} />;
};

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

const Img = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  width: 800px;
  height: 400px;
  object-fit: contain;
  object-position: left;
  background: #808080;
  background: ${(props) => `linear-gradient(205deg, ${props.data.lightMuted} 0, ${props.data.darkMuted} 100%)`};
`;
