"use client";

import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import IconifyIcon from "@/components/IconifyIcon";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const descriptionData = [
  {
    icon: "mdi:rocket-launch-outline",
    title: "Faster Product Development",
    desc: "Dedicated developers work exclusively on your project, ensuring faster execution and quicker go-to-market.",
    gradient: "linear-gradient(135deg, #6a5cff, #9b8cff)"
  },
  {
    icon: "mdi:account-star-outline",
    title: "Top 1% Engineering Talent",
    desc: "Get access to pre-vetted developers with deep technical expertise and real-world project experience.",
    gradient: "linear-gradient(135deg, #ff7a18, #ffb347)"
  },
  {
    icon: "mdi:chart-line",
    title: "Scalable & Flexible Teams",
    desc: "Scale your team size up or down instantly based on evolving business and project requirements.",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)"
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Complete Transparency",
    desc: "Stay in full control with direct communication, task visibility, and real-time progress tracking.",
    gradient: "linear-gradient(135deg, #38ef7d, #11998e)"
  },
  {
    icon: "mdi:currency-usd-off",
    title: "Cost-Effective Engagement",
    desc: "Save up to 60% on development costs without compromising on quality or performance.",
    gradient: "linear-gradient(135deg, #f857a6, #ff5858)"
  },
  {
    icon: "mdi:cog-sync-outline",
    title: "Seamless Collaboration",
    desc: "Our developers integrate smoothly with your in-house teams, tools, and workflows.",
    gradient: "linear-gradient(135deg, #8360c3, #2ebf91)"
  }
];

const DescriptionSection = () => {
  // Create refs for the animation elements
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation - EXACTLY THE SAME (no changes)
    if (h2Ref.current && spanRef.current && pRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        }
      });

      tl.fromTo(h2Ref.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      tl.fromTo(spanRef.current,
        {
          opacity: 0,
          scale: 0.8,
          backgroundPosition: "100% 0%"
        },
        {
          opacity: 1,
          scale: 1,
          backgroundPosition: "0% 100%",
          duration: 1.2,
          ease: "back.out(1.7)"
        },
        "-=0.8"
      );

      tl.fromTo(pRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }

    // COMPLETELY REWORKED - Smooth box animations with fade + scale
    // Create a master timeline for all cards
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Set initial state for all cards
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, {
          opacity: 0,
          y: 40,
          scale: 0.95,
        });
      }
    });

    // Smooth staggered fade-in animation
    masterTl.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      stagger: {
        amount: 1.2,
        from: "start",
        ease: "power2.out"
      },
      ease: "power3.out"
    });

    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Smooth hover animations using GSAP
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.desc-icon');
    
    gsap.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
      boxShadow: "0 25px 50px -8px rgba(0,0,0,0.15)"
    });
    
    gsap.to(icon, {
      y: -5,
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.desc-icon');
    
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      boxShadow: "none"
    });
    
    gsap.to(icon, {
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <section className="description-section">
      <div className="container">
        <header className="section-header text-center">
          <h2 ref={h2Ref} style={{ opacity: 0 }}>
            <span 
              ref={spanRef}
              className="text-gradient-primary"
              style={{
                background: 'linear-gradient(135deg, #6a5cff 0%, #ff7a18 50%, #00c6ff 100%)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                opacity: 0
              }}
            >
              Dedicated Developers.{' '}
            </span>
            Scalable Results.
          </h2>
          <p 
            ref={pRef}
            style={{ opacity: 0 }}
          >
            Why startups and enterprises prefer dedicated developers for building
            scalable, high-performance digital products
          </p>
        </header>

        <Row ref={cardsContainerRef}>
          {descriptionData.map((item, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div 
                ref={el => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="desc-card"
                style={{ opacity: 0 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="desc-icon"
                  style={{ background: item.gradient }}
                >
                  <IconifyIcon icon={item.icon} width={34} className="desc-svg" />
                </div>

                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <style jsx>{`
        .description-section {
          padding: 110px 0;
          background: #ffffff;
          color: #0a0d1c;
          position: relative;
        }
        
        .desc-icon :global(svg) {
          width: 36px !important;
          height: auto !important;
        }

        .section-header h2 {
          font-size: 42px;
          font-weight: 700;
          color: #0a0d1c;
          margin-bottom: 20px;
        }

        .section-header p {
          max-width: 680px;
          margin: 14px auto 70px;
          font-size: 16px;
          color: #5a5f73;
          line-height: 1.6;
        }

        .desc-card {
          height: 100%;
          padding: 36px 30px;
          border-radius: 26px;
          background: #ffffff;
          border: 1px solid #eceffd;
          transition: none; /* GSAP handles all animations */
          transform: translateZ(0); /* Force GPU acceleration */
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .desc-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #ffffff;
          transition: none; /* GSAP handles all animations */
          transform: translateZ(0); /* Force GPU acceleration */
        }

        .desc-card h5 {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #0a0d1c;
          transition: color 0.3s ease;
        }

        .desc-card:hover h5 {
          color: #6a5cff;
        }

        .desc-card p {
          font-size: 14.5px;
          line-height: 1.7;
          color: #5a5f73;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 32px;
          }
          
          .description-section {
            padding: 80px 0;
          }
          
          .section-header p {
            margin-bottom: 50px;
          }
        }

        @media (max-width: 576px) {
          .section-header h2 {
            font-size: 28px;
          }
          
          .desc-card {
            padding: 28px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default DescriptionSection;