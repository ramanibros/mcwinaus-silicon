import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import {Metadata} from 'next';
import Work from "@/app/(landings)/grow/components/Work";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import HowWork from "@/app/(landings)/grow/components/HowWork";
import Faqs from "@/app/(landings)/grow/components/Faqs";
import Navbar from "@/components/navbar/Navbar";
import Portfolio from "@/app/(landings)/grow/components/Portfolio";
import Package from "@/app/(landings)/grow/components/package";

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
