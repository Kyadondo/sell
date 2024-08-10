// ServiceHighlights.jsx (for ServicesPage)
import React from 'react';
import styled from 'styled-components';

const ServiceHighlights = () => {
  return (
    <HighlightsContainer>
      <HighlightsTitle>What We Offer</HighlightsTitle>
      <HighlightsGrid>
        <HighlightCard>
          <CardIcon>📊</CardIcon>
          <CardTitle>In-depth Analytics</CardTitle>
          <CardDescription>Gain insights into your social media performance with detailed analytics.</CardDescription>
        </HighlightCard>
        <HighlightCard>
          <CardIcon>🚀</CardIcon>
          <CardTitle>Boost Engagement</CardTitle>
          <CardDescription>Enhance your post visibility and interaction rates.</CardDescription>
        </HighlightCard>
        <HighlightCard>
          <CardIcon>🎯</CardIcon>
          <CardTitle>Targeted Strategies</CardTitle>
          <CardDescription>Implement strategies tailored to your audience and goals.</CardDescription>
        </HighlightCard>
      </HighlightsGrid>
    </HighlightsContainer>
  );
};

export default ServiceHighlights;

const HighlightsContainer = styled.section`
  padding: 60px 20px;
  background-color: #e9ecef;
  text-align: center;
`;

const HighlightsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const HighlightsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const HighlightCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  padding: 25px;
  width: 300px;
  text-align: center;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  color: #333;
  font-size: 1rem;
`;
