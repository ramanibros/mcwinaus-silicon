'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import iconIdea from '@/assets/img/landing/digital-agency/icons/idea.svg';
import award from '@/assets/img/landing/digital-agency/icons/award.svg';
import Team from '@/assets/img/landing/digital-agency/icons/team.svg';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

type Benefit = {
  id: number;
  title: string;
  description: string;
  icon: string;
  alt: string;
};

const benefitsData: Benefit[] = [
  {
    id: 1,
    title: 'Creative Solutions',
    description: '3x more sales through high-converting websites and smart SEO that dominate Perth Google rankings—without wasting ad spend.',
    icon: iconIdea,
    alt: 'Bulb icon',
  },
  {
    id: 2,
    title: 'Award Winning',
    description: 'Perth businesses get 67% higher conversions with UI/UX that captivates customers and builds instant authority.\n',
    icon: award,
    alt: 'Award icon',
  },
  {
    id: 3,
    title: 'Local Perth Team',
    description: '20+ certified experts with 5+ years delivering 2x faster projects than competitors. We\'ve got you covered.',
    icon: Team,
    alt: 'Team icon',
  },
];

const Benefits = () => {
  return (
    <section className="container mt-3 mb-5 pt-lg-5" id="benefits">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        className="pt-3"
      >
        {benefitsData.map(benefit => (
          <SwiperSlide key={benefit.id} className="text-center px-2 border-end-lg">
            <Image
              src={benefit.icon}
              alt={benefit.alt}
              width={48}
              className="d-block mb-4 mx-auto"
            />
            <h4 className="mb-2 pb-1">{benefit.title}</h4>
            <p className="mx-auto" style={{ maxWidth: 336 }}>
              {benefit.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Benefits;
