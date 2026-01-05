import React from 'react';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Clients from './components/Clients';
import Navbar from '@/components/navbar/Navbar';
import {Metadata} from 'next';
import Integration from '@/app/(landings)/home/components/Integration';
import Features from '@/app/(landings)/home/components/Features';
import Choose from '@/app/(landings)/home/components/Choose';
import About from '@/app/(landings)/home/components/About';
import Counter from '@/app/(landings)/home/components/Counter';
import Footer from '@/app/(landings)/home/components/Footer';
import Pricing from '@/app/(landings)/home/components/Pricing';
import Banner from "@/app/(landings)/home/components/Banner";

export const metadata: Metadata = { title: 'Silicon - Multipurpose Technology Bootstrap Template' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Integration />
      <Features />
      <About />
      <Choose />
      <Counter />
        <Banner />
      <CaseStudies />
      <Clients />
      <Pricing />
      <Footer />
    </>
  );
};

export default Page;
