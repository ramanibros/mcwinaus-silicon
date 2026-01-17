'use client';

import React, { useEffect, useRef } from 'react'; // Added useEffect, useRef
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import animationData from '@/assets/json/animation-financial-landing.json';
import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from "@/components/IconifyIcon";

const Banner: React.FC = () => {
  // Added refs for animation
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  // Added animation effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

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

      // Animate the entire h2
      tl.fromTo(h2Text,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      );

      // Animate the gradient span with a different effect
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

    // Cleanup
    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (h2Ref.current && trigger.trigger === h2Ref.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="container mt-5 mb-5">
      <Card className="bg-white border-primary shadow-sm px-4 px-lg-0" data-bs-theme="light">
        <Row className="align-items-center py-3">
          <Col xl={5} md={6} className="offset-lg-1 text-center text-md-start py-4 py-lg-5">
            {/* Added ref to h2 and span */}
            <h2 ref={h2Ref} className="h1">
              What You'll Get With <span ref={spanRef} className="text-gradient-primary">McWIN iTECH</span>
            </h2>
            {/*<h3 className="h4 text-primary">Get remote financial consulting help</h3>*/}
            <ul className="list-unstyled mb-0">
              <li className="d-flex mb-2">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                3x More Qualified Leads
              </li>
              <li className="d-flex mb-2">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                67% Higher Conversion Rates
              </li>
              <li className="d-flex">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                Projects Live 2x Faster
              </li>
              <li className="d-flex">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                24/7 Perth Team Support
              </li>
              <li className="d-flex">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                Long-Term Scalable Growth
              </li>
            </ul>
          </Col>

          <Col xl={6} lg={5} md={6}>
            <div style={{ maxWidth: 416, margin: '0 auto' }}>
              <Lottie animationData={animationData} loop autoplay />
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default Banner;