// src/components/CreateOrder.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaShoppingCart, FaUserPlus, FaTh, FaRegClock } from 'react-icons/fa';

// Container for the CreateOrder component
const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

// Title and form styling
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-top: 10px;
  text-align: center;
`;

const CreateOrder = () => {
  const [serviceType, setServiceType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/orders', {
        serviceType,
        quantity,
        details,
      });

      setSuccess('Order placed successfully!');
      setServiceType('');
      setQuantity('');
      setDetails('');
    } catch (err) {
      console.error('Order creation error:', err);

      if (err.response) {
        setError('Failed to create order. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <Container>
      <Title>Create New Order</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <FaTh /> Service Type:
        </Label>
        <Select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
          <option value="">Select Service</option>
          <option value="followers">Followers</option>
          <option value="likes">Likes</option>
          <option value="views">Views</option>
          {/* Add more options as needed */}
        </Select>
        
        <Label>
          <FaRegClock /> Quantity:
        </Label>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        
        <Label>
          <FaUserPlus /> Details:
        </Label>
        <Input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        
        <Button type="submit">Place Order</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <p style={{ color: '#2ecc71', textAlign: 'center' }}>{success}</p>}
      </Form>
    </Container>
  );
};

export default CreateOrder;
