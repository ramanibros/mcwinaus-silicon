"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image02 from "@/assets/img/brand-service/Brand_S2.jpg";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import IconifyIcon from "@/components/IconifyIcon";

gsap.registerPlugin(ScrollTrigger);

const TextSession = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const featureRefs = useRef<HTMLLIElement[]>([]);
  const techRefs = useRef<HTMLSpanElement[]>([]);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* IMAGE */
      gsap.from(imageRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      /* TITLE */
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      /* PARAGRAPH */
      gsap.from(paraRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 82%",
        },
      });

      /* FEATURE TEXT STAGGER */
      gsap.from(featureRefs.current, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      /* IMAGE PARALLAX */
      gsap.to(imageRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* TECH OBJECT PARALLAX */
      techRefs.current.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -120 : 120,
          x: i % 2 === 0 ? 60 : -60,
          rotation: 180,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      /* SPOTLIGHT */
      gsap.to(spotlightRef.current, {
        y: -160,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pro-section">
      <div ref={spotlightRef} className="spotlight" />
      <div className="energy-beam" />

      <div className="tech-floats">
        {[0, 1, 2].map((_, i) => (
          <span
            key={i}
            ref={(el) => {
  if (el) {
    techRefs.current[i] = el;
  }
}}

          />
        ))}
      </div>

      <div className="container position-relative py-5">
        <Row className="align-items-center g-5">
          <Col md={6} className="mb-4 mb-md-0">
            <div ref={imageRef} className="image-frame">
              <Image src={image02} alt="UI/UX Revenue Machine" className="img-fluid" />
            </div>
          </Col>

          <Col md={6}>
            <div className="content-wrap">
              <h2 ref={titleRef}>
                Australia's UI/UX Revenue Machine
              </h2>

              <p ref={paraRef}>
                UI/UX design focused on commercial outcomes—not just aesthetics or wireframes. Our
                Perth-based team applies usability principles, data-led decisions, and iterative testing to
                support measurable improvements in conversion and retention.
              </p>

              <ul className="feature-list">
                {[
                  {
                    icon: "mdi:account-multiple-check-outline", // For Nationwide user experience expertise
                    text: "Nationwide user experience expertise",
                  },
                  {
                    icon: "mdi:cursor-click", // For Conversion-focused design decisions
                    text: "Conversion-focused design decisions",
                  },
                  {
                    icon: "mdi:code-braces", // For Development-ready design deliverables
                    text: "Development-ready design deliverables",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="feature-item"
                    ref={(el) => {
  if (el) {
    featureRefs.current[i] = el;
  }
}}

                  >
                    <span className="icon-box">
                      <IconifyIcon icon={item.icon} className="fs-5" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .pro-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at top left, #0b1220, #020409 65%);
        }

        .spotlight {
          position: absolute;
          top: 50%;
          right: 18%;
          width: 700px;
          height: 700px;
          transform: translateY(-50%);
          background: radial-gradient(
            circle,
            rgba(0, 170, 255, 0.35),
            transparent 65%
          );
          filter: blur(140px);
          pointer-events: none;
        }

        .energy-beam {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 40%,
            rgba(0, 170, 255, 0.12),
            transparent 60%
          );
          opacity: 0.6;
        }

        .tech-floats span {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(0, 180, 255, 0.25),
            rgba(120, 255, 220, 0.12)
          );
          border: 1px solid rgba(0, 200, 255, 0.35);
          opacity: 0.35;
        }

        .tech-floats span:nth-child(1) {
          top: 18%;
          left: 6%;
        }

        .tech-floats span:nth-child(2) {
          bottom: 16%;
          left: 22%;
        }

        .tech-floats span:nth-child(3) {
          top: 34%;
          right: 14%;
        }

        .image-frame {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 45px 100px rgba(0, 0, 0, 0.8);
        }

        .content-wrap {
          max-width: 520px;
        }

        .content-wrap h2 {
          color: #fff;
          font-weight: 800;
          margin-bottom: 0.8rem;
        }

        .content-wrap p {
          color: #d5deea;
          margin-bottom: 1.6rem;
          line-height: 1.55;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #eef4ff;
          font-weight: 500;
        }

        .icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.28),
            rgba(255, 255, 255, 0.08)
          );
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default TextSession;