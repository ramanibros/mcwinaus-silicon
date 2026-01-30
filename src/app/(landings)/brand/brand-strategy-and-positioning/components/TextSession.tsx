"use client";

import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import image02 from '@/assets/img/brand-service/Brand_S1.jpg';
import Image from 'next/image';
import {Col, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TextSession = () => {
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Title animation - slide up with fade
        const titleAnimation = gsap.fromTo(
            titleRef.current,
            {
                y: 80,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Image animation - simple fade and slide from left
        const imageAnimation = gsap.fromTo(
            imageRef.current,
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 85%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Cleanup function
        return () => {
            titleAnimation.scrollTrigger?.kill();
            imageAnimation.scrollTrigger?.kill();
            titleAnimation.kill();
            imageAnimation.kill();
        };
    }, []);

    return (
        <section className="container pb-sm-1 pb-md-3">
            <Row className="align-items-lg-center pt-md-3 pb-5 mb-2 mb-lg-4 mb-xl-5">
                <Col md={6} className="order-md-1 mb-4 mb-md-0">
                    <div ref={imageRef} style={{opacity: 0}}>
                        <Image src={image02} className="rounded-3" alt="Image"/>
                    </div>
                </Col>
                <Col md={6} className="order-md-2">
                    <div className="pe-xl-5 me-md-2 me-lg-4">
                        <h2
                            ref={titleRef}
                            className="h1 mb-3 mb-sm-4"
                            style={{opacity: 0}}
                        >
                            Australia's Smartest Brand Positioning
                        </h2>
                        <p className="mb-3 mb-sm-4">
                            Positioning that actually grows your business—not just visual polish. Perth locals who
                            genuinely care about your success, delivering real results without unnecessary
                            complexity.
                        </p>
                        <ul className="list-unstyled mb-0">
                            <li className="d-flex mb-2">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Australia-wide market expertise
                            </li>
                            <li className="d-flex mb-2">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Competitor-led strategic intelligence
                            </li>
                            <li className="d-flex">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Profit-focused brand positioning
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default TextSession;