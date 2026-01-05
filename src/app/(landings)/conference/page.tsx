import React from 'react';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Conference Landing' };

const Page = () => {
  return (
    <>
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light shadow-sm fixed-top" />
      <Hero />
      <Sponsors />
      <Speakers />
      <Tickets />
      <Highlights />
      <Schedule />
      <Testimonials />
      <Location />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
