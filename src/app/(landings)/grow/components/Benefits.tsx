'use client';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {StaticImageData} from 'next/image';
import React from "react";

type Benefit = {
    id: number;
    title: string;
    description: string;
    image?: StaticImageData;
};

const benefitsData: Benefit[] = [
    {
        id: 1,
        title: '3x More Qualified Leads',
        description:
            'Targeted campaigns that consistently fill your pipeline with ready-to-buy Perth customers every day.',
    },
    {
        id: 2,
        title: '67% Higher Conversions',
        description:
            'Award-winning landing pages designed to turn clicks into paying customers at industry-leading rates.',
    },
    {
        id: 3,
        title: 'Google Domination in 90 Days',
        description:
            'Local SEO mastery that ranks your business at the top for Perth searches, delivering free, high-intent traffic long-term.',
    },
    {
        id: 4,
        title: 'Predictable Revenue Growth',
        description:
            'Scalable marketing campaigns producing reliable monthly returns your business can confidently plan around.',
    }

];

const Benefits = () => {
    return (
        <section className="container mb-lg-5 mb-4 pb-3">
            <h2 className="h1">Our <span className="text-gradient-primary">benefits</span></h2>
            <div className="hr-indicator mb-5"/>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                pagination={{clickable: true}}
                breakpoints={{
                    0: {slidesPerView: 1},
                    500: {slidesPerView: 2},
                    768: {slidesPerView: 3},
                    1200: {slidesPerView: 4},
                }}
                className="mb-xl-3 text-sm-start text-center"
            >
                {benefitsData.map(benefit => (
                    <SwiperSlide key={benefit.id}>
                        <div className="mx-sm-0 mx-auto" style={{maxWidth: '19.125rem'}}>
                            <h4 className="h5 mb-3">{benefit.title}</h4>
                            <p className="mb-0">{benefit.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Benefits;
