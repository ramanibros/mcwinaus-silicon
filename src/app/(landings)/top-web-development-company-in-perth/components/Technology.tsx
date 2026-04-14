"use client";

import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import IconifyIcon from "@/components/IconifyIcon";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const tabs = [
  "Frontend",
  "Backend",
  "Database",
  "Industrial",
  "Cloud",
];

const techData: Record<string, any[]> = {
  Frontend: [
    { icon: "logos:react", name: "React.js", desc: "Build fast, scalable frontend applications" },
    { icon: "logos:nextjs-icon", name: "Next.js 14", desc: "SEO-friendly React frameworks" },
    { icon: "logos:vue", name: "Vue.js", desc: "Lightweight & flexible UI development" },
    { icon: "logos:angular", name: "Angular", desc: "Enterprise-grade SPA framework" },
  ],
  Backend: [
    { icon: "logos:nodejs-icon", name: "Node.js", desc: "High-performance backend APIs" },
    { icon: "logos:python", name: "Python Django", desc: "Django & FastAPI backend services" },
    { icon: "logos:dotnet", name: ".NET Core", desc: "Enterprise backend solutions" },
    { icon: "logos:php", name: "PHP Laravel", desc: "Robust PHP framework" },
  ],
  Database: [
    { icon: "logos:postgresql", name: "PostgreSQL", desc: "Advanced SQL data handling" },
    { icon: "logos:mongodb-icon", name: "MongoDB", desc: "Flexible NoSQL databases" },
    { icon: "logos:sql-server", name: "SQL Server", desc: "Enterprise database solutions" },
    { icon: "logos:influxdb", name: "TimescaleDB", desc: "Time-series for IoT data" },
  ],
  Industrial: [
    { icon: "mdi:factory", name: "Ignition SCADA", desc: "Industrial automation platform" },
    { icon: "mdi:chart-line", name: "Grafana", desc: "Real-time dashboards" },
    { icon: "mdi:nodejs", name: "Node-RED", desc: "Low-code IoT flows" },
    { icon: "mdi:router-network", name: "MQTT Protocol", desc: "IoT messaging" },
  ],
  Cloud: [
    { icon: "logos:aws", name: "AWS Perth", desc: "Scalable cloud infrastructure" },
    { icon: "logos:microsoft-azure", name: "Azure Australia Central 2", desc: "Enterprise cloud services" },
    { icon: "logos:google-cloud", name: "Google Cloud", desc: "Cloud-native solutions" },
    { icon: "logos:digital-ocean", name: "DigitalOcean", desc: "Developer-friendly cloud" },
  ],
};

const HireByTechnology = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Create refs for animation elements
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Store animation instances for cleanup
  const animationsRef = useRef<(gsap.core.Tween | gsap.core.Timeline)[]>([]);
  const masterTlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Create a master timeline for section entrance
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate header
    if (h2Ref.current && spanRef.current && pRef.current) {
      masterTl
        .fromTo(h2Ref.current,
          { opacity: 0, y: 60, rotateX: -15 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(spanRef.current,
          {
            opacity: 0,
            scale: 0.5,
            backgroundPosition: "200% 0%"
          },
          {
            opacity: 1,
            scale: 1,
            backgroundPosition: "0% 100%",
            duration: 1.2,
            ease: "elastic.out(1, 0.5)"
          },
          "-=0.8"
        )
        .fromTo(pRef.current,
          { opacity: 0, y: 30, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );
    }

    // Animate floating shapes
    floatingShapesRef.current.forEach((shape, index) => {
      if (shape) {
        // Entrance animation
        gsap.fromTo(shape,
          {
            opacity: 0,
            scale: 0,
            rotation: index * 45,
            x: index % 2 === 0 ? -100 : 100,
            y: index % 3 === 0 ? -100 : 100
          },
          {
            opacity: 0.6,
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Floating animation
        const floatAnim = gsap.to(shape, {
          y: -20,
          x: index % 2 === 0 ? 10 : -10,
          rotation: index * 2,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
        animationsRef.current.push(floatAnim);
      }
    });

    // Animate tabs container
    if (tabsContainerRef.current) {
      gsap.fromTo(tabsContainerRef.current,
        { opacity: 0, x: -50, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tabsContainerRef.current,
            start: "top 75%",
            end: "top 45%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Initial card animation
    setTimeout(() => {
      animateCards();
    }, 500);

    setIsInitialLoad(false);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      animationsRef.current.forEach(anim => anim.kill());
      if (masterTlRef.current) {
        masterTlRef.current.kill();
      }
    };
  }, []);

  // Animate cards when tab changes
  useEffect(() => {
    if (!isInitialLoad && !isAnimating) {
      animateCards();
    }
  }, [activeTab, isInitialLoad]);

  const animateCards = () => {
    // Prevent multiple animations
    if (isAnimating) return;
    setIsAnimating(true);

    // Kill any existing card animations
    animationsRef.current.forEach(anim => anim.kill());
    animationsRef.current = [];
    if (masterTlRef.current) {
      masterTlRef.current.kill();
    }

    // Get all cards
    const cards = document.querySelectorAll('.tech-card');
    const container = cardsContainerRef.current;

    if (cards.length === 0 || !container) {
      setIsAnimating(false);
      return;
    }

    // Create a master timeline for smooth transition
    const masterTl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
      },
      onComplete: () => {
        setIsAnimating(false);
      }
    });

    masterTlRef.current = masterTl;

    // Set initial state for all cards
    gsap.set(cards, {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      filter: "blur(0px)"
    });

    // Animate out - smoother exit with 3D effect
    masterTl.to(cards, {
      opacity: 0,
      scale: 0.6,
      y: 50,
      rotateY: 30,
      rotateX: 15,
      filter: "blur(15px)",
      duration: 0.4,
      stagger: {
        amount: 0.2,
        from: "random"
      },
      ease: "power2.in"
    });

    // Small delay to ensure DOM updates
    masterTl.add(() => {
      // Force a reflow
      container.offsetHeight;
    });

    // Animate in - smooth entrance with 3D effect
    masterTl.fromTo(cards,
      {
        opacity: 0,
        scale: 0.4,
        y: 80,
        rotateY: -30,
        rotateX: -15,
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: {
          amount: 0.5,
          from: "edges",
          grid: [2, 2],
          ease: "power2.out"
        },
        ease: "back.out(1.5)"
      },
      "-=0.2"
    );

    // Animate icons with a smooth bounce
    const icons = document.querySelectorAll('.tech-icon');
    masterTl.fromTo(icons,
      {
        scale: 0,
        opacity: 0,
        rotation: -20,
        x: -20
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        x: 0,
        duration: 0.6,
        stagger: {
          amount: 0.3,
          from: "center"
        },
        ease: "back.out(1.8)"
      },
      "-=0.4"
    );

    // Animate content with fade up
    const contents = document.querySelectorAll('.tech-content');
    masterTl.fromTo(contents,
      {
        opacity: 0,
        y: 30,
        filter: "blur(5px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Add a subtle container pulse
    masterTl.to(container, {
      scale: 1.02,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut"
    }, "-=0.3");

    // Add particle effect to cards
    cards.forEach((card) => {
      // Create particle elements
      const particles = document.createElement('div');
      particles.className = 'card-particles';
      card.appendChild(particles);

      // Animate particles
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);
        particle.style.setProperty('--delay', `${i * 0.1}s`);
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particles.appendChild(particle);
      }

      // Clean up particles after animation
      setTimeout(() => {
        const existingParticles = card.querySelector('.card-particles');
        if (existingParticles) {
          existingParticles.remove();
        }
      }, 1000);
    });

    animationsRef.current.push(masterTl);
  };

  // Handle hover animations
  const handleCardHover = (index: number, isEnter: boolean) => {
    if (isAnimating) return;

    const card = document.querySelectorAll('.tech-card')[index];
    const icon = card?.querySelector('.tech-icon');
    const button = card?.querySelector('.btn-hire');

    if (!card || !icon || !button) return;

    if (isEnter) {
      // Create a magnetic effect
      gsap.to(card, {
        y: -15,
        scale: 1.05,
        boxShadow: "0 30px 60px rgba(106, 92, 255, 0.4), 0 0 0 2px rgba(106, 92, 255, 0.3)",
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(icon, {
        scale: 1.1,
        rotation: 0,
        duration: 0.5,
        /*ease: "elastic.out(1, 0.3)"*/
      });

      gsap.to(button, {
        scale: 1.1,
        backgroundColor: "#8b7cff",
        duration: 0.3,
        ease: "power2.out"
      });

      // Add glow effect
      gsap.to(card, {
        boxShadow: "0 30px 60px rgba(106, 92, 255, 0.6), 0 0 30px rgba(106, 92, 255, 0.4)",
        duration: 0.3
      });
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
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
        backgroundColor: "#6a5cff",
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  };

  // Handle tab hover animation
  const handleTabHover = (e: React.MouseEvent<HTMLButtonElement>, isEnter: boolean) => {
    const tab = e.currentTarget;
    if (isEnter) {
      gsap.to(tab, {
        scale: 1.05,
        x: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(tab, {
        scale: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section ref={sectionRef} className="hire-tech-vertical">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div
          ref={el => { if (el) floatingShapesRef.current[0] = el; }}
          className="shape shape-1"
        />
        <div
          ref={el => { if (el) floatingShapesRef.current[1] = el; }}
          className="shape shape-2"
        />
        <div
          ref={el => { if (el) floatingShapesRef.current[2] = el; }}
          className="shape shape-3"
        />
        <div
          ref={el => { if (el) floatingShapesRef.current[3] = el; }}
          className="shape shape-4"
        />
      </div>

      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
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
                opacity: 0,
                marginRight: 10
              }}
            >
              Technologies{' '}
            </span>
             We Master
          </h2>
          <p
            ref={pRef}
            style={{ opacity: 0 }}
          >
            Industry-leading tech stack powering Perth's fastest websites
          </p>
        </div>

        {/* Main Content with Vertical Tabs */}
        <div className="content-wrapper">
          {/* Vertical Tabs - Scrollable */}
          <div
            ref={tabsContainerRef}
            className="tabs-vertical"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-vertical-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                onMouseEnter={(e) => handleTabHover(e, true)}
                onMouseLeave={(e) => handleTabHover(e, false)}
              >
                <span className="tab-indicator" />
                <span className="tab-text">{tab}</span>
                <span className="tab-count">{techData[tab].length}</span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div
            ref={cardsContainerRef}
            className={`cards-grid ${isAnimating ? 'animating' : ''}`}
          >
            <Row>
              {techData[activeTab].map((tech, index) => (
                <Col md={6} xl={4} key={index} className="mb-4">
                  <div
                    className="tech-card"
                    onMouseEnter={() => handleCardHover(index, true)}
                    onMouseLeave={() => handleCardHover(index, false)}
                  >
                    <div className="card-inner">
                      <div className="tech-icon-wrapper">
                        <div className="tech-icon">
                          <IconifyIcon icon={tech.icon} width={40} className="tech-svg"/>
                        </div>
                      </div>

                      <div className="tech-content">
                        <h5>{tech.name}</h5>
                        <p>{tech.desc}</p>

                        <Link href="/contact-hire-resource" className="page-link" aria-label="Hire Developer">
                          <button className="btn btn-hire">
                            <span>Hire Developer</span>
                            <IconifyIcon icon="mdi:arrow-right" width={18} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hire-tech-vertical {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #0a0d1c 0%, #1a1f35 100%);
          overflow: hidden;
          color: #ffffff;
          /*min-height: 100vh;*/
        }

        /* Floating Shapes */
        .floating-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.6;
          will-change: transform;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #6a5cff 0%, transparent 70%);
          top: 10%;
          left: 5%;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #ff7a18 0%, transparent 70%);
          bottom: 10%;
          right: 5%;
        }

        .shape-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #00c6ff 0%, transparent 70%);
          top: 30%;
          right: 15%;
        }

        .shape-4 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #ff4d4d 0%, transparent 70%);
          bottom: 20%;
          left: 10%;
        }

        /* Section Header */
        .section-header {
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .section-header h2 {
          font-size: 48px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .gradient-text {
          background: linear-gradient(135deg, #6a5cff 0%, #ff7a18 50%, #00c6ff 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .section-header p {
          margin: 0 auto;
          max-width: 600px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 18px;
          line-height: 1.6;
        }

        /* Content Wrapper */
        .content-wrapper {
          display: flex;
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        /* Vertical Tabs */
        .tabs-vertical {
          flex: 0 0 220px;
          max-height: 500px;
          overflow-y: auto;
          padding-right: 15px;
          scrollbar-width: thin;
          scrollbar-color: #6a5cff rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 100px;
          border-right: solid 1px gray;
        }

        .tabs-vertical::-webkit-scrollbar {
          width: 4px;
        }

        .tabs-vertical::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .tabs-vertical::-webkit-scrollbar-thumb {
          background: #6a5cff;
          border-radius: 10px;
        }

        .tab-vertical-btn {
          width: 100%;
          padding: 15px 20px;
          margin-bottom: 10px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          border: 1px solid transparent;
        }

        .tab-indicator {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: #6a5cff;
          transform: scaleY(0);
          transition: transform 0.3s ease;
          border-radius: 0 3px 3px 0;
        }

        .tab-vertical-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(106, 92, 255, 0.3);
          transform: translateX(5px);
        }

        .tab-vertical-btn.active {
          background: rgba(106, 92, 255, 0.15);
          color: #ffffff;
          border-color: #6a5cff;
          box-shadow: 0 5px 20px rgba(106, 92, 255, 0.2);
        }

        .tab-vertical-btn.active .tab-indicator {
          transform: scaleY(1);
        }

        .tab-text {
          flex: 1;
        }

        .tab-count {
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 8px;
          border-radius: 20px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }

        .tab-vertical-btn.active .tab-count {
          background: #6a5cff;
          color: #ffffff;
        }

        /* Cards Grid */
        .cards-grid {
          flex: 1;
          min-width: 0;
          transition: opacity 0.3s ease;
        }

        .cards-grid.animating {
          cursor: wait;
        }

        .tech-card {
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          will-change: transform, opacity, filter;
          transform-origin: center center;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          transform: translateZ(0);
        }

        .tech-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .tech-card:hover::before {
          left: 100%;
        }

        .card-inner {
          padding: 24px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .tech-icon-wrapper {
          flex-shrink: 0;
        }

        .tech-icon {
          width: 70px;
          height: 70px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease, border-color 0.3s ease;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .tech-card:hover .tech-icon {
          background: linear-gradient(135deg, #6a5cff, #8b7cff);
          transform: scale(1.1) rotate(5deg);
          border-color: transparent;
          box-shadow: 0 15px 40px rgba(106, 92, 255, 0.4);
        }

        .tech-icon :global(svg) {
          width: 35px !important;
          height: auto !important;
          transition: transform 0.3s ease;
        }

        .tech-card:hover .tech-icon :global(svg) {
          transform: scale(1.1);
          filter: brightness(1.2);
        }

        .tech-content {
          flex: 1;
          will-change: transform, opacity;
        }

        .tech-content h5 {
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .tech-card:hover h5 {
          color: #b4d2ff;
        }

        .tech-content p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 15px;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        .btn-hire {
          background: transparent;
          border: 1px solid rgba(106, 92, 255, 0.5);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .btn-hire::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-hire:hover::before {
          left: 100%;
        }

        .btn-hire:hover {
          background: #6a5cff;
          border-color: #6a5cff;
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(106, 92, 255, 0.3);
        }

        .btn-hire :global(svg) {
          transition: transform 0.3s ease;
        }

        .btn-hire:hover :global(svg) {
          transform: translateX(3px);
        }

        /* Particle Animation */
        .card-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(106, 92, 255, 0.6);
          border-radius: 50%;
          animation: particleFloat 1s ease-out forwards;
          --delay: 0s;
        }

        @keyframes particleFloat {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x, 50px), var(--y, -50px)) scale(0);
            opacity: 0;
          }
        }

        /* Responsive */
        @media (max-width: 992px) {
          .content-wrapper {
            flex-direction: column;
          }

          .tabs-vertical {
            flex: none;
            max-height: none;
            overflow-x: auto;
            overflow-y: hidden;
            display: flex;
            gap: 10px;
            padding: 5px 0 15px;
            position: static;
            width: 100%;
          }

          .tab-vertical-btn {
            width: auto;
            min-width: 140px;
            margin-bottom: 0;
            padding: 12px 20px;
            white-space: nowrap;
          }

          .tab-indicator {
            width: 100%;
            height: 3px;
            top: auto;
            bottom: 0;
            left: 0;
            transform: scaleX(0);
          }

          .tab-vertical-btn.active .tab-indicator {
            transform: scaleX(1);
          }

          .card-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .tech-icon-wrapper {
            margin-bottom: 10px;
          }
        }

        @media (max-width: 768px) {
          .hire-tech-vertical {
            padding: 80px 0;
          }

          .section-header h2 {
            font-size: 36px;
          }

          .section-header p {
            font-size: 16px;
            padding: 0 15px;
          }

          .shape {
            filter: blur(40px);
          }

          .shape-1 {
            width: 200px;
            height: 200px;
          }

          .shape-2 {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 576px) {
          .section-header h2 {
            font-size: 28px;
          }

          .tabs-vertical {
            gap: 8px;
          }

          .tab-vertical-btn {
            min-width: 120px;
            padding: 10px 15px;
            font-size: 13px;
          }

          .tech-card {
            margin: 0 5px;
          }

          .card-inner {
            padding: 20px;
          }

          .tech-icon {
            width: 60px;
            height: 60px;
          }

          .tech-icon :global(svg) {
            width: 30px !important;
          }

          .tech-content h5 {
            font-size: 16px;
          }

          .tech-content p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default HireByTechnology;