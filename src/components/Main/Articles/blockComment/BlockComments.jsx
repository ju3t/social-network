import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Comment from './Comment';
import ComponentInput from './ComponentInput';

const Wrapper = styled.div`
  width: 79%;
  padding: 40px 0 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 100;
  background: white;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 160.9%;
  color: #515151;
  margin: 0 0 40px 0;
  font-family: Montserrat, serif;
`;

const BlockComments = ({ comments }) => {
  if (!comments) return null;

  return (
    <Wrapper>
      <Title>Комментарии</Title>
      {comments.map((item) => (
        <Comment key={item.id} comment={item} />
      ))}
      <ComponentInput />
    </Wrapper>
  );
};

BlockComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlockComments;
