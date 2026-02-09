'use client';

import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import layer01 from '@/assets/img/scale-service/scale-vector.png';
import VanillaTilt from 'vanilla-tilt';
import {Col, Container, Row} from 'react-bootstrap';
import gsap from 'gsap';
import {SplitText} from 'gsap/SplitText';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

const Hero = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const scaleWordRef = useRef<HTMLSpanElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize VanillaTilt
        const tiltElements = document.querySelectorAll<HTMLElement>('.tilt-3d');
        tiltElements.forEach(el => {
            VanillaTilt.init(el, {
                max: 12,
                perspective: 1200,
                'full-page-listening': true,
            });
        });

        // GSAP Animations on page load
        const tl = gsap.timeline();

        // SplitText animation for "Perth's Leading" and "Partner"
        if (headingRef.current) {
            const headingText = headingRef.current.textContent || '';
            const parts = headingText.split('Scale');

            // Create temporary elements for animation
            const leadingText = parts[0].trim(); // "Perth's Leading"
            const partnerText = parts[1].trim(); // "Partner"

            // Clear the heading content
            headingRef.current.innerHTML = '';

            // Create spans for each part
            const leadingSpan = document.createElement('span');
            leadingSpan.className = 'leading-text';
            leadingSpan.textContent = leadingText + ' ';

            const scaleSpan = document.createElement('span');
            scaleSpan.className = 'text-gradient-primary scale-word mx-2';
            scaleSpan.textContent = 'Scale';
            scaleSpan.style.opacity = '0';

            const partnerSpan = document.createElement('span');
            partnerSpan.className = 'partner-text';
            partnerSpan.textContent = ' ' + partnerText;

            // Append to heading
            headingRef.current.appendChild(leadingSpan);
            headingRef.current.appendChild(scaleSpan);
            headingRef.current.appendChild(partnerSpan);

            // Create SplitText for leading and partner words
            const splitLeading = new SplitText(leadingSpan, {type: 'words'});
            const splitPartner = new SplitText(partnerSpan, {type: 'words'});

            // Animate "Perth's Leading" words
            tl.from(splitLeading.words, {
                opacity: 0,
                y: 50,
                rotationX: -45,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out'
            });

            // Animate "Scale" word (simple fade in)
            tl.to(scaleSpan, {
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.3');

            // Animate "Partner" words
            tl.from(splitPartner.words, {
                opacity: 0,
                y: 50,
                rotationX: -45,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.5');
        }

        // Paragraph animation
        if (paragraphRef.current) {
            tl.from(paragraphRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.5');
        }

        // Image fade up animation
        if (imageRef.current) {
            tl.from(imageRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: 'power3.out'
            }, '-=0.3');
        }

        // Cleanup
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="position-relative overflow-hidden">
            <div className="position-relative bg-dark zindex-4 pt-lg-3 pt-xl-5">
                <Container className="zindex-5 pt-5">
                    <Row className="justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
                        <Col xl={8} lg={9} md={10} className="py-5">
                            <h1 ref={headingRef} className="display-4 text-light pt-sm-2 pb-1 pb-sm-3 mb-3">
                                Perth's Leading <span className="text-gradient-primary">Scale</span> Partner
                            </h1>
                            <p ref={paragraphRef} className="fs-lg text-light opacity-70 pb-2 pb-sm-0 mb-4 mb-sm-5">
                                Integrations, optimisation & 24/7 support delivering 3x growth capacity for Australian
                                businesses—local team, proven systems, your success guaranteed.
                            </p>
                            {/* <Link href="#" className="btn btn-primary shadow-primary btn-lg">
                Get early access
              </Link>*/}
                        </Col>
                    </Row>
                </Container>

                <div
                    className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n4 mt-sm-n1"
                    style={{color: 'var(--si-dark)'}}
                >
                    <div
                        className="position-relative start-50 translate-middle-x flex-shrink-0"
                        style={{width: '3788px'}}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="3788"
                            height="144"
                            viewBox="0 0 3788 144"
                        >
                            <path
                                fill="currentColor"
                                d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
                            />
                        </svg>
                    </div>
                </div>

                <div className="d-none d-lg-block" style={{height: '300px'}}></div>
                <div className="d-none d-md-block d-lg-none" style={{height: '150px'}}></div>
            </div>

            <div
                ref={imageRef}
                className="position-relative zindex-5 mx-auto"
                style={{maxWidth: '1250px', transform: 'translateZ(-100px)'}}
            >
                <div className="d-none d-lg-block" style={{marginTop: '-300px'}}></div>
                <div className="d-none d-md-block d-lg-none" style={{marginTop: '-150px'}}></div>

                <div className="tilt-3d">
                    <Image src={layer01} alt="Dashboard" priority/>
                    {/* <div className="tilt-3d-inner position-absolute top-0 start-0 w-100 h-100">
            <Image src={layer02} alt="Cards" priority />
          </div>*/}
                </div>
            </div>

            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{backgroundColor: 'rgba(255,255,255,.05)'}}
            ></div>

            {/* Add CSS styles for the animations */}
            <style jsx global>{`
        .leading-text, .partner-text {
          display: inline-block;
        }
        
        .scale-word {
          display: inline-block;
          opacity: 0; /* Start hidden */
        }
        
        .text-gradient-primary {
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* GSAP SplitText word styling */
        .word {
          display: inline-block;
          position: relative;
        }
        
        /* Tilt enhancement */
        .tilt-3d {
          transition: transform 0.3s ease-out;
          will-change: transform;
        }
      `}</style>
        </section>
    );
};

export default Hero;