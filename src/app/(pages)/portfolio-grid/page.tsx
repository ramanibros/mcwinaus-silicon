import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';
import Cta from './components/Cta';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export const metadata: Metadata = { title: 'Silicon | Portfolio Grid View' };

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
      <Portfolio />
      <Cta />
      <Footer />
    </>
  );
};

export default Page;
