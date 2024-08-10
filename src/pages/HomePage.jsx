import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceHighlights from '../components/ServiceHighlights';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceHighlights />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
