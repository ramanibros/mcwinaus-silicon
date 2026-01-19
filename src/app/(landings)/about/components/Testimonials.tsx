'use client';
import avatar01 from '@/assets/img/avatar/01.jpg';
import avatr05 from '@/assets/img/avatar/05.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import clutchLight from '@/assets/img/about/clutch-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import avatar1 from "@/assets/img/avatar/13.jpg";
import avatar2 from "@/assets/img/avatar/14.jpg";
import avatar3 from "@/assets/img/avatar/11.jpg";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: StaticImageData;
};

const testimonials = [
  {
    id: 1,
    text: "McWIN iTECH is Perth's best digital company! Their services are awesome, professional, 24/7 customer support and affordable pricing, making them a big advantage. Highly recommended!",
    author: "Courtenay Holgate",
    role: "Owner",
    avatar: avatar1,
  },
  {
    id: 2,
    text: "Very pleased with the work; helped with putting my ideas on paper when it came to rebranding my business, doing a complete new website and also managing my business's social media.",
    author: "Alysha Cheetham",
    role: "Client",
    avatar: avatar2,
  },
  {
    id: 3,
    text: "Very good service. Completed a job for me on very short notice and at a very high standard. I would highly recommend them.",
    author: "Jaymie Andersen",
    role: "Client",
    avatar: avatar3,
  },
  {
    id: 4,
    text: "Very helpful, worked through with me step by step till we got what I wanted.",
    author: "All Right Towing",
    role: "Business Owner",
    avatar: avatar1,
  },
  {
    id: 5,
    text: "Very happy with their service 😊 highly professional team",
    author: "Cristina Kennedy",
    role: "Client",
    avatar: avatar2,
  }
];

const Testimonials = () => {
  // Refs for text animation
  const staticTextRef = useRef<HTMLSpanElement>(null);
  const gradientTextRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLHeadingElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // TEXT ANIMATION for "Clients Already Served"
    if (staticTextRef.current && gradientTextRef.current) {
      const staticText = staticTextRef.current;
      const gradientText = gradientTextRef.current;
      
      // Find the parent h2 element
      const headingElement = staticText.closest('h2');
      if (!headingElement) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingElement,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,
        }
      });

      // Animate the static text ("Already Served")
      tl.fromTo(staticText,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Animate the gradient text ("Clients") with EXACT same effects
      tl.fromTo(gradientText,
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

    // SIMPLE COUNTER ANIMATION for "200+" - Only counts, no zoom/fade
    if (countRef.current) {
      const countElement = countRef.current;
      const targetNumber = 200;
      const duration = 2; // seconds
      
      // Create a simple counter animation without visual effects
      gsap.to({}, {
        scrollTrigger: {
          trigger: countElement,
          start: "top 80%",
          onEnter: () => {
            // Simple counter animation
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = timestamp - startTimestamp;
              const percentage = Math.min(progress / (duration * 1000), 1);
              
              // Ease out function for smooth ending
              const easeOut = 1 - Math.pow(1 - percentage, 3);
              const currentValue = Math.floor(easeOut * targetNumber);
              
              if (countElement) {
                countElement.textContent = `${currentValue}+`;
              }
              
              if (percentage < 1) {
                requestAnimationFrame(step);
              } else {
                // Ensure final value
                if (countElement) {
                  countElement.textContent = `${targetNumber}+`;
                }
              }
            };
            
            requestAnimationFrame(step);
          }
        }
      });
    }

    // Animated gradient background for left card
    if (leftCardRef.current) {
      const gradientElement = leftCardRef.current.querySelector('.futuristic-gradient');
      if (gradientElement) {
        // Create gradient animation
        gsap.to(gradientElement, {
          backgroundPosition: '200% 50%',
          duration: 10,
          repeat: -1,
          ease: 'linear',
        });
      }
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="container pb-5 mb-2 mb-md-4 mb-xl-5">
      <Row>
        <Col md={5} className="mb-4 mb-md-0">
          {/* Left Card with Futuristic Gradient Background */}
          <div 
            ref={leftCardRef}
            className="position-relative rounded-4 overflow-hidden h-100"
            style={{
              background: 'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
            }}
          >
            {/* Animated Gradient Overlay */}
            <div 
              className="futuristic-gradient"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                backgroundSize: '200% 100%',
                backgroundPosition: '-100% 50%',
                zIndex: 1,
              }}
            />
            
            {/* Grid Pattern Overlay */}
            <div 
              className="grid-pattern"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 1,
              }}
            />
            
            {/* Glowing Orbs */}
            <div 
              className="position-absolute"
              style={{
                top: '20%',
                left: '20%',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 1,
              }}
            />
            <div 
              className="position-absolute"
              style={{
                bottom: '20%',
                right: '20%',
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
                filter: 'blur(30px)',
                zIndex: 1,
              }}
            />
            
            {/* Card Content */}
            <div className="position-relative z-2 h-100">
              <Card className="justify-content-center bg-transparent border-0 h-100 p-4 p-lg-5">
                <div className="p-2">
                  {/* Simple counter - no visual animation */}
                  <h3 ref={countRef} className="display-4 text-primary mb-1">0+</h3>
                  
                  {/* Animated heading */}
                  <h2 className="text-light pb-5 mb-2">
                    {/* Gradient text part - will be animated */}
                    <span ref={gradientTextRef} className="text-gradient-primary">Clients</span>
                    
                    {/* Static text part */}
                    <span ref={staticTextRef}> Already Served</span>
                  </h2>
                  
                  <Link
                    href="#"
                    className="d-inline-flex align-items-center rounded-3 text-decoration-none py-3 px-4 position-relative z-2"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <div className="pe-3">
                      <div className="fs-xs text-light text-uppercase opacity-70 mb-2">Reviewed on</div>
                      <Image src={clutchLight} alt="Clutch" width={97} height={32} />
                    </div>
                    <div className="ps-1">
                      <div className="text-nowrap mb-2">
                        {[...Array(5)].map((_, i) => (
                          <IconifyIcon key={i} icon="bxs:star" className="text-warning" />
                        ))}
                      </div>
                      <div className="text-light opacity-70">49 reviews</div>
                    </div>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </Col>

        <Col md={7}>
          <Card className="border-0 shadow-sm p-4 p-xxl-5">
            <div className="d-flex justify-content-between pb-4 mb-2">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <IconifyIcon icon="bxs:quote-left" />
              </span>
              <div className="d-flex">
                <button
                  type="button"
                  id="prev"
                  className="btn btn-prev btn-icon btn-sm me-2"
                  aria-label="Previous"
                >
                  <IconifyIcon icon="bx:chevron-left" fontSize={20} />
                </button>
                <button
                  type="button"
                  id="next"
                  className="btn btn-next btn-icon btn-sm ms-2"
                  aria-label="Next"
                >
                  <IconifyIcon icon="bx:chevron-right" fontSize={20} />
                </button>
              </div>
            </div>

            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={24}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{ prevEl: '#prev', nextEl: '#next' }}
              className="mx-0 mb-md-n2 mb-xxl-n3"
            >
              {testimonials.map(t => (
                <SwiperSlide key={t.id} className="h-auto">
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">{t.text}</p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        width={48}
                        height={48}
                        className="rounded-circle"
                      />
                      <div className="ps-3">
                        <h5 className="fw-semibold lh-base mb-0">{t.author}</h5>
                        <span className="fs-sm text-muted">{t.role}</span>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination position-relative pt-3 mt-4"></div>
            </Swiper>
          </Card>
        </Col>
      </Row>

      {/* Add global styles for the gradient text animation */}
      <style jsx global>{`
        .text-gradient-primary {
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          background-size: 200% 200%;
        }
        
        /* Keyframes for grid pattern animation */
        @keyframes gridMove {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        
        /* Keyframes for pulse animation */
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;