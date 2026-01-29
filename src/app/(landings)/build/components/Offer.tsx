"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import dashboard from '@/assets/img/build-service/dashboard.png';
import Image from 'next/image';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Offer = () => {
    const offerRef = useRef<HTMLDivElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Title animation for "Offer" word - EXACT SAME AS YOUR WORK COMPONENT
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

        // Cleanup ScrollTrigger instances
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="overflow-hidden pt-md-2 pt-lg-3 pb-3 pb-md-4 pb-xl-5 my-5">
            <Container>
                <div className="d-flex flex-column flex-md-row flex-md-nowrap align-items-start">
                    <Col md={7} className="ps-0 pe-lg-4 mb-5 mb-md-0">
                        <div style={{maxWidth: '660px'}}>
                            <h2 ref={h2Ref} className="h1 pb-3 mb-4 mb-md-5">
                                What We <span ref={spanRef} className="text-gradient-primary">Offer</span>
                            </h2>
                            <Row className="row-cols-1 row-cols-sm-2 gx-4 gy-4">
                                <Col>
                                    <div className="feature-card bg-white rounded-3 p-4 border-0 shadow-lg h-100 position-relative overflow-hidden">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="feature-icon-wrapper d-flex align-items-center justify-content-center me-3">
                                                <IconifyIcon
                                                    icon="bx:rocket"
                                                    className="feature-icon text-white"
                                                    style={{fontSize: '1.5rem'}}
                                                />
                                            </div>
                                            <h3 className="h5 fw-bold mb-0 text-dark">Proven Perth Expertise</h3>
                                        </div>
                                        <p className="text-muted mb-0 lh-base ps-5">
                                            25+ local developers delivering 3x faster builds with guaranteed results.
                                        </p>
                                        <div className="position-absolute bottom-0 start-0 w-100">
                                            <div className="border-top border-light opacity-50"></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="feature-card bg-white rounded-3 p-4 border-0 shadow-lg h-100 position-relative overflow-hidden">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="feature-icon-wrapper d-flex align-items-center justify-content-center me-3">
                                                <IconifyIcon 
                                                    icon="bx:like" 
                                                    className="feature-icon text-white"
                                                    style={{fontSize: '1.5rem'}}
                                                />
                                            </div>
                                            <h3 className="h5 fw-bold mb-0 text-dark">Success Guarantee</h3>
                                        </div>
                                        <p className="text-muted mb-0 lh-base ps-5">
                                            67% higher conversions, or we keep optimising—your growth is guaranteed.
                                        </p>
                                        <div className="position-absolute bottom-0 start-0 w-100">
                                            <div className="border-top border-light opacity-50"></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="feature-card bg-white rounded-3 p-4 border-0 shadow-lg h-100 position-relative overflow-hidden">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="feature-icon-wrapper d-flex align-items-center justify-content-center me-3">
                                                <IconifyIcon 
                                                    icon="bx:group" 
                                                    className="feature-icon text-white"
                                                    style={{fontSize: '1.5rem'}}
                                                />
                                            </div>
                                            <h3 className="h5 fw-bold mb-0 text-dark">Award-Winning Team</h3>
                                        </div>
                                        <p className="text-muted mb-0 lh-base ps-5">
                                            Perth's top IT professionals who genuinely care about your success.
                                        </p>
                                        <div className="position-absolute bottom-0 start-0 w-100">
                                            <div className="border-top border-light opacity-50"></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="feature-card bg-white rounded-3 p-4 border-0 shadow-lg h-100 position-relative overflow-hidden">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="feature-icon-wrapper d-flex align-items-center justify-content-center me-3">
                                                <IconifyIcon
                                                    icon="bx:time-five"
                                                    className="feature-icon text-white"
                                                    style={{fontSize: '1.5rem'}}
                                                />
                                            </div>
                                            <h3 className="h5 fw-bold mb-0 text-dark">On Time Delivery</h3>
                                        </div>
                                        <p className="text-muted mb-0 lh-base ps-5">
                                            Projects live 2x faster than competitors, revenue-ready from day one.
                                        </p>
                                        <div className="position-absolute bottom-0 start-0 w-100">
                                            <div className="border-top border-light opacity-50"></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Image 
                        src={dashboard} 
                        width="836" 
                        className="ms-3 ms-sm-5 ms-xl-3 shadow-lg rounded-4" 
                        alt="Dashboard"
                        style={{maxWidth: '100%', height: 'auto'}}
                    />
                </div>
            </Container>
            <style jsx global>{`
                .feature-card {
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    border: none !important;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
                }

                .feature-icon-wrapper {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }

                .feature-card:hover .feature-icon-wrapper {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
                }

                /* EXACT SAME TEXT GRADIENT ANIMATION AS IN WORK COMPONENT */
                .text-gradient-primary {
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    background-size: 200% 200%;
                    background-position: 100% 0%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }

                .feature-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(to bottom, #667eea, #764ba2);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .feature-card:hover::before {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default Offer;