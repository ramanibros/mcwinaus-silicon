import React from 'react';
import Hero from './components/Hero';
import {Metadata} from 'next';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
        metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "Accelerate business growth in Perth | Expert IT Development & Digital Marketing Services",
        description:
            "Drive your business to success in Perth with our expert IT development and digital marketing services. We create customized strategies to optimize your online presence, engage your target audience, and drive significant and sustainable business growth. Partner with us today to unleash your full potential and achieve remarkable success in Perth.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

        alternates: {
                canonical: "https://www.mcwinitech.com.au/",
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
