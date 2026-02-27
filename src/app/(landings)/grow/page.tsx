import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import Work from "@/app/(landings)/grow/components/Work";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import HowWork from "@/app/(landings)/grow/components/HowWork";
import Faqs from "@/app/(landings)/grow/components/Faqs";
import Navbar from "@/components/navbar/Navbar";
import Package from "@/app/(landings)/grow/components/package";
import Portfolio from "@/components/common/Portfolio";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "Digital Marketing Agency Perth WA | Drive Real Growth | McWIN iTECH ",
        description:
            "Digital Marketing Agency Perth WA helping brands grow through SEO, social media, paid ads, and data-driven strategies customised for Perth businesses.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/grow/",
    },

    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/grow/",
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
