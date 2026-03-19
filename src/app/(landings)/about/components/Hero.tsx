"use client";

import React, {useEffect, useRef} from 'react';
import heroBg from '@/assets/img/about/hero-bg.svg';
import ClutchDark from '@/assets/img/about/clutch-dark.png';
import ClutchLight from '@/assets/img/about/clutch-light.png';
import Image from 'next/image';
import IconifyIcon from '@/components/IconifyIcon';
import about01 from '@/assets/img/about/hero/Gemini_Generated_Image_k4mhhik4mhhik4mh.png';
import about02 from '@/assets/img/about/hero/Gemini_Generated_Image_a36tgka36tgka36t.png';
import hero03 from '@/assets/img/about/hero/Gemini_Generated_Image_k5c2csk5c2csk5c2.png';
import hero04 from '@/assets/img/about/hero/Gemini_Generated_Image_wris3bwris3bwris.png';
import {Col, Container, Row} from 'react-bootstrap';
import Link from 'next/link';
import gsap from 'gsap';

const Hero = () => {
    const aboutTextRef = useRef(null);
    const mcwinTextRef = useRef(null);
    const statsRef = useRef<(HTMLDivElement | null)[]>([]);
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

    // Target values for counter animation
    const targetValues = [30, 100, 500];

    useEffect(() => {
        // Create a timeline for sequential animations
        const tl = gsap.timeline();

        // 1. TEXT ANIMATION - Animate "About" text
        if (aboutTextRef.current) {
            tl.fromTo(aboutTextRef.current,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        }

        // 2. TEXT ANIMATION - Animate "McWIN iTECH" gradient text
        if (mcwinTextRef.current) {
            tl.fromTo(mcwinTextRef.current,
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.8,
                    rotationX: -90
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 1,
                    ease: "back.out(1.4)"
                },
                "-=0.4" // Overlap with previous animation
            );
        }

        // 3. COUNTER ANIMATION - Numbers counting up
        statsRef.current.forEach((stat, index) => {
            if (stat) {
                const h3Element = stat.querySelector('h3');
                if (h3Element) {
                    // Add fade in animation for the stat container first
                    tl.fromTo(stat,
                        {opacity: 0, y: 30},
                        {opacity: 1, y: 0, duration: 0.6},
                        "-=0.2"
                    );

                    // Then start counting animation
                    setTimeout(() => {
                        const obj = {value: 0};
                        gsap.to(obj, {
                            value: targetValues[index],
                            duration: 2,
                            ease: "power2.out",
                            onUpdate: () => {
                                const displayValue = Math.floor(obj.value);
                                h3Element.textContent = `${displayValue}+`;
                            },
                            onComplete: () => {
                                // Add a subtle pulse when counting completes
                                gsap.to(h3Element, {
                                    scale: 1.1,
                                    duration: 0.3,
                                    yoyo: true,
                                    repeat: 1,
                                    ease: "power2.inOut"
                                });
                            }
                        });
                    }, 1000 + (index * 300)); // Staggered start
                }
            }
        });

        // 4. RIGHT SIDE IMAGE ANIMATION
        const validImages = imagesRef.current.filter(img => img !== null);
        if (validImages.length > 0) {
            tl.fromTo(validImages,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.7,
                    rotation: 5
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "back.out(1.7)"
                },
                "-=0.5"
            );
        }

    }, []);

    return (
        <section className="position-relative pt-5">
            <div
                className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
                style={{backgroundImage: `url(${heroBg.src})`}}
            >
                <div className="d-lg-none" style={{height: '960px'}}></div>
                <div className="d-none d-lg-block" style={{height: '768px'}}></div>
            </div>

            <Container className="position-relative zindex-5 pt-5">
                <Row>
                    <Col lg={6}>
                        <nav className="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4" aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <Link href="/index">
                                        <IconifyIcon icon="bx:home-alt" className="fs-lg me-1"/>
                                        Home
                                    </Link>
                                </li>
                                <span className="d-flex align-items-center mx-2">
                  <IconifyIcon icon="bx:chevrons-right"/>
                </span>
                                <li className="breadcrumb-item active" aria-current="page">
                                    About us
                                </li>
                            </ol>
                        </nav>

                        <h1 className="pb-2 pb-md-3">
                            <span ref={aboutTextRef} style={{display: 'inline-block'}}>About </span>
                            <span ref={mcwinTextRef} className="text-gradient-primary ms-2"
                                  style={{display: 'inline-block'}}>McWIN iTECH</span>
                        </h1>
                        <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" style={{maxWidth: '526px'}}>
                            <b>Perth's trusted digital growth partner</b> delivering award-winning Websites, SEO
                            strategies, Mobile Apps, and Custom Software for Australian businesses—from Perth startups
                            to national leaders. <b>Local team. Long-term results. Your success is guaranteed.</b>
                        </p>

                        <div>
                            <Image src={ClutchDark} className="d-dark-mode-none" width="175" alt="Clutch"/>
                            <Image
                                src={ClutchLight}
                                className="d-none d-dark-mode-block"
                                width="175"
                                alt="Clutch"
                            />
                        </div>

                        <Row className="row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
                            <Col ref={(el: HTMLDivElement | null) => {
                                statsRef.current[0] = el;
                            }}>
                                <h3 className="h2 mb-2">0+</h3>
                                <p className="mb-0">
                                    <strong>IT</strong> Experts
                                </p>
                            </Col>
                            <Col
                                ref={(el: HTMLDivElement | null) => {
                                    statsRef.current[1] = el;
                                }}
                            >
                                <h3 className="h2 mb-2">0+</h3>
                                <p className="mb-0">
                                    <strong>Clients</strong> per Month
                                </p>
                            </Col>
                            <Col
                                ref={(el: HTMLDivElement | null) => {
                                    statsRef.current[2] = el;
                                }}>
                                <h3 className="h2 mb-2">0+</h3>
                                <p className="mb-0">
                                    <strong>Requests</strong> per Week
                                </p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6} className="mt-xl-3 pt-5 pt-lg-4">
                        <Row className="row-cols-2 gx-3 gx-lg-4">
                            <Col className="pt-lg-5 mt-lg-1">
                                <Image
                                    src={about01}
                                    className="d-block rounded-3 mb-3 mb-lg-4"
                                    alt="Image"
                                    ref={(el: HTMLImageElement | null) => {
                                        imagesRef.current[0] = el;
                                    }}
                                />
                                <Image
                                    src={about02}
                                    className="d-block rounded-3"
                                    alt="Image"
                                    ref={(el: HTMLImageElement | null) => {
                                        imagesRef.current[1] = el;
                                    }}
                                />
                            </Col>
                            <Col>
                                <Image
                                    src={hero03}
                                    className="d-block rounded-3 mb-3 mb-lg-4"
                                    alt="Image"
                                    ref={(el: HTMLImageElement | null) => {
                                        imagesRef.current[2] = el;
                                    }}
                                />
                                <Image
                                    src={hero04}
                                    className="d-block rounded-3"
                                    alt="Image"
                                    ref={(el: HTMLImageElement | null) => {
                                        imagesRef.current[3] = el;
                                    }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
        .text-gradient-primary {
          background: linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          background-size: 200% auto;
          animation: shimmer 3s infinite linear;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;