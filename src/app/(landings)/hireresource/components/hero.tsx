"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register SplitText plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText);
}

const PageTitle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<(HTMLSpanElement | null)[]>([]);

  // ADDED: Refs for text animation
  const hireSkilledRef = useRef<HTMLSpanElement>(null);
  const techResourcesRef = useRef<HTMLSpanElement>(null);

  // ADDED: State for animated counters
  const [counts, setCounts] = useState({
    pros: 0,
    success: 0,
    match: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Main content entrance
    if (contentRef.current) {
      gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }

    // ADDED: GSAP Text Animation exactly like reference code
    if (hireSkilledRef.current) {
      gsap.from(hireSkilledRef.current, {
        opacity: 0,
        y: 30,
        rotationX: -90,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5
      });
    }

    if (techResourcesRef.current) {
      const splitTech = new SplitText(techResourcesRef.current, { type: "chars" });
      gsap.from(splitTech.chars, {
        opacity: 0,
        y: 30,
        rotationX: -90,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: 0.8
      });

      // Shimmer effect like reference code
      gsap.to(techResourcesRef.current, {
        textShadow: "0 0 10px rgba(218, 70, 239, 0.5)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5
      });
    }

    // ADDED: Animated counters
    const counterAnimation = () => {
      // Counter for 500+ (Tech Pros)
      gsap.to({}, {
        duration: 2,
        delay: 1,
        onUpdate: function() {
          const progress = this.progress();
          setCounts(prev => ({
            ...prev,
            pros: Math.min(Math.floor(progress * 501), 50)
          }));
        },
        onComplete: function() {
          setCounts(prev => ({ ...prev, pros: 50 }));
        }
      });

      // Counter for 98% (Success Rate)
      gsap.to({}, {
        duration: 2,
        delay: 1.1,
        onUpdate: function() {
          const progress = this.progress();
          setCounts(prev => ({
            ...prev,
            success: Math.min(Math.floor(progress * 99), 99)
          }));
        },
        onComplete: function() {
          setCounts(prev => ({ ...prev, success: 98 }));
        }
      });

      // Counter for 24h (Quick Match)
      gsap.to({}, {
        duration: 2,
        delay: 1.2,
        onUpdate: function() {
          const progress = this.progress();
          setCounts(prev => ({
            ...prev,
            match: Math.min(Math.floor(progress * 25), 24)
          }));
        },
        onComplete: function() {
          setCounts(prev => ({ ...prev, match: 24 }));
        }
      });
    };

    counterAnimation();

    // Floating particles animation
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      gsap.to(particles, {
        x: "random(-30, 30)",
        y: "random(-30, 30)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }

    // Floating elements animation
    floatingElementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: -20,
          duration: 2 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });

        gsap.to(el, {
          rotation: 360,
          duration: 20 + index * 2,
          repeat: -1,
          ease: "none"
        });
      }
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotation: -5,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            delay: 1.2,
          }
      );

      // Enhanced pulse animation with glow
      gsap.to(buttonRef.current, {
        scale: 1.02,
        boxShadow: "0 0 30px rgba(218, 70, 239, 0.7)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5,
      });
    }
  }, []);

  // Mouse move parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: clientX - 150,
        y: clientY - 150,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.08,
      y: -5,
      duration: 0.4,
      ease: "elastic.out(1, 0.3)",
      boxShadow: "0 15px 40px rgba(218, 70, 239, 0.4)",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.02,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.3)",
      boxShadow: "0 0 30px rgba(218, 70, 239, 0.7)",
    });
  };

  const talentWords = "Tech Resources".split(" ");

  return (
      <section
          className="modern-hero position-relative overflow-hidden"
          onMouseMove={handleMouseMove}
      >
        {/* Dark Theme Background */}
        <div className="hero-dark-bg"></div>

        {/* Animated Gradient Orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>

        {/* Interactive Glow Cursor */}
        <div ref={glowRef} className="interactive-glow"></div>

        {/* Animated Grid Overlay */}
        <div className="hero-grid-overlay"></div>

        {/* Floating Particles */}
        <div ref={particlesRef} className="floating-particles">
          {[...Array(50)].map((_, i) => (
              <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    animationDelay: `${Math.random() * 5}s`,
                    background: i % 3 === 0 ? 'rgba(218, 70, 239, 0.6)' :
                        i % 3 === 1 ? 'rgba(252, 9, 135, 0.6)' :
                            'rgba(105, 0, 127, 0.6)'
                  }}
              />
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="floating-icons">
        <span ref={el => { if (el) floatingElementsRef.current[0] = el; }} className="floating-icon" style={{ top: '15%', left: '5%' }}>
          &lt;/&gt;
        </span>
          <span ref={el => { if (el) floatingElementsRef.current[1] = el; }} className="floating-icon" style={{ top: '70%', left: '90%' }}>
          {'{ }'}
        </span>
          <span ref={el => { if (el) floatingElementsRef.current[2] = el; }} className="floating-icon" style={{ top: '80%', left: '10%' }}>
          #!
        </span>
          <span ref={el => { if (el) floatingElementsRef.current[3] = el; }} className="floating-icon" style={{ top: '20%', left: '85%' }}>
          &lt;*
        </span>
        </div>

        <div className="container position-relative" ref={contentRef}>
          <Row className="align-items-center min-vh-75 py-5">
            <Col lg={7}>
              {/* Animated Badge */}
              <div className="hero-badge mb-4">
              <span className="badge-text">
                ✦ PREMIUM TECH RECRUITMENT ✦
              </span>
              </div>

              {/* MODIFIED: Added refs for GSAP animation */}
              <h1 ref={titleRef} className="display-1 fw-bold mb-4">
              <span className="text-gradient-primary">
                <span>Hire Skilled</span>
              </span>
                <span className="d-block mt-2">
                <span ref={techResourcesRef} className="title-word" style={{ display: "inline-block" }}>
                  Tech Resources
                </span>
              </span>
              </h1>

              {/* MODIFIED: Animated counters */}
              <div className="hero-stats d-flex gap-4 mb-4">
                <div className="stat-item">
                  <span className="stat-number">{counts.pros}+</span>
                  <span className="stat-label">Tech Talent</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{counts.success}%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{counts.match}h</span>
                  <span className="stat-label">Quick Match</span>
                </div>
              </div>
            </Col>

            <Col lg={5} className="pt-4 pt-lg-0">
              <div className="hero-glass-card">
                <div className="card-glow"></div>
                <h3 className="glass-card-title">Ready to scale your team?</h3>
                <p className="glass-card-text">
                  A dedicated team connecting businesses with pre-vetted developers—ready to deliver from day one. Save thousands on recruitment, focus on growth with talent you can trust.
                </p>

                <div className="feature-list mb-4">
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Pre-Vetted Senior Developers</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Flexible Engagement Models (Hourly / Weekly / Monthly)</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Time-Zone Aligned Teams</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Rapid Onboarding & Immediate Start</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Scalable Teams On Demand</span>
                  </div>
                </div>

                <Link
                    ref={buttonRef}
                    href="/contact-hire-resource"
                    className="brand-project-button"
                >
                <span className="button-text">
                  Find Your Talent
                </span>
                  <span className="button-arrow">→</span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        {/* ALL YOUR EXISTING CSS - plus one rule for split-char */}
        <style jsx global>{`
          .modern-hero {
            position: relative;
            padding: 60px 0;
            background: #0a0a0f;
            background: radial-gradient(circle at 20% 30%, #1a1a2e 0%, #0a0a0f 80%);

            display: flex;
            align-items: center;
            color: #fff;
          }

          .min-vh-75 {
            min-height: 75vh;
          }

          .hero-dark-bg {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 0% 0%, rgba(18, 18, 30, 1) 0%, rgba(8, 8, 12, 1) 100%);
            z-index: 0;
          }

          .gradient-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px);
            opacity: 0.5;
            animation: orbFloat 20s ease-in-out infinite alternate;
            z-index: 0;
          }

          .orb-1 {
            width: 500px;
            height: 500px;
            background: radial-gradient(circle at center, rgba(218, 70, 239, 0.3), transparent 70%);
            top: -100px;
            left: -100px;
            animation-delay: 0s;
          }

          .orb-2 {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle at center, rgba(105, 0, 127, 0.25), transparent 70%);
            bottom: -200px;
            right: -100px;
            animation-delay: -5s;
          }

          .orb-3 {
            width: 400px;
            height: 400px;
            background: radial-gradient(circle at center, rgba(252, 9, 135, 0.25), transparent 70%);
            top: 40%;
            left: 60%;
            animation-delay: -10s;
          }

          .orb-4 {
            width: 350px;
            height: 350px;
            background: radial-gradient(circle at center, rgba(59, 130, 246, 0.25), transparent 70%);
            bottom: 20%;
            left: 20%;
            animation-delay: -15s;
          }

          @keyframes orbFloat {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(50px, -50px) scale(1.1); }
          }

          .interactive-glow {
            position: absolute;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle at center, rgba(218, 70, 239, 0.2), transparent 70%);
            border-radius: 50%;
            filter: blur(60px);
            pointer-events: none;
            z-index: 1;
            opacity: 0.6;
          }

          .floating-particles {
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
          }

          .particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.4;
            animation: floatParticle 8s ease-in-out infinite;
          }

          @keyframes floatParticle {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, -20px); }
          }

          .floating-icons {
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
          }

          .floating-icon {
            position: absolute;
            color: rgba(255, 255, 255, 0.1);
            font-size: 24px;
            font-weight: bold;
            font-family: monospace;
            text-shadow: 0 0 20px rgba(218, 70, 239, 0.3);
            animation: glowPulse 3s ease-in-out infinite alternate;
          }

          @keyframes glowPulse {
            0% { opacity: 0.3; text-shadow: 0 0 20px rgba(218, 70, 239, 0.3); }
            100% { opacity: 0.7; text-shadow: 0 0 40px rgba(218, 70, 239, 0.6); }
          }

          .hero-badge {
            display: inline-block;
            padding: 8px 20px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 50px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: badgePulse 3s ease-in-out infinite alternate;
          }

          .badge-text {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            letter-spacing: 2px;
            font-weight: 500;
          }

          @keyframes badgePulse {
            0% { border-color: rgba(255, 255, 255, 0.1); }
            100% { border-color: rgba(218, 70, 239, 0.3); }
          }

          .hero-grid-overlay {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 1;
            pointer-events: none;
          }

          h1 {
            color: #fff;
            text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 2;
          }

          .text-gradient-primary {
            background: linear-gradient(135deg, #0ce39a 0%, #69007f 50%, #fc0987 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% auto;
            animation: gradientShift 6s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes glowText {
            0% { text-shadow: 0 0 20px rgba(218, 70, 239, 0.3); }
            100% { text-shadow: 0 0 40px rgba(218, 70, 239, 0.7); }
          }

          .hero-stats {
            position: relative;
            z-index: 2;
          }

          .stat-item {
            display: flex;
            flex-direction: column;
          }

          .stat-number {
            font-size: 32px;
            font-weight: 700;
            color: #fff;
            background: linear-gradient(135deg, #fff, #e0e0e0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .stat-label {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
          }

          .hero-glass-card {
            position: relative;
            background: rgba(20, 20, 30, 0.7);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 40px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            z-index: 2;
            overflow: hidden;
          }

          .card-glow {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at center, rgba(218, 70, 239, 0.1), transparent 70%);
            animation: cardGlow 15s ease-in-out infinite;
            pointer-events: none;
          }

          @keyframes cardGlow {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-20px, -20px) rotate(10deg); }
          }

          .glass-card-title {
            color: #fff;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .glass-card-text {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .feature-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 12px;
            color: rgba(255, 255, 255, 0.8);
          }

          .feature-icon {
            color: #0ce39a;
            font-size: 18px;
            font-weight: bold;
          }

          .brand-project-button {
            position: relative;
            text-decoration: none;
            color: #fff;
            background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
            padding: 16px 32px;
            border-radius: 12px;
            font-size: 1.25em;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            border: none;
            outline: none;
            will-change: transform;
            transition: none;
            margin-top: 16px;
            z-index: 2;
          }

          .brand-project-button .button-text {
            position: relative;
            z-index: 2;
            font-weight: 600;
          }

          .button-arrow {
            position: relative;
            z-index: 2;
            font-size: 1.2em;
            transition: transform 0.3s ease;
          }

          .brand-project-button:hover .button-arrow {
            transform: translateX(5px);
          }

          .brand-project-button::before {
            content: "";
            position: absolute;
            inset: 1px;
            background: #0a0a0f;
            border-radius: 11px;
            transition: opacity 0.5s ease;
            z-index: 1;
          }

          .brand-project-button:hover::before {
            opacity: 0.85;
          }

          .brand-project-button::after {
            content: "";
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
            border-radius: 13px;
            transition: opacity 0.5s ease;
            opacity: 0;
            filter: blur(20px);
            z-index: 0;
          }

          .brand-project-button:hover::after {
            opacity: 0.7;
          }

          @media (max-width: 992px) {
            .modern-hero {
              padding: 60px 0;
            }
            .display-1 {
              font-size: 3.5rem;
            }
          }

          @media (max-width: 768px) {
            .display-1 {
              font-size: 2.8rem;
            }
            .hero-glass-card {
              padding: 30px;
            }
            .stat-number {
              font-size: 26px;
            }
          }

          @media (max-width: 576px) {
            .display-1 {
              font-size: 2.2rem;
            }
            .hero-stats {
              flex-wrap: wrap;
            }
          }

          .split-char {
            display: inline-block;
            transform-origin: 50% 50%;
          }
        `}</style>
      </section>
  );
};

export default PageTitle;