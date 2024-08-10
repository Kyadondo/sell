import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AccountSettings from '../components/AccountSettings';
import PrivacySettings from '../components/PrivacySettings';
import NotificationSettings from '../components/NotificationSettings';
import SecuritySettings from '../components/SecuritySettings';
import Sidebar from '../components/Sidebar';


import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background: #f9f9f9;
  margin-left: 225px;
`;


const Settings = () => {
  return (
    <Container>
        <MainContent>
            <Sidebar/>
            <AccountSettings />
            <PrivacySettings />
            <NotificationSettings />
            <SecuritySettings />
        </MainContent>
    </Container>
  )
}

export default Settings