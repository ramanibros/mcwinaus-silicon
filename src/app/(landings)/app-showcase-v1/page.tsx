import React from 'react';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import Work from './components/Work';
import Fetures from './components/Fetures';
import Testimonials from './components/Testimonials';
import Faqs from './components/Faqs';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Mobile App Showcase Landing v.1' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Brands />
      <Features />
      <Work />
      <Fetures />
      <Testimonials />
      <Faqs />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
