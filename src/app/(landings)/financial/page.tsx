import React from 'react';
import Hero from './components/Hero';
import Service from './components/Service';
import Banner from './components/Banner';
import Features from './components/Features';
import Industries from './components/Industries';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Latestnews from './components/Latestnews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Financial Consulting Landing' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Service />
      <Banner />
      <Features />
      <Industries />
      <Brands />
      <Testimonials />
      <Latestnews />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
