
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import HeroSectionAbout from '../components/HeroSectionAbout';
import OurStory from '../components/OurStory';
import TeamSection from '../components/TeamSection';
import CoreValues from '../components/CoreValues';
import CallToAction from '../components/CallToAction';

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionAbout />
      <OurStory />
      <TeamSection />
      <CoreValues />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
