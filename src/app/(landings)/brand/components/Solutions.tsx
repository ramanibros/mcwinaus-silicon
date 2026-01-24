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
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const shapesRef = useRef<Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        rotation: number;
        rotationSpeed: number;
        type: 'circle' | 'square' | 'ring';
        color: string;
    }>>([]);
    
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

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize shapes
        const initShapes = () => {
            shapesRef.current = [];
            const types: ('circle' | 'square' | 'ring')[] = ['circle', 'square', 'ring'];
            const colors = [
                'rgba(102, 126, 234, 0.08)',
                'rgba(118, 75, 162, 0.06)',
                'rgba(76, 201, 240, 0.05)',
                'rgba(255, 138, 101, 0.04)'
            ];

            for (let i = 0; i < 20; i++) {
                shapesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 40 + 20,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 0.5,
                    type: types[Math.floor(Math.random() * types.length)],
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
            }
        };

        initShapes();

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear with slight fade for trail effect
            ctx.fillStyle = 'rgba(240, 244, 248, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            shapesRef.current.forEach(shape => {
                // Update position
                shape.x += shape.speedX;
                shape.y += shape.speedY;
                shape.rotation += shape.rotationSpeed;

                // Boundary check
                if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
                if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
                if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
                if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

                // Save context
                ctx.save();
                ctx.translate(shape.x, shape.y);
                ctx.rotate((shape.rotation * Math.PI) / 180);

                // Draw shape based on type
                ctx.fillStyle = shape.color;
                ctx.strokeStyle = shape.color.replace('0.08', '0.15').replace('0.06', '0.12').replace('0.05', '0.1').replace('0.04', '0.08');
                ctx.lineWidth = 2;

                switch (shape.type) {
                    case 'circle':
                        ctx.beginPath();
                        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                    case 'square':
                        ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                        break;
                    case 'ring':
                        ctx.beginPath();
                        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
                        ctx.stroke();
                        break;
                }

                ctx.restore();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section 
            className="mb-5 pb-lg-5 pb-md-4 pb-3 position-relative overflow-hidden"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f0f4f8 100%)'
            }}
        >
            {/* Animated background canvas */}
            <canvas
                ref={canvasRef}
                className="position-absolute top-0 left-0 w-100 h-100"
                style={{ zIndex: 0 }}
            />

            {/* Gradient overlays */}
            <div 
                className="position-absolute top-0 left-0 w-100 h-100"
                style={{
                    background: 'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.1) 0%, transparent 40%)',
                    zIndex: 1
                }}
            />
            <div 
                className="position-absolute top-0 left-0 w-100 h-100"
                style={{
                    background: 'radial-gradient(circle at 80% 70%, rgba(76, 201, 240, 0.08) 0%, transparent 40%)',
                    zIndex: 1
                }}
            />

            <Container style={{ position: 'relative', zIndex: 2 }}>
                {/* Updated heading with animation refs */}
                <h2 
                    ref={h2Ref}
                    className="h1 pb-4 py-lg-5" 
                    style={{
                        color: '#1a202c',
                        fontWeight: 700
                    }}
                >
                    How our <span ref={spanRef} className="text-primary text-gradient-primary">Perth Brand</span> Agency Drives Growth.
                </h2>
                
                <Row xs={1} md={2} className="g-4 pt-2 pt-md-4 pb-lg-2">
                    {solutionsData.map((item, index) => (
                        <Col key={item.id}>
                            <Link href={item.url} className="text-decoration-none">
                                <div 
                                    className="glass-card h-100 mx-2"
                                    style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        transition: 'all 0.4s ease',
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    {/* Main glass effect layer */}
                                    <div 
                                        className="position-absolute top-0 left-0 w-100 h-100"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.75)',
                                            backdropFilter: 'blur(25px)',
                                            WebkitBackdropFilter: 'blur(25px)',
                                            border: '1px solid rgba(255, 255, 255, 0.8)',
                                            borderRadius: '20px',
                                            boxShadow: `
                                                0 8px 32px rgba(31, 38, 135, 0.1),
                                                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                                                inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                                            `,
                                            zIndex: 1
                                        }}
                                    />
                                    
                                    {/* Glass shine effect */}
                                    <div 
                                        className="position-absolute top-0 left-0 w-100 h-100"
                                        style={{
                                            background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0) 60%)',
                                            borderRadius: '20px',
                                            zIndex: 2,
                                            pointerEvents: 'none'
                                        }}
                                    />
                                    
                                    {/* Subtle border glow */}
                                    <div 
                                        className="position-absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px]"
                                        style={{
                                            background: 'linear-gradient(45deg, #667eea, #764ba2, #667eea)',
                                            backgroundSize: '200% 200%',
                                            borderRadius: '21px',
                                            opacity: 0,
                                            zIndex: 0,
                                            animation: 'borderGlow 3s ease-in-out infinite',
                                            transition: 'opacity 0.3s ease'
                                        }}
                                    />
                                    
                                    {/* Inner card content */}
                                    <CardBody className="p-4 p-lg-5 position-relative" style={{ zIndex: 3 }}>
                                        {/* Icon container */}
                                        <div 
                                            className="d-flex align-items-center justify-content-center position-relative mb-4"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '16px',
                                                background: 'rgba(255, 255, 255, 0.9)',
                                                boxShadow: `
                                                    0 4px 20px rgba(102, 126, 234, 0.15),
                                                    inset 0 2px 4px rgba(255, 255, 255, 0.8)
                                                `,
                                                border: '1px solid rgba(255, 255, 255, 0.9)',
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
                                                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                                    opacity: 0.1,
                                                    zIndex: -1
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Title - Simple and clean */}
                                        <h3 
                                            className="h5 mb-3"
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
                                            className="mb-0"
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
                                            <ul className="list-unstyled mb-0 mt-3">
                                                {item.points.map((point, i) => (
                                                    <li 
                                                        key={i} 
                                                        className="d-flex align-items-center mb-2"
                                                    >
                                                        <IconifyIcon 
                                                            icon="bx:check" 
                                                            className="lead me-2"
                                                            style={{
                                                                color: '#667eea',
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
                                    </CardBody>
                                    
                                    {/* Hover effect overlay */}
                                    <div 
                                        className="position-absolute top-0 left-0 w-100 h-100"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            borderRadius: '20px',
                                            zIndex: 2,
                                            pointerEvents: 'none'
                                        }}
                                    />
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx global>{`
                .text-primary {
                    color: #667eea !important;
                }

                /* Text gradient with animation support */
                .text-gradient-primary {
                    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                    background-size: 200% 200%;
                    background-position: 100% 0%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }

                @keyframes borderGlow {
                    0%, 100% {
                        background-position: 0% 50%;
                        opacity: 0;
                    }
                    50% {
                        background-position: 100% 50%;
                        opacity: 0.3;
                    }
                }

                @keyframes floatCard {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }

                .glass-card {
                    animation: floatCard 6s ease-in-out infinite;
                    animation-delay: calc(var(--i, 0) * 0.3s);
                }

                .glass-card:hover {
                    animation-play-state: paused;
                    transform: translateY(-8px) scale(1.02) !important;
                }

                .glass-card:hover > div:first-child {
                    background: rgba(255, 255, 255, 0.85) !important;
                    border-color: rgba(255, 255, 255, 0.9) !important;
                    box-shadow: 
                        0 16px 48px rgba(31, 38, 135, 0.15),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.05) !important;
                }

                .glass-card:hover > div:nth-child(3) {
                    opacity: 0.5 !important;
                }

                .glass-card:hover > div:last-child {
                    opacity: 1 !important;
                }

                .glass-card:hover .d-flex {
                    transform: scale(1.08);
                    background: rgba(255, 255, 255, 1) !important;
                    box-shadow: 
                        0 8px 32px rgba(102, 126, 234, 0.25),
                        inset 0 2px 8px rgba(255, 255, 255, 0.9) !important;
                }

                /* Add slight delay to each card animation */
                .glass-card:nth-child(1) { --i: 0; }
                .glass-card:nth-child(2) { --i: 1; }
                .glass-card:nth-child(3) { --i: 2; }
                .glass-card:nth-child(4) { --i: 3; }
            `}</style>
        </section>
    );
};

export default Solutions;