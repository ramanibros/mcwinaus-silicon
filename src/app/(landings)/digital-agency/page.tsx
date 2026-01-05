import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Featured from './components/Featured';
import Services from './components/Services';
import Brands from './components/Brands';
import Atmosphere from './components/Atmosphere';
import Awards from './components/Awards';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Digital Angency' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Benefits />
      <Featured />
      <Services />
      <Brands />
      <Atmosphere />
      <Awards />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

export default Page;
