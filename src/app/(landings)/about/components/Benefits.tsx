'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import iconIdea from '@/assets/img/landing/digital-agency/icons/idea.svg';
import award from '@/assets/img/landing/digital-agency/icons/award.svg';
import Team from '@/assets/img/landing/digital-agency/icons/team.svg';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Select all elements within each slide for individual animation
    const slides = containerRef.current.querySelectorAll('.swiper-slide');
    
    slides.forEach((slide, index) => {
      // Create a timeline for each slide
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // Optional: Add markers for debugging
          // markers: true,
        },
      });

      // Get elements within the slide
      const icon = slide.querySelector('img');
      const title = slide.querySelector('h4');
      const description = slide.querySelector('p');

      // Set initial state
      gsap.set([icon, title, description], {
        opacity: 0,
        y: 20,
      });

      // Animate elements with stagger
      tl
        .to(icon, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .to(title, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.4')
        .to(description, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.2');
    });

    // Optional: Animate the entire section container
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      className="container mt-3 mb-5 pt-lg-5" 
      id="benefits"
      ref={sectionRef}
    >
      <div ref={containerRef}>
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
                className="d-block mb-4 mx-auto benefit-icon"
              />
              <h4 className="mb-2 pb-1 benefit-title">{benefit.title}</h4>
              <p className="mx-auto benefit-description" style={{ maxWidth: 336 }}>
                {benefit.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Benefits;