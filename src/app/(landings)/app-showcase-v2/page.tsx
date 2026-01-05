import React from 'react';
import Hero from './components/Hero';
import Cost from './components/Cost';
import Features from './components/Features';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import InfoLink from './components/InfoLink';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Mobile App Showcase Landing v.2' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Cost />
      <Features />
      <Work />
      <Testimonials />
      <Cta />
      <InfoLink />
      <Footer />
    </>
  );
};

export default Page;
