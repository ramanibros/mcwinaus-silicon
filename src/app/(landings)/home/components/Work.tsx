"use client";

import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Col, Row} from "react-bootstrap";

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
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);
    const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Added refs for h2 animation
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Initialize ref arrays with proper types
        stepRefs.current = stepRefs.current.slice(0, 4);
        imageRefs.current = imageRefs.current.slice(0, 4);
        textRefs.current = textRefs.current.slice(0, 4);
        numberRefs.current = numberRefs.current.slice(0, 4);

        const ctx = gsap.context(() => {
            // NEW: H2 Animation (same as other components)
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

            // Remove or comment out the old title animation since we have new one above
            // gsap.from('.section-title', {
            //   scrollTrigger: {
            //     trigger: sectionRef.current,
            //     start: 'top 85%',
            //     toggleActions: 'play none none reverse',
            //   },
            //   y: 40,
            //   opacity: 0,
            //   duration: 0.8,
            //   ease: 'power3.out',
            // });

            // Description animation
            gsap.from('.section-description', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                y: 30,
                opacity: 0,
                duration: 0.7,
                delay: 0.2,
                ease: 'power3.out',
            });

            // Step animations
            stepRefs.current.forEach((step, index) => {
                if (!step) return;

                // Step number animation
                const numberEl = numberRefs.current[index];
                if (numberEl) {
                    gsap.from(numberEl, {
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                        scale: 0,
                        rotation: -180,
                        opacity: 0,
                        duration: 0.6,
                        ease: 'back.out(1.5)',
                    });
                }

                // Image animation
                const imageEl = imageRefs.current[index];
                if (imageEl) {
                    gsap.from(imageEl, {
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        },
                        x: index % 2 === 0 ? -50 : 50,
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        delay: 0.1,
                        ease: 'power3.out',
                    });
                }

                // Text animation
                const textEl = textRefs.current[index];
                if (textEl) {
                    gsap.from(textEl, {
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 70%',
                            toggleActions: 'play none none reverse',
                        },
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                        delay: 0.2,
                        ease: 'power3.out',
                    });
                }

                // Add hover effect to step numbers
                if (numberEl) {
                    numberEl.addEventListener('mouseenter', () => {
                        gsap.to(numberEl, {
                            scale: 1.1,
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    });

                    numberEl.addEventListener('mouseleave', () => {
                        gsap.to(numberEl, {
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    });
                }
            });

        }, sectionRef);

        // Cleanup for h2 animation
        return () => {
            ctx.revert();

            const triggers = ScrollTrigger.getAll();
            triggers.forEach(trigger => {
                if (h2Ref.current && trigger.trigger === h2Ref.current) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <section ref={sectionRef} className="container pt-4 pt-lg-0 pb-4 pb-lg-5 mt-5">
            {/* Updated h2 with refs */}
            <h2 ref={h2Ref} className="h1 text-center pb-md-0">
                Our Proven <span ref={spanRef} className="text-gradient-primary">4-Step</span> Process
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
                            ref={(el) => {
                              numberRefs.current[0] = el;
                            }}
                            className="step-number-inner"
                        >
                            1
                        </div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div
                            ref={(el) => {
                              imageRefs.current[0] = el;
                            }}
                            className="d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
                        >
                            <Image src={Step1Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step1Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div
                            ref={(el) => {
                              textRefs.current[0] = el;
                            }}
                            className="ps-md-4 ps-xl-5"
                        >
                            <h3 className="h4">Plan & Discover</h3>
                            <p className="mb-0">
                               A Deep-dive strategy session uncovers your goals, maps Perth market dynamics, and aligns
                                budget reality.A Custom growth roadmap eliminates guesswork—your success blueprint
                                approved before work begins.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div
                    ref={(el) => {
                      stepRefs.current[0] = el;
                    }}
                    className="step pt-0 pt-md-4 pb-5"
                >
                    <div className="step-number">
                        <div
                            ref={(el) => {
                              numberRefs.current[0] = el;
                            }}
                            className="step-number-inner"
                        >
                            2
                        </div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div
                            ref={(el) => {
                              imageRefs.current[0] = el;
                            }}
                            className="d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
                        >
                            <Image src={Step2Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step2Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div
                            ref={(el) => {
                              textRefs.current[0] = el;
                            }}
                            className="ps-md-4 ps-xl-5"
                        >
                            <h3 className="h4">Design & Prototype</h3>
                            <p className="mb-0">
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
                      stepRefs.current[0] = el;
                    }}
                    className="step pt-0 pt-md-4 pb-5"
                >
                    <div className="step-number">
                        <div
                            ref={(el) => {
                              numberRefs.current[0] = el;
                            }}
                            className="step-number-inner"
                        >
                            3
                        </div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div
                            ref={(el) => {
                              imageRefs.current[0] = el;
                            }}
                            className="d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
                        >
                            <Image src={Step3Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step3Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div
                            ref={(el) => {
                              textRefs.current[0] = el;
                            }}
                            className="ps-md-4 ps-xl-5"
                        >
                            <h3 className="h4">Build & Optimise</h3>
                            <p className="mb-0">
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
                      stepRefs.current[0] = el;
                    }}
                    className="step pt-0 pt-md-4 pb-5"
                >
                    <div className="step-number">
                        <div
                            ref={(el) => {
                              numberRefs.current[0] = el;
                            }}
                            className="step-number-inner"
                        >
                            4
                        </div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div
                            ref={(el) => {
                              imageRefs.current[0] = el;
                            }}
                            className="d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
                        >
                            <Image src={Step4Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step4Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div
                            ref={(el) => {
                              textRefs.current[0] = el;
                            }}
                            className="ps-md-4 ps-xl-5"
                        >
                            <h3 className="h4">Launch & Scale (Week 7+)</h3>
                            <p className="mb-0">
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