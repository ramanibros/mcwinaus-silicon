import React from 'react';
import Hero from './components/Hero';
import NavbarPage from "@/components/navbar/Navbar-page";
import Footer from "@/components/common/Footer";
import Subscribe from "@/components/common/subscribe";
import Work from "@/app/(landings)/build/components/Work";
import HowWork from "@/app/(landings)/build/components/HowWork";
import Offer from "@/app/(landings)/build/components/Offer";
import Faqs from "@/app/(landings)/build/components/Faqs";
import Solutions from "@/app/(landings)/build/components/Solutions";
import Benefits from "@/app/(landings)/build/components/Benefits";
import Package from "@/app/(landings)/build/components/package";
import Portfolio from "@/components/common/Portfolio";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "Build Websites, eCommerce, Mobile Apps & Custom Software | McWIN iTECH ",
        description:
            "Build high-performance websites, eCommerce platforms, mobile apps, and custom software with McWin iTech. Scalable, secure, and business-ready solutions.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/build/",
    },
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/build/",
        siteName: "McWIN iTECH",
        title: "Scale Your Business – #1 Digital Growth Services in Perth WA (2026)",
        description: "Scale your business with McWIN iTECH's top Perth WA growth services. Expert strategies, faster results & measurable success for business growth in 2026.",
        images: [
            {
                url: "https://www.mcwinitech.com.au/images/McWIN_iTECH.png",
                width: 1200,
                height: 630,
                alt: "McWIN iTECH - Digital Growth Services Perth WA",
            },
        ],
    },

    // Twitter Card Tags
    twitter: {
        card: "summary_large_image",
        site: "@mcwinitech",
        creator: "@mcwinitech",
        title: "Scale Your Business – #1 Digital Growth Services in Perth WA (2026)",
        description: "Scale your business with McWIN iTECH's top Perth WA growth services. Expert strategies, faster results & measurable success for business growth in 2026.",
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
                Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
                headerSticky="navbar-stuck"
            />
            <section className="position-relative">
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
            <Work/>
            <Solutions/>
            <Offer/>
            <Portfolio/>
            <HowWork/>
            <Faqs/>
            <Benefits/>
            <Package/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
