"use client";

import Link from 'next/link';
import React, {useEffect, useRef, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {gsap} from 'gsap';

const PageTitle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
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

    // Split "That Convert" into individual words
    const convertWords = "That Convert".split(' ');

    return (
        <section
            className="container pb-5 mb-md-2 mb-lg-4 mb-xl-5"
            style={{marginBottom: '0 !important'}}
        >
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
              Clicks{' '}
            </span>
                        <span style={{display: 'inline-block'}}>
              {convertWords.map((word, index) => (
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
                            transitionDelay: '0.7s'
                        }}
                    >
                        Performance-focused PPC campaigns built in Perth for Australian businesses that need efficiency,
                        control, and predictable outcomes. We manage paid traffic with a clear focus on
                        cost-per-conversion, scalability, and revenue impact—not wasted spend.
                    </p>
                    
                    {/* Animated Button from reference code */}
                    <Link
                        ref={buttonRef}
                        href="/contact"
                        className="brand-project-button position-relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            // Remove the inline styles that were here since GSAP handles the animation
                            display: 'inline-block'
                        }}
                    >
                        <span className="button-text">Start Your Project</span>
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