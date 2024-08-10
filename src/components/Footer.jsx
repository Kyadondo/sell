import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </FooterLinks>
        <SocialMedia>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </SocialMedia>
      </FooterContent>
      <FooterCopy>&copy; 2024 Social Media Services. All rights reserved.</FooterCopy>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: white;
  padding: 20px 50px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const FooterLinks = styled.div`
  a {
    color: white;
    margin-right: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialMedia = styled.div`
  a {
    color: white;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterCopy = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;
