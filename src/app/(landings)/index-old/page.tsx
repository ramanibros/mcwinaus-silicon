import Navbar from '@/components/navbar/Navbar';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LandingPage from './components/LandingPage';
import SiliconFeatures from './components/SiliconFeatures';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon - Multipurpose Technology Bootstrap Template' };

const Page = () => {
  return (
    <>
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light shadow-sm fixed-top" />
      <Hero />
      <Features />
      <LandingPage />
      <SiliconFeatures />
      <Footer />
    </>
  );
};

export default Page;
