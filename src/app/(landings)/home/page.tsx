import React from 'react';
import Hero from './components/Hero';
import Navbar from '@/components/navbar/Navbar';
import {Metadata} from 'next';
import Features from '@/app/(landings)/home/components/Features';
import Choose from '@/app/(landings)/home/components/Choose';
import About from '@/app/(landings)/home/components/About';
import Counter from '@/app/(landings)/home/components/Counter';
import Banner from "@/app/(landings)/home/components/Banner";
import Work from "@/app/(landings)/home/components/Work";
import Testimonials from "@/app/(landings)/home/components/Testimonials";
import Brands from "@/app/(landings)/home/components/Brands";
import NewsSlider from "@/app/(landings)/home/components/NewsSlider";
import Industry from "@/app/(landings)/home/components/Industry";
import Faqs from "@/app/(landings)/home/components/Faqs";
import Integrations from "@/app/(landings)/home/components/Integrations";
import Pricing from "@/components/common/Pricing";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {title: 'Accelerate business growth in Perth | Expert IT Development & Digital Marketing Services'};

const Page = () => {
    return (
        <>
            <Navbar
                Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
                headerSticky="navbar-stuck"
                isNavDark={true}
            />
            <Hero/>
            <Integrations/>
            <Features/>
            <About/>
            <Choose/>
            <Counter/>
            <Banner/>
            <Work/>
            {/*<CaseStudies />*/}
            <NewsSlider/>
            <Brands/>
            <Testimonials/>
            <Industry/>
            <Faqs/>
            <Pricing/>
            <Footer/>
        </>
    );
};

export default Page;
