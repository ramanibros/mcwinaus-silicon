import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import NavbarPage from "@/components/navbar/Navbar-page";
import Partners from "@/app/(landings)/about/components/Partners";
import Faqs from "@/app/(landings)/about/components/Faqs";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Features from "@/app/(landings)/about/components/Features";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "About McWIN iTECH – #1 Digital Marketing Experts (2026)",
        description:
            "Learn about McWIN iTECH – top Perth WA digital marketing experts. Discover our mission, success stories & expert team driving results in 2026.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/about/",
    }
};
const Page = () => {
    return (
        <>
            <NavbarPage
                Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
                headerSticky="navbar-stuck"
            />
            <Hero/>
            <Benefits/>
            <Partners/>
            <Features/>
            <Testimonials/>
            <Faqs/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
