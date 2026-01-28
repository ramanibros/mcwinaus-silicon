'use client';
import React, { useEffect, useRef, useState, useTransition } from 'react';
import Link from 'next/link';
import contacts from '@/assets/img/contacts/bg.svg';
import { Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { submitContactForm } from "@/app/actions/contactAction";

// Register SplitText plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText);
}

const Hero = () => {
  const readyTextRef = useRef(null);
  const letsChatTextRef = useRef(null);


  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  function handleSubmit(formData) {
    setStatus(null);

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result?.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    });
  }

  useEffect(() => {
    // Split text ONLY for "Ready to grow your Perth business?"
    const splitReadyText = new SplitText(readyTextRef.current, {
      type: 'words,chars',
      wordsClass: 'word',
      charsClass: 'char'
    });

    // Create a timeline for sequential animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Animate "Ready to grow your Perth business?" text - character by character
    tl.fromTo(splitReadyText.chars,
      {
        opacity: 0,
        y: 30,
        rotationX: -90,
        scale: 0.5
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.03,
        delay: 0.5
      }
    );

    // Animate "Let's chat!" text - simple animation (not split text)
    tl.fromTo(letsChatTextRef.current,
      {
        opacity: 0,
        y: 60,
        scale: 1.5
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    );

    // Add color transition to "Let's chat!" text
    tl.to(letsChatTextRef.current,
      {
        color: '#4f46e5',
        duration: 0.5,
        ease: "power2.inOut"
      },
      "-=0.2"
    );

    // Return to gradient
    tl.to(letsChatTextRef.current,
      {
        color: '',
        duration: 0.8,
        ease: "power2.inOut"
      }
    );

    // Cleanup function to revert split text
    return () => {
      splitReadyText.revert();
    };
  }, []);

  return (
    <section
      className="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5"
      style={{ backgroundImage: `url(${contacts.src})` }}
    >
      <Container className="pt-5 pb-lg-4 pb-xl-5">
        <nav className="pt-lg-4" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="/" className="d-flex align-items-center">
                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" /> Home
              </Link>
            </li>
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>

        <Row className="pt-md-2 pt-lg-5 pb-2 pb-md-4">
          <Col xxl={4} xl={5} lg={6} className="pt-3 mt-3">
            <h1 ref={readyTextRef} className="h3 mb-2">
              Ready to grow your Perth business?
            </h1>
            <h2 ref={letsChatTextRef} className="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3">
              Let&apos;s chat!
            </h2>
            <div className="nav d-block lead pt-lg-5">
              <Link
                href="mailto:hello@McWIN iTECH.com.au"
                className="nav-link fw-normal text-decoration-underline p-0 mb-4"
              >
                hello@McWIN iTECH.com.au
              </Link>
              <div className="text-nav">0451 989 731</div>
            </div>
          </Col>

          <Col lg={6} className="offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3">
            <form className="needs-validation" noValidate action={handleSubmit}>
              <Row className="g-4">
                <Col sm={6}>
                  <label htmlFor="fn" className="form-label fs-base">
                    Full name
                  </label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    id="fn"
                    name="name"
                    required 
                  />
                  <div className="invalid-feedback">Please enter your full name!</div>
                </Col>

                <Col sm={6}>
                  <label htmlFor="email" className="form-label fs-base">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    required
                  />
                  <div className="invalid-feedback">Please provide a valid email address!</div>
                </Col>

                <Col xs={12} className="pb-2">
                  <label htmlFor="message" className="form-label fs-base">
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    name="message"
                    rows={3}
                    required
                  ></textarea>
                  <div className="invalid-feedback">Please provide a message!</div>
                </Col>

                <Col xs={12}>
                  <button
                      type="submit"
                      className="btn btn-lg btn-primary w-100 w-sm-auto d-flex align-items-center justify-content-center gap-2"
                  >
                    <span>{isPending ? "Submitting..." : "Contact Us"}</span>
                    {isPending ? (
                        <span className="loader" />
                    ) : (
                        ""
                    )}
                  </button>
                </Col>
                {status === "success" && (
                    <p className="form-success">
                      Thank you! Your message has been sent successfully.
                    </p>
                )}

                {status === "error" && (
                    <p className="form-error">
                      Something went wrong. Please try again.
                    </p>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        /* Split text styling for Ready text */
        .char {
          display: inline-block;
          position: relative;
        }

        .word {
          display: inline-block;
          position: relative;
        }

        /* Gradient text styling for Let's chat! */
        .text-gradient-primary {
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        /* Form styling - no animations */
        .form-control {
          transition: none;
        }

        .btn {
          transition: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;  