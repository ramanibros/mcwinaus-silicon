import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import React from 'react';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Features from './components/Features';
import Contatct from './components/Contatct';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

export const metadata: Metadata = { title: 'Silicon | Services v.1' };

const Page = () => {
  return (
    <>
      <main className="page-wrapper position-relative zindex-2">
        <Navbar
          Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
          headerSticky="navbar-stuck"
        />
        <div className="bg-secondary pt-5" style={{ paddingBottom: '228px' }}>
          <nav className="container pt-5 pb-4 mb-lg-2" aria-label="breadcrumb">
            <ol className="breadcrumb pt-lg-3 mb-0">
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
                Services v.1
              </li>
            </ol>
          </nav>
          <Services />
        </div>
        <Testimonial />
        <Features />
        <Contatct />
      </main>
      <Footer />
    </>
  );
};

export default Page;
