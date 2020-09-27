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
  NoteLoadingBlock,
  NoteErrorBlock
} from './styles';

interface INote {
  dataPost: IDataPost
}

const Note: React.FC<INote> = ({ dataPost }: INote) => {
  const { post, comments, loading, error } = dataPost;
  const [isOpen, setIsOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState( Boolean( comments ) );

  /* Вынес в отдельную функцию, чтобы BlockComments подгружал комменты во время рендера */
  const renderBlockComments = () => {
    if ( !isCommentsOpen ) {
      return null;
    }
    return (
      <BlockComments
        setIsCommentsOpen={setIsCommentsOpen}
        id={post.id}
        comments={comments}
      />
    );
  };

  const renderState = () => {
    if ( loading ) {
      return <NoteLoadingBlock />;
    }
    if ( error ) {
      return <NoteErrorBlock> Что-то пошло не так... </NoteErrorBlock>
    }
    return null;
  }

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
    tags
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
            <CountAction>{bookmarkAmount}</CountAction>
          </Action>
          <Action>
            <ActionLike />
            <CountAction>{likeAmount}</CountAction>
          </Action>
          <Action>
            <ActionComment onClick={() => setIsCommentsOpen(( state ) => !state )} />
            <CountAction>{commentAmount}</CountAction>
          </Action>
          <Action>
            <ActionRepost />
            <CountAction>{shareAmount}</CountAction>
          </Action>
        </UserActions>
        {renderState()}
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
        { renderBlockComments() }
      </Wrapper>
    </>
  );
};

export default Note;
