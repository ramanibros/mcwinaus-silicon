import React from 'react';
import Contact from './components/Contact';
import Branches from './components/Branches';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Contacts v.2' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Contact />
      <Branches />
      <Footer />
    </>
  );
};

export default Page;
