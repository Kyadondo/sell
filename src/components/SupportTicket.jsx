import React, { useState } from 'react';
import styled from 'styled-components';

const TicketContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
  resize: none;
  height: 300px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const TicketList = styled.div`
  margin-top: 30px;
`;

const TicketItem = styled.div`
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border-left: 4px solid ${props => (props.status === 'Open' ? '#007bff' : '#28a745')};
`;

const TicketTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const TicketStatus = styled.span`
  font-size: 12px;
  color: ${props => (props.status === 'Open' ? '#007bff' : '#28a745')};
`;

const SupportTicket = () => {
  const [ticket, setTicket] = useState({
    subject: '',
    description: '',
  });

  const [tickets, setTickets] = useState([
    { id: 1, subject: 'Order Issue', description: 'I have not received my order.', status: 'Open' },
    { id: 2, subject: 'Payment Problem', description: 'My payment failed.', status: 'Closed' },
  ]);

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTickets([...tickets, { id: tickets.length + 1, ...ticket, status: 'Open' }]);
    setTicket({ subject: '', description: '' });
  };

  return (
    <TicketContainer>
      <Title>Support Tickets</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={ticket.subject}
          onChange={handleChange}
          placeholder="Enter ticket subject"
        />

        <Label htmlFor="description">Description</Label>
        <TextArea
          id="description"
          name="description"
          rows="5"
          value={ticket.description}
          onChange={handleChange}
          placeholder="Describe your issue"
        />

        <Button type="submit">Submit Ticket</Button>
      </Form>

      <TicketList>
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} status={ticket.status}>
            <TicketTitle>{ticket.subject}</TicketTitle>
            <TicketStatus status={ticket.status}>{ticket.status}</TicketStatus>
            <p>{ticket.description}</p>
          </TicketItem>
        ))}
      </TicketList>
    </TicketContainer>
  );
};

export default SupportTicket;
