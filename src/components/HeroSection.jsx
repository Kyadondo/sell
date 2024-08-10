import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
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
      <HeroContent>
        <HeroTitle>Boost Your Social Media Presence</HeroTitle>
        <HeroDescription>
          Get more followers, likes, and engagement with our tailored social media services.
        </HeroDescription>
        <CTAButton href="/services">Explore Our Services</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%; 
  overflow-x: hidden;
  background: linear-gradient(to right, #1c1c1c, #3a3a3a), url('/path-to-image.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  position: relative; 
`;

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

const HeroContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 0 20px; 
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const CTAButton = styled.a`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-bottom: 20px;
  display: inline-block;
`;
