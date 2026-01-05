import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';
import Banking from './components/Banking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Industries from './components/Industries';
import Product from './components/Product';
import Service from './components/Service';

export const metadata: Metadata = { title: 'Silicon | Services v.2' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />

      <nav className="container py-4 mb-lg-2" aria-label="breadcrumb">
        <ol className="breadcrumb pt-lg-3 mb-0">
          <li className="breadcrumb-item">
            <Link href="/index">
              <IconifyIcon className="fs-lg me-1" icon="bx:home-alt" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            Services v.2
          </li>
        </ol>
      </nav>

      <h1 className="container pb-4 mt-n1 mt-lg-0">Services v.2</h1>
      <Service />
      <Banking />
      <Product />
      <Industries />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
