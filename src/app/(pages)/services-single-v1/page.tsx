import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';
import Brand from './components/Brand';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Offer from './components/Offer';
import PageTitle from './components/PageTitle';
import TextSession from './components/TextSession';
import Work from './components/Work';

export const metadata: Metadata = { title: 'Silicon | Service Details v.1' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <nav className="container py-4 mb-md-2 mb-lg-5 mt-lg-3" aria-label="breadcrumb">
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
            <Link href="/services-v1">Services</Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            Software Development
          </li>
        </ol>
      </nav>
      <PageTitle />
      <Offer />
      <Work />
      <Brand />
      <TextSession />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
