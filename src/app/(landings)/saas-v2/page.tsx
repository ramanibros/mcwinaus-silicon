import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import AppCta from './components/AppCta';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Work from './components/Work';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | SaaS Landing v.2' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Features />
      <Comparison />
      <Testimonials />
      <AppCta />
      <Pricing />
      <Work />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
