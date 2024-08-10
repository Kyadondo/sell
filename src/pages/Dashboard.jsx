import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import OverviewPanel from '../components/OverviewPanel';
import DashboardHeader from '../components/DashboardHeader';
import OrderHistory from '../components/OrderHistory';

import AddFunds from '../components/AddFunds';

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


const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <DashboardHeader />
        <OverviewPanel />
        <AddFunds />
        <OrderHistory />
      </MainContent>
    </Container>
  );
};

export default Dashboard;
