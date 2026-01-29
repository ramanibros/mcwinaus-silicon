'use client';
import React, { useEffect, useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Link from 'next/link';
import {Container} from 'react-bootstrap';
import Image from 'next/image';
import ass1 from "@/assets/img/build-service/tools/angular.png";
import ass2 from "@/assets/img/build-service/tools/java_226777.png";
import ass3 from "@/assets/img/build-service/tools/php_9496483.png";
import ass4 from "@/assets/img/build-service/tools/programing_15484303.png";
import ass5 from "@/assets/img/build-service/tools/python_1387537.png";
import ass6 from "@/assets/img/build-service/tools/science_10303368.png";
import ass7 from "@/assets/img/build-service/tools/shopify_5968919.png";
import ass8 from "@/assets/img/build-service/tools/wordpress_174881.png";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const brands = [
    {name: 'ass1', image: ass1},
    {name: 'ass2', image: ass2},
    {name: 'ass3', image: ass3},
    {name: 'ass4', image: ass4},
    {name: 'ass5', image: ass5},
    {name: 'ass6', image: ass6},
    {name: 'ass7', image: ass7},
    {name: 'ass8', image: ass8},
];

const Work = () => {
    const cardBodiesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Animate card bodies on scroll (EXACT SAME ANIMATION)
        if (cardBodiesRef.current.length > 0) {
            const cardBodies = cardBodiesRef.current.filter(Boolean) as HTMLDivElement[];
            
            cardBodies.forEach((cardBody, index) => {
                // Set initial state - card bodies start hidden
                gsap.set(cardBody, {
                    opacity: 0,
                    scale: 0.8,
                    y: 30
                });

                // Animate each card body when it comes into view
                ScrollTrigger.create({
                    trigger: cardBody,
                    start: 'top 85%',
                    onEnter: () => {
                        gsap.to(cardBody, {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.6,
                            delay: index * 0.1, // slight stagger
                            ease: 'back.out(1.2)'
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(cardBody, {
                            opacity: 0,
                            scale: 0.8,
                            y: 30,
                            duration: 0.4,
                            ease: 'power2.in'
                        });
                    }
                });
            });
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <Container className="my-lg-4 my-xl-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
            <Swiper
                modules={[Pagination]}
                pagination={{clickable: true}}
                spaceBetween={8}
                slidesPerView={2}
                breakpoints={{
                    500: {slidesPerView: 3},
                    600: {slidesPerView: 4},
                    768: {slidesPerView: 5},
                    850: {slidesPerView: 6},
                    1000: {slidesPerView: 7},
                    1200: {slidesPerView: 8},
                }}
                className="mx-n2"
            >
                {brands.map((brand, i) => (
                    <SwiperSlide key={i} className="py-3">
                        <Link href="#" className="card card-hover border-0 shadow-sm py-3 mx-2">
                            <div 
                                ref={(el: HTMLDivElement | null) => {
                                    cardBodiesRef.current[i] = el;
                                }}
                                className="card-body"
                            >
                                <Image src={brand.image} alt={brand.name} className="d-block mx-auto service_tools"/>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                /* Simple hover effect for cards */
                .card-hover {
                    transition: all 0.3s ease;
                    border-radius: 12px;
                    overflow: hidden;
                }
                
                .card-hover:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
                }
                
                .service_tools {
                    transition: all 0.3s ease;
                    filter: grayscale(100%);
                }
                
                .card-hover:hover .service_tools {
                    filter: grayscale(0%);
                    transform: scale(1.1);
                }
                
                /* Smooth animations */
                .card-body {
                    will-change: transform, opacity;
                }
            `}</style>
        </Container>
    );
};

export default Work;