import React from 'react';
import Navbar from '@/components/navbar/Navbar';
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
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Hero from "@/app/(landings)/home/components/Hero";
import Portfolio from "@/components/common/Portfolio";

/* ================================
   SEO META DATA (AUTO <head>)
================================ */
export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "Scale Your Business – #1 Digital Growth Services in Perth WA (2026) ",
        description:
            "Scale your business with McWIN iTECH’s top Perth WA growth services. Expert strategies, faster results & measurable success for business growth in 2026.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/",
    }
};

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
            <Banner/>
            <Counter/>
            <Work/>
            <NewsSlider/>
            <Brands/>
            <Testimonials/>
            <Industry/>
            <Portfolio/>
            <Faqs/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
