import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Video from './components/Video';
import Cta from './components/Cta';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import LatestNews from './components/LatestNews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Medical Landing' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Features />
      <Video />
      <Cta />
      <Team />
      <Testimonials />
      <LatestNews />
      <Contacts />
      <Footer />
    </>
  );
};

export default Page;
