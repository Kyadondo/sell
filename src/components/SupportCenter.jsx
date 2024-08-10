// src/components/SupportCenter.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const SupportOption = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const SupportCenter = () => {
  return (
    <Container>
      <h2>Support Center</h2>
      <SupportOption>
        <h3>Contact Support</h3>
        <p>If you have any questions, feel free to reach out to our support team.</p>
      </SupportOption>
      <SupportOption>
        <h3>Browse Help Articles</h3>
        <p>Find answers to your questions by browsing our help articles.</p>
      </SupportOption>
    </Container>
  );
};

export default SupportCenter;
