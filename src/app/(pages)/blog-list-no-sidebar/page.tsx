import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import React from 'react';
import BlogList from './components/BlogList';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

export const metadata: Metadata = { title: 'Silicon | Blog List No Sidebar' };

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
            Blog List No Sidebars
          </li>
        </ol>
      </nav>
      <BlogList />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
