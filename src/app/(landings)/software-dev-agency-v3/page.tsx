import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Benefits from './components/Benefits';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Software Dev Agency Landing v.3' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <About />
      <Solutions />
      <Industries />
      <Technologies />
      <Projects />
      <Benefits />
      <Brands />
      <Blog />
      <Footer />
    </>
  );
};

export default Page;
