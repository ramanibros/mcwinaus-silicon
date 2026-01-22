'use client';

import GlightBox from '@/components/GlightBox';
import IconifyIcon from '@/components/IconifyIcon';
import videoColor from '@/assets/img/landing/saas-3/video-cover.png';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

    // Animation for the paragraph section
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
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
        const stepBody = step.querySelector('.step-body');
        const stepTitle = step.querySelector('h3');
        const stepText = step.querySelector('p');
        
        // Set initial state (invisible but still in layout)
        gsap.set(stepNumberInner, { 
          scale: 0,
          rotation: 180
        });
        gsap.set([stepTitle, stepText], { 
          opacity: 0,
          y: 20 
        });
        
        // Create animation timeline for this step
        const stepTL = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
            markers: false // Set to true for debugging
          }
        });
        
        // Animate step number
        stepTL.to(stepNumberInner, {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: index * 0.2 // Stagger effect
        });
        
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
        className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto" 
        style={{ maxWidth: '530px' }}
      >
        <h2 ref={h2Ref} className="h1">
          Our Proven 4-Step <span ref={spanRef} className="text-gradient-primary">Brand Process</span>
        </h2>
        <p className="mb-0">
          Clear, collaborative, results-driven—how Perth businesses get award-winning brands that deliver.
        </p>
      </div>

      {/* STEPS SECTION - COMPLETELY UNCHANGED, just added refs */}
      <div 
        ref={stepsContainerRef}
        className="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3"
      >
        {/* STEP 1 - COMPLETELY UNCHANGED */}
        <div 
          ref={el => stepRefs.current[0] = el}
          className="step"
        >
          <div className="step-number">
            <div className="step-number-inner">1</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Discovery</h3>
            <p className="mb-0">Deep-dive into your Perth market, audience, and vision. Custom strategy mapped in 48 hours.</p>
          </div>
        </div>
        
        {/* STEP 2 - COMPLETELY UNCHANGED */}
        <div 
          ref={el => stepRefs.current[1] = el}
          className="step"
        >
          <div className="step-number">
            <div className="step-number-inner">2</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Design & Concepts</h3>
            <p className="mb-0">3 unique concepts presented—pick your winner with stakeholder feedback built-in.</p>
          </div>
        </div>
        
        {/* STEP 3 - COMPLETELY UNCHANGED */}
        <div 
          ref={el => stepRefs.current[2] = el}
          className="step"
        >
          <div className="step-number">
            <div className="step-number-inner">3</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Refinement & Assets</h3>
            <p className="mb-0">Perfect your brand with unlimited revisions plus complete digital asset delivery.</p>
          </div>
        </div>
        
        {/* STEP 4 - COMPLETELY UNCHANGED */}
        <div 
          ref={el => stepRefs.current[3] = el}
          className="step"
        >
          <div className="step-number">
            <div className="step-number-inner">4</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Launch & Scale</h3>
            <p className="mb-0">Brand guidelines & coaching sessions to ensure long-term consistency across all channels.</p>
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
      `}</style>
    </Container>
  );
};

export default Work;