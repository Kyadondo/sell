// src/pages/NotificationsPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const NotificationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NotificationItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotificationContent = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from API
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleMarkAsRead = (id) => {
    // Update notification status to read
    const markAsRead = async () => {
      try {
        await axios.post(`http://localhost:5000/api/notifications/${id}/read`);
        setNotifications(notifications.map(notif => 
          notif.id === id ? { ...notif, read: true } : notif
        ));
      } catch (error) {
        console.error('Error marking notification as read', error);
      }
    };

    markAsRead();
  };

  return (
    <Container>
      <Title>Notifications</Title>
      <NotificationList>
        {notifications.map(notification => (
          <NotificationItem key={notification.id}>
            <NotificationContent>
              {notification.message}
            </NotificationContent>
            <Button
              onClick={() => handleMarkAsRead(notification.id)}
              disabled={notification.read}
            >
              {notification.read ? 'Read' : 'Mark as Read'}
            </Button>
          </NotificationItem>
        ))}
      </NotificationList>
    </Container>
  );
};

export default NotificationsPage;
