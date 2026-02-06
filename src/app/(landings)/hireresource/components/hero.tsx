"use client";

import Link from 'next/link';
import React, {useEffect, useRef, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {gsap} from 'gsap';

const PageTitle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        // Initialize background animation
        createBackgroundAnimation();
        
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Button entrance animation (from reference code)
        if (buttonRef.current) {
            gsap.fromTo(buttonRef.current,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.8,
                    rotation: -5
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    ease: 'elastic.out(1, 0.5)',
                    delay: 1.2
                }
            );

            // Add continuous subtle pulse animation
            gsap.to(buttonRef.current, {
                scale: 1.02,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 2.5
            });
        }
    }, []);

    const createBackgroundAnimation = () => {
        if (!backgroundRef.current) return;

        // Clear any existing background elements
        backgroundRef.current.innerHTML = '';

        // BRIGHTER Colors for circles
        const colors = [
            'rgba(12, 227, 154, 0.15)',  // Brighter teal
            'rgba(105, 0, 127, 0.15)',   // Brighter purple
            'rgba(252, 9, 135, 0.15)',   // Brighter pink
            'rgba(59, 130, 246, 0.15)',  // Brighter blue
            'rgba(255, 193, 7, 0.15)'    // Added yellow for contrast
        ];

        // Create large background circles
        const circles = [];

        // Circle 1 - Large left circle (BRIGHTER)
        const circle1 = document.createElement('div');
        circle1.className = 'bg-circle';
        circle1.style.cssText = `
            position: absolute;
            width: 450px;
            height: 450px;
            border: 3px dashed rgba(12, 227, 154, 0.25);
            border-radius: 50%;
            opacity: 0.5;
            top: 30%;
            left: 10%;
            z-index: 0;
            box-shadow: 0 0 20px rgba(12, 227, 154, 0.1);
        `;
        backgroundRef.current.appendChild(circle1);
        circles.push(circle1);

        // Circle 2 - Medium right circle (BRIGHTER)
        const circle2 = document.createElement('div');
        circle2.className = 'bg-circle';
        circle2.style.cssText = `
            position: absolute;
            width: 350px;
            height: 350px;
            border: 2px dotted rgba(105, 0, 127, 0.25);
            border-radius: 50%;
            opacity: 0.5;
            top: 60%;
            left: 80%;
            z-index: 0;
            box-shadow: 0 0 15px rgba(105, 0, 127, 0.1);
        `;
        backgroundRef.current.appendChild(circle2);
        circles.push(circle2);

        // Circle 3 - Small top circle (BRIGHTER)
        const circle3 = document.createElement('div');
        circle3.className = 'bg-circle';
        circle3.style.cssText = `
            position: absolute;
            width: 250px;
            height: 250px;
            border: 3px solid rgba(59, 130, 246, 0.25);
            border-radius: 50%;
            opacity: 0.5;
            top: 20%;
            left: 50%;
            z-index: 0;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.1);
        `;
        backgroundRef.current.appendChild(circle3);
        circles.push(circle3);

        // Circle 4 - Medium center circle (BRIGHTER)
        const circle4 = document.createElement('div');
        circle4.className = 'bg-circle';
        circle4.style.cssText = `
            position: absolute;
            width: 400px;
            height: 400px;
            border: 2px dashed rgba(252, 9, 135, 0.25);
            border-radius: 50%;
            opacity: 0.5;
            top: 50%;
            left: 30%;
            z-index: 0;
            box-shadow: 0 0 20px rgba(252, 9, 135, 0.1);
        `;
        backgroundRef.current.appendChild(circle4);
        circles.push(circle4);

        // Circle 5 - Large bottom circle (BRIGHTER)
        const circle5 = document.createElement('div');
        circle5.className = 'bg-circle';
        circle5.style.cssText = `
            position: absolute;
            width: 550px;
            height: 550px;
            border: 3px dotted rgba(12, 227, 154, 0.2);
            border-radius: 50%;
            opacity: 0.45;
            top: 70%;
            left: 60%;
            z-index: 0;
            box-shadow: 0 0 25px rgba(12, 227, 154, 0.1);
        `;
        backgroundRef.current.appendChild(circle5);
        circles.push(circle5);

        // Circle 6 - Extra circle for more visibility
        const circle6 = document.createElement('div');
        circle6.className = 'bg-circle';
        circle6.style.cssText = `
            position: absolute;
            width: 300px;
            height: 300px;
            border: 2px solid rgba(255, 193, 7, 0.25);
            border-radius: 50%;
            opacity: 0.5;
            top: 40%;
            left: 85%;
            z-index: 0;
            box-shadow: 0 0 15px rgba(255, 193, 7, 0.1);
        `;
        backgroundRef.current.appendChild(circle6);
        circles.push(circle6);

        // Add BRIGHTER floating dots inside circles
        for (let i = 0; i < 20; i++) {
            const dot = document.createElement('div');
            dot.className = 'bg-dot';
            const size = Math.random() * 12 + 6;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            dot.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color.replace('0.15', '0.4')};
                border-radius: 50%;
                opacity: 0.6;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                z-index: 0;
                box-shadow: 0 0 10px ${color.replace('0.15', '0.3')};
            `;
            backgroundRef.current.appendChild(dot);
            circles.push(dot);
        }

        // Animate all circles with more visible movements
        circles.forEach((circle, index) => {
            // Slow rotation for main circles
            if (index < 6) {
                gsap.to(circle, {
                    rotation: 360,
                    duration: 35 + index * 8,
                    repeat: -1,
                    ease: 'none'
                });
                
                // Pulse animation with higher contrast
                gsap.to(circle, {
                    opacity: 0.7,
                    scale: 1.05,
                    duration: 2 + index,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.3
                });
            }
            
            // Move floating dots with more visible movement
            if (index >= 6) {
                gsap.to(circle, {
                    x: `+=${(Math.random() - 0.5) * 150}`,
                    y: `+=${(Math.random() - 0.5) * 150}`,
                    duration: Math.random() * 6 + 4,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.1
                });
                
                gsap.to(circle, {
                    scale: Math.random() * 0.6 + 0.7,
                    opacity: 0.8,
                    duration: Math.random() * 1.5 + 1,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            }
        });

        // Add subtle moving lines between circles for more visual interest
        for (let i = 0; i < 8; i++) {
            const line = document.createElement('div');
            line.className = 'bg-line';
            const width = Math.random() * 200 + 100;
            const angle = Math.random() * 360;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            line.style.cssText = `
                position: absolute;
                width: ${width}px;
                height: 1px;
                background: linear-gradient(90deg, transparent, ${color.replace('0.15', '0.3')}, transparent);
                opacity: 0.4;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                transform: rotate(${angle}deg);
                transform-origin: left center;
                z-index: 0;
            `;
            backgroundRef.current.appendChild(line);
            
            // Animate lines
            gsap.to(line, {
                opacity: 0.7,
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.2
            });
        }
    };

    // Button hover handlers from reference code
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1.05,
            y: -3,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1.02, // Keep the pulse animation scale
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    // Split "Tech Resources" into individual words
    const talentWords = "Tech Resources".split(' ');

    return (
        <section
            className="container pb-5 mb-md-2 mb-lg-4 mb-xl-5 position-relative"
            style={{marginBottom: '0 !important', overflow: 'hidden'}}
        >
            {/* Background Animation Layer - Full width circles */}
            <div 
                ref={backgroundRef}
                className="position-absolute top-0 left-0 w-100 h-100"
                style={{
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />
            
            {/* Subtle overlay to ensure text readability */}
            <div 
                className="position-absolute top-0 left-0 w-100 h-100"
                style={{
                    zIndex: 0.5,
                    pointerEvents: 'none',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.85) 100%)'
                }}
            />
            
            {/* Content Layer - EXACTLY SAME AS BEFORE */}
            <div style={{position: 'relative', zIndex: 1}}>
                <Row className="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
                    <Col lg={6}>
                        <h1 className="display-2 mb-0">
                            <span
                                className="text-gradient-primary"
                                style={{
                                    display: 'inline-block',
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'opacity 1s ease, transform 1s ease',
                                    transitionDelay: '0.1s'
                                }}
                            >
                                Hire Skilled{' '}
                            </span>
                            <span style={{display: 'inline-block'}}>
                                {talentWords.map((word, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            display: 'inline-block',
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                            transition: `opacity 0.6s ease, transform 0.6s ease`,
                                            transitionDelay: `${0.3 + (index * 0.1)}s`,
                                            marginRight: '0.2em'
                                        }}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </span>
                        </h1>
                    </Col>
                    <Col lg={6} xl={5} className="offset-xl-1 pt-3 pt-sm-4 pt-lg-3">
                        <p
                            className="pb-4 mb-1 mb-md-2 mb-xl-3"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'opacity 1s ease, transform 1s ease',
                                transitionDelay: '0.7s',
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(2px)',
                                borderRadius: '8px',
                                padding: '20px'
                            }}
                        >
                            Streamline your hiring process with access to pre-vetted, top-tier talent. We connect you with skilled professionals who are ready to contribute to your projects from day one. Save time on recruitment and focus on growing your business with the right resources.
                        </p>
                        
                        {/* Animated Button from reference code */}
                        <Link
                            ref={buttonRef}
                            href="/contact"
                            className="brand-project-button position-relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                display: 'inline-block'
                            }}
                        >
                            <span className="button-text">Find Your Talent</span>
                        </Link>
                    </Col>
                </Row>
                <hr
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'opacity 1.2s ease, transform 1.2s ease',
                        transitionDelay: '1.2s',
                        transformOrigin: 'left center'
                    }}
                />
            </div>
            
            {/* Add CSS styles from reference code */}
            <style jsx global>{`
                /* Your button styles with animations */
                .brand-project-button {
                    position: relative;
                    text-decoration: none;
                    color: #fff;
                    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
                    padding: 14px 25px;
                    border-radius: 10px;
                    font-size: 1.25em;
                    cursor: pointer;
                    display: inline-block;
                    border: none;
                    outline: none;
                    will-change: transform;
                    transition: none; /* GSAP handles animations */
                }
                
                .brand-project-button .button-text {
                    position: relative;
                    z-index: 1;
                    font-weight: 600;
                }
                
                .brand-project-button::before {
                    content: "";
                    position: absolute;
                    inset: 1px;
                    background: #272727;
                    border-radius: 9px;
                    transition: opacity 0.5s ease;
                }
                
                .brand-project-button:hover::before {
                    opacity: 0.7;
                }
                
                .brand-project-button::after {
                    content: "";
                    position: absolute;
                    inset: 0px;
                    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
                    border-radius: 9px;
                    transition: opacity 0.5s ease;
                    opacity: 0;
                    filter: blur(20px);
                }
                
                .brand-project-button:hover::after {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default PageTitle;