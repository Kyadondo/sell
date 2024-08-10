// CoreValues.jsx
import React from 'react';
import styled from 'styled-components';

const CoreValues = () => {
  return (
    <ValuesContainer>
      <ValuesTitle>Our Core Values</ValuesTitle>
      <ValuesList>
        <ValueItem>Integrity: We act with honesty and transparency.</ValueItem>
        <ValueItem>Innovation: We strive for continuous improvement and creativity.</ValueItem>
        <ValueItem>Customer Focus: We put our customers at the heart of everything we do.</ValueItem>
        {/* Add more values as needed */}
      </ValuesList>
    </ValuesContainer>
  );
};

export default CoreValues;

const ValuesContainer = styled.section`
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ValuesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const ValueItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  line-height: 1.6;
`;
