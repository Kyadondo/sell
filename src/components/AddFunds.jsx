// src/components/AddFunds.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaDollarSign, FaCreditCard, FaPaypal, FaMobileAlt } from 'react-icons/fa';

const Container = styled.div`
  padding: 30px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  font-size: 18px;
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

const SuccessMessage = styled.p`
  color: #2ecc71;
  margin-top: 10px;
  text-align: center;
`;

const AddFunds = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!amount || !paymentMethod) {
      setError('Please fill out all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/add-funds', {
        amount,
        paymentMethod,
        accountNumber,
      });

      setSuccess('Funds added successfully!');
      setAmount('');
      setPaymentMethod('');
      setAccountNumber('');
    } catch (err) {
      console.error('Add funds error:', err);

      if (err.response) {
        setError('Failed to add funds. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <Container>
      <Title>Add Funds to Your Account</Title>
      <Form onSubmit={handleSubmit}>
        <Label><FaDollarSign /> Amount:</Label>
        <Input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />

        <Label>Payment Method:</Label>
        <Select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="mobile-money">Mobile Money</option>
        </Select>

        {paymentMethod === 'mobile-money' && (
          <>
            <Label><FaMobileAlt /> Mobile Money Provider:</Label>
            <Select
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            >
              <option value="">Select Provider</option>
              <option value="airtel">Airtel</option>
              <option value="mtn">MTN</option>
            </Select>
            <Label>Account Number:</Label>
            <Input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter your account number"
              required
            />
          </>
        )}

        {paymentMethod === 'credit-card' && (
          <>
            <Label><FaCreditCard /> Credit Card Details:</Label>
            <Input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter your credit card number"
              required
            />
          </>
        )}

        {paymentMethod === 'paypal' && (
          <>
            <Label>PayPal Email:</Label>
            <Input
              type="email"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter your PayPal email"
              required
            />
          </>
        )}

        <Button type="submit">Add Funds</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
      </Form>
    </Container>
  );
};

export default AddFunds;
