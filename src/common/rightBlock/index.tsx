import React from 'react';
import { RightBlockContainer } from '../styledComponents';

interface Props {
  children: React.ReactChild
}

const RightBlock: React.FC<Props> = (props : Props) => {
  const { children } = props;
  return <RightBlockContainer>{children}</RightBlockContainer>;
};

export default RightBlock;
