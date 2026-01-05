import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Work from './components/Work';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | SaaS Landing v.1' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Features />
      <Dashboard />
      <UseCases />
      <Pricing />
      <Testimonials />
      <Work />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
