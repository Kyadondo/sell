import React from 'react';
import styled from 'styled-components';

const PricingSection = () => {
  return (
    <PricingContainer>
      <PricingTitle>Our Pricing Plans</PricingTitle>
      <PricingSubtitle>Choose a plan that suits your needs</PricingSubtitle>
      <PricingCards>
        <PricingCard>
          <CardHeader>Basic Plan</CardHeader>
          <CardPrice>$29/month</CardPrice>
          <CardFeatures>
            <Feature>1000 Followers</Feature>
            <Feature>100 Likes per Post</Feature>
            <Feature>Email Support</Feature>
          </CardFeatures>
          <CardButton href="/contact">Get Started</CardButton>
        </PricingCard>
        <PricingCard>
          <CardHeader>Standard Plan</CardHeader>
          <CardPrice>$49/month</CardPrice>
          <CardFeatures>
            <Feature>5000 Followers</Feature>
            <Feature>500 Likes per Post</Feature>
            <Feature>Priority Email Support</Feature>
          </CardFeatures>
          <CardButton href="/contact">Get Started</CardButton>
        </PricingCard>
        <PricingCard>
          <CardHeader>Premium Plan</CardHeader>
          <CardPrice>$99/month</CardPrice>
          <CardFeatures>
            <Feature>Unlimited Followers</Feature>
            <Feature>Unlimited Likes per Post</Feature>
            <Feature>24/7 Support</Feature>
          </CardFeatures>
          <CardButton href="/contact">Get Started</CardButton>
        </PricingCard>
      </PricingCards>
    </PricingContainer>
  );
};

export default PricingSection;

const PricingContainer = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const PricingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const PricingSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #666;
`;

const PricingCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const PricingCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 30px;
  width: 300px;
  text-align: center;
`;

const CardHeader = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const CardPrice = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  font-weight: bold;
`;

const CardFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const Feature = styled.li`
  font-size: 1rem;
  margin: 10px 0;
  color: #333;
`;

const CardButton = styled.a`
  background-color: #ff6b6b;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  display: inline-block;

  &:hover {
    background-color: #ff4f4f;
  }
`;
