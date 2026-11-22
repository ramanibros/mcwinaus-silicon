'use client';

import React, {useEffect, useRef} from 'react';
import herobg from '@/assets/img/landing/software-agency-2/hero-bg.png';
import {Col, Container, Row} from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

const Hero = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const bgImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initAnimation = async () => {
            try {
                const gsap = (await import('gsap')).default;

                if (bgImageRef.current) {
                    gsap.fromTo(
                        bgImageRef.current,
                        {scale: 1.1, opacity: 0.8},
                        {scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out'}
                    );
                }

                if (headingRef.current && !headingRef.current.dataset.animated) {
                    headingRef.current.dataset.animated = '1';
                    const originalHTML = headingRef.current.innerHTML;
                    headingRef.current.innerHTML = '';

                    const wrapper = document.createElement('div');
                    wrapper.style.display = 'inline-block';

                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = originalHTML;

                    tempDiv.childNodes.forEach((node) => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            const words = (node.textContent || '').split(' ');
                            words.forEach((word) => {
                                if (!word) return;
                                const span = document.createElement('span');
                                span.className = 'animated-word';
                                span.style.display = 'inline-block';
                                span.style.opacity = '0';
                                span.style.transform = 'translateY(30px)';
                                span.style.color = 'white';
                                span.textContent = word;
                                wrapper.appendChild(span);
                                wrapper.appendChild(document.createTextNode(' '));
                            });
                        }

                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const span = node.cloneNode(true) as HTMLElement;
                            span.className = 'animated-word text-gradient-primary';
                            span.style.display = 'inline-block';
                            span.style.opacity = '0';
                            span.style.transform = 'translateY(30px)';
                            wrapper.appendChild(span);
                            wrapper.appendChild(document.createTextNode(' '));
                        }
                    });

                    headingRef.current.appendChild(wrapper);

                    gsap.to(wrapper.querySelectorAll('.animated-word'), {
                        opacity: 1,
                        y: 0,
                        stagger: 0.08,
                        duration: 0.8,
                        delay: 0.3,
                        ease: 'power3.out',
                    });
                }
            } catch (e) {
                console.error(e);
            }
        };

        initAnimation();
    }, []);

    return (
        <>
            <section
                className="jarallax bg-dark min-vh-100"
                data-bs-theme="dark"
            >
                <span
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background:
                            'radial-gradient(116.18% 118% at 50% 100%, rgba(99,102,241,.1) 0%, rgba(218,70,239,.05) 41.83%, rgba(241,244,253,.07) 82.52%)',
                    }}
                />

                <div
                    ref={bgImageRef}
                    className="jarallax-img"
                    style={{
                        backgroundImage: `url(${herobg.src})`,
                        opacity: 0.8,
                    }}
                />

                <div className="min-vh-100 d-flex flex-column py-5">
                    <Container className="position-relative text-center zindex-5 pt-4 pt-md-5 pb-5 mt-auto">
                        <Row className="mt-5">
                            <Col xl={10} className="mx-auto">
                                <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-pill festival-tag">
                                    <IconifyIcon icon="bx:party" className="text-warning fs-sm"/>
                                    <span
                                        className="fs-sm fw-semibold text-warning text-uppercase"
                                        style={{letterSpacing: '1px'}}
                                    >
                                        Festival Growth Offer — Save Up To 30%
                                    </span>
                                </div>

                                <h1 ref={headingRef} className="display-1 mb-md-4 pb-3">
                                    Give Your Business{' '}
                                    <span className="text-gradient-primary">
                                        A Stronger Digital Presence
                                    </span>
                                </h1>

                                <p
                                    className="text-body mx-auto mb-md-5 mb-4 fs-5"
                                    style={{maxWidth: '38rem'}}
                                >
                                    Special festival pricing on website development, social media
                                    content and custom software solutions.
                                </p>

                                <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                                    <Link href="/contact" className="hero-btn">
                                        Claim Your Festival Offer
                                    </Link>
                                    <a href="#festival-pricing" className="hero-btn-ghost d-inline-flex align-items-center gap-2">
                                        <IconifyIcon icon="bx:list-ul" className="fs-5 lh-1"/>
                                        View Pricing
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-auto pb-lg-3">
                        <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-0">
                            <li className="d-flex align-items-center me-4 mt-3">
                                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary"/>
                                5-Page WordPress — $499
                            </li>
                            <li className="d-flex align-items-center me-4 mt-3">
                                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary"/>
                                10-Post Social Pack — $179
                            </li>
                            <li className="d-flex align-items-center mt-3">
                                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary"/>
                                Custom Software — Tailored Quote
                            </li>
                        </ul>
                    </Container>
                </div>
            </section>

            <style>{`
        .festival-tag {
          background: rgba(255, 186, 8, 0.08);
          border: 1px solid rgba(255, 186, 8, 0.25);
        }

        .hero-btn {
          width: 255px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 15px;

          background: linear-gradient(0deg, #000, #272727);
          border-radius: 10px;
          border: none;

          color: #fff;
          font-weight: 900;
          text-decoration: none;
          cursor: pointer;
          position: relative;

          transition: transform .2s ease;
        }

        .hero-btn::before,
        .hero-btn::after {
          content: "";
          position: absolute;
          left: -2px;
          top: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          border-radius: 10px;
          background: linear-gradient(
            45deg,
            #fb0094,
            #0000ff,
            #00ff00,
            #ffff00,
            #ff0000,
            #fb0094
          );
          background-size: 400%;
          z-index: -1;
          animation: steam 20s linear infinite;
        }

        .hero-btn::after {
          filter: blur(50px);
        }

        @keyframes steam {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }

        .hero-btn:hover {
          transform: translateY(-2px);
        }

        .hero-btn-ghost {
          height: 52px;
          padding: 0 24px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }

        .hero-btn-ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(141, 65, 249, 0.6);
          background: rgba(141, 65, 249, 0.14);
          color: #fff;
        }
      `}</style>
        </>
    );
};

export default Hero;
