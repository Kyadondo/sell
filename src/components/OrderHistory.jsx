import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: #f0f2f5;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  font-weight: bold;
  color: #555;
`;

const TableCell = styled.td`
  padding: 15px;
  color: #666;
`;

const OrderHistory = () => {
  // Sample data for recent orders
  const orders = [
    { id: '12345', date: '2024-08-01', status: 'Completed', total: '$150' },
    { id: '12346', date: '2024-08-03', status: 'Pending', total: '$200' },
    { id: '12347', date: '2024-08-05', status: 'Completed', total: '$120' },
    { id: '12348', date: '2024-08-07', status: 'Cancelled', total: '$180' },
  ];

  return (
    <HistoryContainer>
      <Title>Order History</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Order ID</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Total</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.total}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </HistoryContainer>
  );
};

export default OrderHistory;
