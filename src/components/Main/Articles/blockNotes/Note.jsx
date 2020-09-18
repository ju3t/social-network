import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Avatar } from 'antd';
import openNote from '../icons/open_note.svg';
import closeNote from '../icons/close_note.svg';
import actionAddNone from '../icons/action_addNote.svg';
import actionLike from '../icons/action_like.svg';
import actionComment from '../icons/action_comment.svg';
import actionRepost from '../icons/action_repost.svg';
import BlockComments from '../blockComment/BlockComments/BlockComments';

const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #515151;
`;

const WrapperNote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const UserInfo = styled.div`
  display: flex;
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
`;
const SubtitleTime = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #515151;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
`;
const UserAction = styled.button`
  width: 30px;
  height: 30px;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 45px;
  }
`;

const ActionAddNote = styled(UserAction)`
  background-image: url(${actionAddNone});
`;
const ActionLike = styled(UserAction)`
  background-image: url(${actionLike});
`;
const ActionComment = styled(UserAction)`
  background-image: url(${actionComment});
`;
const ActionRepost = styled(UserAction)`
  background-image: url(${actionRepost});
`;

const CountAction = styled.span`
  margin-left: 10px;
  font-size: 18px;
  line-height: 160.9%;
  color: black;
`;

const TitleText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 160.9%;
  margin: 0 0 10px 0;
  color: #000000;
  text-align: start;
`;
const Text = styled.div`
  width: 95%;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  margin: 0 0 40px 0;
  color: #000000;
  text-align: start;
  height: auto;
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '100px')};
  //transition: 1s;
  overflow: hidden;
`;

const BtnOpenNote = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: #ffb11b;
  background-image: ${({ isOpen }) => (isOpen ? `url(${closeNote})` : `url(${openNote})`)};
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 50px;
  right: 0;

  &:focus {
    outline: none;
  }
`;

const TagsList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  margin: 45px 0 55px 0;
`;
const TagItem = styled.li`
  list-style: none;
  font-size: 16px;
  color: black;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Note = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(true);
  // const minHeight = '100px';
  // const fullHeight = '100%';
  const {
    first_name: firstName, last_name: lastName, avatarka, posts,
  } = users.users;
  const {
    title,
    text,
    persist_date: persistDate,
    bookmarks_count: bookmarksCount,
    repost_count: repostCount,
    tags,
    likes_count: likesCount,
    comments_count: commentsCount,
    comments,
  } = posts[0];
  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <WrapperNote>
        <UserInfo>
          <Avatar src={avatarka} />
          <TitleWrap>
            <Title>{fullName}</Title>
            <SubtitleTime>{persistDate}</SubtitleTime>
          </TitleWrap>
        </UserInfo>
        <UserActions>
          <Action>
            <ActionAddNote />
            <CountAction>{bookmarksCount}</CountAction>
          </Action>
          <Action>
            <ActionLike />
            <CountAction>{likesCount}</CountAction>
          </Action>
          <Action>
            <ActionComment onClick={() => setIsCommentsOpen(true)} />
            <CountAction>{commentsCount}</CountAction>
          </Action>
          <Action>
            <ActionRepost />
            <CountAction>{repostCount}</CountAction>
          </Action>
        </UserActions>
      </WrapperNote>
      <Wrapper>
        <TitleText>{title}</TitleText>
        <Text isOpen={isOpen}>{text}</Text>
        <BtnOpenNote
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <TagsList>
          {tags.map((item) => (
            <TagItem key={item.id}>{item.tag}</TagItem>
          ))}
        </TagsList>
      </Wrapper>
      <BlockComments
        isCommentsOpen={isCommentsOpen}
        setIsCommentsOpen={setIsCommentsOpen}
        comments={comments}
      />
    </>
  );
};

Note.propTypes = {
  users: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Note;
