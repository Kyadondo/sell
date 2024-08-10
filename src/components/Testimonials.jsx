// Testimonials.jsx
import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsTitle>What Our Clients Say</TestimonialsTitle>
      <TestimonialsGrid>
        <TestimonialCard>
          <Quote>“The service provided a remarkable boost to our social media presence. Highly recommend!”</Quote>
          <Author>- Jane Doe, Marketing Manager</Author>
        </TestimonialCard>
        <TestimonialCard>
          <Quote>“Exceptional service and support. Our engagement rates have skyrocketed!”</Quote>
          <Author>- John Smith, Business Owner</Author>
        </TestimonialCard>
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const Quote = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 10px;
`;

const Author = styled.p`
  font-size: 1rem;
  color: #666;
`;
