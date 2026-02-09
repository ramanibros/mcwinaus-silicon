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

  useEffect(() => {
    // Title animation - similar to reference code
    if (h2Ref.current && spanRef.current && pRef.current) {
      // Create a timeline for the header animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        }
      });

      // Animate the main heading
      tl.fromTo(h2Ref.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Animate the gradient text span
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

      // Animate the paragraph
      tl.fromTo(pRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }

    // Cards entry animation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 80,
            scale: 0.92,
            rotationX: 5,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            delay: index * 0.1, // Slightly faster stagger
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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

        <Row>
          {descriptionData.map((item, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div 
                ref={el => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="desc-card"
                style={{ opacity: 0 }}
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
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .desc-card:hover {
          transform: translateY(-12px) rotateX(2deg) rotateY(1deg);
          box-shadow: 0 30px 60px rgba(30, 40, 120, 0.15),
                      0 15px 40px rgba(30, 40, 120, 0.1);
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
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .desc-card:hover .desc-icon {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2),
                      0 5px 15px rgba(0, 0, 0, 0.1);
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