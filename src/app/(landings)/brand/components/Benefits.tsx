'use client';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {StaticImageData} from 'next/image';
import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type Benefit = {
    id: number;
    title: string;
    description: string;
    image?: StaticImageData;
};

const benefitsData: Benefit[] = [
    {
        id: 1,
        title: '67% Higher Conversions',
        description:
            'Proven design patterns and A/B testing create high-performing sales pages that resonate with Perth customers and drive measurable results.',
    },
    {
        id: 2,
        title: '3x Faster Project Delivery',
        description:
            'A local Perth team means no timezone delays—your project goes live faster, so you start generating revenue sooner.',
    },
    {
        id: 3,
        title: 'Future-Proof Investment',
        description:
            'Scalable architecture built to grow from 1K to 100K monthly visitors without costly rebuilds or performance issues.',
    },
    {
        id: 4,
        title: '24/7 Perth Support',
        description:
            'Direct access to your dedicated team—not a call centre. Support is always available when Australian businesses need it most.',
    }
];

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Benefits = () => {
    // Refs for title animation
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Title animation for "benefits" word
        if (h2Ref.current && spanRef.current) {
            const h2Text = h2Ref.current;
            const spanText = spanRef.current;
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: h2Ref.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                    markers: false,
                }
            });

            tl.fromTo(h2Text,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );

            tl.fromTo(spanText,
                {
                    opacity: 0,
                    scale: 0.8,
                    backgroundSize: "200% 200%",
                    backgroundPosition: "100% 0%"
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                    backgroundPosition: "0% 100%",
                },
                "-=0.8"
            );
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="container mb-lg-5 mb-4 pb-3">
            {/* Updated heading with animation refs */}
            <h2 ref={h2Ref} className="h1">
                Our <span ref={spanRef} className="text-gradient-primary">benefits</span>
            </h2>
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

            <style jsx global>{`
                /* Text gradient with animation support */
                .text-gradient-primary {
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    background-size: 200% 200%;
                    background-position: 100% 0%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }
            `}</style>
        </section>
    );
};

export default Benefits;