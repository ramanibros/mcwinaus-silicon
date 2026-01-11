import React from 'react';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Work from './components/Work';
import Navbar from '@/components/navbar/Navbar';
import {Metadata} from 'next';
import Solutions from "@/app/(landings)/scale/components/Solutions";
import Pricing from "@/components/common/Pricing";
import Footer from "@/components/common/Footer";
import Faqs from "@/app/(landings)/scale/components/Faqs";
import Benefits from "@/app/(landings)/scale/components/Benefits";
import Features from "@/app/(landings)/scale/components/Features";

export const metadata: Metadata = {title: 'Scale | McWIN iTECH'};

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
            {/*<Comparison/>*/}
            <Features/>
            <Faqs/>
            <Benefits/>
            <Pricing/>
            <Footer/>
        </>
    );
};

export default Page;
