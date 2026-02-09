import React from 'react';
import Hero from './components/Hero';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Work from "@/app/(landings)/brand/components/Work";
import Faqs from "@/app/(landings)/brand/components/Faqs";
import HowWork from "@/app/(landings)/brand/components/HowWork";
import Solutions from "@/app/(landings)/brand/components/Solutions";
import Benefits from "@/app/(landings)/brand/components/Benefits";
import Package from "@/app/(landings)/brand/components/package";
import Portfolio from "@/components/common/Portfolio";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

        title: "Branding Agency Perth 2026 | Powerful Growth | McWIN iTECH ",
        description:
            "McWIN iTECH is a powerful branding agency in Perth delivering brand strategy, visual identity, UI/UX design and brand implementation to drive real growth in 2026.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/brand/",
    }
};
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
