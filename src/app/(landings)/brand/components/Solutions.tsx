'use client';
import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Container, Card, CardBody, Col, Row } from 'react-bootstrap';
import icon1 from '@/assets/img/landing/software-agency-3/icons/01.svg';
import icon2 from '@/assets/img/landing/software-agency-3/icons/02.svg';
import icon3 from '@/assets/img/landing/software-agency-3/icons/03.svg';
import icon4 from '@/assets/img/landing/software-agency-3/icons/04.svg';
import IconifyIcon from "@/components/IconifyIcon";
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type PointsItem = {
    title: string;
};

type Solution = {
    id: number;
    icon: StaticImageData;
    title: string;
    description: string;
    points: PointsItem[];
    url: string;
};

const solutionsData: Solution[] = [
    {
        id: 1,
        icon: icon1,
        title: 'Brand Strategy & Positioning',
        points: [],
        url: "/brand/brand-strategy-and-positioning",
        description: 'Perth market analysis, competitor insights, vision workshops—position your brand 3x stronger.The Local team crafts unique positioning that dominates WA without spending thousands on guesswork.'
    },
    {
        id: 2,
        icon: icon2,
        title: 'Visual Identity & Logo Design',
        points: [],
        url: "/brand/visual-identity-logo-design",
        description: 'Award-winning logos, custom colour systems, typography—instant authority boost. Perth businesses stand out 3x more with visual identities that build trust and drive referrals immediately.'
    },
    {
        id: 3,
        icon: icon3,
        title: 'Digital Product UI/UX Design',
        points: [],
        url: "/brand/digital-product-ui-ux-design",
        description: 'Brand-led websites, iOS/Android apps, landing pages—67% higher conversions guaranteed. Perth-first UX mapping turns visitors into customers with seamless, on-brand digital experiences.'
    },
    {
        id: 4,
        icon: icon4,
        title: 'Brand Implementation',
        points: [],
        url: "/brand/brand-implementation",
        description: 'Cross-platform consistency, style guides, asset libraries—we\'ve got you covered. Local Perth team ensures perfect execution across web, app, social—long-term brand value guaranteed.'
    },
];

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Solutions = () => {
    // Refs for title animation
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Title animation for "Perth Brand" words
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

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // ONLY CHANGED: Dark versions of aurora colors (keeping original color themes)
    const darkAuroraColors = [
        'radial-gradient(circle, rgba(50, 60, 120, 0.7), rgba(70, 40, 100, 0.4), transparent)', // Dark blue-purple
        'radial-gradient(circle, rgba(150, 40, 60, 0.7), rgba(180, 30, 50, 0.4), transparent)', // Dark red-pink
        'radial-gradient(circle, rgba(30, 100, 150, 0.7), rgba(0, 120, 150, 0.4), transparent)', // Dark blue-cyan
        'radial-gradient(circle, rgba(30, 120, 60, 0.7), rgba(20, 150, 100, 0.4), transparent)'  // Dark green-teal
    ];

    // EVERYTHING ELSE STAYS EXACTLY THE SAME
    const borderColors = [
        'rgba(102, 126, 234, 0.4)',
        'rgba(245, 87, 108, 0.4)',
        'rgba(79, 172, 254, 0.4)',
        'rgba(67, 233, 123, 0.4)'
    ];

    const iconBgColors = [
        'rgba(102, 126, 234, 0.1)',
        'rgba(245, 87, 108, 0.1)',
        'rgba(79, 172, 254, 0.1)',
        'rgba(67, 233, 123, 0.1)'
    ];

    const iconColors = [
        '#667eea',
        '#f5576c',
        '#4facfe',
        '#43e97b'
    ];

    return (
        <section 
            className="brand-solutions-section mb-5 pb-lg-5 pb-md-4 pb-3 position-relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(221 201 243) 50%, rgb(240, 244, 248) 100%)'
            }}
        >
            <Container>
                {/* Heading */}
                <h2 
                    ref={h2Ref}
                    className="brand-solutions-title h1 pb-4 py-lg-5 text-center" 
                    style={{
                        color: '#1a202c',
                        fontWeight: 700
                    }}
                >
                    How our <span ref={spanRef} className="brand-solutions-gradient-text text-primary">Perth Brand</span> Agency Drives Growth.
                </h2>
                
                <Row xs={1} md={2} className="brand-solutions-row g-4 pt-2 pt-md-4 pb-lg-2">
                    {solutionsData.map((item, index) => (
                        <Col key={item.id} className="brand-solutions-col">
                            <Link href={item.url} className="brand-solutions-link text-decoration-none d-block">
                                <div className="brand-solutions-card">
                                    {/* ONLY CHANGE: Updated to use darkAuroraColors */}
                                    <div 
                                        className="brand-solutions-aurora"
                                        style={{
                                            background: darkAuroraColors[index]
                                        }}
                                    />
                                    
                                    {/* Inner Glow Panel */}
                                    <div className="brand-solutions-bg" />
                                    
                                    {/* Card content */}
                                    <div className="brand-solutions-content position-relative h-100 p-4 p-lg-5">
                                        {/* Icon container */}
                                        <div 
                                            className="brand-solutions-icon-container d-flex align-items-center justify-content-center position-relative mb-4"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '16px',
                                                background: 'rgba(255, 255, 255, 0.95)',
                                                boxShadow: `
                                                    0 4px 20px ${iconBgColors[index]},
                                                    inset 0 2px 4px rgba(255, 255, 255, 0.9)
                                                `,
                                                border: `1px solid ${borderColors[index]}`,
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={28}
                                                height={28}
                                                style={{
                                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                                                }}
                                            />
                                            <div 
                                                className="position-absolute top-0 left-0 w-100 h-100 rounded-circle"
                                                style={{
                                                    background: darkAuroraColors[index],
                                                    opacity: 0.1,
                                                    zIndex: -1
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 
                                            className="brand-solutions-content-title h5 mb-3"
                                            style={{
                                                color: '#1a202c',
                                                fontWeight: 600,
                                                lineHeight: 1.4
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p 
                                            className="brand-solutions-content-text mb-0"
                                            style={{
                                                color: '#4a5568',
                                                lineHeight: 1.6,
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            {item.description}
                                        </p>
                                        
                                        {/* Points list */}
                                        {item.points.length > 0 && (
                                            <ul className="brand-solutions-points list-unstyled mb-0 mt-3">
                                                {item.points.map((point, i) => (
                                                    <li 
                                                        key={i} 
                                                        className="d-flex align-items-center mb-2"
                                                    >
                                                        <IconifyIcon 
                                                            icon="bx:check" 
                                                            className="lead me-2"
                                                            style={{
                                                                color: iconColors[index],
                                                                fontSize: '1.1rem'
                                                            }}
                                                        />
                                                        <span style={{ 
                                                            color: '#4a5568',
                                                            fontSize: '0.9rem'
                                                        }}>
                                                            {point.title}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        
                                        {/* View more button */}
                                        <div className="brand-solutions-view-more position-absolute d-flex align-items-center">
                                            <span className="brand-solutions-view-more-text" style={{
                                                color: iconColors[index],
                                                fontWeight: 600,
                                                fontSize: '0.9rem'
                                            }}>
                                                View more
                                            </span>
                                            <IconifyIcon 
                                                icon="bx:chevron-right"
                                                style={{
                                                    color: iconColors[index],
                                                    fontSize: '1.2rem',
                                                    marginLeft: '4px'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx global>{`
                /* Main card styles - NO CHANGES */
                .brand-solutions-card {
                    position: relative;
                    width: 100%;
                    height: 280px;
                    border-radius: 20px;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    box-shadow: 
                        25px 25px 60px rgba(0, 0, 0, 0.12),
                        -20px -20px 50px rgba(255, 255, 255, 0.55);
                    transition: all 0.4s ease;
                }

                .brand-solutions-link:hover .brand-solutions-card {
                    transform: translateY(-6px);
                    box-shadow: 
                        25px 35px 65px rgba(0, 0, 0, 0.22),
                        -20px -20px 50px rgba(255, 255, 255, 0.65);
                }

                /* Inner Glow Panel - NO CHANGES */
                .brand-solutions-bg {
                    position: absolute;
                    inset: 6px;
                    background: linear-gradient(
                        145deg,
                        rgba(255, 255, 255, 0.85),
                        rgba(245, 245, 245, 0.6)
                    );
                    border-radius: 16px;
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    z-index: 2;
                }

                /* Animated Aurora Blob - ONLY COLOR CHANGED to dark */
                .brand-solutions-aurora {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 180px;
                    height: 180px;
                    border-radius: 50%;
                    filter: blur(28px);
                    z-index: 1;
                    opacity: 0.9;
                    animation: brand-solutions-aurora-move 6.5s infinite ease-in-out;
                }

                /* Aurora Animation - NO CHANGES */
                @keyframes brand-solutions-aurora-move {
                    0% {
                        transform: translate(-60%, -60%) scale(1);
                    }
                    30% {
                        transform: translate(10%, -40%) scale(1.15);
                    }
                    60% {
                        transform: translate(20%, 20%) scale(1.05);
                    }
                    80% {
                        transform: translate(-40%, 10%) scale(1.2);
                    }
                    100% {
                        transform: translate(-60%, -60%) scale(1);
                    }
                }

                /* Content styles - NO CHANGES */
                .brand-solutions-content {
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                /* Title styles - NO CHANGES */
                .brand-solutions-title {
                    color: #1a202c !important;
                }

                .brand-solutions-gradient-text {
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    background-size: 200% 200%;
                    background-position: 100% 0%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }

                /* Icon hover effects - NO CHANGES */
                .brand-solutions-link:hover .brand-solutions-icon-container {
                    transform: scale(1.08);
                    background: rgba(255, 255, 255, 1) !important;
                    box-shadow: 
                        0 8px 32px var(--icon-shadow-color, rgba(102, 126, 234, 0.25)),
                        inset 0 2px 8px rgba(255, 255, 255, 0.9) !important;
                }

                /* View more button - NO CHANGES */
                .brand-solutions-view-more {
                    bottom: 20px;
                    right: 20px;
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: all 0.3s ease;
                }

                .brand-solutions-link:hover .brand-solutions-view-more {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Responsive adjustments - NO CHANGES */
                @media (max-width: 768px) {
                    .brand-solutions-card {
                        height: 260px;
                    }
                    
                    .brand-solutions-content-title {
                        font-size: 1rem !important;
                    }
                    
                    .brand-solutions-content-text {
                        font-size: 0.9rem !important;
                    }
                    
                    .brand-solutions-aurora {
                        width: 150px;
                        height: 150px;
                        filter: blur(20px);
                    }
                }

                @media (max-width: 576px) {
                    .brand-solutions-card {
                        height: 240px;
                    }
                    
                    .brand-solutions-content {
                        padding: 20px !important;
                    }
                }

                /* Custom properties for each card - NO CHANGES */
                .brand-solutions-col:nth-child(1) {
                    --icon-shadow-color: rgba(102, 126, 234, 0.25);
                }
                .brand-solutions-col:nth-child(2) {
                    --icon-shadow-color: rgba(245, 87, 108, 0.25);
                }
                .brand-solutions-col:nth-child(3) {
                    --icon-shadow-color: rgba(79, 172, 254, 0.25);
                }
                .brand-solutions-col:nth-child(4) {
                    --icon-shadow-color: rgba(67, 233, 123, 0.25);
                }
            `}</style>
        </section>
    );
};

export default Solutions;