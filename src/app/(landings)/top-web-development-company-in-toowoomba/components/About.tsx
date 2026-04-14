'use client';
import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import about from '@/assets/img/website-development-service-in-sydney/seo.png';
import Image from 'next/image';
import Link from 'next/link';
import {Col, Row} from 'react-bootstrap';
import {Strong} from "gsap/gsap-core";

const About = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const blob1Ref = useRef<HTMLDivElement>(null);
    const blob2Ref = useRef<HTMLDivElement>(null);
    const blob3Ref = useRef<HTMLDivElement>(null);
    const blobContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        if (h1Ref.current && spanRef.current) {
            const h1Text = h1Ref.current;
            const spanText = spanRef.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                    markers: false,
                }
            });

            tl.fromTo(h1Text,
                {opacity: 0, y: 50},
                {opacity: 1, y: 0, duration: 1, ease: "power2.out"}
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

        // Blob shape animations
        if (blobContainerRef.current) {
            const blob1 = blob1Ref.current;
            const blob2 = blob2Ref.current;
            const blob3 = blob3Ref.current;

            // Entrance animation
            gsap.fromTo(blobContainerRef.current,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: blobContainerRef.current,
                        start: "top 85%",
                        once: true
                    }
                }
            );

            // Blob 1 animation - Main large blob
            if (blob1) {
                gsap.to(blob1, {
                    duration: 20,
                    x: 30,
                    y: -20,
                    scale: 1.1,
                    borderRadius: "60% 40% 40% 60% / 60% 30% 70% 40%",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            // Blob 2 animation - Medium blob
            if (blob2) {
                gsap.to(blob2, {
                    duration: 15,
                    x: -40,
                    y: 30,
                    scale: 1.2,
                    borderRadius: "30% 70% 70% 30% / 50% 50% 50% 50%",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 0.5
                });
            }

            // Blob 3 animation - Small blob
            if (blob3) {
                gsap.to(blob3, {
                    duration: 25,
                    x: 20,
                    y: 40,
                    scale: 1.3,
                    borderRadius: "40% 60% 60% 40% / 40% 60% 40% 60%",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1
                });
            }

            // Opacity pulse animation for all blobs
            gsap.to([blob1, blob2, blob3], {
                opacity: 0.8,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.3
            });

            // Rotation animation
            gsap.to(blobContainerRef.current, {
                rotation: 5,
                duration: 30,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        return () => {
            const triggers = ScrollTrigger.getAll();
            triggers.forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                @keyframes blob-morph-1 {
                    0%, 100% {
                        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    }
                    50% {
                        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                    }
                }

                @keyframes blob-morph-2 {
                    0%, 100% {
                        border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%;
                    }
                    50% {
                        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    }
                }

                @keyframes blob-morph-3 {
                    0%, 100% {
                        border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
                    }
                    50% {
                        border-radius: 70% 30% 40% 60% / 30% 70% 60% 40%;
                    }
                }

                @keyframes blob-pulse {
                    0%, 100% {
                        opacity: 0.6;
                    }
                    50% {
                        opacity: 0.9;
                    }
                }

                .image-section-container {
                    position: relative;
                }

                .blob-container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 0;
                    pointer-events: none;
                    overflow: hidden;
                    border-radius: 12px;
                }

                .blob-shape {
                    position: absolute;
                    filter: blur(40px);
                    opacity: 0.7;
                    mix-blend-mode: screen;
                }

                .blob-1 {
                    width: 300px;
                    height: 300px;
                    top: -50px;
                    right: -50px;
                    background: radial-gradient(
                        circle at center,
                        rgba(59, 130, 246, 0.4) 0%,
                        rgba(147, 51, 234, 0.3) 50%,
                        transparent 80%
                    );
                    animation: blob-morph-1 20s ease-in-out infinite;
                }

                .blob-2 {
                    width: 200px;
                    height: 200px;
                    bottom: -30px;
                    left: -30px;
                    background: radial-gradient(
                        circle at center,
                        rgba(239, 68, 68, 0.3) 0%,
                        rgba(234, 88, 12, 0.2) 50%,
                        transparent 80%
                    );
                    animation: blob-morph-2 15s ease-in-out infinite reverse;
                }

                .blob-3 {
                    width: 150px;
                    height: 150px;
                    top: 40%;
                    right: 30%;
                    background: radial-gradient(
                        circle at center,
                        rgba(34, 197, 94, 0.25) 0%,
                        rgba(59, 130, 246, 0.2) 50%,
                        transparent 80%
                    );
                    animation: blob-morph-3 25s ease-in-out infinite;
                }

                .image-wrapper {
                    position: relative;
                    z-index: 1;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }

                /* Blob glow effects */
                .blob-glow {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: radial-gradient(
                        circle at 70% 30%,
                        rgba(59, 130, 246, 0.1) 0%,
                        rgba(147, 51, 234, 0.05) 25%,
                        transparent 70%
                    );
                    filter: blur(20px);
                    opacity: 0.5;
                    z-index: 0;
                }

                @media (max-width: 768px) {
                    .blob-1 {
                        width: 200px;
                        height: 200px;
                        top: -30px;
                        right: -30px;
                    }

                    .blob-2 {
                        width: 150px;
                        height: 150px;
                        bottom: -20px;
                        left: -20px;
                    }

                    .blob-3 {
                        width: 100px;
                        height: 100px;
                    }

                    .blob-shape {
                        filter: blur(30px);
                    }
                }

                @media (max-width: 480px) {
                    .blob-1 {
                        width: 150px;
                        height: 150px;
                        top: -20px;
                        right: -20px;
                    }

                    .blob-2 {
                        width: 100px;
                        height: 100px;
                        bottom: -15px;
                        left: -15px;
                    }

                    .blob-3 {
                        width: 80px;
                        height: 80px;
                        top: 30%;
                        right: 20%;
                    }

                    .blob-shape {
                        filter: blur(20px);
                    }
                }
            `}</style>

            <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
                <Row className="pt-xl-3">
                    <Col md={5} className="text-center text-md-start pb-5">
                        <h2 ref={h1Ref} className="mb-4 h2-h1">
                            <span ref={spanRef} className="text-gradient-primary">SEO & Performance</span> Optimization
                        </h2>
                        <p className="fs-lg justify-txt">
                            Every McWIN iTECH website launches fully SEO-optimized for Toowoomba dominance:
                        </p>
                        <p><strong> Technical SEO Toowoomba: </strong></p>
                        <ul>
                            <li>On-Page SEO – H1-H6 optimization, meta tags Toowoomba, internal linking</li>
                            <li>Schema Markup – AgriculturalOrganization, AgTechProduct, Farm schemas</li>
                            <li>Core Web Vitals – LCP &lt;1.5s, FID &lt;50ms, CLS &lt;0.1</li>
                            <li>Local SEO Toowoomba – Google Business Profile, citations, Toowoomba suburb targeting (East Toowoomba, Rangeville, Middle Ridge)</li>
                        </ul>
                    </Col>
                    <Col xl={6} md={7}
                         className="offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0 image-section-container">

                        {/* Image Container */}
                        <div className="image-wrapper">
                            <Image
                                src={about}
                                className="rounded-3 w-100 h-100"
                                alt="About McWIN iTECH"
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </Col>
                </Row>
                
                {/* Pricing Table Row */}
                <Row>
                    <Col xs={12}>
                        <div className="pricing-section">
                            <p><strong> Performance Features: </strong></p>
                            <ul>
                                <li>Toowoomba CDN – Cloudflare, AWS CloudFront edge locations</li>
                                <li>Image Optimization – WebP/AVIF satellite imagery, lazy loading, responsive charts</li>
                                <li>Code Splitting – React lazy, dynamic imports, minimal bundle sizes</li>
                                <li>Caching Strategy – Full-page cache, edge-side includes, service workers</li>
                            </ul>
                            <p className="text-center mb-4"></p>
                            <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">
                                Web Development Cost in <span ref={spanRef} className="text-gradient-primary">Toowoomba</span>
                            </h2>
                            <p>Transparent Toowoomba web development pricing with no hidden fees:</p>


                            <div className="table-responsive">
                                <table className="table table-bordered pricing-table">
                                    <thead>
                                        <tr>
                                            <th>Project Type</th>
                                            <th>Price Range</th>
                                            <th>Timeline</th>
                                            <th>Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Business Website</strong></td>
                                            <td>$5,000 – $12,000</td>
                                            <td>2–4 weeks</td>
                                            <td>Farm suppliers, agribusinesses</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Custom Website</strong></td>
                                            <td>$12,000 – $25,000</td>
                                            <td>4–8 weeks</td>
                                            <td>Agricultural contractors, input suppliers</td>
                                        </tr>
                                        <tr>
                                            <td><strong>AgTech Platform</strong></td>
                                            <td>$25,000 – $60,000+</td>
                                            <td>8–14 weeks</td>
                                            <td>Farm management, IoT systems</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Enterprise Farm System</strong></td>
                                            <td>$45,000 – $100,000</td>
                                            <td>12–20 weeks</td>
                                            <td>Large farming operations, co-operatives</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <p className="mt-4 mb-0">
                                <strong>Includes:</strong> Free SEO audit, Toowoomba keyword research, 3 months support, performance guarantee.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default About;