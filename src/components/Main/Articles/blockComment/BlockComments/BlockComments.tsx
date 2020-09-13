/* eslint-disable react/prop-types */
import React from 'react';
import {
  Wrapper,
  Title,
} from './styles';

import Comment from '../Comment';
import ComponentInput from '../ComponentInput/index';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comments?: Record<string, any>[];
  setIsCommentsOpen?: (state: boolean) => void;
  isCommentsOpen?: boolean;
}

const BlockComments: React.FC<Props> = ({
  comments,
  setIsCommentsOpen: setIsOpen,
  isCommentsOpen: isOpen,
}) => {
  if (!comments) return null;
  if (!isOpen) return null;

  return (
    <Wrapper>
      <Title>Комментарии</Title>
      {comments.map((item) => (
        <Comment key={item.id} comment={item} />
      ))}
      <ComponentInput setIsOpen={setIsOpen} />
    </Wrapper>
  );
};

export default BlockComments;
