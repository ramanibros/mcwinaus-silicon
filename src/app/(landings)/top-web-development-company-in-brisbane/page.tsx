import React from 'react';
import Hero from './components/Hero';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/app/(landings)/top-web-development-company-in-brisbane/components/Subscribe";
import Footer from "@/components/common/Footer";
import Faqs from "@/app/(landings)/top-web-development-company-in-brisbane/components/Faqs";
import HowWork from "@/app/(landings)/top-web-development-company-in-brisbane/components/HowWork";
import Solutions from "@/app/(landings)/top-web-development-company-in-brisbane/components/Solutions";
import Portfolio from "@/app/(landings)/top-web-development-company-in-brisbane/components/Portfolio";
import Description from "@/app/(landings)/top-web-development-company-in-brisbane/components/Description";
import Link from "next/link";
import IconifyIcon from "@/components/IconifyIcon";
import Technology from "@/app/(landings)/top-web-development-company-in-brisbane/components/Technology";
import ProjectTimeline from "@/app/(landings)/top-web-development-company-in-brisbane/components/ProjectTimeline";
import About from "@/app/(landings)/top-web-development-company-in-brisbane/components/About";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Top Web Development Company in Brisbane | Custom Web Design & Development",
    description:
        "Leading web development company in Brisbane. Expert custom web design, e-commerce solutions, and responsive websites to grow your business online.",
    keywords: [
        "Web Development Brisbane",
        "Web Design Brisbane",
        "Custom Website Development Brisbane",
        "E-commerce Development Brisbane",
        "Responsive Web Design Brisbane",
        "Brisbane Web Development Agency",
        "Professional Website Services Brisbane",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/top-web-development-company-in-brisbane/",
    },

    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/top-web-development-company-in-brisbane/",
        siteName: "McWIN iTECH",
        title: "Top Web Development Company in Brisbane | Custom Web Solutions",
        description: "Leading web development company in Brisbane offering custom web design, e-commerce solutions, and professional web development services.",
        images: [
            {
                url: "https://www.mcwinitech.com.au/images/McWIN_iTECH.png",
                width: 1200,
                height: 630,
                alt: "McWIN iTECH - Web Development Brisbane",
            },
        ],
    },

    // Twitter Card Tags
    twitter: {
        card: "summary_large_image",
        site: "@mcwinitech",
        creator: "@mcwinitech",
        title: "Top Web Development Company in Brisbane | Custom Web Solutions",
        description: "Leading web development company in Brisbane offering custom web design, e-commerce solutions, and professional web development services.",
        images: ["https://www.mcwinitech.com.au/images/McWIN_iTECH.png"],
    },

    // Additional Meta Tags
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

};

const Page = () => {
    return (
        <>
            <NavbarPage
                Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
                headerSticky="navbar-stuck"
            />
            <section className="position-relative">
                <nav className="container py-4 mb-md-2 mb-lg-5 mt-lg-3" aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link href="/index">
                                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1"/>
                                Home
                            </Link>
                        </li>
                        <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right"/>
          </span>
                        <li className="breadcrumb-item active" aria-current="page">
                            Top Web Development Company in Brisbane
                        </li>
                    </ol>
                </nav>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"
                    style={{
                        zIndex: -1,
                        background: 'linear-gradient(141deg, rgba(255, 255, 255, 0.01) 17.3%, #F3F6FF 78.21%)',
                    }}
                />
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
                    style={{
                        zIndex: -1,
                        background:
                            'linear-gradient(141deg, rgba(11, 15, 25, 0.01) 17.3%, rgba(255, 255, 255, 0.04) 78.21%)',
                    }}
                />
                <Hero/>
            </section>
            <Description/>
            <Solutions/>
            <About/>
            <ProjectTimeline/>
            <HowWork/>
            <Technology/>
            <Portfolio/>
            <Faqs/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
