import React from 'react';
import Hero from './components/Hero';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "Hire Tech Resources in Perth WA | Contact McWIN iTECH",
        description:
            "Contact McWIN iTECH to hire top tech talent in Perth WA. Work with pre‑vetted developers and scalable teams tailored to your project requirements.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/contact-hire-resource/",
    },

    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/contact-hire-resource/",
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
            <Hero/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
