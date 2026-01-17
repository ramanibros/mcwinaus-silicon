'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image, { StaticImageData } from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import brandIcon from '@/assets/img/services/brand.png';
import growIcon from '@/assets/img/services/grow.png';
import buildIcon from '@/assets/img/services/build.png';
import scaleIcon from '@/assets/img/services/scale.png';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';

type Feature = {
  id: number;
  title: string;
  description: React.ReactNode;
  link: string;
  linkText: string;
  icon: StaticImageData;
  phone?: string;
  techStack?: { light: StaticImageData; dark?: StaticImageData; alt: string; width: number }[];
};

const features: Feature[] = [
  {
    id: 1,
    title: 'BRAND',
    description:
        (
            <>
              Branding, Web Design, UI/UX & Mobile App Design that <b>boosts authority 3x faster.</b>
            </>
        ),
    link: '/brand',
    linkText: 'Read More',
    icon: brandIcon,
  },
  {
    id: 2,
    title: 'BUILD',
    description:
        (
            <>
              Websites, eCommerce, Apps & Custom Software that <b>increase conversions without spending thousands.</b>
            </>
        ),
    link: '/build',
    linkText: 'Read More',
    icon: buildIcon,
  },
  {
    id: 3,
    title: 'GROW',
    description:
        (
            <>
              SMM, SEO, SEM & Pay-Per-Click that <b>drive qualified leads</b>—proof not promises.
            </>
        ),
    link: '/grow',
    linkText: 'Read More',
    icon: growIcon,
  },
  {
    id: 4,
    title: 'SCALE',
    description:
        (
            <>
              Integrations, Optimisation & 24/7 Support for <b>businesses ready to scale big.</b>
            </>
        ),
    link: '/scale',
    linkText: 'Read More',
    icon: scaleIcon
  },
];

const Features = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only run animation on client side
    if (typeof window === 'undefined') return;

    if (h1Ref.current && spanRef.current) {
      // Split the text into characters for animation
      const h1Text = h1Ref.current;
      const spanText = spanRef.current;
      
      // Create a timeline with scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top 80%", // Start animation when top of h1 reaches 80% from top of viewport
          end: "top 20%", // End animation when top reaches 20% from top
          scrub: 1, // Smooth scrubbing effect
          markers: false, // Set to true for debugging
        }
      });

      // Animate the entire h1
      tl.fromTo(h1Text,
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
          backgroundSize: "200% 200%", // For gradient animation
          backgroundPosition: "100% 0%"
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          backgroundPosition: "0% 100%", // Gradient shift
        },
        "-=0.8" // Overlap with previous animation
      );

      // Optional: Animate individual characters for more dramatic effect
      // Uncomment this if you want character-by-character animation
      /*
      const h1Content = h1Ref.current.textContent || "";
      const chars = h1Content.split("");
      h1Ref.current.innerHTML = "";
      
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        h1Ref.current?.appendChild(span);
      });
      
      // Animate each character
      gsap.to(h1Ref.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top 80%",
          scrub: 1,
        }
      });
      */
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        /* EXACT border animation from your CSS */
        .animated-border-container {
          position: relative;
          border-radius: 20px;
          padding: 3px;
          background: transparent;
          overflow: hidden;
        }
        
        .animated-border-container::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background-image: linear-gradient(180deg, rgb(0 183 255 / 46%), rgb(255 48 255 / 43%));
          border-radius: 23px;
          animation: rotBGimg 30s linear infinite;
          z-index: 0;
        }
        
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Make sure card sits on top */
        .animated-border-container .card {
          position: relative;
          z-index: 1;
          margin: 0;
        }

        /* Text gradient for the span */
        .text-gradient-primary {
          background: linear-gradient(90deg, #007BFF, #FF00FF);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% 200%;
          display: inline-block;
          transition: background-position 0.5s ease;
        }

        /* Optional: Add a subtle text shadow for better readability */
        .h1-animated {
          overflow: hidden;
          position: relative;
        }
      `}</style>

      <section className="mb-2 mb-md-4 mb-lg-5">
        <Container>
          <h2 
            ref={h1Ref}
            className="h1 mb-md-4 mb-3 pt-xl-3 h1-animated"
          >
            <span ref={spanRef} className="text-gradient-primary">Your brand,</span> Your Growth Partner.
          </h2>
          <Row className="gy-sm-4 gy-3 pb-xl-2 pb-md-0 pb-sm-2">
            <Col md={6} xs={12}>
              <p className="mb-0 fs-lg">
                Get award-winning digital solutions with real insight into Perth's market. <b>We've got you covered</b> from vision to long-term results.
              </p>
            </Col>
          </Row>

          <Row xs={1} md={2} className="g-4 pt-2 pt-md-4 pb-lg-2">
            {features.map(feature => (
              <Col key={feature.id}>
                {/* Wrap Card with animated border container */}
                <div className="animated-border-container h-100">
                  <Card className="flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100 bg-white">
                    <Image 
                      style={{margin:"20px 20px auto 20px",maxWidth:"80px"}}  
                      src={feature.icon} 
                      alt={feature.title} 
                      width={100} 
                      height={100} 
                      priority 
                    />
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

                      <div className="text-end">
                        <Link href={feature.link} className="btn btn-link stretched-link px-0">
                          {feature.linkText}
                          <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-1" />
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;