import React from 'react';
import Hero from './components/Hero';
import Work from './components/Work';
import Navbar from '@/components/navbar/Navbar';
import Solutions from "@/app/(landings)/scale/components/Solutions";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Faqs from "@/app/(landings)/scale/components/Faqs";
import Benefits from "@/app/(landings)/scale/components/Benefits";
import Features from "@/app/(landings)/scale/components/Features";
import Portfolio from "@/components/common/Portfolio";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Business Growth & Scaling Services Perth WA | McWIN iTECH",
    description:
        "Business growth and scaling services in Perth focused on marketing optimisation, automation, and strategies for long-term, sustainable business expansion.",
    keywords: [
        "Software Development Services",
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "Full-Stack Development",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/scale/",
    },

openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/",
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
            <Navbar
                Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
                headerSticky="navbar-stuck"
                isNavDark={true}
            />
            <Hero/>
            <Work/>
            <Solutions/>
            <Portfolio/>
            <Features/>
            <Faqs/>
            <Benefits/>
            {/*<Package/>*/}
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
