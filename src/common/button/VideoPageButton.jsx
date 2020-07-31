import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: #ffb11b;
  padding: 19px 66px;
  border-radius: 15px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.065em;
  border: none;
`;

const VideoPageButton = ({ children }) => <StyledButton>{children}</StyledButton>;

VideoPageButton.defaultProps = {
  children: {},
};

VideoPageButton.propTypes = {
  children: PropTypes.string,
};

export default VideoPageButton;
