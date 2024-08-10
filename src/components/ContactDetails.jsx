// ContactDetails.jsx
import React from 'react';
import styled from 'styled-components';

const ContactDetails = () => {
  return (
    <DetailsContainer>
      <DetailsTitle>Contact Information</DetailsTitle>
      <DetailsList>
        <DetailItem>
          <Icon>📞</Icon>
          <DetailText>+1 234 567 890</DetailText>
        </DetailItem>
        <DetailItem>
          <Icon>📧</Icon>
          <DetailText>info@example.com</DetailText>
        </DetailItem>
        <DetailItem>
          <Icon>🏢</Icon>
          <DetailText>1234 Street Name, City, Country</DetailText>
        </DetailItem>
      </DetailsList>
    </DetailsContainer>
  );
};

export default ContactDetails;

const DetailsContainer = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

const DetailsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Icon = styled.span`
  font-size: 1.5rem;
`;

const DetailText = styled.span`
  font-size: 1.2rem;
`;
