import React from 'react';
import Hero from './components/Hero';
import Work from './components/Work';
import Navbar from '@/components/navbar/Navbar';
import {Metadata} from 'next';
import Solutions from "@/app/(landings)/scale/components/Solutions";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Faqs from "@/app/(landings)/scale/components/Faqs";
import Benefits from "@/app/(landings)/scale/components/Benefits";
import Features from "@/app/(landings)/scale/components/Features";
import Portfolio from "@/app/(landings)/scale/components/Portfolio";
import Package from "@/app/(landings)/scale/components/package";

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
            <Portfolio/>
            <Features/>
            <Faqs/>
            <Benefits/>
            {/*<Package/>*/}
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
