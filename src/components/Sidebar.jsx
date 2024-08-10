// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserCircle, FaSignOutAlt, FaTachometerAlt, FaHistory, FaCog, FaBell } from 'react-icons/fa';
import signOut from '../utils/signOut';

// Container for the Sidebar
const SidebarContainer = styled.div`
  background: #ffffff;
  height: 100vh;
  width: 190px;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

// Profile section styling
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileIcon = styled(FaUserCircle)`
  font-size: 60px;
  color: #007bff;
  margin-right: 15px;
`;

const ProfileName = styled.div`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

// Navigation links styling
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 8px 0;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #007bff;
    color: #fff;
  }
`;

const NavIcon = styled.div`
  margin-right: 10px;
  font-size: 20px;
`;

// Sidebar component
const Sidebar = () => {
  return (
    <SidebarContainer>
      <Profile>
        <ProfileIcon />
        <ProfileName>Username</ProfileName>
      </Profile>

      <NavLink to="/dashboard">
        <NavIcon><FaTachometerAlt /></NavIcon>
        Dashboard
      </NavLink>
      <NavLink to="/orders">
        <NavIcon><FaHistory /></NavIcon>
        Orders
      </NavLink>
      <NavLink to="/profile">
        <NavIcon><FaUserCircle /></NavIcon>
        Profile
      </NavLink>
      <NavLink to="/settings">
        <NavIcon><FaCog /></NavIcon>
        Settings
      </NavLink>
      <NavLink to="/notifications">
        <NavIcon><FaBell /></NavIcon>
        Notifications
      </NavLink>
      <NavLink to="/logout" onClick={signOut}>
        <NavIcon><FaSignOutAlt /></NavIcon>
        Sign out
      </NavLink>
    </SidebarContainer>
  );
};

export default Sidebar;
