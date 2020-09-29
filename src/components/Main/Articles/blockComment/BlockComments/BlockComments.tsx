/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Wrapper,
  Title,
  CommentsEmpty,
} from './styles';

import { loadCommentsByPost } from '../../../../../redux-toolkit/postsSlice';
import Comment from '../Comment';
import ComponentInput from '../ComponentInput';
import IComment from '../../../../../types/comment';

interface IBlockComments {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comments?: IComment[];
  id: number;
  isOpen: boolean;
  setIsCommentsOpen?: (state: boolean) => void;
  loadCommentsByPost: (id: number) => void;
}

const BlockComments: React.FC<IBlockComments> = ({
  comments,
  id: postId,
  isOpen,
  setIsCommentsOpen: setIsOpen,
  loadCommentsByPost: _loadCommentsByPost,
}) => {
  useEffect(() => {
    if (!comments) {
      _loadCommentsByPost(postId);
    }
  }, [_loadCommentsByPost, comments, postId]);
  const renderComments = () => {
    if (!comments) {
      return <CommentsEmpty>Комментариев нет. Будьте первым!</CommentsEmpty>;
    }
    return comments.map((item) => (
      <Comment key={item.id} comment={item} />
    ));
  };

  return (
    <Wrapper>
      <Title>Комментарии</Title>
      { renderComments() }
      <ComponentInput setIsOpen={setIsOpen} isOpen={isOpen} />
    </Wrapper>
  );
};

const mapDispatchToProps = {
  loadCommentsByPost,
};

export default connect(null, mapDispatchToProps)(BlockComments);
