import React from 'react';
import styled from 'styled-components';
import { FaDollarSign, FaShoppingCart, FaUsers, FaHeart } from 'react-icons/fa';

const PanelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px 0;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  background: #007bff;
  padding: 15px;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
`;

const StatInfo = styled.div`
  text-align: right;
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: #555;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const OverviewPanel = () => {
  return (
    <PanelContainer>
      <StatCard>
        <IconWrapper>
          <FaDollarSign />
        </IconWrapper>
        <StatInfo>
          <StatLabel>Current Balance</StatLabel>
          <StatValue>$1,250</StatValue>
        </StatInfo>
      </StatCard>
      <StatCard>
        <IconWrapper>
          <FaShoppingCart />
        </IconWrapper>
        <StatInfo>
          <StatLabel>Total Orders</StatLabel>
          <StatValue>85</StatValue>
        </StatInfo>
      </StatCard>
      <StatCard>
        <IconWrapper>
          <FaUsers />
        </IconWrapper>
        <StatInfo>
          <StatLabel>Followers Purchased</StatLabel>
          <StatValue>12,000</StatValue>
        </StatInfo>
      </StatCard>
      <StatCard>
        <IconWrapper>
          <FaHeart />
        </IconWrapper>
        <StatInfo>
          <StatLabel>Likes Purchased</StatLabel>
          <StatValue>5,320</StatValue>
        </StatInfo>
      </StatCard>
    </PanelContainer>
  );
};

export default OverviewPanel;
