// CallToAction.jsx
import React from 'react';
import styled from 'styled-components';

const CallToAction = () => {
  return (
    <CTASection>
      <CTAContent>
        <CTAHeading>Ready to Elevate Your Social Media?</CTAHeading>
        <CTAButton href="/contact">Contact Us Today</CTAButton>
      </CTAContent>
    </CTASection>
  );
};

export default CallToAction;

const CTASection = styled.section`
  background-color: #ff6b6b;
  color: white;
  padding: 60px 20px;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTAHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const CTAButton = styled.a`
  background-color: white;
  color: #ff6b6b;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    background-color: #f4f4f4;
  }
`;
