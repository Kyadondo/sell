// MapSection.jsx
import React from 'react';
import styled from 'styled-components';

const MapSection = () => {
  return (
    <MapContainer>
      <MapTitle>Our Location</MapTitle>
      <MapFrame
        title="Business Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799109158!2d-74.25987368799915!3d40.69767006374389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a35e5a3f743%3A0x1a8a5ef1c6360b8d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1609712357731!5m2!1sen!2sin"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></MapFrame>
    </MapContainer>
  );
};

export default MapSection;

const MapContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f4f4f4; // Background color for better contrast
`;

const MapTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const MapFrame = styled.iframe`
  border: 0;
  border-radius: 8px; // Rounded corners for a modern look
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); // Subtle shadow for depth
`;
