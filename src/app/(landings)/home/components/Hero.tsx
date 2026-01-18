"use client";

import React, { useEffect, useRef } from "react";
import herobg from "@/assets/img/landing/software-agency-2/hero-bg.png";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import IconifyIcon from "@/components/IconifyIcon";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      try {
        const gsap = (await import("gsap")).default;

        if (bgImageRef.current) {
          gsap.fromTo(
            bgImageRef.current,
            { scale: 1.1, opacity: 0.8 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
          );
        }

        if (headingRef.current) {
          const originalHTML = headingRef.current.innerHTML;
          headingRef.current.innerHTML = "";

          const wrapper = document.createElement("div");
          wrapper.style.display = "inline-block";

          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = originalHTML;

          tempDiv.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              const words = (node.textContent || "").split(" ");
              words.forEach((word) => {
                if (!word) return;
                const span = document.createElement("span");
                span.className = "animated-word";
                span.style.display = "inline-block";
                span.style.opacity = "0";
                span.style.transform = "translateY(30px)";
                span.style.color = "white";
                span.textContent = word + " ";
                wrapper.appendChild(span);
              });
            }

            if (node.nodeType === Node.ELEMENT_NODE) {
              const span = node.cloneNode(true) as HTMLElement;
              span.className = "animated-word text-gradient-primary";
              span.style.display = "inline-block";
              span.style.opacity = "0";
              span.style.transform = "translateY(30px)";
              wrapper.appendChild(span);
              wrapper.appendChild(document.createTextNode(" "));
            }
          });

          headingRef.current.appendChild(wrapper);

          gsap.to(wrapper.querySelectorAll(".animated-word"), {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out",
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
              "radial-gradient(116.18% 118% at 50% 100%, rgba(99,102,241,.1) 0%, rgba(218,70,239,.05) 41.83%, rgba(241,244,253,.07) 82.52%)",
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
                <h1 ref={headingRef} className="display-1 mb-md-4 pb-3">
                  <span className="text-gradient-primary">Perth's</span> Leading
                  Digital Growth Partner
                </h1>

                <p
                  className="text-body mx-auto mb-md-5 mb-4 fs-5"
                  style={{ maxWidth: "36.5rem" }}
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
                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary" />
                Proven Digital Expertise
              </li>
              <li className="d-flex align-items-center me-4 mt-3">
                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary" />
                Trusted, Experienced Team
              </li>
              <li className="d-flex align-items-center mt-3">
                <IconifyIcon icon="bx:check-circle" className="me-2 text-primary" />
                Guaranteed Results Delivered
              </li>
            </ul>
          </Container>
        </div>
      </section>

      {/* ✅ HERO BUTTON CSS — SAME PAGE */}
      <style>{`
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
