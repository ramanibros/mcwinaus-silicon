"use client";

import React from "react";
import herobg from "@/assets/img/landing/software-agency-2/hero-bg.png";
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import IconifyIcon from "@/components/IconifyIcon";

const Hero = () => {
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
                    "radial-gradient(116.18% 118% at 50% 100%, rgba(99,102,241,.1) 0%, rgba(218,70,239,.05) 41.83%, rgba(241,244,253,.07) 82.52%)",
            }}
        />

                <div
                    className="jarallax-img home-hero-bg"
                    style={{
                        backgroundImage: `url(${herobg.src})`,
                        opacity: 0.8,
                    }}
                />

                <div className="min-vh-100 d-flex flex-column py-5">
                    <Container className="position-relative text-center zindex-5 pt-4 pt-md-5 pb-5 mt-auto">
                        <Row className="mt-5">
                            <Col xl={10} className="mx-auto">
                                <h1 className="display-1 mb-md-4 pb-3">
                                    <span className="home-hero-word text-gradient-primary">Perth&apos;s</span>{' '}
                                    <span className="home-hero-word">Leading</span>{' '}
                                    <span className="home-hero-word">Digital</span>{' '}
                                    <span className="home-hero-word">Growth</span>{' '}
                                    <span className="home-hero-word">Partner</span>
                                </h1>

                                <p
                                    className="text-body mx-auto mb-md-5 mb-4 fs-5"
                                    style={{maxWidth: "36.5rem"}}
                                >
                                    Local expertise, proven tech, and custom strategies delivering{" "}
                                    <b>3x more sales</b> for Australian brands—without wasting
                                    adspend.
                                </p>

                                <Link href="/contact" className="hero-btn">
                                    Book Free Consultation
                                </Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-auto pb-lg-3">
                        <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-0">
                            <li className="d-flex align-items-center me-4 mt-3">
                                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary"/>
                                Proven Digital Expertise
                            </li>
                            <li className="d-flex align-items-center me-4 mt-3">
                                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary"/>
                                Trusted, Experienced Team
                            </li>
                            <li className="d-flex align-items-center mt-3">
                                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary"/>
                                Guaranteed Results Delivered
                            </li>
                        </ul>
                    </Container>
                </div>
            </section>

            {/* ✅ HERO BUTTON CSS — SAME PAGE */}
            <style>{`
        .home-hero-word {
          display: inline-block;
          color: #fff;
          animation: home-hero-word-in .8s cubic-bezier(.22, 1, .36, 1) both;
        }

        .home-hero-word.text-gradient-primary {
          color: transparent;
        }

        .home-hero-word:nth-child(1) { animation-delay: .18s; }
        .home-hero-word:nth-child(2) { animation-delay: .26s; }
        .home-hero-word:nth-child(3) { animation-delay: .34s; }
        .home-hero-word:nth-child(4) { animation-delay: .42s; }
        .home-hero-word:nth-child(5) { animation-delay: .5s; }

        .home-hero-bg {
          animation: home-hero-bg-in 1.5s ease-out both;
        }

        @keyframes home-hero-word-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes home-hero-bg-in {
          from { opacity: .8; transform: scale(1.1); }
          to { opacity: .8; transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-hero-word,
          .home-hero-bg {
            animation: none;
            opacity: 1;
            transform: none;
          }
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
          margin : 0 auto;
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
      `}</style>
        </>
    );
};

export default Hero;
