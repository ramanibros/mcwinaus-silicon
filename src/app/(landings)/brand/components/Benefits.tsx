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
        title: '3x Brand Authority',
        description:
            'Instant industry leadership through a cohesive visual identity and strategic brand positioning that builds trust and credibility.',
    },
    {
        id: 2,
        title: '67% Higher Conversions',
        description:
            'Performance-driven designs proven to outperform competitors and turn visitors into measurable sales growth.',
    },
    {
        id: 3,
        title: 'Projects 2x Faster',
        description:
            'Award-winning delivery that goes live sooner—without compromising quality or long-term performance.',
    },
    {
        id: 4,
        title: '24/7 Perth Support',
        description:
            'A dedicated local Perth team available anytime, offering a genuine partnership from strategy through launch.',
    },
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
