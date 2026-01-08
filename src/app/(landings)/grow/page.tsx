import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Benefits from './components/Benefits';
import {Metadata} from 'next';
import Work from "@/app/(landings)/grow/components/Work";
import Pricing from "@/components/common/Pricing";
import Footer from "@/components/common/Footer";
import HowWork from "@/app/(landings)/grow/components/HowWork";
import Faqs from "@/app/(landings)/grow/components/Faqs";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {title: 'Silicon | Software Dev Agency Landing v.3'};

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
            <Industries/>
            <HowWork/>
            <Faqs/>
            <Benefits/>
            <Pricing/>
            <Footer/>
        </>
    );
};

export default Page;
