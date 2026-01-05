import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import Course from './components/Course';
import Cta from './components/Cta';
import Footer from './components/Footer';
import PageTitle from './components/PageTitle';
import Paginations from './components/Paginations';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Courses' };

const Page = () => {
  return (
    <>
      <section className="container">
        <Navbar
          Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
          headerSticky="navbar-stuck"
        />
        <nav className="pt-4 mt-lg-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="/landing-online-courses">
                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
                Home
              </Link>
            </li>
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item active" aria-current="page">
              Courses
            </li>
          </ol>
        </nav>
        <PageTitle />
        <Course />
        <Paginations />
        <Cta />
        <Footer />
      </section>
    </>
  );
};

export default Page;
