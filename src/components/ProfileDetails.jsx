// src/components/ProfileDetails.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const Detail = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  color: #555;
  
  & > span {
    font-weight: bold;
  }
`;

const Placeholder = styled.span`
  color: #aaa;
`;

const ProfileDetails = ({ user }) => {
  const { name = 'Oppem Dev', email = 'example@example.com', phone = '123-456-7890', address = '1234 Elm Street' } = user || {};

  return (
    <Container>
      <Title>Profile Details</Title>
      <Detail>
        <span>Name:</span> {name || <Placeholder>Not provided</Placeholder>}
      </Detail>
      <Detail>
        <span>Email:</span> {email || <Placeholder>Not provided</Placeholder>}
      </Detail>
      <Detail>
        <span>Phone:</span> {phone || <Placeholder>Not provided</Placeholder>}
      </Detail>
      <Detail>
        <span>Address:</span> {address || <Placeholder>Not provided</Placeholder>}
      </Detail>
      {/* Add more details as needed */}
    </Container>
  );
};

export default ProfileDetails;
