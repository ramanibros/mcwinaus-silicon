import React from 'react';
import Hero from './components/Hero';
import {Metadata} from 'next';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Work from "@/app/(landings)/brand/components/Work";
import Faqs from "@/app/(landings)/brand/components/Faqs";
import HowWork from "@/app/(landings)/brand/components/HowWork";
import Solutions from "@/app/(landings)/brand/components/Solutions";
import Benefits from "@/app/(landings)/brand/components/Benefits";
import Portfolio from "@/app/(landings)/brand/components/Portfolio";
import Package from "@/app/(landings)/brand/components/package";

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
