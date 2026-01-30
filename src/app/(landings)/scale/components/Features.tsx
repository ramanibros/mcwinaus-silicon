"use client";

import features1 from '@/assets/img/landing/software-agency-1/features/01.svg';
import features2 from '@/assets/img/landing/software-agency-1/features/02.svg';
import features3 from '@/assets/img/landing/software-agency-1/features/03.svg';
import features4 from '@/assets/img/landing/software-agency-1/features/04.svg';
import Image, {StaticImageData} from 'next/image';
import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type featureType = {
    id: number;
    icon: StaticImageData;
    title: string;
    description: string;
    colorClass: string;
    gradient: string;
};

const features: featureType[] = [
    {
        id: 1,
        icon: features1,
        title: 'Perth scale specialists',
        description: '25+ local experts delivering 3x faster scaling than offshore agencies with guaranteed results.',
        colorClass: 'feature-indigo',
        gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
    },
    {
        id: 2,
        icon: features2,
        title: 'No vendor lock-in',
        description: 'Clean code, full documentation, and easy migration—your product always stays in your control.',
        colorClass: 'feature-emerald',
        gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
    },
    {
        id: 3,
        icon: features3,
        title: 'Future-proof architecture',
        description: 'React, AWS, and API-first systems built to scale 10x without breaking for long-term ROI.',
        colorClass: 'feature-blue',
        gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
    },
    {
        id: 4,
        icon: features4,
        title: 'Perth-based growth partner',
        description: 'A WA-focused team that understands local business growth—not just tech support.',
        colorClass: 'feature-purple',
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)'
    },
];

const Features = () => {
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Title animation - same as FAQ component
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
                {opacity: 0, y: 50},
                {opacity: 1, y: 0, duration: 1, ease: "power2.out"}
            );

            tl.fromTo(spanText,
                {opacity: 0, scale: 0.8},
                {opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)"},
                "-=0.8"
            );
        }

        // Subtitle animation
        if (pRef.current) {
            gsap.fromTo(pRef.current,
                {opacity: 0, y: 30},
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: pRef.current,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                        markers: false,
                    }
                }
            );
        }

        // Feature cards animation
        featureCardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: "back.out(1.2)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "top 50%",
                            scrub: false,
                            toggleActions: "play none none none",
                            markers: false,
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const addCardToRefs = (el: HTMLDivElement | null, index: number) => {
        featureCardsRef.current[index] = el;
    };

    return (
        <section className="py-5 my-2 my-md-4 my-lg-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 ref={h2Ref} className="h1 mb-4 fw-bold">
                        Why Perth Businesses Choose <span ref={spanRef}
                                                          className="text-gradient-primary">McWIN iTECH</span> to Scale
                    </h2>
                    <p ref={pRef} className="fs-lg text-muted mx-auto" style={{maxWidth: '700px'}}>
                        Scale without limits with Perth's most trusted tech team. Local expertise, global
                        results—systems engineered to increase conversions 3x and stay on top.
                    </p>
                </div>

                <Row xs={1} sm={2} lg={4} className="g-4">
                    {features.map((feature, index) => (
                        <Col key={feature.id}>
                            <div
                                ref={(el) => addCardToRefs(el, index)}
                                className={`feature-card ${feature.colorClass} h-100`}
                            >
                                <div className="p-4 h-100 d-flex flex-column">
                                    {/* Icon Circle */}
                                    <div className="mb-4">
                                        <div className="feature-icon-container mb-3">
                                            <div className="feature-icon-circle">
                                                <div className="icon-wrapper">
                                                    <Image
                                                        src={feature.icon}
                                                        alt={feature.title}
                                                        width={36}
                                                        height={36}
                                                        className="icon-img"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Feature Number */}
                                        <div className="feature-number">
                                            <span>0{feature.id}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="feature-title mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="feature-description mb-4">
                                        {feature.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="mt-auto pt-3">
                                        <div className="feature-indicator"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <style jsx global>{`
          .feature-card {
            background: white;
            border-radius: 16px;
            border: 1px solid #E5E7EB;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            opacity: 0; /* Initial state for animation */
          }
          
          .feature-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
          }
          
          /* Icon Styles */
          .feature-icon-container {
            position: relative;
          }
          
          .feature-icon-circle {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          
          .feature-indigo .feature-icon-circle {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            border: 1px solid rgba(99, 102, 241, 0.2);
          }
          
          .feature-emerald .feature-icon-circle {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%);
            border: 1px solid rgba(16, 185, 129, 0.2);
          }
          
          .feature-blue .feature-icon-circle {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%);
            border: 1px solid rgba(59, 130, 246, 0.2);
          }
          
          .feature-purple .feature-icon-circle {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%);
            border: 1px solid rgba(139, 92, 246, 0.2);
          }
          
          .icon-wrapper {
            position: relative;
            width: 40px;
            height: 40px;
          }
          
          .icon-img {
            filter: brightness(0) saturate(100%);
          }
          
          .feature-indigo .icon-img {
            filter: brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(2878%) hue-rotate(242deg) brightness(94%) contrast(92%);
          }
          
          .feature-emerald .icon-img {
            filter: brightness(0) saturate(100%) invert(48%) sepia(89%) saturate(415%) hue-rotate(121deg) brightness(95%) contrast(101%);
          }
          
          .feature-blue .icon-img {
            filter: brightness(0) saturate(100%) invert(39%) sepia(94%) saturate(748%) hue-rotate(193deg) brightness(97%) contrast(91%);
          }
          
          .feature-purple .icon-img {
            filter: brightness(0) saturate(100%) invert(39%) sepia(93%) saturate(748%) hue-rotate(244deg) brightness(97%) contrast(91%);
          }
          
          /* Number Styles */
          .feature-number {
            position: absolute;
            top: 0;
            right: 0;
          }
          
          .feature-number span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background: #F9FAFB;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 700;
          }
          
          .feature-indigo .feature-number span {
            color: #6366F1;
          }
          
          .feature-emerald .feature-number span {
            color: #10B981;
          }
          
          .feature-blue .feature-number span {
            color: #3B82F6;
          }
          
          .feature-purple .feature-number span {
            color: #8B5CF6;
          }
          
          /* Text Styles */
          .feature-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #111827;
            line-height: 1.3;
          }
          
          .feature-description {
            font-size: 0.9375rem;
            color: #6B7280;
            line-height: 1.6;
          }
          
          /* Indicator */
          .feature-indicator {
            height: 3px;
            width: 40px;
            border-radius: 2px;
            transition: width 0.3s ease;
          }
          
          .feature-card:hover .feature-indicator {
            width: 60px;
          }
          
          .feature-indigo .feature-indicator {
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
          }
          
          .feature-emerald .feature-indicator {
            background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
          }
          
          .feature-blue .feature-indicator {
            background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);
          }
          
          .feature-purple .feature-indicator {
            background: linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%);
          }
        `}</style>
            </Container>
        </section>
    );
};

export default Features;