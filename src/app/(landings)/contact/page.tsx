import React from 'react';
import Hero from './components/Hero';
import {Metadata} from 'next';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {title: 'McWIN iTECH | Contect Us'};

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
