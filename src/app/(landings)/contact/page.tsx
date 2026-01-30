import React from 'react';
import Hero from './components/Hero';
import {Metadata} from 'next';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
        metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "Contact McWIN iTECH Perth WA | #1 Digital Marketing & IT (2026)",
        description:
            "Contact McWIN iTECH in Perth WA for powerful digital marketing & IT services. Talk to experts, get fast support & smart growth solutions in 2026.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

        alternates: {
                canonical: "https://www.mcwinitech.com.au/contact/",
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
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
