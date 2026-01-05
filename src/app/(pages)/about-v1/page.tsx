import React from 'react';
import Hero from './components/Hero';
import Video from './components/Video';
import Benefits from './components/Benefits';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Team from './components/Team';
import Networks from './components/Networks';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | About v.1' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Benefits />
      <Video />
      <Awards />
      <Testimonials />
      <Team />
      <Cta />
      <Networks />
      <Footer />
    </>
  );
};

export default Page;
