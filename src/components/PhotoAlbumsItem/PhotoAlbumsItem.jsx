import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 50px;
  /* border: 2px solid red; */
  z-index: 20;
`;

const Headline = styled.h2`
  /* position: absolute; */
  /* bottom: -45px; */
  margin: 20px 0;
`;

const AlbumLink = styled.a`
  display: block;
  box-sizing: border-box;
  /* border: 1px solid #000000; */
  border-radius: 5px;
`;

const AlbumCover = styled.img`
  display: block;
  src: url(${(props) => props.src});
  height: 326px;
  width: 326px;
  border-radius: 5px;
`;

// const item = {
//   headline: 'Название альбома',
//   image: 'https://via.placeholder.com/326',
// };

const PhotoAlbumsItem = (item) => (
  <Container>
    <AlbumLink href={item.link}>
      <AlbumCover src={item.image} />
    </AlbumLink>
    <Headline>{item.headline}</Headline>
  </Container>
);

export default PhotoAlbumsItem;

// NextArrow.defaultProps = {
//   // className: '',
// };

// NextArrow.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
