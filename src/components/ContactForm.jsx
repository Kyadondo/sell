// ContactForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
  };

  return (
    <FormContainer>
      <FormTitle>Contact Us</FormTitle>
      {submitted ? (
        <SuccessMessage>Thank you for contacting us! We'll get back to you soon.</SuccessMessage>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <Input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <Input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />
          <Textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      )}
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.section`
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4f4f;
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  color: green;
  font-size: 1.2rem;
`;
