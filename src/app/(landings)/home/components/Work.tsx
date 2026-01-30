"use client";

import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Col, Row} from "react-bootstrap";
import {FaCode, FaPencilRuler, FaRocket, FaSearch} from 'react-icons/fa';

import Step1Dark from '@/assets/img/landing/online-courses/steps/01-dark.svg';
import Step1Light from '@/assets/img/landing/online-courses/steps/01-light.svg';
import Step2Dark from '@/assets/img/landing/online-courses/steps/02-dark.svg';
import Step2Light from '@/assets/img/landing/online-courses/steps/02-light.svg';
import Step3Dark from '@/assets/img/landing/online-courses/steps/03-dark.svg';
import Step3Light from '@/assets/img/landing/online-courses/steps/03-light.svg';
import Step4Dark from '@/assets/img/landing/online-courses/steps/04-dark.svg';
import Step4Light from '@/assets/img/landing/online-courses/steps/04-light.svg';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Work = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Gradient backgrounds
    const stepGradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];

    useEffect(() => {
        // Initialize ref array
        stepRefs.current = stepRefs.current.slice(0, 4);

        // Wait for DOM to be ready
        setTimeout(() => {
            // ANIMATION FOR MAIN TITLE
            const mainTitle = document.querySelector('.main-title');
            if (mainTitle) {
                gsap.fromTo(mainTitle,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: mainTitle,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }

            // ANIMATION FOR MAIN DESCRIPTION
            const mainDesc = document.querySelector('.section-description');
            if (mainDesc) {
                gsap.fromTo(mainDesc,
                    {
                        opacity: 0,
                        y: 30
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: mainDesc,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }

            // ANIMATIONS FOR ALL STEPS - SIMPLE APPROACH
            const steps = document.querySelectorAll('.step');

            steps.forEach((step, index) => {
                // Get all elements for this step
                const circle = step.querySelector('.step-icon-inner');
                const image = step.querySelector('.step-image');
                const title = step.querySelector('.step-title');
                const desc = step.querySelector('.step-desc');

                if (circle) {
                    // Circle animation - simple zoom in
                    gsap.fromTo(circle,
                        {
                            scale: 0,
                            opacity: 0
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.6,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: step,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );
                }

                if (image) {
                    // Image animation
                    gsap.fromTo(image,
                        {
                            x: index % 2 === 0 ? -60 : 60,
                            opacity: 0
                        },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.7,
                            delay: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: step,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );
                }

                if (title) {
                    // Title animation
                    gsap.fromTo(title,
                        {
                            y: 40,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            delay: 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: step,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );
                }

                if (desc) {
                    // Description animation
                    gsap.fromTo(desc,
                        {
                            y: 50,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.7,
                            delay: 0.3,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: step,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );
                }
            });

        }, 100); // Small delay to ensure DOM is ready

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="container pt-4 pt-lg-0 pb-4 pb-lg-5 mt-5">
            <h2 className="h1 text-center pb-md-0 main-title">
                Our Proven <span className="text-gradient-primary">4-Step</span> Process
            </h2>
            <Row className="align-items-center pb-5 mb-lg-2 text-center">
                <Col md={12} className="text-center">
                    <p className="fs-lg text-muted mb-md-0 section-description">
                        Clear, transparent, results-focused—Perth's most reliable path to 3x business growth. Local team
                        delivers guaranteed long-term success without wasting time or budget.
                    </p>
                </Col>
            </Row>
            <div className="steps">
                {/* Step 1 */}
                <div
                    ref={(el) => {
                        stepRefs.current[0] = el;
                    }}
                    className="step pt-0 pt-md-3 pb-5"
                >
                    <div className="step-number">
                        <div
                            className="step-icon-inner d-flex align-items-center justify-content-center"
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: stepGradients[0],
                                color: 'white',
                                fontSize: '2rem',
                                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.5)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <FaSearch style={{position: 'relative', zIndex: 1}}/>
                        </div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div className="d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5 step-image">
                            <Image src={Step1Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step1Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div className="ps-md-4 ps-xl-5">
                            <h3 className="h4 step-title">
                                Plan & Discover
                            </h3>
                            <p className="mb-0 step-desc">
                                A Deep-dive strategy session uncovers your goals, maps Perth market dynamics, and aligns
                                budget reality. A Custom growth roadmap eliminates guesswork—your success blueprint
                                approved before work begins.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div
                    ref={(el) => {
                        stepRefs.current[1] = el;
                    }}
                    className="step pt-0 pt-md-4 pb-5"
                >
                    <div className="step-number">
                        <div
                            className="step-icon-inner d-flex align-items-center justify-content-center"
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: stepGradients[1],
                                color: 'white',
                                fontSize: '2rem',
                                boxShadow: '0 8px 25px rgba(245, 87, 108, 0.5)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <FaPencilRuler style={{position: 'relative', zIndex: 1}}/>
                        </div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div className="d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5 step-image">
                            <Image src={Step2Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step2Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div className="ps-md-4 ps-xl-5">
                            <h3 className="h4 step-title">
                                Design & Prototype
                            </h3>
                            <p className="mb-0 step-desc">
                                Visualise revenue first—interactive wireframes, mockups, and user journeys,
                                client-approved before coding starts. 67% higher conversion designs locked in, no
                                surprises, Perth-first aesthetics guaranteed.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div
                    ref={(el) => {
                        stepRefs.current[2] = el;
                    }}
                    className="step pt-0 pt-md-4 pb-5"
                >
                    <div className="step-number">
                        <div
                            className="step-icon-inner d-flex align-items-center justify-content-center"
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: stepGradients[2],
                                color: 'white',
                                fontSize: '2rem',
                                boxShadow: '0 8px 25px rgba(79, 172, 254, 0.5)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <FaCode style={{position: 'relative', zIndex: 1}}/>
                        </div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div className="d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5 step-image">
                            <Image src={Step3Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step3Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div className="ps-md-4 ps-xl-5">
                            <h3 className="h4 step-title">
                                Build & Optimise
                            </h3>
                            <p className="mb-0 step-desc">
                                Speed and conversions guaranteed. Mobile-first, SEO-optimised, Core Web Vitals
                                domination—platforms delivering 3x online performance. Award-winning Perth developers
                                perfect every pixel and function.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div
                    ref={(el) => {
                        stepRefs.current[3] = el;
                    }}
                    className="step pt-0 pt-md-4 pb-5"
                >
                    <div className="step-number">
                        <div
                            className="step-icon-inner d-flex align-items-center justify-content-center"
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: stepGradients[3],
                                color: 'white',
                                fontSize: '2rem',
                                boxShadow: '0 8px 25px rgba(67, 233, 123, 0.5)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <FaRocket style={{position: 'relative', zIndex: 1}}/>
                        </div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div className="d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5 step-image">
                            <Image src={Step4Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step4Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div className="ps-md-4 ps-xl-5">
                            <h3 className="h4 step-title">
                                Launch & Scale (Week 7+)
                            </h3>
                            <p className="mb-0 step-desc">
                                Go live with total confidence. 99.9% uptime, 24/7 monitoring, continuous A/B testing,
                                and growth strategies are included. Your growth partner ensures platforms scale 10x
                                seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;