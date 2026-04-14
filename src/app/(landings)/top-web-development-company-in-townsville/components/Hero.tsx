"use client";

import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {SplitText} from 'gsap/SplitText';
import layer from '@/assets/img/top-web-development-company-in-brisbane/brisbane-logistics-illustrations.png';
import Image from 'next/image';
import {Col, Container, Row} from 'react-bootstrap';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const trustTextRef = useRef<HTMLSpanElement>(null);
    const perthTextRef = useRef<HTMLSpanElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in animation for "Built on Trust." gradient text
            if (trustTextRef.current) {
                gsap.from(trustTextRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.3
                });

                // Add continuous subtle animation
                gsap.to(trustTextRef.current, {
                    scale: 1.02,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1.5
                });
            }

            // SplitText animation for "Powered by Brisbane Expertise."
            if (perthTextRef.current) {
                // Split into words
                const splitPerth = new SplitText(perthTextRef.current, {
                    type: "words,chars",
                    wordsClass: "perth-word",
                    charsClass: "perth-char"
                });

                // Animate each word with character stagger
                splitPerth.words.forEach((word, index) => {
                    const chars = word.querySelectorAll('.perth-char');
                    gsap.from(chars, {
                        opacity: 0,
                        y: 30,
                        rotationX: -60,
                        duration: 0.8,
                        stagger: 0.05,
                        ease: "back.out(1.7)",
                        delay: 0.6 + (index * 0.2)
                    });
                });
            }

            // Animate the description paragraph
            if (descriptionRef.current) {
                // Split description into lines for a nice reveal
                const splitDesc = new SplitText(descriptionRef.current, {
                    type: "lines",
                    linesClass: "desc-line"
                });

                gsap.from(splitDesc.lines, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    delay: 1.2
                });
            }

            // Animation for right side section
            if (rightColRef.current) {
                // Fade in the entire column
                gsap.from(rightColRef.current, {
                    opacity: 0,
                    x: 50,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.5
                });

                // Animate the image with a bounce effect
                const imageContainer = rightColRef.current.querySelector('.parallax');
                if (imageContainer) {
                    gsap.from(imageContainer, {
                        opacity: 0,
                        scale: 0.8,
                        rotation: -5,
                        duration: 1.5,
                        ease: "elastic.out(1, 0.5)",
                        delay: 0.8
                    });

                    // Add continuous subtle floating animation
                    gsap.to(imageContainer, {
                        y: -15,
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: 2
                    });
                }

                // Animate the parallax layer
                const parallaxLayer = rightColRef.current.querySelector('.parallax-layer');
                if (parallaxLayer) {
                    gsap.from(parallaxLayer, {
                        opacity: 0,
                        scale: 0,
                        rotation: 180,
                        duration: 1.2,
                        ease: "back.out(1.7)",
                        delay: 1
                    });
                }
            }

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="position-relative overflow-hidden zindex-2 pb-5"
        >
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col lg={5} md={6} className="text-center text-md-start order-md-1">
                        <h1 ref={titleRef} className="display-5 mb-lg-4">
                            <span
                                ref={trustTextRef}
                                className="text-gradient-primary"
                            >
                                Top Web Development
                            </span>{' '}
                            <span
                                ref={perthTextRef}
                                className="text-dark"
                            >
                                 Company in Townsville for Marine Science & Research
                            </span>
                        </h1>
                    </Col>

                    <Col
                        ref={rightColRef}
                        xl={6}
                        lg={7}
                        md={6}
                        sm={8}
                        xs={10}
                        className="offset-xl-1 order-md-2"
                    >
                        <div className="parallax mx-auto" style={{maxWidth: '356px'}}>
                            <div className="parallax-layer" data-depth="0.1">
                                <Image src={layer} alt="Brisbane Tourism, Logistics & Real Estate Web Development"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <style jsx global>{`
                .text-gradient-primary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }

                .perth-char {
                    display: inline-block;
                }

                .perth-word {
                    display: inline-block;
                    margin-right: 4px;
                }

                .desc-line {
                    display: block;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default Hero;