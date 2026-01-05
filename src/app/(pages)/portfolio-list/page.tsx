import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import React from 'react';
import PageTitle from './components/PageTitle';
import PortfolioList from './components/PortfolioList';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from '@/components/navbar/Navbar';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Portfolio List View' };

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
          <li className="breadcrumb-item active" aria-current="page">
            Portfolio List View
          </li>
        </ol>
      </nav>
      <PageTitle />
      <PortfolioList />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
