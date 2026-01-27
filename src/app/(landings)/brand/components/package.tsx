"use client"
import basic from '@/assets/img/landing/saas-1/pricing/basic.png';
import standard from '@/assets/img/landing/saas-1/pricing/standard.png';
import ultimate from '@/assets/img/landing/saas-1/pricing/ultimate.png';
import IconifyIcon from '@/components/IconifyIcon';
import Image, { StaticImageData } from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type Feature = {
  text: string;
  available: boolean;
};

type PricingPlan = {
  name: string;
  monthly: number;
  annually: number;
  image: StaticImageData;
  featured: boolean;
  features: Feature[];
};

const plans: PricingPlan[] = [
  {
    name: 'Basic',
    monthly: 150,
    annually: 150,
    image: basic,
    featured: false,
    features: [
      { text: 'Business Logo', available: true },
      { text: 'Brand Color Guide', available: true },
      { text: 'Business Card Design', available: false },
      { text: 'Letter Head Design', available: false },
      { text: 'Envelope Design', available: false },
      { text: 'Brochure/Flyer Design', available: false },
    ],
  },
  {
    name: 'Standard',
    monthly: 299,
    annually: 299,
    image: standard,
    featured: true,
    features: [
      { text: 'Business Logo', available: true },
      { text: 'Brand Color Guide', available: true },
      { text: 'Business Card Design', available: true },
      { text: 'Letter Head Design', available: true },
      { text: 'Envelope Design', available: false },
      { text: 'Brochure/Flyer Design', available: false },
    ],
  },
  {
    name: 'Ultimate',
    monthly: 350,
    annually: 350,
    image: ultimate,
    featured: false,
    features: [
      { text: 'Business Logo', available: true },
      { text: 'Brand Color Guide', available: true },
      { text: 'Business Card Design', available: true },
      { text: 'Letter Head Design', available: true },
      { text: 'Envelope Design', available: true },
      { text: 'Brochure/Flyer Design', available: true },
    ],
  },
];

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Package = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Refs for title animation ONLY
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Title animation for "Pricing" word ONLY
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

      tl.fromTo(h2Text,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
      {/* ORIGINAL TITLE - ONLY added refs */}
      <h2 ref={h2Ref} className="h1">Our <span ref={spanRef} className="text-gradient-primary">Pricing</span></h2>
      <div className="hr-indicator mb-4" />

      {/* ORIGINAL Pricing Cards - NO CHANGES */}
      <Row className="g-4 g-lg-5 justify-content-center align-items-stretch">
        {plans.map((plan, idx) => (
          <Col key={idx} lg={4} md={6} className="d-flex">
            <div className={`creative-pricing-card w-100 ${plan.featured ? 'featured-card' : 'standard-card'}`}>
              {/* Card Shape Background */}
              <div className="card-shape"></div>
              
              {/* Floating Image */}
              <div className="floating-image">
                <div className="image-wrapper">
                  <Image
                    src={plan.image}
                    width={60}
                    height={60}
                    alt={`${plan.name} plan`}
                    className="img-fluid"
                  />
                </div>
              </div>
              
              {/* Plan Header */}
              <div className="plan-header text-center mb-3">
                <div className="plan-badge mb-2">
                  <span className={`badge ${plan.featured ? 'badge-premium' : 'badge-basic'}`}>
                    {plan.name}
                  </span>
                </div>
                <div className="price-display mb-2">
                  <div className="price-currency">$</div>
                  <div className="price-amount">{isAnnual ? plan.annually : plan.monthly}</div>
                </div>
             
              </div>
              
              {/* Features List with better visibility */}
              <div className="features-list mb-3">
                <ul className="list-unstyled">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item mb-2">
                      <div className={`feature-icon-container ${feature.available ? 'available' : 'unavailable'}`}>
                        {feature.available ? (
                          <IconifyIcon icon="bx:check" className="feature-icon-check" />
                        ) : (
                          <IconifyIcon icon="bx:x" className="feature-icon-x" />
                        )}
                      </div>
                      <span className={`feature-text ${!feature.available ? 'text-muted' : ''}`}>
                        {feature.text}
                      </span>
                    
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Button */}
              <div className="action-section text-center mt-auto pt-3">
                <button className={`action-button ${plan.featured ? 'btn-premium' : 'btn-basic'}`}>
                  <span className="button-text">Contact Now</span>
                </button>
              </div>
              
              {/* Decorative Elements */}
              <div className="decorative-element decorative-1"></div>
              <div className="decorative-element decorative-2"></div>
              {plan.featured && (
                <div className="decorative-element decorative-3"></div>
              )}
            </div>
          </Col>
        ))}
      </Row>

      <style jsx global>{`
        /* COMPACT Pricing Card */
        .creative-pricing-card {
          position: relative;
          padding: 1.5rem 1.5rem;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          min-height: 420px; /* Reduced from 580px */
        }
        
        .standard-card {
          background: linear-gradient(145deg, #ffffff, #f8f9fa);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        }
        
        .featured-card {
          background: linear-gradient(145deg, #4f46e5, #7c3aed);
          border: none;
          box-shadow: 0 20px 50px rgba(79, 70, 229, 0.25);
          color: white;
          transform: translateY(-5px);
        }
        
        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(79, 70, 229, 0.35);
        }
        
        .standard-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }
        
        /* Card Shape Background */
        .card-shape {
          position: absolute;
          top: 0;
          right: 0;
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 70%);
          border-radius: 0 0 0 80px;
          z-index: 0;
        }
        
        .standard-card .card-shape {
          background: linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.03) 70%);
        }
        
        /* Floating Image - Smaller */
        .floating-image {
          position: relative;
          z-index: 2;
          margin-bottom: 1rem;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .image-wrapper {
          width: 70px;
          height: 70px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          padding: 0.75rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .featured-card .image-wrapper {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Badges */
        .badge {
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }
        
        .badge-basic {
          background: rgba(79, 70, 229, 0.1);
          color: #4f46e5;
          border: 1px solid rgba(79, 70, 229, 0.2);
        }
        
        .badge-premium {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
        }
        
        /* Price Display - Smaller */
        .price-display {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.4rem;
        }
        
        .price-currency {
          font-size: 1.25rem;
          opacity: 0.8;
        }
        
        .price-amount {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
        }
        
        .featured-card .price-currency,
        .featured-card .price-amount {
          color: white;
        }
        
        /* UPDATED Feature Icons - Matching purple theme */
        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.4rem 0;
          min-height: 2.5rem;
        }
        
        .feature-icon-container {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 10px;
          font-size: 1.6rem;
          transition: all 0.3s ease;
          position: relative;
        }
        
        /* STANDARD CARD (Light Background) - Purple theme */
        .standard-card .feature-icon-container.available {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(124, 58, 237, 0.15));
          border: 2px solid rgba(79, 70, 229, 0.4);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
        }
        
        .standard-card .feature-icon-container.unavailable {
          background: linear-gradient(135deg, rgba(243, 244, 246, 0.8), rgba(229, 231, 235, 0.8));
          border: 2px solid rgba(209, 213, 219, 0.6);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .standard-card .feature-icon-check {
          color: #4f46e5;
          font-size: 1.4rem;
          font-weight: bold;
          text-shadow: 0 1px 2px rgba(79, 70, 229, 0.2);
        }
        
        .standard-card .feature-icon-x {
          color: #9ca3af;
          font-size: 1.4rem;
          font-weight: bold;
        }
        
        /* FEATURED CARD (Dark Background) - White theme */
        .featured-card .feature-icon-container.available {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3));
          border: 2px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            0 4px 15px rgba(255, 255, 255, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .featured-card .feature-icon-container.unavailable {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(4px);
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .featured-card .feature-icon-check {
          color: white;
          font-size: 1.4rem;
          font-weight: bold;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .featured-card .feature-icon-x {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.4rem;
          font-weight: bold;
        }
        
        /* Hover Effects */
        .standard-card .feature-icon-container.available:hover {
          transform: scale(1.1);
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(124, 58, 237, 0.2));
          border-color: rgba(79, 70, 229, 0.6);
          box-shadow: 0 6px 18px rgba(79, 70, 229, 0.2);
        }
        
        .featured-card .feature-icon-container.available:hover {
          transform: scale(1.1);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.35));
          border-color: rgba(255, 255, 255, 0.7);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
        }
        
        /* Pulse animation for available features */
        .standard-card .feature-icon-container.available {
          animation: pulse-purple 2s infinite;
        }
        
        .featured-card .feature-icon-container.available {
          animation: pulse-white 2s infinite;
        }
        
        @keyframes pulse-purple {
          0%, 100% { box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15); }
          50% { box-shadow: 0 4px 20px rgba(79, 70, 229, 0.25); }
        }
        
        @keyframes pulse-white {
          0%, 100% { box-shadow: 0 4px 15px rgba(255, 255, 255, 0.25); }
          50% { box-shadow: 0 4px 25px rgba(255, 255, 255, 0.35); }
        }
        
        .feature-text {
          flex: 1;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.4;
        }
        
        .featured-card .feature-text {
          color: rgba(255, 255, 255, 0.95);
        }
        
        .featured-card .feature-text.text-muted {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        
        /* Action Button - Compact */
        .action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          max-width: 200px;
        }
        
        .btn-basic {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white;
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.25);
        }
        
        .btn-basic:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(79, 70, 229, 0.35);
        }
        
        .btn-premium {
          background: white;
          color: #4f46e5;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }
        
        .btn-premium:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
        }
        
        /* Decorative Elements - Smaller */
        .decorative-element {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          z-index: 0;
        }
        
        .decorative-1 {
          width: 60px;
          height: 60px;
          top: -30px;
          left: -30px;
        }
        
        .decorative-2 {
          width: 100px;
          height: 100px;
          bottom: -50px;
          right: -50px;
        }
        
        .decorative-3 {
          width: 50px;
          height: 50px;
          top: 50%;
          left: -25px;
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        /* Text Gradient with animation support */
        .text-gradient-primary {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          background-size: 200% 200%;
          background-position: 100% 0%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
          .featured-card {
            transform: translateY(0);
            margin: 1.5rem 0;
          }
          
          .creative-pricing-card {
            min-height: 380px;
          }
        }
        
        @media (max-width: 768px) {
          .creative-pricing-card {
            padding: 1.25rem;
            min-height: 360px;
          }
          
          .price-amount {
            font-size: 2.25rem;
          }
          
          .feature-icon-container {
            width: 32px;
            height: 32px;
            font-size: 1.4rem;
            border-radius: 8px;
          }
          
          .standard-card .feature-icon-check,
          .standard-card .feature-icon-x,
          .featured-card .feature-icon-check,
          .featured-card .feature-icon-x {
            font-size: 1.2rem;
          }
          
          .feature-text {
            font-size: 0.95rem;
          }
        }
        
        @media (max-width: 576px) {
          .feature-item {
            gap: 0.75rem;
          }
          
          .feature-icon-container {
            width: 30px;
            height: 30px;
            font-size: 1.3rem;
          }
          
          .standard-card .feature-icon-check,
          .standard-card .feature-icon-x,
          .featured-card .feature-icon-check,
          .featured-card .feature-icon-x {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default Package;