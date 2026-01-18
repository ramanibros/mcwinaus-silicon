import React from 'react';
import GridPost from './components/GridPost';
import {Metadata} from 'next';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = { title: 'Blog | McWIN iTECH' };

const Page = () => {
  return (
    <>
      <NavbarPage Headerclass="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none fixed-top" />
      <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
          <li className="breadcrumb-item">
            <Link href="/home">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>
      <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
        <GridPost />
      </section>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Page;
