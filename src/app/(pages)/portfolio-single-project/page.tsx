import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import React from 'react';
import PageTitle from './components/PageTitle';
import Hero from './components/Hero';
import About from './components/About';
import Cta from './components/Cta';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Breadcrumb, BreadcrumbItem, Container } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';
import UserTest from './components/UserTest';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Portfolio Single Project' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <nav className="container py-4 mb-lg-2 mt-lg-3" aria-label="breadcrumb">
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
          <li className="breadcrumb-item">
            <Link href="/portfolio-grid">Portfolio</Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            Single Project
          </li>
        </ol>
      </nav>
      <PageTitle />
      <Hero />
      <About />
      <UserTest />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
