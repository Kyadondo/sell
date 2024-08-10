import React from 'react'
import Sidebar from '../components/Sidebar';
import OrderHistory from '../components/OrderHistory';
import SupportTicket from '../components/SupportTicket';


import styled from 'styled-components';
import CreateOrder from '../components/CreateOrder';

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


const Orders = () => {
  return (
    <Container>
         <Sidebar />
         <MainContent>
            <CreateOrder />
            <OrderHistory />
            <SupportTicket />
         </MainContent>
    </Container>
  )
}

export default Orders