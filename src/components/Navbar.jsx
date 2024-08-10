import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavBar>
        <NavLogo href="/">Oppem Dev</NavLogo>
        <NavMenu>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/About">About Us</NavItem>
          <NavItem href="/Contact">Contact</NavItem>
        </NavMenu>
        <NavButton href="/signin">Sign In</NavButton>
      </NavBar>
  );
};

export default Navbar;

const NavBar = styled.nav`
  width: 100%; 
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box; 
  overflow-x: hidden; 
`;

const NavLogo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ff6b6b;
  }
`;
const NavMenu = styled.div`
  display: flex;
  gap: 20px;
`;
const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #ff6b6b;
  }
`;

const NavButton = styled.a`
  padding: 8px 16px;
  background-color: #ff6b6b;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #ff4f4f;
  }
`;
