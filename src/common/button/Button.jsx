import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  background: #ffb11b;
  border-radius: ${(props) => (props.small ? '5px' : '15px')};
  width: ${(props) => (props.wide ? '100%' : null)};
  border: none;
  font-family: 'Montserrat';

  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.small ? '16px' : '24px')};
  line-height: ${(props) => (props.small ? '20px' : '29px')};
  padding: ${(props) => (props.small ? '15px 40px' : '19px 66px')};

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;

Button.defaultProps = {
  children: {},
};

Button.propTypes = {
  children: PropTypes.string,
};
