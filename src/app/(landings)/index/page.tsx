import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Awards from './components/Awards';
import CaseStudies from './components/CaseStudies';
import Clients from './components/Clients';
import Cta from './components/Cta';
import FooterOld from './components/Footer-old';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Integration from '@/app/(landings)/index/components/Integration';
import Features from '@/app/(landings)/index/components/Features';
import Choose from '@/app/(landings)/index/components/Choose';
import About from '@/app/(landings)/index/components/About';
import Counter from '@/app/(landings)/index/components/Counter';
import Footer from '@/app/(landings)/index/components/Footer';
import Pricing from '@/app/(landings)/index/components/Pricing';

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
      <Integration />
      <Features />
      <About />
      <Choose />
      <Counter />
      {/*<Services />*/}
      {/*<Awards />*/}
      <CaseStudies />
      <Clients />
      <Pricing />
      <Footer />
    </>
  );
};

export default Page;
