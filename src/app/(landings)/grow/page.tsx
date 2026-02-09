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
    }
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
