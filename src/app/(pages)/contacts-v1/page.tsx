import React from 'react';
import Hero from './components/Hero';
import Email from './components/Email';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Contacts v.1' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <Hero />
      <Email />
      <Faq />
      <Footer />
    </>
  );
};

export default Page;
