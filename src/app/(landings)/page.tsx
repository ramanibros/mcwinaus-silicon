import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Features from '@/app/(landings)/home/components/Features';
import Choose from '@/app/(landings)/home/components/Choose';
import About from '@/app/(landings)/home/components/About';
import Counter from '@/app/(landings)/home/components/Counter';
import Banner from "@/app/(landings)/home/components/Banner";
import Work from "@/app/(landings)/home/components/Work";
import Testimonials from "@/app/(landings)/home/components/Testimonials";
import Brands from "@/app/(landings)/home/components/Brands";
import NewsSlider from "@/app/(landings)/home/components/NewsSlider";
import Industry from "@/app/(landings)/home/components/Industry";
import Faqs from "@/app/(landings)/home/components/Faqs";
import Integrations from "@/app/(landings)/home/components/Integrations";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Hero from "@/app/(landings)/home/components/Hero";
import Portfolio from "@/components/common/Portfolio";

/* ================================
   SEO META DATA (AUTO <head>)
================================ */
export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Digital Marketing & IT Solutions Perth | McWIN iTECH ",
    description:
        "Perth-based IT and digital marketing agency delivering SEO, custom website, software development, and paid advertising for scalable business growth.",
    keywords: [
        "Software Development Services",
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "Full-Stack Development",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/",
    },

    // Open Graph Tags
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au",
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
            <Integrations/>
            <Features/>
            <About/>
            <Choose/>
            <Banner/>
            <Counter/>
            <Work/>
            <NewsSlider/>
            <Brands/>
            <Testimonials/>
            <Industry/>
            <Portfolio/>
            <Faqs/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
