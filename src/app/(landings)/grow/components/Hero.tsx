"use client";

import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import {gsap} from 'gsap';
import {SplitText} from 'gsap/SplitText';
import clutchRating from '@/assets/img/landing/software-agency-3/clutch-rating.png';
import heroBg from '@/assets/img/landing/software-agency-3/hero-bg.png';
import herobg from "@/assets/img/landing/software-agency-2/hero-bg.png";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const growthRef = useRef<HTMLSpanElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);
    const bgOverlayRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth background image animation
            const heroSection = heroRef.current;
            if (heroSection) {
                // Animate the background image zoom effect
                gsap.fromTo(heroSection,
                    {
                        backgroundPosition: "50% 50%",
                        backgroundSize: "120%"
                    },
                    {
                        backgroundPosition: "50% 50%",
                        backgroundSize: "100%",
                        duration: 2.5,
                        ease: "power2.out"
                    }
                );

                // Animate the dark overlay opacity
                if (bgOverlayRef.current) {
                    gsap.fromTo(bgOverlayRef.current,
                        {
                            opacity: 0.9
                        },
                        {
                            opacity: 0.75,
                            duration: 2,
                            ease: "power2.out",
                            delay: 0.5
                        }
                    );
                }
            }

            // Split text animation for "Perth's Leading" and "Partner"
            if (titleRef.current) {
                const splitLeading = new SplitText(titleRef.current.querySelector('.split-text-leading'), {type: "chars"});
                const splitPartner = new SplitText(titleRef.current.querySelector('.split-text-partner'), {type: "chars"});

                gsap.from(splitLeading.chars, {
                    opacity: 0,
                    y: 30,
                    rotationX: -90,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                    delay: 0.5
                });

                gsap.from(splitPartner.chars, {
                    opacity: 0,
                    y: 30,
                    rotationX: -90,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                    delay: 0.8
                });
            }

            // Professional text-only animation for "Growth" word
            if (growthRef.current) {
                // Split the word "Growth" into letters
                const splitGrowth = new SplitText(growthRef.current, {type: "chars"});

                // Animate each letter individually
                gsap.from(splitGrowth.chars, {
                    opacity: 0,
                    y: 40,
                    scale: 1.5,
                    rotation: -10,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    delay: 1.1
                });

                // Add a subtle continuous shimmer effect to the entire word
                gsap.to(growthRef.current, {
                    textShadow: "0 0 10px rgba(13, 110, 253, 0.5)",
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 2.5
                });
            }

            // Fade in animation for right side content
            if (rightContentRef.current) {
                gsap.from(rightContentRef.current, {
                    opacity: 0,
                    x: 50,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.8
                });

                const cards = rightContentRef.current.querySelectorAll('.service-card');
                gsap.from(cards, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.2)",
                    delay: 1.3
                });

                const spinImage = rightContentRef.current.querySelector('.hero-animation-spin');
                if (spinImage) {
                    gsap.from(spinImage, {
                        rotation: 360,
                        opacity: 0,
                        scale: 0,
                        duration: 1.5,
                        ease: "back.out(1.7)",
                        delay: 1
                    });
                }
            }

            // Button entrance animation (from reference code)
            if (buttonRef.current) {
                gsap.fromTo(buttonRef.current,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.8,
                        rotation: -5
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotation: 0,
                        duration: 1,
                        ease: 'elastic.out(1, 0.5)',
                        delay: 1.2
                    }
                );

                // Add continuous subtle pulse animation
                gsap.to(buttonRef.current, {
                    scale: 1.02,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: 2.5
                });
            }

            const clutchImage = document.querySelector('.clutch-rating');
            if (clutchImage) {
                gsap.from(clutchImage, {
                    opacity: 0,
                    x: -20,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 1.5
                });
            }

        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Button hover handlers from reference code
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1.05,
            y: -3,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1.02, // Keep the pulse animation scale
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    return (
        <section
            ref={heroRef}
            className="position-relative d-flex align-items-center min-vh-100 py-5 overflow-hidden jarallax-img"
            style={{
                backgroundImage: `url(${herobg.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
      <span
          ref={bgOverlayRef}
          className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary"
          style={{opacity: 0.75}}
      ></span>
            <Container
                className="position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3"
                data-bs-theme="dark"
            >
                <Row className="gy-5">
                    <Col xl={5} lg={6}>
                        <div className="position-relative zindex-5 text-lg-start text-center">
                            <h1 ref={titleRef} className="display-2 mb-4 pb-lg-3 pb-md-2" style={{fontSize: '65px'}}>
                                <span className="split-text-leading">Perth's Leading</span>{' '}
                                <span ref={growthRef} className="text-primary d-inline-block">Growth</span>{' '}
                                <span className="split-text-partner">Partner</span>
                            </h1>
                            <p className="mb-4 pb-lg-3 pb-md-2 d-flex align-items-center justify-content-center justify-content-lg-start">
                                <span className="me-2 text-light">We are the Top Rated agency on</span>
                                <Image
                                    src={clutchRating}
                                    width={193}
                                    alt="Clutch rating"
                                    className="mt-n1 clutch-rating"
                                />
                            </p>
                            
                            {/* Animated Button from reference code */}
                            <Link
                                ref={buttonRef}
                                href="#"
                                className="brand-project-button position-relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="button-text">Start Your Project</span>
                            </Link>
                        </div>
                    </Col>

                    <Col lg={6} xl={{span: 6, offset: 1}} ref={rightContentRef}>
                        <div className="position-relative ms-xl-0 ms-lg-4">
                            <div
                                className="position-absolute top-50 start-50 translate-middle ratio ratio-1x1"
                                style={{width: '125%', maxWidth: '49.75rem'}}
                            >
                                <div className="p-md-0 p-5">
                                    <Image src={heroBg} alt="Shape" className="hero-animation-spin p-md-0 p-5"/>
                                </div>
                            </div>

                            <Row className="position-relative row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
                                <Col>
                                    <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-secondary rounded-3 service-card"
                                            style={{minHeight: '176px', backdropFilter: 'blur(6px)'}}
                                        >
                                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                                <span
                                                    className="hero-animation-fade text-white">Local SEO Domination</span>
                                            </div>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-secondary rounded-3 service-card"
                                            style={{minHeight: '176px', backdropFilter: 'blur(6px)'}}
                                        >
                                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade hero-animation-delay-2 text-white">
                          Meta Ads Mastery
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="mt-sm-5 mt-2 pt-sm-5">
                                    <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-secondary rounded-3 service-card"
                                            style={{minHeight: '176px', backdropFilter: 'blur(6px)'}}
                                        >
                                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade hero-animation-delay-1 text-white">
                          Google Ads Precision
                        </span>
                                            </div>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-secondary rounded-3 service-card"
                                            style={{minHeight: '176px', backdropFilter: 'blur(6px)'}}
                                        >
                                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade hero-animation-delay-3 text-white">
                          LinkedIn Lead Machine
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Add CSS styles from reference code */}
            <style jsx global>{`
                /* Split text animations */
                .split-char {
                    display: inline-block;
                    transform-origin: 50% 50%;
                }
                
                .split-word {
                    display: inline-block;
                }
                
                /* Your button styles with animations */
                .brand-project-button {
                    position: relative;
                    text-decoration: none;
                    color: #fff;
                    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
                    padding: 14px 25px;
                    border-radius: 10px;
                    font-size: 1.25em;
                    cursor: pointer;
                    display: inline-block;
                    border: none;
                    outline: none;
                    will-change: transform;
                    transition: none; /* GSAP handles animations */
                }
                
                .brand-project-button .button-text {
                    position: relative;
                    z-index: 1;
                    font-weight: 600;
                }
                
                .brand-project-button::before {
                    content: "";
                    position: absolute;
                    inset: 1px;
                    background: #272727;
                    border-radius: 9px;
                    transition: opacity 0.5s ease;
                }
                
                .brand-project-button:hover::before {
                    opacity: 0.7;
                }
                
                .brand-project-button::after {
                    content: "";
                    position: absolute;
                    inset: 0px;
                    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
                    border-radius: 9px;
                    transition: opacity 0.5s ease;
                    opacity: 0;
                    filter: blur(20px);
                }
                
                .brand-project-button:hover::after {
                    opacity: 1;
                }
                
                /* Performance optimization */
                .overflow-hidden {
                    will-change: transform;
                }
            `}</style>
        </section>
    );
};

export default Hero;