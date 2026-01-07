import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Industries from './components/Industries';
import {Metadata} from 'next';
import NavbarPage from "@/components/navbar/Navbar-page";
import Features from "@/app/(landings)/brand/components/Features";
import Pricing from "@/components/common/Pricing";
import Footer from "@/components/common/Footer";
import Work from "@/app/(landings)/brand/components/Work";
import Faqs from "@/app/(landings)/brand/components/Faqs";
import HowWork from "@/app/(landings)/brand/components/HowWork";

export const metadata: Metadata = {title: 'Brand | McWIN iTECH'};

const Page = () => {
    return (
        <>
            <NavbarPage
                Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
                headerSticky="navbar-stuck"
            />
            <Hero/>
            <Work/>
            <Features/>
            <About/>
            <HowWork/>
            <Faqs/>
            <Pricing/>
            <Footer/>
        </>
    );
};

export default Page;
