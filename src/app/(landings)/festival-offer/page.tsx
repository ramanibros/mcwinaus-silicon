import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import HowWeWork from './components/HowWeWork';
import NotesAndCta from './components/NotesAndCta';
import Footer from '@/components/common/Footer';

export const metadata = {
    metadataBase: new URL('https://www.mcwinitech.com.au/'),

    title: 'Festival Growth Offer | Save Up To 30% – McWIN iTECH',
    description:
        'Special festival pricing on website development, social media content and custom software solutions. 5-page WordPress website for $499, social media package for $179 and custom software quotes.',
    keywords: [
        'festival offer web development',
        'WordPress website offer Perth',
        'social media package deal',
        'custom software development quote',
        'website development discount',
        'digital marketing festival offer',
    ],

    alternates: {
        canonical: 'https://www.mcwinitech.com.au/festival-offer/',
    },

    openGraph: {
        type: 'website',
        locale: 'en_AU',
        url: 'https://www.mcwinitech.com.au/festival-offer',
        siteName: 'McWIN iTECH',
        title: 'Festival Growth Offer | Save Up To 30% – McWIN iTECH',
        description:
            'Special festival pricing on website development, social media content and custom software solutions from McWIN iTECH.',
        images: [
            {
                url: 'https://www.mcwinitech.com.au/images/McWIN_iTECH.png',
                width: 1200,
                height: 630,
                alt: 'McWIN iTECH - Festival Growth Offer',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@mcwinitech',
        creator: '@mcwinitech',
        title: 'Festival Growth Offer | Save Up To 30% – McWIN iTECH',
        description:
            'Special festival pricing on website development, social media content and custom software solutions from McWIN iTECH.',
        images: ['https://www.mcwinitech.com.au/images/McWIN_iTECH.png'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
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
            <ServicesSection/>
            <HowWeWork/>
            <NotesAndCta/>
            <Footer/>
        </>
    );
};

export default Page;
