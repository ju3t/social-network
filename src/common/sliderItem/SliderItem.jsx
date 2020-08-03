import React from 'react';
import styled from 'styled-components';
import __ from 'lodash';

const Container = styled.div`
  position: relative;
  max-width: 326px;
`;

const Headline = styled.h2`
  display: inline-block;
  padding: 20px 0;
`;

const Link = styled.a`
  display: block;
  box-sizing: border-box;
  margin: 0;
  border-radius: 5px;
`;

const Cover = styled.img`
  display: block;
  src: url(${(props) => props.src});
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

const SliderItem = (item) => (
  <Container key={__.uniqueId()}>
    <Link href={item.link}>
      <Cover src={item.image} />
    </Link>
    <Headline>{item.headline}</Headline>
  </Container>
);

export default SliderItem;
