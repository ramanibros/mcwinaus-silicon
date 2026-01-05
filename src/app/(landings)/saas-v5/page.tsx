import React from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Map from './components/Map';
import Cases from './components/Cases';
import Video from './components/Video';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | SaaS Landing v.5' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Categories />
      <Cases />
      <Map />
      <Video />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
};

export default Page;
