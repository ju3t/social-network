/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';

import BlockComments from '../../blockComment/BlockComments/BlockComments';
import { IDataPost } from '../../../../../types/post';
import {
  WrapperNote,
  UserInfo,
  Avatar,
  TitleWrap,
  Title,
  SubtitleTime,
  UserActions,
  Action,
  ActionAddNote,
  ActionLike,
  ActionComment,
  ActionRepost,
  CountAction,
  Wrapper,
  TitleText,
  Text,
  TagsList,
  BtnOpenNote,
  TagItem,
  NoteErrorBlock,
  StyledLoadingBlock
} from './styles';
import LoadingBlock from 'common/loadingBlock';

interface INote {
  dataPost: IDataPost
}

const Note: React.FC<INote> = ({ dataPost }: INote) => {
  const {
    post, comments, loading, error,
  } = dataPost;
  const [isOpen, setIsOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(Boolean(comments));

  /* Вынес в отдельную функцию, чтобы BlockComments подгружал комменты во время рендера */
  const renderBlockComments = () => {
    if (!isCommentsOpen) {
      return null;
    }
    return (
      <BlockComments
        isOpen={isCommentsOpen}
        setIsCommentsOpen={setIsCommentsOpen}
        id={post.id}
        comments={comments}
      />
    );
  };

  const renderState = () => {
    if (loading) {
      return <StyledLoadingBlock><LoadingBlock size={60}/></StyledLoadingBlock>;
    }
    if (error) {
      return <NoteErrorBlock> Что-то пошло не так... </NoteErrorBlock>;
    }
    return renderBlockComments();
  };

  const {
    firstName,
    lastName,
    avatar,
    title,
    text,
    likeAmount,
    commentAmount,
    shareAmount,
    bookmarkAmount,
    persistDate,
    tags,
  } = post;

  return (
    <>
      <WrapperNote>
        <UserInfo>
          <Avatar src={avatar} />
          <TitleWrap>
            <Title>{`${firstName} ${lastName}`}</Title>
            <SubtitleTime>{persistDate}</SubtitleTime>
          </TitleWrap>
        </UserInfo>
        <UserActions>
          <Action>
            <ActionAddNote />
            <CountAction>{bookmarkAmount || 0}</CountAction>
          </Action>
          <Action>
            <ActionLike />
            <CountAction>{likeAmount || 0}</CountAction>
          </Action>
          <Action>
            <ActionComment onClick={() => setIsCommentsOpen((state) => !state)} />
            <CountAction>{commentAmount || 0}</CountAction>
          </Action>
          <Action>
            <ActionRepost />
            <CountAction>{shareAmount || 0}</CountAction>
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
          {tags?.map((item) => (
            <TagItem key={item.id}>{item.text}</TagItem>
          ))}
        </TagsList>
        { renderState() }
      </Wrapper>
    </>
  );
};

export default Note;
