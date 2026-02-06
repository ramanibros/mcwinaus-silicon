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
    title: "Share Your Requirements",
    desc: "Tell us about your project goals, tech stack, team size, and timeline.",
    icon: "mdi:clipboard-text-outline",
    gradient: "linear-gradient(135deg, #6a5cff, #9b8cff)"
  },
  {
    step: "02",
    title: "Get Developer Profiles",
    desc: "We shortlist and share vetted developer profiles matching your requirements.",
    icon: "mdi:account-search-outline",
    gradient: "linear-gradient(135deg, #ff7a18, #ffb347)"
  },
  {
    step: "03",
    title: "Interview & Select",
    desc: "Interview developers, assess skills, and choose the perfect fit.",
    icon: "mdi:video-outline",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)"
  },
  {
    step: "04",
    title: "Onboard & Kickoff",
    desc: "Developers onboard quickly and start delivering from day one.",
    icon: "mdi:rocket-launch-outline",
    gradient: "linear-gradient(135deg, #38ef7d, #11998e)"
  }
];

const highlights = [
  {
    icon: "mdi:check-circle-outline",
    text: "Flexible hiring models – hourly, monthly, or full-time"
  },
  {
    icon: "mdi:check-circle-outline",
    text: "Pre-vetted developers with real-world experience"
  },
  {
    icon: "mdi:check-circle-outline",
    text: "Direct communication & full transparency"
  },
  {
    icon: "mdi:check-circle-outline",
    text: "Quick onboarding within 48–72 hours"
  },
  {
    icon: "mdi:check-circle-outline",
    text: "Timezone-aligned collaboration"
  }
];

const TextSession = () => {
  // Create refs for animation elements
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stickyBoxRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Header animation
    if (h2Ref.current && spanRef.current && pRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        }
      });

      // Animate main heading
      tl.fromTo(h2Ref.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Animate gradient text
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

      // Animate paragraph
      tl.fromTo(pRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }

    // Timeline items animation (staggered from left)
    timelineItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          {
            opacity: 0,
            x: -60,
            rotationY: 10,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Add dots animation
        const dot = item.querySelector('.dot');
        if (dot) {
          gsap.fromTo(dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.2 + 0.3,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Add icon animation
        const icon = item.querySelector('.timeline-icon');
        if (icon) {
          gsap.fromTo(icon,
            { 
              opacity: 0,
              scale: 0.5,
              rotation: -20,
              y: 20
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              y: 0,
              duration: 0.8,
              delay: index * 0.2 + 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }
    });

    // Sticky box animation
    if (stickyBoxRef.current) {
      gsap.fromTo(stickyBoxRef.current,
        {
          opacity: 0,
          x: 40,
          scale: 0.9,
          rotationY: -5
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stickyBoxRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // List items animation (staggered)
    listItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          {
            opacity: 0,
            x: 20,
            scale: 0.9
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.5,
            delay: index * 0.1 + 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Icon bounce animation
        const icon = item.querySelector('.list-icon');
        if (icon) {
          gsap.fromTo(icon,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1 + 0.4,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }
    });

    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="hire-process">
      <div className="container">
        <div className="process-grid">
          
          {/* LEFT — Timeline */}
          <div className="timeline">
            <header className="section-header">
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
                  How You Can
                </span>{' '}
                Hire From Us
              </h2>
              <p 
                ref={pRef}
                style={{ opacity: 0 }}
              >
                A simple, transparent, and fast hiring process designed for
                modern businesses
              </p>
              
            </header>

            {steps.map((item, index) => (
              <div 
                ref={el => {
                  if (el) timelineItemsRef.current[index] = el;
                }}
                className="timeline-item" 
                key={index}
                style={{ opacity: 0 }}
              >
                <div className="timeline-left">
                  <span className="step">{item.step}</span>
                  <span className="dot" style={{ background: item.gradient }} />
                  {index !== steps.length - 1 && <span className="line" />}
                </div>

                <div className="timeline-card">
                  <div
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

          {/* RIGHT — Sticky List */}
          <div className="process-sticky">
            <div 
              ref={stickyBoxRef}
              className="sticky-box"
              style={{ opacity: 0 }}
            >
              <h3>Why Hire From Us?</h3>
              <p>We simplify hiring by giving you access to vetted developers,
                flexible engagement models, and complete transparency.</p>

              <ul className="feature-list">
                {highlights.map((item, index) => (
                  <li 
                    ref={el => {
                      if (el) listItemsRef.current[index] = el;
                    }}
                    key={index}
                    style={{ opacity: 0 }}
                  >
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

      <style jsx>{`
        .hire-process {
          padding: 120px 0;
          background: #ffffff;
          overflow: hidden;
        }

        .process-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: flex-start;
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

        /* TIMELINE */
        .timeline-item {
          display: flex;
          gap: 30px;
          margin-bottom: 70px;
          will-change: transform, opacity;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .timeline-left {
          min-width: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step {
          font-size: 14px;
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
        }

        .timeline-card {
          padding: 20px;
          border-radius: 26px;
          border: 1px solid #eceffd;
          background: #ffffff;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          will-change: transform;
              width: 380px;
        }

        .timeline-card:hover {
          transform: translateY(-8px) rotateX(1deg) rotateY(1deg);
          box-shadow: 0 30px 60px rgba(30, 40, 120, 0.14),
                      0 15px 40px rgba(30, 40, 120, 0.08);
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
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .timeline-card:hover .timeline-icon {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .timeline-icon :global(svg) {
          width: 48px !important;
          height: 48px !important;
          transition: transform 0.3s ease;
        }

        .timeline-card:hover .timeline-icon :global(svg) {
          transform: scale(1.1);
        }

        .timeline-card h5 {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #0a0d1c;
          transition: color 0.3s ease;
          margin-bottom : 0px;
        }

        .timeline-card:hover h5 {
          color: #6a5cff;
        }

        .timeline-card p {
          font-size: 14.5px;
          color: #5a5f73;
          line-height: 1.7;
        }

        /* RIGHT LIST */
        .process-sticky {
          position: sticky;
          top: 120px;
        }

        .sticky-box {
          padding: 36px;
          border-radius: 28px;
          background: linear-gradient(135deg, #f7f8ff, #ffffff);
          border: 1px solid #eceffd;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
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
          transition: all 0.3s ease;
          will-change: transform, opacity;
        }

        .feature-list li:hover {
          transform: translateX(5px);
          color: #0a0d1c;
        }

        .list-icon {
          color: #6a5cff;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.3s ease;
          position: relative;
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

        .feature-list li:hover .list-icon {
          transform: scale(1.1);
        }

        .feature-list li:hover .list-icon::after {
          opacity: 0.1;
        }

        /* MOBILE */
        @media (max-width: 992px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .timeline-card {
            width : 100%;
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
          
          .sticky-box {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default TextSession;