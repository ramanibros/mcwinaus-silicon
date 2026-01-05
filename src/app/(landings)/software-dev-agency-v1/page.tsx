import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Brands from './components/Brands';
import Cta from './components/Cta';
import NewsSlider from './components/NewsSlider';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Software Dev Agency Landing v.1' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Features />
      <Testimonials />
      <Brands />
      <NewsSlider />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
