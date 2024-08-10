// OurStory.jsx
import React from 'react';
import styled from 'styled-components';

const OurStory = () => {
  return (
    <StoryContainer>
      <StoryTitle>Our Story</StoryTitle>
      <StoryText>
        We started with a simple idea: to bring innovative solutions to our customers. Since our founding in [Year], we have grown to become a leader in our industry, driven by a passion for excellence and a commitment to our core values.
      </StoryText>
    </StoryContainer>
  );
};

export default OurStory;

const StoryContainer = styled.section`
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StoryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const StoryText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;
