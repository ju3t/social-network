/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

const Navbar = (props) => {
  const {
    data: {
      date, description, link, owner,
    },
  } = props;
  return (
    <NavbarWrapper>
      <Date>{date.toLocaleString()}</Date>
      <Description>{description}</Description>
      <Link href={link}>{link}</Link>
      <Owner>{owner}</Owner>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  
  font-style: normal;
  font-weight: normal;
  min-height: 150px;
  border-bottom: 1px solid #515151;
  color: #515151;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const Date = styled.div`
  
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  color: #000000;
  margin-bottom: 15px;
`;

const Description = styled.div`
  
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  color: #000000;
  margin-bottom: 15px;
  text-align: left;
`;

const Link = styled.a`
  
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 15px;
`;

const Owner = styled.div`
  
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  color: #000000;
  margin-bottom: 15px;
`;
