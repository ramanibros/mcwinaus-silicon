import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import React from 'react';
import PageContent from './components/PageContent';
import BlogSimple from './components/BlogSimple';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Blog Simple Feed' };

const Page = () => {
  return (
    <>
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none fixed-top" />
      <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
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
            Blog Simple Feed
          </li>
        </ol>
      </nav>
      <PageContent />
      <BlogSimple />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
