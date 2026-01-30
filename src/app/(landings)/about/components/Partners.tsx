'use client';
import React, {useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import clutchDark from '@/assets/img/about/clutch-logo-dark.svg';
import clutchLight from '@/assets/img/about/clutch-logo-light.svg';
import membersLight from '@/assets/img/about/members-light.png';
import membersDark from '@/assets/img/about/members-dark.png';
import chatLight from '@/assets/img/about/chat-light.svg';
import chatDark from '@/assets/img/about/chat-dark.svg';
import graphBg from '@/assets/img/about/graph.svg';

import brand01 from '@/assets/img/client/cl-1.png';
import brand02 from '@/assets/img/client/cl-2.png';
import brand03 from '@/assets/img/client/cl-3.png';
import brand04 from '@/assets/img/client/cl-4.png';
import brand05 from '@/assets/img/client/cl-5.png';
import brand06 from '@/assets/img/client/cl-6.png';
import brand07 from '@/assets/img/client/cl-7.png';
import brand08 from '@/assets/img/client/cl-8.png';

import Image from 'next/image';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const brandLogos = [brand01, brand02, brand03, brand04, brand05, brand06, brand07, brand08];

const Partners = () => {
    const containerRef = useRef(null);
    const glassCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const backgroundShapesRef = useRef<HTMLDivElement[]>([]);

    // Refs for text animation ONLY for the heading
    const staticTextRef = useRef<HTMLSpanElement>(null);
    const gradientTextRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // TEXT ANIMATION ONLY - Exact same as About page
        if (staticTextRef.current && gradientTextRef.current) {
            const staticText = staticTextRef.current;
            const gradientText = gradientTextRef.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: staticText.closest('h2'),
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                    markers: false,
                }
            });

            // Animate the static text ("Company built by")
            tl.fromTo(staticText,
                {opacity: 0, y: 50},
                {opacity: 1, y: 0, duration: 1, ease: "power2.out"}
            );

            // Animate the gradient text ("Perth innovators") with EXACT same effects
            tl.fromTo(gradientText,
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

        // Keep existing glass box animations (no ScrollTrigger on these)
        createBackgroundShapes();

        glassCardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 100,
                        scale: 0.8,
                        rotationX: -20,
                        rotationY: -5
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotationX: 0,
                        rotationY: 0,
                        duration: 1.2,
                        delay: 0.5 + (index * 0.4),
                        ease: "back.out(2)",
                        onComplete: () => {
                            // Add subtle floating animation after entrance
                            gsap.to(card, {
                                y: -8,
                                duration: 3,
                                repeat: -1,
                                yoyo: true,
                                ease: "sine.inOut",
                                delay: 1
                            });
                        }
                    }
                );

                // Keep existing hover effects
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -15,
                        scale: 1.05,
                        rotationY: 5,
                        duration: 0.4,
                        ease: "power2.out",
                        boxShadow: '0 25px 50px rgba(79, 70, 229, 0.3)'
                    });

                    gsap.to(card, {
                        borderColor: 'rgba(79, 70, 229, 0.5)',
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: -8,
                        scale: 1,
                        rotationY: 0,
                        duration: 0.4,
                        ease: "power2.out",
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
                    });

                    gsap.to(card, {
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            backgroundShapesRef.current.forEach(el => {
                if (el && el.parentNode) {
                    el.parentNode.removeChild(el);
                }
            });
        };
    }, []);

    const createBackgroundShapes = () => {
        const container = containerRef.current;
        if (!container) return;

        // Simple shapes: circles, squares, triangles
        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            const size = Math.random() * 60 + 20;
            const shapeType = Math.floor(Math.random() * 3);

            shape.style.position = 'absolute';
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.zIndex = '0';
            shape.style.pointerEvents = 'none';
            shape.style.opacity = '0.08';

            if (shapeType === 0) {
                shape.style.borderRadius = '50%';
                shape.style.backgroundColor = '#4f46e5';
            } else if (shapeType === 1) {
                shape.style.borderRadius = '4px';
                shape.style.backgroundColor = '#7c3aed';
            } else {
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderLeft = `${size / 2}px solid transparent`;
                shape.style.borderRight = `${size / 2}px solid transparent`;
                shape.style.borderBottom = `${size}px solid #ec4899`;
                shape.style.backgroundColor = 'transparent';
            }

            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;

            container.appendChild(shape);
            backgroundShapesRef.current.push(shape);

            gsap.to(shape, {
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                rotation: Math.random() * 360,
                duration: 10 + Math.random() * 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    };

    return (
        <section
            ref={containerRef}
            className="mb-5 py-lg-4 py-xl-5"
            style={{
                background: '#0f172a',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container className="pt-5">
                <Row className="align-items-center gy-5 pt-2 pt-sm-3 pt-md-4">
                    <Col lg={5} className="text-lg-start text-center">
                        {/* ONLY THIS HEADING GETS ANIMATION - EXACTLY LIKE ABOUT PAGE */}
                        <h2 className="h1 mb-4 pb-lg-2">
                            {/* Static text part */}
                            <span ref={staticTextRef} className="text-white">Company built by </span>

                            {/* Gradient text part - will be animated */}
                            <span ref={gradientTextRef} className="text-gradient-primary">Perth innovators</span>
                        </h2>

                        {/* No animation on this paragraph */}
                        <p className="mb-4 pb-1 pb-sm-2 pb-lg-3 text-white">
                            McWIN iTECH was founded by local Perth entrepreneurs who understand WA market dynamics.
                            We're <b className="text-white">your growth partner</b>, not just another
                            agency—delivering <b className="text-white">proof, not
                            promises,</b> through measurable results that scale with your business.
                        </p>

                        {/* No animation on this button */}
                        <Link href="/contact" className="btn btn-primary">
                            Contact us
                        </Link>
                    </Col>

                    {/* RIGHT SIDE - NO TEXT ANIMATION HERE */}
                    <Col lg={6} className="offset-lg-1">
                        <Row className="row-cols-sm-2 row-cols-1 g-4 align-items-center">
                            <Col>
                                <div
                                    ref={(el: HTMLDivElement | null) => {
                                        glassCardsRef.current[0] = el;
                                    }}
                                    className="enhanced-glass-card glass-card-1"
                                >
                                    <div className="card-body m-xl-3 m-1 text-center">
                                        <Link href="#" className="d-inline-block mb-4 pb-2">
                                            <Image
                                                src={clutchDark}
                                                width="116"
                                                alt="Clutch"
                                                className="d-dark-mode-none d-block"
                                            />
                                            <Image
                                                src={clutchLight}
                                                width="116"
                                                alt="Clutch"
                                                className="d-dark-mode-block d-none"
                                            />
                                        </Link>
                                        <h5 className="mb-3 fs-lg fw-normal lh-1 text-white">
                                            <span className="h1 d-block w-100 mb-0 glass-number">100%</span>
                                            Positive Feedback
                                        </h5>
                                        <div className="mb-3 text-nowrap">
                                            {[...Array(5)].map((_, i) => (
                                                <IconifyIcon key={i} icon="bxs:star" className="text-warning fs-sm"/>
                                            ))}
                                        </div>
                                        <Image
                                            src={membersDark}
                                            width="168"
                                            alt="Members"
                                            className="d-dark-mode-none d-block mx-auto"
                                        />
                                        <Image
                                            src={membersLight}
                                            width="168"
                                            alt="Members"
                                            className="d-dark-mode-block d-none mx-auto"
                                        />
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div
                                    ref={(el: HTMLDivElement | null) => {
                                        glassCardsRef.current[1] = el;
                                    }}
                                    className="enhanced-glass-card glass-card-2 mb-4"
                                >
                                    <div className="card-body m-xl-3 m-1 text-center">
                                        <Image
                                            src={chatLight}
                                            width="56"
                                            alt="Icon"
                                            className="d-dark-mode-none d-block mx-auto mb-4"
                                        />
                                        <Image
                                            src={chatDark}
                                            width="56"
                                            alt="Icon"
                                            className="d-dark-mode-block d-none mx-auto mb-4"
                                        />
                                        <h5 className="mb-3 fs-lg fw-normal lh-1 text-white">
                                            <span className="h1 d-block w-100 mb-0 glass-number">24/7</span>
                                            Customer support
                                        </h5>
                                    </div>
                                </div>

                                <div
                                    ref={(el: HTMLDivElement | null) => {
                                        glassCardsRef.current[2] = el;
                                    }}
                                    className="enhanced-glass-card glass-card-3"
                                >
                                    <div
                                        className="card-body m-xl-3 m-1 bg-repeat-0 bg-position-top-end"
                                        style={{backgroundImage: `url(${graphBg.src})`}}
                                    >
                                        <h5 className="mb-3 fs-lg fw-normal lh-1 mt-5 text-white">
                                            <span className="h1 d-block w-100 mb-0 glass-number">+12k</span>
                                            New Leads
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Brand Logos - No animation */}
                <div className="mt-lg-5 mt-sm-2 mt-md-4 pt-4">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation={{
                            prevEl: '#prev-brand',
                            nextEl: '#next-brand',
                        }}
                        pagination={{
                            el: '.brands-pagination',
                            clickable: true,
                        }}
                        loop={true}
                        breakpoints={{
                            0: {slidesPerView: 2, spaceBetween: 8},
                            500: {slidesPerView: 3, spaceBetween: 8},
                            650: {slidesPerView: 4, spaceBetween: 8},
                            900: {slidesPerView: 5, spaceBetween: 8},
                            1100: {slidesPerView: 6, spaceBetween: 8},
                        }}
                        freeMode={{
                            enabled: true,
                            momentum: false,
                        }}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={6000}
                    >
                        {brandLogos.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <Link href="#" className="card card-body bg-transparent border-0 px-2 mx-2">
                                    <Image
                                        src={logo}
                                        className="d-block mx-auto my-2"
                                        width="120"
                                        alt={`Brand ${index + 1}`}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>

            {/* Add global styles for the gradient text animation */}
            <style jsx global>{`
        .text-gradient-primary {
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          background-size: 200% 200%;
        }
      `}</style>

            <style jsx>{`
        .enhanced-glass-card {
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          background: linear-gradient(
            145deg,
            rgba(30, 41, 59, 0.5) 0%,
            rgba(15, 23, 42, 0.7) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.4),
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .glass-card-1 {
          border-color: rgba(79, 70, 229, 0.3);
        }

        .glass-card-2 {
          border-color: rgba(124, 58, 237, 0.3);
        }

        .glass-card-3 {
          border-color: rgba(236, 72, 153, 0.3);
        }

        .enhanced-glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.7s ease;
          z-index: -1;
        }

        .enhanced-glass-card:hover::before {
          left: 100%;
        }

        .enhanced-glass-card:hover {
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 10px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 30px rgba(79, 70, 229, 0.3);
        }

        .glass-number {
          background: linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          display: inline-block;
        }
      `}</style>
        </section>
    );
};

export default Partners;