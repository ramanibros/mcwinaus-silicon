import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Hotspots from './components/Hotspots';
import Work from './components/Work';
import MobileCta from './components/MobileCta';
import Registration from './components/Registration';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Startup Landing' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Features />
      <Hotspots />
      <Work />
      <MobileCta />
      <Registration />
      <Benefits />
      <Footer />
    </>
  );
};

export default Page;
