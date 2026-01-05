import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import React from 'react';
import PageTitle from './components/PageTitle';
import GridPost from './components/GridPost';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import Paginations from './components/Paginations';
import { Metadata } from 'next';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';
import { BreadcrumbItem } from 'react-bootstrap';

export const metadata: Metadata = { title: 'Silicon | Blog grid No Sidebar' };

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
            Blog Grid
          </li>
        </ol>
      </nav>
      <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
        <PageTitle />
        <GridPost />
        <Paginations />
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
