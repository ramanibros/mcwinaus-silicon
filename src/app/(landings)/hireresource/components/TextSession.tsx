"use client";

import React, { useEffect, useRef } from "react";
import IconifyIcon from "@/components/IconifyIcon";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    step: "01",
    title: "Share Requirements",
    desc: "Outline project scope, tech needs, timeline—quick discovery call.",
    icon: "mdi:clipboard-text-outline",
    gradient: "linear-gradient(135deg, #6a5cff, #9b8cff)"
  },
  {
    step: "02",
    title: "Review Profiles",
    desc: "Curated shortlist of matched, pre-vetted developers.",
    icon: "mdi:account-search-outline",
    gradient: "linear-gradient(135deg, #ff7a18, #ffb347)"
  },
  {
    step: "03",
    title: "Interview & Select",
    desc: "Direct interviews, skills assessment—your choice, no pressure.",
    icon: "mdi:video-outline",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)"
  },
  {
    step: "04",
    title: "Onboard & Deliver",
    desc: "48-hour ramp-up—productive contributions from day one.",
    icon: "mdi:rocket-launch-outline",
    gradient: "linear-gradient(135deg, #38ef7d, #11998e)"
  }
];

const highlights = [
  {
    icon: "mdi:check-circle-outline",
    text: "Flexible engagement—hourly, monthly, dedicated"
  },
  {
    icon: "mdi:check-circle-outline",
    text: "Proven talent with commercial success"
  },
  {
    icon: "mdi:check-circle-outline",
    text: "Direct collaboration—no communication barriers"
  },
  {
    icon: "mdi:check-circle-outline",
    text: "Rapid deployment—48 hours to productivity"
  },
  {
    icon: "mdi:check-circle-outline",
    text: "Perfect time zone alignment for seamless work"
  }
];

const TextSession = () => {
  // Create refs for animation elements - LEFT SIDE ONLY
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineDotsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const timelineLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  
  // NO GSAP REFS FOR RIGHT SIDE - using CSS only

  useEffect(() => {
    // Set initial states for LEFT SIDE animated elements ONLY
    gsap.set([h2Ref.current, spanRef.current, pRef.current], {
      opacity: 0,
      y: 40
    });

    gsap.set(timelineItemsRef.current, {
      opacity: 0,
      x: -30
    });

    gsap.set(timelineCardsRef.current, {
      opacity: 0,
      scale: 0.92,
      y: 30
    });

    gsap.set(timelineIconsRef.current, {
      opacity: 0,
      scale: 0.6,
      rotation: -15
    });

    gsap.set(timelineDotsRef.current, {
      opacity: 0,
      scale: 0
    });

    gsap.set(timelineLinesRef.current, {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top center"
    });

    // Master timeline for LEFT SIDE animations ONLY
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // 1. HEADER ANIMATIONS - Smooth fade up
    masterTl
      .to(h2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(spanRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        backgroundPosition: "0% 100%",
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .to(pRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
      }, "-=0.4");

    // 2. TIMELINE ITEMS - Smooth staggered entrance
    timelineItemsRef.current.forEach((_, index) => {
      masterTl
        .to(timelineItemsRef.current[index], {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out"
        }, `-=${index === 0 ? 0.2 : 0.4}`)
        .to(timelineDotsRef.current[index], {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.2)"
        }, "-=0.6")
        .to(timelineLinesRef.current[index], {
          opacity: 1,
          scaleY: 1,
          duration: 0.8,
          ease: "power3.inOut"
        }, "-=0.4")
        .to(timelineCardsRef.current[index], {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out"
        }, "-=0.5")
        .to(timelineIconsRef.current[index], {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.4)"
        }, "-=0.7");
    });

    // SMOOTH HOVER ANIMATIONS - LEFT SIDE ONLY
    timelineCardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
            boxShadow: "0 30px 60px rgba(30, 40, 120, 0.14), 0 15px 40px rgba(30, 40, 120, 0.08)"
          });
          
          const icon = card.querySelector('.timeline-icon');
          if (icon) {
            gsap.to(icon, {
              y: -5,
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out"
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            boxShadow: "none"
          });
          
          const icon = card.querySelector('.timeline-icon');
          if (icon) {
            gsap.to(icon, {
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      timelineCardsRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="hire-process">
      <div className="container">
        <div className="process-grid">
          
          {/* LEFT — Timeline - WITH GSAP ANIMATIONS */}
          <div className="timeline">
            <header className="section-header">
              <h2 ref={h2Ref}>
                <span 
                  ref={spanRef}
                  className="text-gradient-primary"
                  style={{
                    background: 'linear-gradient(135deg, #6a5cff 0%, #ff7a18 50%, #00c6ff 100%)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                 Our Streamlined
                </span>{' '}
                Hiring Process
              </h2>
              <p 
                ref={pRef}
              >
                Simple 4-step approach for businesses:
              </p>
            </header>

            {steps.map((item, index) => (
              <div 
                ref={el => {
                  if (el) timelineItemsRef.current[index] = el;
                }}
                className="timeline-item" 
                key={index}
              >
                <div className="timeline-left">
                  <span className="step">{item.step}</span>
                  <span 
                    ref={el => {
                      if (el) timelineDotsRef.current[index] = el;
                    }}
                    className="dot" 
                    style={{ background: item.gradient }} 
                  />
                  {index !== steps.length - 1 && (
                    <span 
                      ref={el => {
                        if (el) timelineLinesRef.current[index] = el;
                      }}
                      className="line" 
                    />
                  )}
                </div>

                <div 
                  ref={el => {
                    if (el) timelineCardsRef.current[index] = el;
                  }}
                  className="timeline-card"
                >
                  <div
                    ref={el => {
                      if (el) timelineIconsRef.current[index] = el;
                    }}
                    className="timeline-icon"
                    style={{ background: item.gradient }}
                  >
                    <IconifyIcon
                      icon={item.icon}
                      width={48}
                      height={48}
                    />
                  </div>

                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Sticky List - FIXED STICKY POSITIONING */}
          <div className="process-sticky-wrapper">
            <div className="process-sticky">
              <div className="sticky-box">
                <h3>Why Partner With Our Team?</h3>
                <p>Hiring expertise with national reach—reliable developers, flexible models</p>

                <ul className="feature-list">
                  {highlights.map((item, index) => (
                    <li key={index}>
                      <span className="list-icon">
                        <IconifyIcon icon={item.icon} width={22} />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hire-process {
          padding: 120px 0;
          background: #ffffff;
          position: relative;
          overflow: visible;
        }

        .process-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: start;
          position: relative;
        }

        /* HEADER */
        .section-header h2 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #0a0d1c;
        }

        .section-header p {
          color: #5a5f73;
          margin-bottom: 60px;
          font-size: 16px;
          line-height: 1.6;
        }

        /* TIMELINE - GSAP ANIMATED */
        .timeline {
          position: relative;
        }

        .timeline-item {
          display: flex;
          gap: 30px;
          margin-bottom: 70px;
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .timeline-left {
          min-width: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step {
          font-size: 24px;
          font-weight: 600;
          color: #8a8fb3;
          margin-bottom: 8px;
        }

        .dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          transform: translateZ(0);
        }

        .dot::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: inherit;
          opacity: 0.3;
          filter: blur(6px);
        }

        .line {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, #e7e9f1, transparent);
          margin-top: 8px;
          position: relative;
          transform-origin: top center;
        }

        .timeline-card {
          padding: 20px;
          border-radius: 26px;
          border: 1px solid #eceffd;
          background: #ffffff;
          transition: none;
          transform: translateZ(0);
          backface-visibility: hidden;
          width: 380px;
          will-change: transform, box-shadow;
        }

        .timeline-icon {
          width: 88px;
          height: 88px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #ffffff;
          transition: none;
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }

        .timeline-icon :global(svg) {
          width: 48px !important;
          height: 48px !important;
          transition: none;
        }

        .timeline-card h5 {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 0px;
          color: #0a0d1c;
          transition: color 0.3s ease;
        }

        .timeline-card:hover h5 {
          color: #6a5cff;
        }

        .timeline-card p {
          font-size: 14.5px;
          color: #5a5f73;
          line-height: 1.7;
        }

        /* RIGHT LIST - FIXED STICKY POSITIONING */
        .process-sticky-wrapper {
          position: relative;
          height: 100%;
        }

        .process-sticky {
          position: sticky;
          top: 120px;
          width: 100%;
        }

        .sticky-box {
          padding: 20px;
          border-radius: 28px;
          background: linear-gradient(135deg, #f7f8ff, #ffffff);
          border: 1px solid #eceffd;
          transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .sticky-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(30, 40, 120, 0.12);
        }

        .sticky-box h3 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 22px;
          color: #0a0d1c;
        }

        .sticky-box p {
          color: #5a5f73;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 15px;
          color: #5a5f73;
          margin-bottom: 16px;
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .feature-list li:hover {
          transform: translateX(8px);
          color: #0a0d1c;
        }

        .list-icon {
          color: #6a5cff;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .feature-list li:hover .list-icon {
          transform: scale(1.2) rotate(5deg);
          color: #6a5cff;
        }

        .list-icon::after {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          background: #6a5cff;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-list li:hover .list-icon::after {
          opacity: 0.15;
        }

        /* MOBILE */
        @media (max-width: 992px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .timeline-card {
            width: 100%;
          }

          .process-sticky-wrapper {
            height: auto;
          }

          .process-sticky {
            position: relative;
            top: auto;
            margin-top: 40px;
          }
          
          .hire-process {
            padding: 80px 0;
          }
          
          .section-header h2 {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            gap: 20px;
            margin-bottom: 50px;
          }
          
          .timeline-left {
            flex-direction: row;
            min-width: auto;
            gap: 15px;
            align-items: center;
          }
          
          .step {
            margin-bottom: 0;
          }
          
          .dot {
            order: 1;
          }
          
          .line {
            display: none;
          }
          
          .timeline-card {
            padding: 24px;
          }
        }

        @media (max-width: 576px) {
          .section-header h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default TextSession;