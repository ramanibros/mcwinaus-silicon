'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import cms from '@/assets/img/services/icons/cms.svg';
import rocket from '@/assets/img/services/icons/rocket.svg';
import mobileApp from '@/assets/img/services/icons/mobile-app.svg';
import analytics from '@/assets/img/services/icons/analytics.svg';
import search from '@/assets/img/services/icons/web-search.svg';
import timer from '@/assets/img/services/icons/timer.svg';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Service = {
  title: string;
  description: string;
  link: string;
  icon: string;
  targetValue: number;
  suffix?: string;
};

const services: Service[] = [
  {
    title: '30+',
    description: 'IT Professionals. Infinite possibilities. One integrated team.',
    link: '#',
    icon: cms,
    targetValue: 30,
    suffix: '+'
  },
  {
    title: '350+',
    description: 'Websites built for growth, not just presence.',
    link: '#',
    icon: rocket,
    targetValue: 350,
    suffix: '+'
  },
  {
    title: '10+',
    description: 'Years of trusted experience in creative, marketing, and tech.',
    link: '#',
    icon: mobileApp,
    targetValue: 10,
    suffix: '+'
  },
  {
    title: '30+',
    description: 'Proven expertise in modern technologies and languages',
    link: '#',
    icon: mobileApp,
    targetValue: 30,
    suffix: '+'
  },
];

const Counter = () => {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize counter animation
    counterRefs.current.forEach((counterEl, index) => {
      if (!counterEl) return;
      
      const service = services[index];
      const endValue = service.targetValue;
      const suffix = service.suffix || '';
      
      // Set initial value to 0
      counterEl.textContent = '0' + suffix;
      
      // Create ScrollTrigger animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        onEnter: () => {
          let startValue = 0;
          const duration = 2;
          const increment = endValue / (duration * 60);
          
          const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
              startValue = endValue;
              clearInterval(timer);
            }
            counterEl.textContent = Math.floor(startValue) + suffix;
          }, 1000 / 60);
        },
        once: true
      });
    });

    // Create background gradient animation
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        {
          background: 'linear-gradient(135deg, #DF48FF 0%, #8d41f9 50%, #00a5f3 100%)'
        },
        {
          background: 'linear-gradient(135deg, #00a5f3 0%, #8d41f9 50%, #DF48FF 100%)',
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        }
      );
    }

    // Canvas animation for geometric shapes
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const resizeCanvas = () => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          canvas.width = rect.width;
          canvas.height = rect.height;
        }
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const colors = ['#DF48FF', '#8d41f9', '#00a5f3'];
      
      let animationId: number;
      let time = 0;

      const drawGeometricBackground = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create floating geometric shapes
        for (let i = 0; i < 8; i++) {
          const x = (canvas.width / 2) + Math.cos(time * 0.5 + i) * 300;
          const y = (canvas.height / 2) + Math.sin(time * 0.7 + i) * 200;
          const size = 40 + Math.sin(time + i) * 20;
          const color = colors[i % colors.length];
          
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(time * 0.5 + i);
          ctx.globalAlpha = 0.1;

          // Draw different geometric shapes
          if (i % 4 === 0) {
            // Hexagon
            ctx.beginPath();
            for (let j = 0; j < 6; j++) {
              const angle = (j * Math.PI) / 3;
              const px = size * Math.cos(angle);
              const py = size * Math.sin(angle);
              if (j === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
          } else if (i % 4 === 1) {
            // Diamond
            ctx.beginPath();
            ctx.moveTo(0, -size);
            ctx.lineTo(size, 0);
            ctx.lineTo(0, size);
            ctx.lineTo(-size, 0);
            ctx.closePath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
          } else if (i % 4 === 2) {
            // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -size);
            ctx.lineTo(size, size);
            ctx.lineTo(-size, size);
            ctx.closePath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
          } else {
            // Circle
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          ctx.restore();
        }

        // Draw connecting lines
        ctx.strokeStyle = 'rgba(223, 72, 255, 0.05)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < 15; i++) {
          const x1 = (i * 100 + time * 20) % canvas.width;
          const y1 = canvas.height / 3;
          const x2 = ((i + 8) * 80 + time * 15) % canvas.width;
          const y2 = (canvas.height * 2) / 3;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        time += 0.01;
        animationId = requestAnimationFrame(drawGeometricBackground);
      };

      drawGeometricBackground();

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resizeCanvas);
      };
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Gradient background with your colors */
        .counter-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #DF48FF 0%, #8d41f9 50%, #00a5f3 100%);
          background-size: 300% 300%;
          animation: gradientFlow 6s ease infinite;
        }
        
        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        /* Canvas for geometric shapes */
        .geometric-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.3;
        }
        
        /* Animated floating particles */
        .counter-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          animation: particleFloat 8s infinite ease-in-out;
        }
        
        .particle:nth-child(3n) {
          background: #DF48FF;
          animation-delay: 0s;
        }
        
        .particle:nth-child(3n+1) {
          background: #8d41f9;
          animation-delay: 1s;
        }
        
        .particle:nth-child(3n+2) {
          background: #00a5f3;
          animation-delay: 2s;
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -20px) scale(1.5);
            opacity: 0.8;
          }
        }
        
        /* Card styles (unchanged from your design) */
        .counter-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
          overflow: hidden;
          padding-top : 75px !important;
        }
        
        .counter-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.7s ease;
          z-index: -1;
        }
        
        .counter-card:hover::before {
          left: 100%;
        }
        
        .counter-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.2),
            0 5px 15px rgba(255, 255, 255, 0.1);
        }
        
        /* Counter number styling */
        .counter-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        /* Icon styling */
        .counter-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        
        .counter-card:hover .counter-icon {
          opacity: 0.6;
          transform: scale(1.1);
        }
        
        /* Description text */
        .counter-description {
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        /* Divider line */
        .counter-divider {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, #DF48FF, #8d41f9, #00a5f3);
          margin: 1rem 0;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }
        
        .counter-divider::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: slideShine 2s infinite;
        }
        
        @keyframes slideShine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        /* Content wrapper */
        .counter-content {
          position: relative;
          z-index: 2;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .counter-number {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section ref={sectionRef} className="counter-section pb-md-2 pb-lg-5">
        {/* Canvas for geometric shapes */}
        <canvas ref={canvasRef} className="geometric-canvas" />
        
        {/* Animated particles */}
        <div className="counter-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="counter-content">
          <Container className="pb-4 pt-5">
            <Row className="row-cols-1 row-cols-md-4">
              {services.map((service, index) => (
                <Col key={index} className="py-4 my-2 my-sm-3">
                  <div className="counter-card h-100 p-4">
                    {/* Icon */}
                    <div className="counter-icon">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    
                    <div className="card-body p-0">
                      {/* Animated Counter Number */}
                      <h2 className="counter-number d-inline-flex align-items-center">
                        <span 
                          ref={el => counterRefs.current[index] = el}
                          className="counter-value"
                        >
                          {service.title}
                        </span>
                      </h2>
                      
                      {/* Animated Divider */}
                      <div className="counter-divider" />
                      
                      {/* Description */}
                      <p className="counter-description mb-0">
                        {service.description}
                      </p>
                      
                      {/* Learn More Link */}
                      <Link 
                        href={service.link}
                        className="btn btn-link p-0 mt-3 d-inline-flex align-items-center text-decoration-none"
                        style={{color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.3)'}}
                      >
                        Learn More
                        <IconifyIcon icon="bx:right-arrow-alt" className="fs-lg ms-1" />
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Counter;