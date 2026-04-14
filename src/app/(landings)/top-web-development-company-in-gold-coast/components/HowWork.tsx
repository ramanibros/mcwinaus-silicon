'use client';

import React, {useEffect, useRef} from 'react';
import {Container} from 'react-bootstrap';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Work = () => {
    const stepsContainerRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Title animation for "Brand Process" words
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

        // Animation for the paragraph section
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                {y: 30, opacity: 0},
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        // Animation for each step
        if (stepsContainerRef.current) {
            const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];

            steps.forEach((step, index) => {
                // Get elements inside each step
                const stepNumber = step.querySelector('.step-number');
                const stepNumberInner = step.querySelector('.step-number-inner');
                const stepNumberAurora = step.querySelector('.step-number-aurora');
                const stepNumberPulse = step.querySelector('.step-number-pulse');
                const stepBody = step.querySelector('.step-body');
                const stepTitle = step.querySelector('h3');
                const stepText = step.querySelector('p');

                // Set initial state
                gsap.set(stepNumberInner, {
                    scale: 0,
                    rotation: 180
                });
                gsap.set(stepNumberAurora, {
                    scale: 0,
                    opacity: 0
                });
                gsap.set(stepNumberPulse, {
                    scale: 0,
                    opacity: 0
                });
                /* gsap.set([stepTitle, stepText], {
                    opacity: 0,
                    y: 20
                }); */

                // Create animation timeline for this step
                const stepTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                        markers: false
                    }
                });

                // Animate step number
                stepTL.to(stepNumberInner, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    delay: index * 0.2
                });

                // Animate aurora
                stepTL.to(stepNumberAurora, {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                }, '-=0.5');

                // Animate pulse
                stepTL.to(stepNumberPulse, {
                    scale: 1.2,
                    opacity: 0.5,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                }, '-=0.8');

                // Animate title and text
                stepTL.to(
                    stepTitle,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power3.out'
                    },
                    '-=0.4'
                );

                stepTL.to(
                    stepText,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power3.out'
                    },
                    '-=0.3'
                );
            });
        }

        // Cleanup ScrollTrigger instances
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <Container>
            {/* HEADING SECTION - Updated with animation refs */}
            <div
                ref={headingRef}
                className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto pt-5"
                style={{maxWidth: '530px'}}
            >
                <h3 ref={h2Ref} className="h1">
                    Our 5-Step <span ref={spanRef} className="text-gradient-primary">Process</span>
                </h3>
                <p className="mb-0">
                    Proven methodology trusted by Gold Coast's top lifestyle brands and digital marketing agencies.
                </p>
            </div>

            {/* STEPS SECTION - Only updated step numbers */}
            <div
                ref={stepsContainerRef}
                className="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3"
            >
                {/* STEP 1 - UPDATED STEP NUMBER ONLY */}
                <div
                    ref={(el: HTMLDivElement | null) => {
                        stepRefs.current[0] = el;
                    }}
                    className="step"
                >
                    <div className="step-number">
                        {/* Aurora effect */}
                        <div className="step-number-aurora" style={{
                            position: 'absolute',
                            inset: '-10px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.2), transparent)',
                            filter: 'blur(10px)',
                            zIndex: 0
                        }}></div>

                        {/* Pulse effect */}
                        <div className="step-number-pulse" style={{
                            position: 'absolute',
                            inset: '-15px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.2), transparent)',
                            border: '2px solid rgba(102, 126, 234, 0.3)',
                            zIndex: 0
                        }}></div>

                        <div className="step-number-inner" style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                            position: 'relative',
                            zIndex: 1
                        }}>1
                        </div>
                    </div>
                    <div className="step-body">
                        <h4 className="h4 mb-3">Discovery</h4>
                        <p className="mb-0">Requirements gathering, Gold Coast competitor analysis, technical audit</p>
                    </div>
                </div>

                {/* STEP 2 - UPDATED STEP NUMBER ONLY */}
                <div
                    ref={(el: HTMLDivElement | null) => {
                        stepRefs.current[1] = el;
                    }}
                    className="step"
                >
                    <div className="step-number">
                        {/* Aurora effect */}
                        <div className="step-number-aurora" style={{
                            position: 'absolute',
                            inset: '-10px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(245, 87, 108, 0.4), rgba(245, 101, 101, 0.2), transparent)',
                            filter: 'blur(10px)',
                            zIndex: 0
                        }}></div>

                        {/* Pulse effect */}
                        <div className="step-number-pulse" style={{
                            position: 'absolute',
                            inset: '-15px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(245, 87, 108, 0.2), transparent)',
                            border: '2px solid rgba(245, 87, 108, 0.3)',
                            zIndex: 0
                        }}></div>

                        <div className="step-number-inner" style={{
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            color: 'white',
                            boxShadow: '0 8px 32px rgba(245, 87, 108, 0.3)',
                            position: 'relative',
                            zIndex: 1
                        }}>2
                        </div>
                    </div>
                    <div className="step-body">
                        <h4 className="h4 mb-3">Strategy & Design</h4>
                        <p className="mb-0">Wireframes Gold Coast, mockups, SEO roadmap</p>
                    </div>
                </div>

                {/* STEP 3 - UPDATED STEP NUMBER ONLY */}
                <div
                    ref={(el: HTMLDivElement | null) => {
                        stepRefs.current[2] = el;
                    }}
                    className="step"
                >
                    <div className="step-number">
                        {/* Aurora effect */}
                        <div className="step-number-aurora" style={{
                            position: 'absolute',
                            inset: '-10px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(79, 172, 254, 0.4), rgba(0, 242, 254, 0.2), transparent)',
                            filter: 'blur(10px)',
                            zIndex: 0
                        }}></div>

                        {/* Pulse effect */}
                        <div className="step-number-pulse" style={{
                            position: 'absolute',
                            inset: '-15px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(79, 172, 254, 0.2), transparent)',
                            border: '2px solid rgba(79, 172, 254, 0.3)',
                            zIndex: 0
                        }}></div>

                        <div className="step-number-inner" style={{
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            color: 'white',
                            boxShadow: '0 8px 32px rgba(79, 172, 254, 0.3)',
                            position: 'relative',
                            zIndex: 1
                        }}>3
                        </div>
                    </div>
                    <div className="step-body">
                        <h4 className="h4 mb-3">Development</h4>
                        <p className="mb-0">Agile sprints, daily standups, client previews</p>
                    </div>
                </div>

                {/* STEP 4 - UPDATED STEP NUMBER ONLY */}
                <div
                    ref={(el: HTMLDivElement | null) => {
                        stepRefs.current[3] = el;
                    }}
                    className="step"
                >
                    <div className="step-number">
                        {/* Aurora effect */}
                        <div className="step-number-aurora" style={{
                            position: 'absolute',
                            inset: '-10px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(67, 233, 123, 0.4), rgba(56, 249, 215, 0.2), transparent)',
                            filter: 'blur(10px)',
                            zIndex: 0
                        }}></div>

                        {/* Pulse effect */}
                        <div className="step-number-pulse" style={{
                            position: 'absolute',
                            inset: '-15px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(67, 233, 123, 0.2), transparent)',
                            border: '2px solid rgba(67, 233, 123, 0.3)',
                            zIndex: 0
                        }}></div>

                        <div className="step-number-inner" style={{
                            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                            color: 'white',
                            boxShadow: '0 8px 32px rgba(67, 233, 123, 0.3)',
                            position: 'relative',
                            zIndex: 1
                        }}>4
                        </div>
                    </div>
                    <div className="step-body">
                        <h4 className="h4 mb-3">Testing & Optimization</h4>
                        <p className="mb-0">Cross-browser testing, SEO validation, performance tuning</p>
                    </div>
                </div>

                {/* STEP 5 - UPDATED STEP NUMBER ONLY */}
                <div
                    ref={(el: HTMLDivElement | null) => {
                        stepRefs.current[4] = el;
                    }}
                    className="step"
                >
                    <div className="step-number">
                        {/* Aurora effect */}
                        <div className="step-number-aurora" style={{
                            position: 'absolute',
                            inset: '-10px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4), rgba(245, 158, 11, 0.2), transparent)',
                            filter: 'blur(10px)',
                            zIndex: 0
                        }}></div>

                        {/* Pulse effect */}
                        <div className="step-number-pulse" style={{
                            position: 'absolute',
                            inset: '-15px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2), transparent)',
                            border: '2px solid rgba(251, 146, 60, 0.3)',
                            zIndex: 0
                        }}></div>

                        <div className="step-number-inner" style={{
                            background: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 100%)',
                            color: 'white',
                            boxShadow: '0 8px 32px rgba(251, 146, 60, 0.3)',
                            position: 'relative',
                            zIndex: 1
                        }}>5
                        </div>
                    </div>
                    <div className="step-body">
                        <h4 className="h4 mb-3">Launch & Support</h4>
                        <p className="mb-0">Go-live checklist, knowledge transfer, 3 months free support</p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
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

        /* Updated step number styles */
        .step .step-number {
          position: relative;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .step .step-number-inner {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .step:hover .step-number-inner {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(var(--shadow-color, 102, 126, 234), 0.4) !important;
        }

        /* Step-specific shadow colors */
        .step:nth-child(1) {
          --shadow-color: 102, 126, 234;
        }
        .step:nth-child(2) {
          --shadow-color: 245, 87, 108;
        }
        .step:nth-child(3) {
          --shadow-color: 79, 172, 254;
        }
        .step:nth-child(4) {
          --shadow-color: 67, 233, 123;
        }
        .step:nth-child(5) {
          --shadow-color: 251, 146, 60;
        }

        /* Hover effects for step content */
        .step:hover h3 {
          color: var(--step-color, #667eea) !important;
        }

        .step:nth-child(1):hover h3 {
          --step-color: #667eea;
        }
        .step:nth-child(2):hover h3 {
          --step-color: #f5576c;
        }
        .step:nth-child(3):hover h3 {
          --step-color: #4facfe;
        }
        .step:nth-child(4):hover h3 {
          --step-color: #43e97b;
        }
        .step:nth-child(5):hover h3 {
          --step-color: #fb923c;
        }
      `}</style>
        </Container>
    );
};

export default Work;