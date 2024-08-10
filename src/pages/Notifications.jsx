import React from 'react'


import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import NotificationsPage from '../components/Notifications';


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

const Notifications = () => {
  return (
    <Container>
        <MainContent>
            <Sidebar/>
            <NotificationsPage />
            
        </MainContent>
    </Container>
  )
}

export default Notifications