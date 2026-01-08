import React from 'react';
import Hero from './components/Hero';
import Video from './components/Video';
import Testimonials from './components/Testimonials';
import {Metadata} from 'next';
import NavbarPage from "@/components/navbar/Navbar-page";
import Footer from "@/components/common/Footer";
import Pricing from "@/components/common/Pricing";
import Work from "@/app/(landings)/build/components/Work";
import Features from "@/app/(landings)/build/components/Features";
import Iconboxes from "@/app/(landings)/build/components/Iconboxes";
import HowWork from "@/app/(landings)/build/components/HowWork";
import Offer from "@/app/(landings)/build/components/Offer";
import Faqs from "@/app/(landings)/build/components/Faqs";
import Solutions from "@/app/(landings)/build/components/Solutions";
import Benefits from "@/app/(landings)/build/components/Benefits";

export const metadata: Metadata = {title: 'Build | McWIN iTECH'};

const Page = () => {
    return (
        <>
            <NavbarPage
                Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
                headerSticky="navbar-stuck"
            />
            <section className="position-relative">
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"
                    style={{
                        zIndex: -1,
                        background: 'linear-gradient(141deg, rgba(255, 255, 255, 0.01) 17.3%, #F3F6FF 78.21%)',
                    }}
                />
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
                    style={{
                        zIndex: -1,
                        background:
                            'linear-gradient(141deg, rgba(11, 15, 25, 0.01) 17.3%, rgba(255, 255, 255, 0.04) 78.21%)',
                    }}
                />
                <Hero/>
            </section>
            <Work/>
            <Solutions/>
            <Offer/>
            <HowWork/>
            <Faqs/>
            <Benefits/>
            <Pricing/>
            <Footer/>
        </>
    );
};

export default Page;
