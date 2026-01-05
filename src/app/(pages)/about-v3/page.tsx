import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Locations from './components/Locations';
import Team from './components/Team';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | About v.3' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Story />
      <Locations />
      <Team />
      <Partners />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
