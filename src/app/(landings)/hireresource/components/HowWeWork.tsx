"use client";

import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import IconifyIcon from "@/components/IconifyIcon";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const tabs = [
  "Frontend",
  "Backend",
  "Mobile",
  "UI/UX Design",
  "Database",
  "Cloud & DevOps",
  "E-Commerce",
  "QA & Testing",
];

const techData: Record<string, any[]> = {
  Frontend: [
    { icon: "logos:react", name: "React", desc: "Build fast, scalable frontend applications" },
    { icon: "logos:nextjs-icon", name: "Next.js", desc: "SEO-friendly React frameworks" },
    { icon: "logos:vue", name: "Vue.js", desc: "Lightweight & flexible UI development" },
    { icon: "logos:angular-icon", name: "Angular", desc: "Enterprise-grade frontend solutions" },
  ],
  Backend: [
    { icon: "logos:nodejs-icon", name: "Node.js", desc: "High-performance backend APIs" },
    { icon: "logos:laravel", name: "Laravel", desc: "Secure PHP web applications" },
    { icon: "logos:python", name: "Python", desc: "Django & FastAPI backend services" },
    { icon: "logos:java", name: "Java", desc: "Spring Boot enterprise applications" },
  ],
  Mobile: [
    { icon: "logos:android-icon", name: "Android", desc: "Native Android mobile apps" },
    { icon: "logos:apple", name: "iOS", desc: "Premium iOS app development" },
    { icon: "logos:flutter", name: "Flutter", desc: "Cross-platform mobile applications" },
    { icon: "logos:react", name: "React Native", desc: "Single-codebase mobile apps" },
  ],
  "UI/UX Design": [
    { icon: "logos:figma", name: "Figma", desc: "Modern UI/UX design systems" },
    { icon: "logos:adobe-xd", name: "Adobe XD", desc: "Interactive design prototypes" },
    { icon: "mdi:palette-outline", name: "UI Design", desc: "Clean & conversion-focused UI" },
    { icon: "mdi:account-search-outline", name: "UX Research", desc: "User-centric experience research" },
  ],
  Database: [
    { icon: "logos:mysql", name: "MySQL", desc: "Reliable relational databases" },
    { icon: "logos:postgresql", name: "PostgreSQL", desc: "Advanced SQL data handling" },
    { icon: "logos:mongodb-icon", name: "MongoDB", desc: "Flexible NoSQL databases" },
    { icon: "logos:redis", name: "Redis", desc: "Ultra-fast in-memory caching" },
  ],
  "Cloud & DevOps": [
    { icon: "logos:aws", name: "AWS", desc: "Scalable cloud infrastructure" },
    { icon: "logos:microsoft-azure", name: "Azure", desc: "Enterprise cloud services" },
    { icon: "logos:docker-icon", name: "Docker", desc: "Containerized deployments" },
    { icon: "logos:kubernetes", name: "Kubernetes", desc: "Cloud orchestration systems" },
  ],
  "E-Commerce": [
    { icon: "logos:shopify", name: "Shopify", desc: "High-converting online stores" },
    { icon: "logos:magento", name: "Magento", desc: "Enterprise eCommerce platforms" },
    { icon: "logos:woocommerce", name: "WooCommerce", desc: "WordPress-based commerce" },
    { icon: "mdi:shopping-outline", name: "Headless Commerce", desc: "API-first eCommerce solutions" },
  ],
  "QA & Testing": [
    { icon: "mdi:clipboard-check-outline", name: "Manual Testing", desc: "Human-driven quality assurance" },
    { icon: "mdi:robot-outline", name: "Automation Testing", desc: "Automated test frameworks" },
    { icon: "logos:selenium", name: "Selenium", desc: "Browser automation testing" },
    { icon: "logos:cypress", name: "Cypress", desc: "Modern frontend testing tools" },
  ],
};

const HireByTechnology = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // Create refs for animation elements
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<(HTMLSpanElement | null)[]>([]);
  
  // Store animation instances for cleanup
  const animationsRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    // Initial header animations
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 85%",
        end: "top 50%",
        scrub: 1,
      }
    });

    if (h2Ref.current && spanRef.current && pRef.current) {
      headerTl
        .fromTo(h2Ref.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(spanRef.current,
          { opacity: 0, scale: 0.8, backgroundPosition: "100% 0%" },
          { opacity: 1, scale: 1, backgroundPosition: "0% 100%", duration: 1.2, ease: "back.out(1.7)" },
          "-=0.8"
        )
        .fromTo(pRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );
    }

    // Animate tabs container
    if (tabsRef.current) {
      gsap.fromTo(tabsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate background rings
    ringsRef.current.forEach((ring, index) => {
      if (ring) {
        gsap.fromTo(ring,
          { opacity: 0, scale: 0.8, rotation: index % 2 === 0 ? -30 : 30 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ring,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Initial card animation with stagger
    animateCards();

    setIsInitialLoad(false);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      animationsRef.current.forEach(anim => anim.kill());
    };
  }, []);

  // Animate cards when tab changes with smooth transition
  useEffect(() => {
    if (!isInitialLoad) {
      animateCards();
    }
  }, [activeTab, isInitialLoad]);

  const animateCards = () => {
    // Kill any existing card animations
    animationsRef.current.forEach(anim => anim.kill());
    animationsRef.current = [];

    // Get all cards
    const cards = document.querySelectorAll('.tech-card');
    
    if (cards.length === 0) return;

    // Create a master timeline for smooth sequencing
    const masterTl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      }
    });

    // First, fade out existing cards
    masterTl.to(cards, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 0.3,
      stagger: 0.02,
      ease: "power2.in"
    });

    // Then animate them in with smooth stagger
    masterTl.fromTo(cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.8,
        rotationX: 15,
        rotationY: 10,
        filter: "blur(8px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: {
          each: 0.08,
          from: "start",
          ease: "power2.out"
        },
        ease: "back.out(1.2)"
      },
      "-=0.2"
    );

    // Add subtle floating animation to each card
    cards.forEach((card, index) => {
      const floatingAnim = gsap.to(card, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1,
        paused: true
      });
      
      // Start floating animation after entrance animation
      setTimeout(() => {
        floatingAnim.play();
      }, 1000 + (index * 50));
      
      animationsRef.current.push(floatingAnim);
    });

    // Animate icons with bounce effect
    const icons = document.querySelectorAll('.tech-icon');
    masterTl.fromTo(icons,
      {
        scale: 0.6,
        opacity: 0,
        rotation: -10
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.8)"
      },
      "-=0.4"
    );

    animationsRef.current.push(masterTl);
  };

  // Handle hover animations
  const handleCardHover = (index: number, isEnter: boolean) => {
    const card = document.querySelectorAll('.tech-card')[index];
    const icon = card?.querySelector('.tech-icon');
    const button = card?.querySelector('.btn');
    
    if (!card || !icon || !button) return;

    if (isEnter) {
      gsap.to(card, {
        y: -12,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(icon, {
        scale: 1.1,
        rotation: 5,
        duration: 0.4,
        ease: "back.out(1.2)"
      });
      
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(card, {
        y: -5,
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut"
      });
      
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
      
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section className="hire-tech">
      {/* Background animation */}
      <div className="bg-anim">
        <span 
          ref={el => { if (el) ringsRef.current[0] = el; }}
          className="ring solid"
          style={{ opacity: 0 }}
        />
        <span 
          ref={el => { if (el) ringsRef.current[1] = el; }}
          className="ring dashed"
          style={{ opacity: 0 }}
        />
        <span 
          ref={el => { if (el) ringsRef.current[2] = el; }}
          className="ring solid small"
          style={{ opacity: 0 }}
        />
      </div>

      <div className="container position-relative">
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
              Hire Dedicated
            </span>{' '}
            Developers by Technology
          </h2>
          <p 
            ref={pRef}
            style={{ opacity: 0 }}
          >
            Choose the right technology and scale your team faster
          </p>
        </header>

        {/* Tabs */}
        <div 
          ref={tabsRef}
          className="tech-tabs"
          style={{ opacity: 0 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Container */}
        <div ref={cardsContainerRef}>
          <Row>
            {techData[activeTab].map((tech, index) => (
              <Col lg={3} md={4} sm={6} key={index} className="mb-4">
                <div 
                  className="tech-card"
                  onMouseEnter={() => handleCardHover(index, true)}
                  onMouseLeave={() => handleCardHover(index, false)}
                  style={{ 
                    opacity: 0,
                    transform: 'translateY(60px) scale(0.8)',
                    filter: 'blur(8px)'
                  }}
                >
                  <div className="tech-icon">
                    <IconifyIcon icon={tech.icon} width={48} className="tech-svg"/>
                  </div>

                  <h5>{tech.name}</h5>
                  <p>{tech.desc}</p>

                  <button className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
                    Hire Developer
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hire-tech {
          position: relative;
          padding: 120px 0;
          background: #0a0d1c;
          overflow: hidden;
          color: #ffffff;
        }

        /* Background rings */
        .bg-anim {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          animation: rotate 60s linear infinite;
          will-change: transform, opacity;
        }

        .ring.solid {
          width: 620px;
          height: 620px;
          border: 1px solid rgba(160, 140, 255, 0.35);
        }

        .ring.dashed {
          width: 820px;
          height: 820px;
          border: 2px dashed rgba(160, 140, 255, 0.45);
          animation-duration: 90s;
        }

        .ring.small {
          width: 420px;
          height: 420px;
          opacity: 0.35;
          animation-duration: 70s;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .section-header h2 {
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .section-header p {
          margin: 14px auto 50px;
          max-width: 560px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          line-height: 1.6;
        }

        .tech-tabs {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          margin-bottom: 40px;
          padding: 5px 0;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }

        .tech-tabs::-webkit-scrollbar {
          height: 4px;
        }

        .tech-tabs::-webkit-scrollbar-track {
          background: transparent;
        }

        .tech-tabs::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        .tab-btn {
          padding: 10px 18px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: transparent;
          color: #ffffff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          font-size: 14px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .tab-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .tab-btn:hover::before {
          left: 100%;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .tab-btn.active {
          background: #6a5cff;
          border-color: #6a5cff;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(106, 92, 255, 0.4);
        }

        .tech-card {
          height: 100%;
          padding: 32px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          text-align: center;
          transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
          will-change: transform, opacity, filter;
          position: relative;
          overflow: hidden;
        }

        .tech-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.6s ease, transform 0.6s ease;
          pointer-events: none;
        }

        .tech-card:hover::after {
          opacity: 1;
          transform: scale(1);
        }

        .tech-card:hover {
          box-shadow: 0 30px 60px rgba(140, 120, 255, 0.45),
                      0 15px 40px rgba(140, 120, 255, 0.3);
        }

        .tech-icon {
          width: 92px;
          height: 92px;
          margin: 0 auto 20px;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgb(255 255 255), #b4d2ff);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.35),
            0 0 40px rgba(140, 120, 255, 0.6);
          transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, scale, rotation;
        }
        
        .tech-card:hover .tech-icon {
          box-shadow: 
            inset 0 0 0 1px rgba(255, 255, 255, 0.5),
            0 0 60px rgba(140, 120, 255, 0.8);
        }
        
        .tech-icon :global(svg) {
          width: 36px !important;
          height: auto !important;
          transition: transform 0.3s ease;
        }
        
        .tech-card:hover .tech-icon :global(svg) {
          transform: scale(1.1);
        }

        .tech-card h5 {
          color: #ffffff;
          font-size: 18px;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }

        .tech-card:hover h5 {
          color: #b4d2ff;
        }

        .tech-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 18px;
          line-height: 1.6;
        }

        .tech-card .btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #6a5cff, #8b7cff);
          border: none;
          padding: 8px 16px;
          transition: all 0.3s ease;
          will-change: transform, scale;
        }

        .tech-card .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .tech-card:hover .btn {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(106, 92, 255, 0.4);
        }

        .tech-card:hover .btn::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 32px;
          }
          
          .hire-tech {
            padding: 80px 0;
          }
          
          .tech-card {
            padding: 24px;
          }
          
          .ring.solid {
            width: 400px;
            height: 400px;
          }
          
          .ring.dashed {
            width: 500px;
            height: 500px;
          }
          
          .ring.small {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 576px) {
          .section-header h2 {
            font-size: 28px;
          }
          
          .tech-tabs {
            gap: 8px;
            margin-bottom: 30px;
          }
          
          .tab-btn {
            padding: 8px 14px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default HireByTechnology;