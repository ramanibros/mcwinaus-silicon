import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import {Metadata} from 'next';
import NavbarPage from "@/components/navbar/Navbar-page";
import Partners from "@/app/(landings)/about/components/Partners";
import Faqs from "@/app/(landings)/about/components/Faqs";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Features from "@/app/(landings)/about/components/Features";

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
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
