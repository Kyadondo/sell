import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import HeroSection from '../components/HeroSection';
import ServiceDetails from '../components/ServiceDetails'; 
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials'; 
import CallToAction from '../components/CallToAction';
import FAQSection from '../components/FAQSection';

const ServicesPage = () => {
  const services = [
    {
      title: 'Social Media Management',
      description: 'We manage your social media profiles to help you grow your online presence.',
      image: 'path/to/your/image1.jpg',
      features: [
        'Profile Optimization',
        'Content Creation',
        'Engagement Strategies',
        'Analytics & Reporting',
      ],
      caseStudy: 'Our client, XYZ, saw a 300% increase in engagement after 6 months of our service.',
    },
    {
      title: 'SEO Services',
      description: 'Boost your search engine rankings with our SEO services.',
      image: 'path/to/your/image2.jpg',
      features: [
        'Keyword Research',
        'On-Page Optimization',
        'Link Building',
        'Performance Tracking',
      ],
      caseStudy: 'ABC Corp doubled their organic traffic within a year with our tailored SEO strategies.',
    },
    {
      title: 'Social Media Followers & Likes',
      description: 'Increase your social media presence with our follower and like packages. We offer real and high-quality followers and likes to help boost your brand\'s visibility.',
      image: 'path/to/your/social-media-image.jpg', 
      features: [
        'Real Followers & Likes',
        'Targeted Growth',
        'Engagement Boost',
        'Flexible Packages',
      ],
      caseStudy: 'Our service helped DEF Brand gain 10,000 followers within a week, significantly increasing their social media engagement.',
    },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection />
      {services.map((service, index) => (
        <ServiceDetails key={index} {...service} />
      ))}
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServicesPage;
