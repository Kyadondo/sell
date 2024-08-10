// FAQSection.jsx
import React from 'react';
import styled from 'styled-components';

const FAQSection = () => {
  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <FAQList>
        <FAQItem>
          <Question>What services do you offer?</Question>
          <Answer>We offer a range of services including social media growth, engagement boosting, and targeted campaigns.</Answer>
        </FAQItem>
        <FAQItem>
          <Question>How can I contact support?</Question>
          <Answer>You can reach out to our support team via email or through the contact form on our website.</Answer>
        </FAQItem>
      </FAQList>
    </FAQContainer>
  );
};

export default FAQSection;

const FAQContainer = styled.section`
  padding: 60px 20px;
  background-color: #f1f1f1;
  text-align: center;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Question = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  color: #555;
  font-size: 1rem;
`;
