/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';
import CommentsList from './CommentsList';

export default function Comments(props) {
  const { data } = props;
  return (
    <Container>
      <Heading>Комментарии</Heading>
      <CommentsList data={data} />
    </Container>
  );
}

const Container = styled.div`
  max-height: 400px;
  padding-left: 60px;
  margin-bottom: 5px;
  padding-right: 100px;
`;

const Heading = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #515151;
  height: 125px;
  line-height: 125px;
  text-align: left;
`;
