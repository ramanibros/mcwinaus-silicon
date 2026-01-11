'use client';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImageData } from 'next/image';
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
            title: '67% Faster Platforms',
            description:
                'Core Web Vitals optimisation that delivers lightning-fast performance and up to 3× higher conversions.',
        },
        {
            id: 2,
            title: '50% Admin Reduction',
            description:
                'Seamless CRM, payment, and accounting integrations that eliminate manual data entry.',
        },
        {
            id: 3,
            title: '99.9% Uptime Guaranteed',
            description:
                '24/7 Perth-based monitoring ensures your platform stays online and never misses a sale.',
        },
        {
            id: 4,
            title: '10× Scale Ready',
            description:
                'Future-proof architecture built to handle massive growth without costly rebuilds.',
        },
    ];

const Benefits = () => {
  return (
    <section className="container mb-lg-5 mb-4 pb-3">
        <h2 className="h1">Our   <span className="text-gradient-primary">benefits</span></h2>
        <div className="hr-indicator mb-5" />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="mb-xl-3 text-sm-start text-center"
      >
        {benefitsData.map(benefit => (
          <SwiperSlide key={benefit.id}>
            <div className="mx-sm-0 mx-auto" style={{ maxWidth: '19.125rem' }}>
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
