import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Industries from './components/Industries';
import { Metadata } from 'next';
import Integration from './components/Integration';
import Feature from './components/Feature';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';

export const metadata: Metadata = { title: 'Silicon | SaasS Landing v.4' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <About />
      <Industries />
      <Integration />
      <Feature />
      <Blog />
      <Pricing />
      <Footer />
    </>
  );
};

export default Page;
