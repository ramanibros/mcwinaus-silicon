import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Awards from './components/Awards';
import CaseStudies from './components/CaseStudies';
import Clients from './components/Clients';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Software Dev Agency Landing v.2' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Services />
      <Awards />
      <CaseStudies />
      <Clients />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
