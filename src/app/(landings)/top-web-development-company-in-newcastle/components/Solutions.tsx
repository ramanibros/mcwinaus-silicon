'use client';
import React, {useEffect, useRef} from 'react';
import Image, {StaticImageData} from 'next/image';
import {Col, Container, Row} from 'react-bootstrap';
import icon1 from '@/assets/img/landing/software-agency-3/icons/01.svg';
import icon2 from '@/assets/img/landing/software-agency-3/icons/02.svg';
import icon3 from '@/assets/img/landing/software-agency-3/icons/03.svg';
import icon4 from '@/assets/img/landing/software-agency-3/icons/04.svg';
import Link from "next/link";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

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
        title: 'Custom Web Development Newcastle',
        points: [],
        url: "/brand/brand-strategy-and-positioning",
        description: '<div>Our <strong>custom web development Newcastle</strong> services create bespoke websites that perfectly match your brand and business goals:</div><ul><li><strong>Custom UI/UX Design Newcastle</strong> – Industrial-strength interfaces for B2B and manufacturing brands</li><li><strong>SEO-Optimized Architecture</strong> – Semantic HTML5, schema markup Newcastle, clean URL structures</li><li><strong>Fast Loading & Mobile-First</strong> – Progressive Web Apps (PWA), lazy loading, AMP pages for instant mobile performance</li><li><strong>Scalable Backend Systems</strong> – Headless CMS, microservices architecture, serverless functions</li></ul><div><em>Perfect for Newcastle businesses needing custom websites that outrank competitors and convert 3x better.</em></div>'
    },
    {
        id: 2,
        icon: icon2,
        title: 'B2B Industrial Web Development Newcastle',
        points: [],
        url: "/brand/visual-identity-logo-design",
        description: '<div>As leading <strong>B2B industrial developers Newcastle</strong>, we build conversion-focused platforms for heavy industry:</div><ul><li><strong>Custom Quote Request Systems</strong> – Parametric calculators, specification builders, instant pricing</li><li><strong>Product Catalogues Newcastle</strong> – Technical specifications, CAD downloads, bulk order forms</li><li><strong>Supplier Portals</strong> – Inventory lookup, order tracking, reordering systems</li><li><strong>Compliance Documentation</strong> – ISO certification portals, safety data sheets, technical manuals</li></ul><div><em>Our B2B industrial web development Newcastle handles complex quoting and long sales cycles.</em></div>'
    },
    {
        id: 3,
        icon: icon3,
        title: 'Manufacturing Web Development Newcastle',
        points: [],
        url: "/brand/digital-product-ui-ux-design",
        description: '<div>Power your <strong>manufacturing business</strong> with production-ready digital platforms:</div><ul><li><strong>Product Configurator Tools</strong> – Custom manufacturing options, 3D previews, BOM generation</li><li><strong>ERP Integrations Newcastle</strong> – MYOB, Xero, SAP Business One, real-time inventory</li><li><strong>Shop Floor Portals</strong> – Production scheduling, quality control, shift reporting</li><li><strong>Wholesale B2B Ecommerce</strong> – Tiered pricing, minimum order quantities, freight calculators</li></ul><div><em>Manufacturing web development Newcastle clients achieve 28% faster order processing.</em></div>'
    },
    {
        id: 4,
        icon: icon4,
        title: 'Industrial B2B Platforms Newcastle',
        points: [],
        url: "/brand/brand-implementation",
        description: '<div>Complete <strong>B2B solutions for Newcastle\'s industrial ecosystem</strong>:</div><ul><li><strong>CRM Integrations</strong> – HubSpot, Salesforce, Pipedrive for lead nurturing</li><li><strong>Document Management Systems</strong> – CAD files, technical drawings, revision control</li><li><strong>Project Collaboration Portals</strong> – Multi-stakeholder project tracking, milestone reporting</li><li><strong>Maintenance Portals</strong> – Asset registers, service history, compliance certificates</li></ul><div><em>Industrial B2B platforms Newcastle that streamline operations end-to-end.</em></div>'
    },
];

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Solutions = () => {
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Title animation
        if (h2Ref.current && spanRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: h2Ref.current,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1,
                }
            });

            tl.fromTo(h2Ref.current,
                {opacity: 0, y: 60},
                {opacity: 1, y: 0, duration: 1, ease: "power3.out"}
            );

            tl.fromTo(spanRef.current,
                {
                    opacity: 0,
                    scale: 0.8,
                    backgroundPosition: "100% 0%"
                },
                {
                    opacity: 1,
                    scale: 1,
                    backgroundPosition: "0% 100%",
                    duration: 1.2,
                    ease: "back.out(1.7)"
                },
                "-=0.8"
            );
        }

        // Cards entry animation
        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 80,
                        scale: 0.92,
                        rotationX: 5,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotationX: 0,
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "top 60%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // White theme with high contrast colors
    const colorSchemes = [
        {
            // Blue theme
            mainColor: '#3b82f6',
            hoverColor: '#2563eb',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            lightBg: 'rgba(59, 130, 246, 0.08)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
            iconBg: 'rgba(59, 130, 246, 0.1)',
            iconColor: '#3b82f6'
        },
        {
            // Purple theme
            mainColor: '#8b5cf6',
            hoverColor: '#7c3aed',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            lightBg: 'rgba(139, 92, 246, 0.08)',
            borderColor: 'rgba(139, 92, 246, 0.2)',
            iconBg: 'rgba(139, 92, 246, 0.1)',
            iconColor: '#8b5cf6'
        },
        {
            // Green theme
            mainColor: '#10b981',
            hoverColor: '#059669',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            lightBg: 'rgba(16, 185, 129, 0.08)',
            borderColor: 'rgba(16, 185, 129, 0.2)',
            iconBg: 'rgba(16, 185, 129, 0.1)',
            iconColor: '#10b981'
        },
        {
            // Orange theme
            mainColor: '#f59e0b',
            hoverColor: '#d97706',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            lightBg: 'rgba(245, 158, 11, 0.08)',
            borderColor: 'rgba(245, 158, 11, 0.2)',
            iconBg: 'rgba(245, 158, 11, 0.1)',
            iconColor: '#f59e0b'
        }
    ];

    return (
        <section
            className="brand-solutions-section py-5 position-relative overflow-hidden"
            style={{
                backgroundColor: '#ffffff',
                backgroundImage: 'linear-gradient(1deg, rgb(221 195 255) 0%, rgb(145 131 251 / 0%) 100%)'
            }}
        >
            <Container className="py-lg-5">
                {/* Heading */}
                <div className="text-center mb-5 pb-lg-3">
                    <h2
                        ref={h2Ref}
                        className="display-4 fw-bold mb-4"
                        style={{color: '#1e293b'}}
                    >

                        Our Web Development Services in
                        <span
                            ref={spanRef}
                            className="brand-solutions-gradient-text text-gradient-primary fw-bold"
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)',
                                backgroundSize: '200% 200%',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}
                        >
                        Newcastle</span>
                    </h2>
                    <p
                        className="mb-0"
                        style={{
                            color: '#64748b',
                            fontSize: '1.25rem',
                            margin: '0 auto'
                        }}
                    >
                        McWIN iTECH offers comprehensive web development services Newcastle tailored for B2B industrial and manufacturing. Each service incorporates Newcastle SEO optimization, mobile-first design, and conversion-focused architecture.
                    </p>
                </div>

                <Row xs={1} md={2} className="g-4 g-lg-5">
                    {solutionsData.map((item, index) => (
                        <Col key={item.id}>
                            <div
                                ref={el => {
                                    if (el) cardsRef.current[index] = el;
                                }}
                                className="brand-solutions-card-wrapper h-100"
                                style={{'--index': index, '--color': colorSchemes[index].mainColor} as any}
                            >
                                <Link href={item.url}
                                      className="brand-solutions-link text-decoration-none d-block h-100">
                                    <div
                                        className="brand-solutions-card position-relative overflow-hidden h-100 rounded-4">
                                        {/* Animated gradient border */}
                                        <div className="brand-solutions-border"/>

                                        {/* Card content */}
                                        <div
                                            className="brand-solutions-content position-relative h-100 p-3 p-xl-4 d-flex flex-column">
                                            {/* Icon with floating animation */}
                                            <div
                                                className="brand-solutions-icon-container mb-4 position-relative"
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    borderRadius: '20px',
                                                    background: colorSchemes[index].iconBg,
                                                    border: `2px solid ${colorSchemes[index].borderColor}`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                <div
                                                    className="brand-solutions-icon-glow"
                                                    style={{background: colorSchemes[index].lightBg}}
                                                />
                                                <Image
                                                    src={item.icon}
                                                    alt={item.title}
                                                    width={36}
                                                    height={36}
                                                    style={{color: colorSchemes[index].iconColor}}
                                                />
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className="h3 fw-bold mb-3"
                                                style={{
                                                    color: '#1e293b',
                                                    fontSize: '1.7rem',
                                                    lineHeight: 1.3,
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <div
                                                className="mb-0"
                                                style={{
                                                    color: '#475569',
                                                    lineHeight: 1.6,
                                                    fontSize: '0.9rem',
                                                    flex: 1,
                                                    transition: 'all 0.3s ease'
                                                }}
                                                dangerouslySetInnerHTML={{ __html: item.description }}
                                            />

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx global>{`
                /* Section styling */
                .brand-solutions-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                }

                /* Card wrapper with 3D perspective */
                .brand-solutions-card-wrapper {
                    perspective: 1500px;
                    opacity: 0; /* Initially hidden for animation */
                }

                /* Main card */
                .brand-solutions-card {
                    background: #ffffff;
                    border: 1px solid #cfcfcf;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05),
                    0 1px 3px rgba(0, 0, 0, 0.1);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-style: preserve-3d;
                    position: relative;
                }

                /* Animated gradient border */
                .brand-solutions-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 11px;
                    padding: 2px;
                    background: linear-gradient(
                            135deg,
                            var(--color),
                            transparent 30%,
                            transparent 70%,
                            var(--color)
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                /* Floating particles */
                .brand-solutions-particles {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    border-radius: 16px;
                }

                .brand-solutions-particle {
                    position: absolute;
                    width: var(--particle-size);
                    height: var(--particle-size);
                    background: var(--color);
                    border-radius: 50%;
                    opacity: var(--particle-opacity);
                    left: var(--particle-x);
                    top: var(--particle-y);
                    animation: particleFloat 8s ease-in-out infinite;
                    animation-delay: var(--particle-delay);
                }

                @keyframes particleFloat {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -15px) scale(1.2);
                    }
                    50% {
                        transform: translate(-10px, 10px) scale(0.8);
                    }
                    75% {
                        transform: translate(15px, 5px) scale(1.1);
                    }
                }

                /* Icon glow effect */
                .brand-solutions-icon-glow {
                    position: absolute;
                    inset: -10px;
                    border-radius: 30px;
                    filter: blur(20px);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                /* Button underline */
                .brand-solutions-button-underline {
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    border-radius: 1px;
                }

                /* Card entry animation */
                @keyframes cardEntry {
                    from {
                        opacity: 0;
                        transform: translateY(80px) scale(0.92) rotateX(5deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1) rotateX(0);
                    }
                }

                .brand-solutions-card-wrapper {
                    animation: cardEntry 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    animation-delay: calc(var(--index) * 0.15s);
                }

                /* HOVER ANIMATIONS - UNIQUE FOR EACH CARD */
                .brand-solutions-link:hover .brand-solutions-card {
                    transform: translateY(-12px) rotateX(2deg) rotateY(1deg);
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12),
                    0 15px 40px rgba(0, 0, 0, 0.08);
                }

                /* Border animation on hover */
                .brand-solutions-link:hover .brand-solutions-border {
                    opacity: 1;
                    animation: borderRotate 3s linear infinite;
                }

                @keyframes borderRotate {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                /* Icon animation on hover */
                .brand-solutions-link:hover .brand-solutions-icon-container {
                    transform: translateY(-5px) scale(1.05);
                    border-color: var(--color);
                    box-shadow: 0 15px 40px var(--color, rgba(59, 130, 246, 0.2)),
                    0 5px 15px rgba(0, 0, 0, 0.1);
                }

                .brand-solutions-link:hover .brand-solutions-icon-glow {
                    opacity: 0.6;
                }

                /* Particle animation on hover */
                .brand-solutions-link:hover .brand-solutions-particle {
                    animation-duration: 4s;
                    opacity: calc(var(--particle-opacity) * 1.5);
                }

                /* Text color change on hover */
                .brand-solutions-link:hover .brand-solutions-content h3 {
                    color: var(--color);
                }

                /* Button animation on hover */
                .brand-solutions-link:hover .brand-solutions-button-underline {
                    width: 100%;
                }

                .brand-solutions-link:hover .brand-solutions-arrow svg {
                    transform: translateX(8px) scale(1.1);
                    color: var(--color);
                }

                /* Arrow bounce animation */
                .brand-solutions-arrow {
                    display: flex;
                    align-items: center;
                }

                .brand-solutions-arrow svg {
                    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                /* Responsive design */
                @media (max-width: 1200px) {
                    .brand-solutions-content {
                        padding: 1.75rem !important;
                    }

                    h3 {
                        font-size: 1.5rem !important;
                    }
                }

                @media (max-width: 992px) {
                    .brand-solutions-card {
                        height: 320px !important;
                    }

                    .brand-solutions-icon-container {
                        width: 70px;
                        height: 70px;
                    }

                    .display-4 {
                        font-size: 2.5rem !important;
                    }
                }

                @media (max-width: 768px) {
                    .brand-solutions-section {
                        padding: 3rem 0 !important;
                    }

                    .brand-solutions-card {
                        height: 300px !important;
                    }

                    .brand-solutions-content {
                        padding: 1.5rem !important;
                    }

                    h3 {
                        font-size: 1.4rem !important;
                    }

                    .lead {
                        font-size: 1.1rem !important;
                    }
                }

                @media (max-width: 576px) {
                    .brand-solutions-card {
                        height: 280px !important;
                    }

                    .brand-solutions-icon-container {
                        width: 60px;
                        height: 60px;
                    }

                    .display-4 {
                        font-size: 2rem !important;
                    }

                    .brand-solutions-particle {
                        display: none;
                    }
                }

                @media (max-width: 400px) {
                    .brand-solutions-card {
                        height: 320px !important;
                    }

                    .brand-solutions-content p {
                        font-size: 0.95rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Solutions;