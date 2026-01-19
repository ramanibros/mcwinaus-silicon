'use client';
import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import brandIcon from '@/assets/img/services/brand.png';
import growIcon from '@/assets/img/services/grow.png';
import buildIcon from '@/assets/img/services/build.png';
import scaleIcon from '@/assets/img/services/scale.png';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';

type Feature = {
  id: number;
  title: string;
  description?: string;
  link: string;
  linkText: string;
  icon: StaticImageData;
  phone?: string;
  techStack?: { light: StaticImageData; dark?: StaticImageData; alt: string; width: number }[];
};

const features: Feature[] = [
  {
    id: 1,
    title: 'Our Mission',
    description:
      'McWIN iTECH exists to transform Perth businesses into market leaders with custom Websites, SEO mastery, mobile apps, and digital strategies that increase conversions 3x faster while building sustainable growth.\n',
    link: '#',
    linkText: 'Read More',
    icon: brandIcon,
  },
  {
    id: 2,
    title: 'Our Vision',
    description:
      'To be Perth\'s go-to digital partner, helping Australian brands stay on top of Google, scale without limits, and achieve long-term results through genuine partnerships and proven technology.',
    link: '#',
    linkText: 'Read More',
    icon: buildIcon,
  }
];

const Features = () => {
  // Refs for text animation ONLY for the heading
  const staticTextRef = useRef<HTMLSpanElement>(null);
  const gradientTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // TEXT ANIMATION ONLY - Exact same as About page
    if (staticTextRef.current && gradientTextRef.current) {
      const staticText = staticTextRef.current;
      const gradientText = gradientTextRef.current;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: staticText.closest('h2'),
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,
        }
      });

      // Animate the static text ("Perth Business Growth")
      tl.fromTo(staticText,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Animate the gradient text ("Revolutionising") with EXACT same effects
      tl.fromTo(gradientText,
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="mb-2 mb-md-4 mb-lg-5">
      <Container>
        {/* ONLY THIS HEADING GETS ANIMATION - EXACTLY LIKE ABOUT PAGE */}
        <h2 className="h1 mb-md-4 mb-3 pt-xl-3">
          {/* Gradient text part - will be animated */}
          <span ref={gradientTextRef} className="text-gradient-primary">Revolutionising</span>
          
          {/* Static text part */}
          <span ref={staticTextRef}> Perth Business Growth</span>
        </h2>

        <Row xs={1} md={2} className="g-4 pt-2 pt-md-4 pb-lg-2">
          {features.map(feature => (
            <Col key={feature.id}>
              <Card className="flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100">
                <Image style={{margin:"20px 20px auto 20px",maxWidth:"80px"}}  src={feature.icon} alt={feature.title} width={100} height={100} priority />
                <Card.Body className="text-center text-sm-start text-md-center text-xxl-start pb-3 pb-sm-2 pb-md-3 pb-xxl-2">
                  <h3 className="mb-2 mt-n4 mt-sm-0 mt-md-n4 mt-xxl-0">{feature.title}</h3>
                  <div className="hr-indicator mb-2" />
                  {feature.phone ? (
                    <p className="d-flex align-items-center text-nav fs-xl fw-medium mb-2">
                      <IconifyIcon icon="bx:phone-call" className="fs-4 text-muted me-1" />
                      {feature.phone}
                    </p>
                  ) : (
                    <p className="fs-sm mb-1">{feature.description}</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Add global styles for the gradient text animation */}
      <style jsx global>{`
        .text-gradient-primary {
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
};

export default Features;