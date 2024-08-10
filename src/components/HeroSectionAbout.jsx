
import React from 'react';
import styled from 'styled-components';

const HeroSectionAbout = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>About Us</HeroTitle>
        <HeroSubtitle>Learn more about our journey and values</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSectionAbout;

const HeroContainer = styled.section`
  background-image: url('path/to/your/image.jpg'); // Update with your image
  background-size: cover;
  background: linear-gradient(to right, #1c1c1c, #3a3a3a), url('/path-to-image.jpg') center/cover no-repeat;
  background-position: center;
  padding: 80px 20px;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
`;
