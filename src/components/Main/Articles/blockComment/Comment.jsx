import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;
const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 25px;
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 5px 0;
  color: black;
  font-family: Montserrat, serif;
`;
const SubtitleTime = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #515151;
`;

const Text = styled.p`
  width: 95%;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  margin: 0 0 40px 0;
  color: #000000;
  text-align: start;
  padding-left: 95px;
  box-sizing: border-box;
  font-family: Montserrat, serif;
`;

const Comment = ({ comment }) => {
  const { userName, userFoto, date, text } = comment;
  return (
    <Wrapper>
      <UserInfo>
        <Avatar src={userFoto} />
        <TitleWrap>
          <Title>{userName}</Title>
          <SubtitleTime>{date}</SubtitleTime>
        </TitleWrap>
      </UserInfo>
      <Text>{text}</Text>
    </Wrapper>
  );
};

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  userFoto: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
