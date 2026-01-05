import React from 'react';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Portfolio Slider View' };

const Page = () => {
  return (
    <>
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Page;
