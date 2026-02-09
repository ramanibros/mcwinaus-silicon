"use client";

import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Card, CardBody, Col, Row} from 'react-bootstrap';
import { 
  FiSearch,
  FiShoppingBag,
  FiRefreshCw,
  FiTarget,
  FiTrendingUp,
  FiBarChart2
} from 'react-icons/fi';
import { 
  MdOutlineAnalytics,
  MdOutlineRocketLaunch,
  MdOutlineCampaign,
  MdOutlineSettings,
  MdOutlineDescription,
  MdOutlineTrackChanges
} from 'react-icons/md';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Description = () => {
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            if (h2Ref.current && spanRef.current) {
                const h2Text = h2Ref.current;
                const spanText = spanRef.current;

                gsap.fromTo(h2Text,
                    {opacity: 0, y: 30},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: h2Ref.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                            markers: false,
                        }
                    }
                );

                gsap.fromTo(spanText,
                    {
                        opacity: 0,
                        scale: 0.8,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.2)",
                        scrollTrigger: {
                            trigger: h2Ref.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                            markers: false,
                        }
                    }
                );
            }

            // Card animation
            if (cardRef.current) {
                gsap.fromTo(cardRef.current,
                    {
                        opacity: 0,
                        y: 40,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                            markers: false,
                        }
                    }
                );
            }

            // Step animations
            if (stepRefs.current.length > 0) {
                const stepsContainer = document.querySelector('.steps');
                
                if (stepsContainer) {
                    // Animate step icons
                    const stepIcons = stepRefs.current
                        .filter(Boolean)
                        .map(step => step?.querySelector('.step-icon-wrapper'))
                        .filter(Boolean) as HTMLElement[];

                    gsap.fromTo(stepIcons,
                        {
                            opacity: 0,
                            scale: 0,
                            rotation: -20
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            rotation: 0,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: "back.out(1.4)",
                            scrollTrigger: {
                                trigger: stepsContainer,
                                start: "top 75%",
                                toggleActions: "play none none reverse",
                                markers: false,
                            }
                        }
                    );

                    // Animate step content with delay
                    const stepTitles = stepRefs.current
                        .filter(Boolean)
                        .map(step => step?.querySelector('h4'))
                        .filter(Boolean) as HTMLElement[];

                    const stepTexts = stepRefs.current
                        .filter(Boolean)
                        .map(step => step?.querySelector('p'))
                        .filter(Boolean) as HTMLElement[];

                    gsap.fromTo(stepTitles,
                        {
                            opacity: 0,
                            x: -20
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.5,
                            stagger: 0.15,
                            ease: "power2.out",
                            delay: 0.3,
                            scrollTrigger: {
                                trigger: stepsContainer,
                                start: "top 75%",
                                toggleActions: "play none none reverse",
                                markers: false,
                            }
                        }
                    );

                    gsap.fromTo(stepTexts,
                        {
                            opacity: 0,
                            x: -20
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.5,
                            stagger: 0.2,
                            ease: "power2.out",
                            delay: 0.4,
                            scrollTrigger: {
                                trigger: stepsContainer,
                                start: "top 75%",
                                toggleActions: "play none none reverse",
                                markers: false,
                            }
                        }
                    );
                }
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ctx.revert();
        };
    }, []);

    const steps = [
        {
            icon: <FiSearch size={24} />,
            title: "Google Search Campaign Management",
            description: "High-intent Google Search campaigns targeting users actively looking for your products or services. Keyword strategy, ad copy, and bidding are structured to maximise return while controlling cost per acquisition."
        },
        {
            icon: <FiShoppingBag size={24} />,
            title: "Google Shopping Campaigns",
            description: "Optimised Google Shopping campaigns including product feed structuring, bidding strategy, and performance monitoring—designed to improve visibility and efficiency for Australian eCommerce businesses."
        },
        {
            icon: <FiRefreshCw size={24} />,
            title: "Remarketing & Audience Re-Engagement",
            description: "Remarketing strategies targeting previous visitors, abandoned carts, and high-intent users. Designed to recover lost opportunities and improve conversion efficiency across search and display networks."
        },
        {
            icon: <FiTarget size={24} />,
            title: "Conversion Tracking Setup",
            description: "End-to-end conversion tracking setup including GA4, enhanced conversions, and event tracking—ensuring accurate measurement of leads, sales, and campaign performance."
        },
        {
            icon: <FiTrendingUp size={24} />,
            title: "Smart Bidding Strategies",
            description: "Data-driven bidding strategies such as Target ROAS and Conversion Value optimisation, aligned with your business goals and budget efficiency requirements."
        },
        {
            icon: <FiBarChart2 size={24} />,
            title: "Monthly Campaign Optimisation",
            description: "Ongoing campaign optimisation including keyword refinement, bid adjustments, and performance review. Campaigns are refined regularly to adapt to market changes and maintain efficiency."
        }
    ];

    return (
        <section className="container my-5">
            <Row className="g-lg-5">
                {/* Right Side Content Box - Updated Design */}
                <aside className="col-lg-4 col-md-5 offset-xl-1 order-md-2">
                    <div className="position-sticky" style={{ top: '6rem' }}>
                        <div className="pt-4 pt-md-0 ps-xl-4">
                            <Card 
                                ref={cardRef}
                                className="modern-glass-card border-0 shadow-lg overflow-hidden"
                            >
                                <div className="glass-card-bg"></div>
                                <CardBody className="position-relative z-2 p-4">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                                            <MdOutlineRocketLaunch size={28} className="text-primary" />
                                        </div>
                                        <h4 className="mb-0 fw-bold text-dark">Top-Choice Package</h4>
                                    </div>
                                    
                                    <p className="text-muted mb-4">
                                        Complete Google Ads management solution for businesses ready to drive qualified traffic and maximize ROI from their advertising spend.
                                    </p>
                                    
                                    <div className="mb-4">
                                        {[
                                            { icon: <MdOutlineAnalytics />, text: "Strategy & Campaign Planning" },
                                            { icon: <MdOutlineSettings />, text: "Ad Setup & Optimisation" },
                                            { icon: <MdOutlineDescription />, text: "Ad Creative & Copy" },
                                            { icon: <MdOutlineTrackChanges />, text: "Reporting & Analytics" },
                                            { icon: <MdOutlineCampaign />, text: "Ongoing Optimisation" }
                                        ].map((item, index) => (
                                            <div key={index} className="d-flex align-items-center mb-3">
                                                <div className="list-icon bg-primary bg-opacity-10 rounded-circle me-3">
                                                    {item.icon}
                                                </div>
                                                <span className="text-dark">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <a href="/contact" className="btn btn-primary btn-lg w-100 shadow-primary py-3 fw-semibold hover-lift">
                                        Contact To Sales
                                        <span className="ms-2">→</span>
                                    </a>
                                    
                                    <div className="text-center mt-4">
                                        <small className="text-muted">30-day performance guarantee • Dedicated support</small>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </aside>

                {/* Left Side - Steps with Icons */}
                <Col xl={7} lg={8} md={7} className="order-md-1 pe-xl-4">
                    <h2 ref={h2Ref} className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">
                        What We <span ref={spanRef} className="text-gradient-primary">Offer</span>
                    </h2>
                    
                    <div className="steps steps-sm pe-lg-3">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                ref={(el: HTMLDivElement | null) => {
                                    stepRefs.current[index] = el;
                                }}
                                className="step"
                            >
                                <div className="step-icon-wrapper">
                                    <div className="step-icon-inner">
                                        {step.icon}
                                    </div>
                                    <div className="step-number-badge">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="step-body ps-4">
                                    <h4 className="mb-3 fw-bold text-dark">{step.title}</h4>
                                    <p className="text-muted mb-0">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            <style jsx global>{`
                /* Modern Glass Effect */
                .modern-glass-card {
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 24px;
                    overflow: hidden;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .modern-glass-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.25);
                    border-color: rgba(79, 70, 229, 0.1);
                }

                .glass-card-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(79, 70, 229, 0.05) 0%,
                        rgba(124, 58, 237, 0.05) 100%
                    );
                    z-index: 1;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .modern-glass-card:hover .glass-card-bg {
                    opacity: 1;
                }

                /* Text gradient */
                .text-gradient-primary {
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }

                /* Step Icon Styles */
                .step-icon-wrapper {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    flex-shrink: 0;
                }

                .step-icon-inner {
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #f6f8ff 0%, #f1f5ff 100%);
                    border: 2px solid rgba(79, 70, 229, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #4f46e5;
                    font-size: 24px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }

                .step:hover .step-icon-inner {
                    transform: translateY(-5px) scale(1.05);
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    color: white;
                    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
                    border-color: transparent;
                }

                .step-number-badge {
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    width: 28px;
                    height: 28px;
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: 700;
                    border: 3px solid white;
                    box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
                }

                /* Step Body */
                .step {
                    display: flex;
                    align-items: flex-start;
                    position: relative;
                    padding-bottom: 2.5rem;
                }

                .step:not(:last-child)::after {
                    content: '';
                    position: absolute;
                    left: 40px;
                    top: 80px;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(
                        to bottom,
                        rgba(79, 70, 229, 0.1) 0%,
                        rgba(79, 70, 229, 0.05) 50%,
                        transparent 100%
                    );
                }

                .step:last-child {
                    padding-bottom: 0;
                }

                .step-body {
                    flex: 1;
                    padding-top: 0.5rem;
                }

                .step h4 {
                    transition: all 0.3s ease;
                    position: relative;
                    padding-bottom: 0.5rem;
                    margin-bottom: 1rem;
                }

                .step:hover h4 {
                    color: #4f46e5 !important;
                    transform: translateX(5px);
                }

                .step:hover h4::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 40px;
                    height: 3px;
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    border-radius: 2px;
                }

                .step p {
                    margin-bottom: 0;
                }

                /* Button hover effect */
                .hover-lift {
                    transition: all 0.3s ease;
                }

                .hover-lift:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
                }
                
                .list-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;   
                    width: 33px;
                    height: 33px;
                }
                
                /* Icon wrapper */
                .icon-wrapper {
                    transition: all 0.3s ease;
                }

                .icon-wrapper:hover {
                    transform: rotate(10deg) scale(1.1);
                }

                /* Spacing optimizations */
                @media (min-width: 992px) {
                    .row.g-lg-5 {
                        --bs-gutter-x: 3rem;
                    }
                    
                    .pe-xl-4 {
                        padding-right: 1.5rem !important;
                    }
                    
                    .ps-xl-4 {
                        padding-left: 1.5rem !important;
                    }
                    
                    .pe-lg-3 {
                        padding-right: 1rem !important;
                    }
                }

                @media (min-width: 1200px) {
                    .row.g-lg-5 {
                        --bs-gutter-x: 4rem;
                    }
                    
                    .pe-xl-4 {
                        padding-right: 2rem !important;
                    }
                    
                    .ps-xl-4 {
                        padding-left: 2rem !important;
                    }
                }

                /* Performance optimizations */
                .modern-glass-card,
                .step-icon-inner,
                .step h4,
                .step p {
                    will-change: transform;
                    backface-visibility: hidden;
                    -webkit-font-smoothing: antialiased;
                }

                @media (max-width: 768px) {
                    .step-icon-wrapper {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .step-icon-inner {
                        border-radius: 16px;
                        font-size: 20px;
                    }
                    
                    .step:not(:last-child)::after {
                        left: 30px;
                        top: 60px;
                    }
                    
                    .step-body {
                        padding-left: 1rem;
                    }
                    
                    .step {
                        padding-bottom: 2rem;
                    }
                    
                    .pe-xl-4,
                    .ps-xl-4 {
                        padding-right: 0 !important;
                        padding-left: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Description;