'use client';
import React, { useEffect, useRef } from 'react'; // Added useEffect, useRef
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const Industry = () => {
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
        /* Medium light background - exactly what you asked for */
        .medium-bg-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(169deg, #fbf2ff 0%, #e7edff 100%);
        }
        
        /* Geometric shapes container */
        .shape-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        
        /* Shape styles */
        .moving-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.25;
          filter: blur(0.5px);
        }
        
        .shape-ring {
          border: 2px solid;
          background: transparent;
        }
        
        .shape-circle {
          background: radial-gradient(circle at 30% 30%, currentColor 0%, transparent 70%);
        }
        
        .shape-square {
          border-radius: 10px;
          background: linear-gradient(135deg, currentColor 0%, transparent 50%);
          transform: rotate(45deg);
        }
        
        /* 3D Animations */
        @keyframes float3d-1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          33% { transform: translate3d(30px, -20px, 10px) rotate(120deg); }
          66% { transform: translate3d(-20px, 30px, -10px) rotate(240deg); }
        }
        
        @keyframes float3d-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-30px, 20px, 15px) scale(1.15); }
        }
        
        @keyframes float3d-3 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          25% { transform: translate3d(40px, -15px, -15px) rotate(90deg); }
          50% { transform: translate3d(15px, 35px, 10px) rotate(180deg); }
          75% { transform: translate3d(-25px, -20px, -10px) rotate(270deg); }
        }
        
        @keyframes float3d-4 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          33% { transform: translate3d(-20px, -25px, 20px) scale(1.1); }
          66% { transform: translate3d(35px, 15px, -15px) scale(0.95); }
        }
        
        /* Color scheme for medium light background */
        .color-1 { color: #8d41f9; } /* Your purple */
        .color-2 { color: #DF48FF; } /* Your magenta */
        .color-3 { color: #3b82f6; } /* Professional blue */
        .color-4 { color: #10b981; } /* Professional teal */
        .color-5 { color: #f59e0b; } /* Professional amber */
        
        /* Content stays on top */
        .medium-bg-section > .container {
          position: relative;
          z-index: 1;
        }
        
        /* Card styling for medium background */
        .medium-bg-section .card {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(229, 231, 235, 0.8);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        
        /* Text visibility */
        .medium-bg-section h1 {
          color: #1f2937;
        }
        
        .medium-bg-section .text-light {
          color: #4b5563 !important;
        }
      `}</style>

      <section className="pb-md-2 pb-lg-5 medium-bg-section">
        {/* Geometric Shapes - Circles, Rings, Squares */}
        <div className="shape-container">
          {/* Large Elements */}
          <div className="moving-shape shape-ring color-1" style={{
            width: '160px', height: '160px',
            top: '10%', left: '8%',
            animation: 'float3d-1 18s infinite ease-in-out'
          }} />
          
          <div className="moving-shape shape-circle color-2" style={{
            width: '140px', height: '140px',
            top: '15%', right: '12%',
            animation: 'float3d-2 20s infinite ease-in-out',
            animationDelay: '1.5s'
          }} />
          
          {/* Medium Elements */}
          <div className="moving-shape shape-square color-3" style={{
            width: '100px', height: '100px',
            top: '65%', left: '7%',
            animation: 'float3d-3 16s infinite ease-in-out',
            animationDelay: '2s'
          }} />
          
          <div className="moving-shape shape-ring color-4" style={{
            width: '120px', height: '120px',
            top: '70%', right: '15%',
            animation: 'float3d-4 22s infinite ease-in-out',
            animationDelay: '3s'
          }} />
          
          {/* Small Elements */}
          <div className="moving-shape shape-circle color-5" style={{
            width: '80px', height: '80px',
            top: '35%', left: '25%',
            animation: 'float3d-1 14s infinite ease-in-out',
            animationDelay: '4s'
          }} />
          
          <div className="moving-shape shape-square color-1" style={{
            width: '70px', height: '70px',
            top: '40%', right: '30%',
            animation: 'float3d-2 19s infinite ease-in-out',
            animationDelay: '5s'
          }} />
          
          {/* Additional Elements */}
          <div className="moving-shape shape-ring color-2" style={{
            width: '60px', height: '60px',
            top: '80%', left: '35%',
            animation: 'float3d-3 15s infinite ease-in-out',
            animationDelay: '6s'
          }} />
          
          <div className="moving-shape shape-circle color-3" style={{
            width: '50px', height: '50px',
            top: '25%', left: '55%',
            animation: 'float3d-4 17s infinite ease-in-out',
            animationDelay: '7s'
          }} />
          
          <div className="moving-shape shape-square color-4" style={{
            width: '90px', height: '90px',
            top: '85%', right: '35%',
            animation: 'float3d-1 21s infinite ease-in-out',
            animationDelay: '8s'
          }} />
          
          <div className="moving-shape shape-ring color-5" style={{
            width: '40px', height: '40px',
            top: '45%', left: '75%',
            animation: 'float3d-2 13s infinite ease-in-out',
            animationDelay: '9s'
          }} />
        </div>
        
        {/* Your Content */}
        <Container className="pb-4 pt-5">
          {/* Updated h2 with refs */}
          <h2 ref={h2Ref} className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">
            Industries Transformed By <span ref={spanRef} className="text-gradient-primary">McWIN iTECH</span>
          </h2>

          <Row className="align-items-center pb-5 mb-lg-2">
            <Col md={8} className="text-center text-md-start">
              <p className="fs-lg text-muted mb-md-0">
                We've helped Perth leaders across 8 key sectors get more customers and higher conversions
                without wasting ad dollars.
              </p>
            </Col>
          </Row>

          <Row className="row-cols-1 row-cols-md-4">
            {[1,2,3,4,5,6,7,8].map((index) => (
              <Col key={index} className="my-2 my-sm-3">
                <Link
                  href="#"
                  className="card card-hover h-100 border-0 shadow-sm text-decoration-none px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
                >
                  <div className="card-body">
                    <h2 className="h5 d-inline-flex align-items-center">
                      Industry {index}
                    </h2>
                    <div className="hr-indicator mb-2" />
                    <p className="fs-sm text-body mb-0">Description for industry {index}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Industry;