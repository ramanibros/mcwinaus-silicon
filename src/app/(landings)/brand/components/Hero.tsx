'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';

import heroBg from '@/assets/img/landing/saas-4/hero-bg.png';
import heroImg from '@/assets/img/brand-service/hero.png';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText);
}

const Hero = () => {
  const poweredByRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Split text animation for "Powered by Perth Expertise."
    if (poweredByRef.current) {
      const split = new SplitText(poweredByRef.current, {
        type: 'words,chars',
        wordsClass: 'split-word',
        charsClass: 'split-char'
      });

      // Set initial state for characters
      gsap.set(split.chars, {
        opacity: 0,
        y: 30,
        rotationX: 90
      });

      // Animate characters in
      gsap.to(split.chars, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        delay: 0.3
      });

      // Cleanup
      return () => {
        split.revert();
      };
    }
  }, []);

  useEffect(() => {
    // Right-to-left slide for image
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        {
          x: 300,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          delay: 0.8
        }
      );

      // Optional: Add subtle floating effect after animation
      setTimeout(() => {
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            y: -10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      }, 3000);
    }
  }, []);

  return (
    <section className="position-relative pt-5 overflow-hidden">
      <span className="position-absolute top-0 start-0 d-dark-mode-none d-block w-100 h-100 bg-secondary"></span>

      <span
        className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100"
        style={{
          background:
            'radial-gradient(84.79% 172.9% at 73.31% 31.4%, rgba(99, 135, 241, .1) 0%, rgba(218, 70, 239, .05) 52.47%, rgba(99, 135, 241, .1) 100%)',
        }}
      >
        <span
          className="d-block w-100 h-100 bg-position-center bg-size-cover bg-repeat-0"
          style={{
            backgroundImage: `url(${heroBg.src})`,
          }}
        ></span>
      </span>

      <Container className="position-relative mt-5 pt-xl-5 pt-md-3 zindex-5">
        <Row className="justify-content-md-start justify-content-center flex-md-nowrap pt-lg-5 pt-4">
          <Col
            xl={5}
            md={6}
            sm={10}
            className="d-flex flex-column justify-content-between mb-md-5 mb-md-4 mb-3 pb-xl-5 pb-lg-4"
          >
            <div className="text-md-start text-center">
              <h1 className="display-4 mb-lg-4 mb-3">
                <span className="text-gradient-primary">Built on Trust.</span>{' '}
                <span 
                  ref={poweredByRef}
                  style={{ display: 'inline-block' }}
                >
                  Powered by Perth Expertise.
                </span>
              </h1>
              <p
                className="mb-4 mx-md-0 mx-auto pb-xl-3 pb-lg-2 fs-lg"
                style={{ maxWidth: '30.5rem' }}
              >
                Get award-winning branding that <b>3x boosts authority</b> for Australian businesses—without
                spending thousands. <b>Your growth partner,</b> delivering logos, identity, and design that
                <b> increase conversions</b> long-term.
              </p>
              <Link href="#" className="btn btn-lg btn-primary">
                Start Your Brand Project
              </Link>
            </div>

            <ul
              className="list-unstyled row row-cols-2 gy-sm-2 gy-1 gx-sm-4 gx-2 mt-lg-5 mt-4 mx-md-0 mx-auto pt-lg-0 pt-md-2 mb-md-5 mb-4 pb-xl-4 pb-lg-3 pb-md-2 pb-sm-0 pb-2 text-nowrap"
              style={{ maxWidth: '36.625rem' }}
            >
              <li className="col d-flex align-items-start">
                <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary"/>
                Proven Brand Expertise
              </li>
              <li className="col d-flex align-items-start">
                <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary"/>
                Trusted Perth Designers
              </li>
              <li className="col d-flex align-items-start">
                <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary"/>
                Guaranteed Results
              </li>
              <li className="col d-flex align-items-start">
                <IconifyIcon icon="bx:check-circle" className="me-2 fs-5 text-primary"/>
                Growth partner,
              </li>
            </ul>
          </Col>

          <Col md={12} className="offset-xl-1 d-flex mt-lg-4 mb-4">
            <div
              ref={imageRef}
              className="align-self-end ms-xl-0 ms-md-4 p-lg-4 p-sm-3 p-2 rounded-4 overflow-hidden"
              style={{
                background:
                  'linear-gradient(153.32deg, rgba(255, 255, 255, .3) -65.62%, rgba(255, 255, 255, .1) 83.28%)',
                boxShadow: '0 .25rem 1.5rem -.0625rem rgba(0, 0, 0, .2)',
                backdropFilter: 'blur(25px)',
              }}
            >
              <Image
                src={heroImg}
                width={1122}
                alt="Layer"
                className="rounded-4"
                style={{
                  boxShadow: '0 0 7.5rem rgba(0, 0, 0, .1)',
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <span className="position-absolute bottom-0 start-0 w-100">
        <span className="d-dark-mode-none d-block w-100 h-100 py-xl-5 pt-lg-4 pt-md-0 pt-4 pb-5 bg-light"></span>
        <span className="d-dark-mode-block d-none w-100 h-100 py-xl-5 pt-lg-4 pt-md-0 pt-4 pb-5 bg-dark"></span>
      </span>

      <style jsx global>{`
        .split-char {
          display: inline-block;
          transform-origin: 50% 50%;
        }
        
        .split-word {
          display: inline-block;
        }
        
        /* Optional: Add some CSS for better visual effect */
        .overflow-hidden {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;