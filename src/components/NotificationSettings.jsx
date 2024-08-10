// src/components/NotificationSettings.jsx
import React, { useState } from 'react';
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submit logic for notification settings
  };

  return (
    <Container>
      <Title>Notification Settings</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Checkbox
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          Email notifications
        </Label>
        <Label>
          <Checkbox
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
          />
          SMS notifications
        </Label>
        <Button type="submit">Save Settings</Button>
      </Form>
    </Container>
  );
};

export default NotificationSettings;
