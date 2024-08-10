// src/components/DashboardContent.jsx
import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  margin: 10px 0;
`;

const DashboardContent = () => {
  return (
    <ContentContainer>
      <Card>
        <h2>Overview</h2>
        <p>Display overview content here</p>
      </Card>
      {/* Add more cards or widgets as needed */}
    </ContentContainer>
  );
};

export default DashboardContent;
