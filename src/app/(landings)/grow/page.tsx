import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import {Metadata} from 'next';
import Work from "@/app/(landings)/grow/components/Work";
import Pricing from "@/components/common/Pricing";
import Footer from "@/components/common/Footer";
import HowWork from "@/app/(landings)/grow/components/HowWork";
import Faqs from "@/app/(landings)/grow/components/Faqs";
import Navbar from "@/components/navbar/Navbar";
import Portfolio from "@/app/(landings)/grow/components/Portfolio";
import Package from "@/app/(landings)/grow/components/package";

export const metadata: Metadata = {title: 'Grow | McWIN iTECH'};

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
            <Pricing/>
            <Footer/>
        </>
    );
};

export default Page;
