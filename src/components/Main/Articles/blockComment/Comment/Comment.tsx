/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Avatar } from 'antd';
import { IComment } from '../BlockComments';

import {
  Wrapper,
  UserInfo,
  TitleWrap,
  Title,
  SubtitleTime,
  Text,
} from './styles.js';

interface Props {
  comment: IComment
}

const Comment: React.FC<Props> = ({ comment }) => {
  const {
    userName, userFoto, date, text,
  } = comment;

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

export default Comment;
