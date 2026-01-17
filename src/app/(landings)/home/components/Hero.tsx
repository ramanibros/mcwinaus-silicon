"use client";

import React, { useEffect, useRef } from 'react';
import herobg from '@/assets/img/landing/software-agency-2/hero-bg.png';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      try {
        const gsap = (await import('gsap')).default;
        
        // 1. BACKGROUND IMAGE ANIMATION (subtle zoom)
        if (bgImageRef.current) {
          gsap.fromTo(bgImageRef.current,
            { scale: 1.1, opacity: 0.8 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
          );
        }

        // 2. TEXT ANIMATION - Only the heading text
        if (headingRef.current) {
          // Get the original HTML structure
          const originalHTML = headingRef.current.innerHTML;
          
          // Clear the heading
          headingRef.current.innerHTML = '';
          
          // Create wrapper for animation
          const wrapper = document.createElement('div');
          wrapper.className = 'animated-heading-wrapper';
          wrapper.style.display = 'inline-block';
          
          // We need to process the HTML to preserve the gradient
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = originalHTML;
          
          // Process child nodes
          const childNodes = Array.from(tempDiv.childNodes);
          
          childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
              // This is " Leading Digital Growth Partner" text (white)
              const text = node.textContent || '';
              const words = text.split(' ');
              
              words.forEach((word, index) => {
                if (word.trim()) {
                  const wordSpan = document.createElement('span');
                  wordSpan.className = 'animated-word white-text me-2';
                  wordSpan.style.display = 'inline-block';
                  wordSpan.style.opacity = '0';
                  wordSpan.style.transform = 'translateY(30px)';
                  wordSpan.style.color = 'white'; // White text
                  wordSpan.textContent = word + (index < words.length - 1 ? ' ' : '');
                  
                  wrapper.appendChild(wordSpan);
                }
              });
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              // This is the <span class="text-gradient-primary">Perth's</span>
              const gradientSpan = node.cloneNode(true) as HTMLElement;
              gradientSpan.className = 'animated-word text-gradient-primary me-2';
              gradientSpan.style.display = 'inline-block';
              gradientSpan.style.opacity = '0';
              gradientSpan.style.transform = 'translateY(30px)';
              
              wrapper.appendChild(gradientSpan);
              
              // Add space after "Perth's"
              const space = document.createElement('span');
              space.className = 'animated-word';
              space.style.display = 'inline-block';
              space.style.opacity = '0';
              space.style.transform = 'translateY(30px)';
              space.style.color = 'white';
              space.textContent = ' ';
              wrapper.appendChild(space);
            }
          });
          
          headingRef.current.appendChild(wrapper);
          
          // Animate all words (gradient + white)
          const animatedWords = wrapper.querySelectorAll('.animated-word');
          gsap.to(animatedWords, {
            opacity: 1,
            y: 0,
            stagger: 0.08, // Stagger effect for each word
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out"
          });
        }

      } catch (error) {
        console.error('Animation error:', error);
      }
    };

    initAnimation();
  }, []);

  return (
    <section
      className="jarallax bg-dark min-vh-100"
      data-jarallax
      data-speed="0.4"
      data-bs-theme="dark"
    >
      <span
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            'radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)',
        }}
      ></span>
      <div 
        ref={bgImageRef} 
        className="jarallax-img" 
        style={{ 
          backgroundImage: `url(${herobg.src})`,
          opacity: 0.8 
        }}
      ></div>
      <div className="min-vh-100 d-flex flex-column py-5">
        <Container className="position-relative text-center zindex-5 pt-4 pt-md-5 pb-5 mt-auto">
          <Row className="mt-5">
            <Col xl={10} className="mx-auto">
              <h1 
                ref={headingRef} 
                className="display-1 mb-md-4 pb-3"
              >
                {/* Original structure - will be animated */}
                <span className="text-gradient-primary">Perth's</span> Leading Digital Growth Partner
              </h1>
              <p
                className="text-body mx-auto mb-md-5 mb-4 pb-xl-2 pb-md-0 pb-sm-2 fs-5"
                style={{ maxWidth: '36.5rem' }}
              >
                Local expertise, proven tech, and custom strategies delivering <b>3x more sales</b> for Australian brands—without wasting ad spend.
              </p>
              <Link 
                href="/contact" 
                className="btn btn-lg btn-primary shadow-primary"
              >
                Book Free Consultation
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="mt-auto pb-lg-2 pb-xl-3">
          <ul className="list-unstyled d-flex align-items-start justify-content-center flex-wrap text-nowrap mt-xl-0 mt-md-n4 mt-sm-n3 mt-n2 ms-md-n4 ms-n3 mb-0 pt-lg-5 pt-md-4">
            <li className="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
              <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
              Proven Digital Expertise
            </li>
            <li className="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
              <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
              Trusted Experienced Team
            </li>
            <li className="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
              <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary" />
              Guaranteed Results Delivered
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default Hero;