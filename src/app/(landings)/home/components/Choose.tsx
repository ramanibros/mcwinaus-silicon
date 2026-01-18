'use client';
import React, { useEffect, useRef } from 'react'; // Added useEffect, useRef
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import cms from '@/assets/img/services/icons/cms.svg';
import rocket from '@/assets/img/services/icons/rocket.svg';
import mobileApp from '@/assets/img/services/icons/mobile-app.svg';
import {Col, Container, Row} from 'react-bootstrap';
import Link from 'next/link';

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: 'Certified Digital Perth Experts',
    description:
      '30+ local IT specialists with 5+ years delivering 3x faster projects—Perth\'s trusted growth team.',
    icon: cms,
  },
  {
    title: 'Genuine Hands-On Partnership',
    description:
      'We genuinely care—no cookie-cutter templates. Every project gets personal collaboration and 24/7 local support.',
    icon: rocket,
  },
  {
    title: 'Future-Proof Technology Stack',
    description:
      'React, MySQL, Java, Oracle, AWS—scalable solutions that grow with your business for the long haul.',
    icon: mobileApp,
  }
];

const Choose = () => {
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
    <>
      <style jsx global>{`
        /* Advanced geometric background - COMPLETELY SEPARATE from content */
        .clean-geometric-section {
          position: relative;
          overflow: hidden;
        }
        
        /* Background container - stays behind everything */
        .geometric-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        
        /* Main background with subtle gradient */
        .geometric-bg-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(169deg, #fff0 0%, #e7edff 100%);
          z-index: -1;
        }
        
        /* Floating 3D shapes - VERY SUBTLE */
        .floating-3d-shape {
          position: absolute;
          filter: blur(0.5px);
          opacity: 0.08;
        }
        
        .shape-1 {
          top: 10%;
          left: 5%;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #00b7ff 0%, #7b68ee 100%);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          animation: floatShape1 20s infinite ease-in-out;
        }
        
        .shape-2 {
          top: 20%;
          right: 10%;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #ff30ff 0%, #00ffcc 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: floatShape2 25s infinite ease-in-out;
        }
        
        .shape-3 {
          bottom: 15%;
          left: 15%;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #00b7ff 0%, #ff30ff 100%);
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          animation: floatShape3 30s infinite ease-in-out;
        }
        
        .shape-4 {
          bottom: 25%;
          right: 20%;
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #00ffcc 0%, #00b7ff 100%);
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          transform: rotate(45deg);
          animation: floatShape4 15s infinite ease-in-out;
        }
        
        /* Animated grid pattern */
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, rgba(0, 183, 255, 0.03) 1px, transparent 1px),
            linear-gradient(180deg, rgba(0, 183, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridFloat 40s linear infinite;
        }
        
        /* Subtle particle effect */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00b7ff;
          border-radius: 50%;
          opacity: 0.3;
        }
        
        /* Animations */
        @keyframes floatShape1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(90deg); }
          50% { transform: translate(-20px, 20px) rotate(180deg); }
          75% { transform: translate(-30px, -30px) rotate(270deg); }
        }
        
        @keyframes floatShape2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 30px) rotate(120deg); }
          66% { transform: translate(30px, -40px) rotate(240deg); }
        }
        
        @keyframes floatShape3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -30px) scale(1.1); }
          50% { transform: translate(-30px, 50px) scale(0.9); }
          75% { transform: translate(-50px, -50px) scale(1.05); }
        }
        
        @keyframes floatShape4 {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          50% { transform: rotate(135deg) translate(40px, -40px); }
        }
        
        @keyframes gridFloat {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(15px, -15px); opacity: 0.5; }
        }
        
        /* Content wrapper - keeps your design intact */
        .content-wrapper {
          position: relative;
          z-index: 1;
        }
        
        /* Responsive adjustments for background shapes */
        @media (max-width: 768px) {
          .floating-3d-shape {
            opacity: 0.05;
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>

      <section className="pb-md-2 clean-geometric-section">
        {/* Background container - stays behind */}
        <div className="geometric-bg-container"  style={{ marginTop: '60px', paddingTop: '60px' }}>
          <div className="grid-pattern"></div>
          
          {/* Floating geometric shapes */}
          <div className="floating-3d-shape shape-1"></div>
          <div className="floating-3d-shape shape-2"></div>
          <div className="floating-3d-shape shape-3"></div>
          <div className="floating-3d-shape shape-4"></div>
          
          {/* Particles */}
          <div className="particles">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `particleFloat ${3 + Math.random() * 4}s infinite ease-in-out ${i * 0.3}s`,
                  background: i % 3 === 0 ? '#00b7ff' : i % 3 === 1 ? '#ff30ff' : '#00ffcc'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Your original content - EXACTLY as you had it */}
        <div className="content-wrapper">
          <div className="d-none d-lg-block" style={{ marginTop: '60px', paddingTop: '60px' }}></div>

          <Container className="pt-5">
            {/* Added ref to h2 and span */}
            <h2 ref={h2Ref} className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">
              Why Perth Businesses Choose <span ref={spanRef} className="text-gradient-primary">McWIN iTECH</span>
            </h2>

            <Row className="align-items-center pb-5 mb-lg-2">
              <Col md={8} className="text-center text-md-start">
                <p className="fs-lg text-muted mb-md-0">
                  Convert browsers to buyers with Perth's most trusted digital team. Local expertise, global results—high-performing websites that boost conversions 67% higher, dominate Google #1 rankings, and deliver long-term scalable growth.
                </p>
              </Col>
            </Row>

            <Row className="row-cols-1 row-cols-md-3">
              {services.map((service, index) => (
                <Col key={index} className="py-4 my-2 my-sm-3">
                  <Link
                    href="#"
                    className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
                  >
                    <div className="card-body pt-3">
                      <div className="d-inline-block bg_gradient_primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={40}
                          height={40}
                          className="d-block m-1"
                        />
                      </div>

                      <h2 className="h4 d-inline-flex align-items-center">
                        {service.title}
                      </h2>
                      <div className="hr-indicator mb-2" />
                      <p className="fs-sm text-body mb-0">{service.description}</p>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Choose;