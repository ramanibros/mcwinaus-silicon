import React from 'react';
import GridPost from './components/GridPost';
import {Metadata} from 'next';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
        metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "McWIN iTECH Blog – Top Digital Marketing & Tech Tips (2026)",
        description:
            "Explore the McWIN iTECH Blog for top digital marketing, growth & tech insights in Perth WA. Expert tips, trends & strategies to boost your success in 2026.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

        alternates: {
                canonical: "https://www.mcwinitech.com.au/blog/",
        }
};
const Page = () => {
  return (
    <>
      <NavbarPage Headerclass="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none fixed-top" />
      <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
          <li className="breadcrumb-item">
            <Link href="/">
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
