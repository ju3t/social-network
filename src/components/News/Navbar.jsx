import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
  <NavbarWrapper>
    <NavbarContainer>
      <NavLink>Все</NavLink>
      <NavLink>Новости</NavLink>
      <NavLink>Интересные</NavLink>
      <NavLink>Теги</NavLink>
    </NavbarContainer>
  </NavbarWrapper>
);

export default Navbar;

const NavbarWrapper = styled.nav`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  min-height: 150px;
  border-bottom: 1px solid #515151;
  color: #515151;
  display: flex;
`;

const NavLink = styled.span`
  font-size: 16px;
  line-height: 20px;
  flex: none;
  order: 0;
  align-self: center;
  margin-right: 51px;
`;

const NavbarContainer = styled.div`
  display: flex;
`;
