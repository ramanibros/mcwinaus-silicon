import React from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Work from './components/Work';
import Iconboxes from './components/Iconboxes';
import Testimonials from './components/Testimonials';
import Brands from './components/Brands';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Online Courses Landing' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <Courses />
      <Work />
      <Iconboxes />
      <Testimonials />
      <Brands />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
