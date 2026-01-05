import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Brand from './components/Brand';
import Leaders from './components/Leaders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

export const metadata: Metadata = { title: 'Silicon | About v.2' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <Hero />
      <nav className="container py-4 mb-2 my-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/index">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            About v.1
          </li>
        </ol>
      </nav>
      <About />
      <Stats />
      <Gallery />
      <Brand />
      <Testimonials />
      <Leaders />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
