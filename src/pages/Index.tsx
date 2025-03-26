
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Alex Smith | Designer Portfolio';
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
