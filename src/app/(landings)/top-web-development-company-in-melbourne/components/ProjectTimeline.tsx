'use client';

import React, {useEffect, useRef} from 'react'; // Added useEffect, useRef
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import animationData from '@/assets/json/animation-financial-landing.json';
import {Card, Col, Row} from 'react-bootstrap';
import IconifyIcon from "@/components/IconifyIcon";
import image from "@/assets/img/website-development-service-in-sydney/project-timeline.png";
import Image from "next/image";

const ProjectTimeline: React.FC = () => {
    // Added refs for animation
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    // Added animation effect
    useEffect(() => {
        if (typeof window === 'undefined') return;

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

            // Animate the entire h2
            tl.fromTo(h2Text,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                }
            );

            // Animate the gradient span with a different effect
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
            const triggers = ScrollTrigger.getAll();
            triggers.forEach(trigger => {
                if (h2Ref.current && trigger.trigger === h2Ref.current) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <section className="container mt-5 mb-5">
            <Card className="bg-white border-primary shadow-sm px-4 px-lg-0" data-bs-theme="light">
                <Row className="align-items-center py-3">
                    <Col xl={5} md={6} className="offset-lg-1 text-center text-md-start py-4 py-lg-5">
                        {/* Added ref to h2 and span */}
                        <h2 ref={h2Ref} className="h1">
                            Project <span ref={spanRef}
                                                       className="text-gradient-primary">Timeline</span>
                        </h2>
                        <p>
                            <strong>Predictable delivery</strong> for all <strong>Melbourne web development</strong> projects:
                        </p>
                        <ul className="list-unstyled mb-0">
                            <li className="d-flex mb-2">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Basic Website: 2–4 weeks – Agency portfolios, startup landing pages
                            </li>
                            <li className="d-flex mb-2">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Custom Website: 4–8 weeks – Ecommerce stores, creative showcases
                            </li>
                            <li className="d-flex">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Ecommerce Platform: 6–12 weeks – Shopify Plus, headless commerce
                            </li>
                            <li className="d-flex">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Startup MVP: 4–10 weeks – Scalable SaaS foundations, growth platforms
                            </li>
                        </ul>
                        <br/>
                        <p>
                            90% of Melbourne projects delivered on-time or early.
                        </p>
                    </Col>

                    <Col xl={6} lg={5} md={6}>
                        <div style={{maxWidth: 516, margin: '0 auto'}}>
                            <Image
                                src={image}
                                className="rounded-3 w-100 h-100"
                                alt="About McWIN iTECH"
                                style={{objectFit: 'cover'}}
                                width={600}
                                height={400}
                            />
                        </div>
                    </Col>
                </Row>
            </Card>
        </section>
    );
};

export default ProjectTimeline;