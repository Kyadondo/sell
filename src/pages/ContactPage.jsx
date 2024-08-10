import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import MapSection from '../components/MapSection';
import SocialMediaLinks from '../components/SocialMediaLinks';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <ContactDetails />
      <MapSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
