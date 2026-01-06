import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import {Metadata} from 'next';
import NavbarPage from "@/components/navbar/Navbar-page";
import Partners from "@/app/(landings)/about/components/Partners";
import Features from "@/app/(landings)/home/components/Features";
import Faqs from "@/app/(landings)/about/components/Faqs";
import Pricing from "@/components/common/Pricing";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {title: 'McWIN iTECH | About Us'};

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
            <Pricing/>
            <Footer/>
        </>
    );
};

export default Page;
