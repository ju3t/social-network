import React from 'react';
import PropTypes from 'prop-types';

import { RightBlockContainer } from '../styledComponents';

const RightBlock = (props) => {
  const { children } = props;
  return <RightBlockContainer>{children}</RightBlockContainer>;
};

RightBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RightBlock;
