'use client';
import React, { useEffect, useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ass1 from '@/assets/img/grow-service/tools/Ahrefslogo.png';
import ass2 from '@/assets/img/grow-service/tools/Google-Search-Console.png';
import ass3 from '@/assets/img/grow-service/tools/Google_analytics.png';
import ass4 from '@/assets/img/grow-service/tools/rankmath.png';
import ass5 from '@/assets/img/grow-service/tools/samrush.png';
import ass6 from '@/assets/img/grow-service/tools/screeming.png';
import ass7 from '@/assets/img/grow-service/tools/spyfu.png';
import ass8 from '@/assets/img/grow-service/tools/yoast.png';

import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import Image from 'next/image';

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
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Title animation for "Your Growth Engine" words
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

        // Animate card bodies on scroll
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
        <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
            <Row className="justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
                <Col lg={8} md={9} className="text-center">
                    <h2 ref={h2Ref} className="h1 mb-4">
                        <span ref={spanRef} className="text-gradient-primary">Your Growth Engine,</span> Built To Scale
                    </h2>
                    <p className="fs-lg text-muted mb-0">
                        Award-winning marketing powered by deep Perth market insight. We've got you covered—turning
                        clicks into customers with strategies that deliver long-term results.
                    </p>
                </Col>
            </Row>

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
                        <Link href="#" className="card card-hover border-0 shadow-sm mx-2">
                            <div
                                ref={(el: HTMLDivElement | null) => {
                                    cardBodiesRef.current[i] = el;
                                }}
                                className="card-body p-3"
                            >
                                <Image 
                                    src={brand.image} 
                                    alt={brand.name} 
                                    className="d-block mx-auto service_tools"
                                    width={80}
                                    height={80}
                                />
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
                
                /* Smooth animations */
                .card-body {
                    will-change: transform, opacity;
                }
            `}</style>
        </Container>
    );
};

export default Work;