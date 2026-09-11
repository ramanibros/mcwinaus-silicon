import React from 'react';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';
import NavbarPage from '@/components/navbar/Navbar-page';
import Subscribe from '@/components/common/subscribe';
import Footer from '@/components/common/Footer';
import GridCaseStudies from './components/GridCaseStudies';

export const metadata = {
    metadataBase: new URL('https://www.mcwinitech.com.au/'),
    title: 'Case Studies | McWIN iTECH',
    description:
        'Explore McWIN iTECH case studies across software development, mobile app development, and SEO campaigns with real project outcomes.',
    alternates: {
        canonical: 'https://www.mcwinitech.com.au/case-studies/'
    }
};

const Page = () => {
    return (
        <>
            <NavbarPage Headerclass="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none fixed-top"/>

            <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 pt-5">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            <IconifyIcon icon="bx:home-alt" className="fs-lg me-1"/>
                            Home
                        </Link>
                    </li>
                    <span className="d-flex align-items-center mx-2">
                        <IconifyIcon icon="bx:chevrons-right"/>
                    </span>
                    <li className="breadcrumb-item active" aria-current="page">
                        Case Studies
                    </li>
                </ol>
            </nav>

            <section className="container mt-4 pb-2">
                <div className="mb-4">
                    <h1 className="mb-2">Case Studies</h1>
                    <p className="text-muted mb-0">
                        Real projects delivered across development, HR platforms, and SEO growth.
                    </p>
                </div>
            </section>

            <section className="container mb-lg-5 pt-lg-2 pb-5">
                <GridCaseStudies/>
            </section>

            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
