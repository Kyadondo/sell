import React from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: #007bff;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled(FaUserCircle)`
  margin-right: 10px;
  font-size: 24px;
`;

const LogoutIcon = styled(FaSignOutAlt)`
  margin-left: 15px;
  font-size: 24px;
  cursor: pointer;
`;

const DashboardHeader = () => {
  return (
    <HeaderContainer>
      <Logo>Oppem Dev</Logo>
      <ProfileContainer>
        <ProfileIcon />
        <span>User Name</span>
        <LogoutIcon />
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default DashboardHeader;
