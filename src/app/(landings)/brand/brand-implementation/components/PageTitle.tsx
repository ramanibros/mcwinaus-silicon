"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const PageTitle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Split "Activate Your" into individual words
  const activateWords = "Activate Your".split(' ');
  // Split "Brand Power" into individual words
  const brandWords = "Brand Power".split(' ');

  return (
    <section
      className="container pb-5 mb-md-2 mb-lg-4 mb-xl-5"
      style={{ marginBottom: '0 !important' }}
    >
      <Row className="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
        <Col lg={6}>
          <h1 className="display-2 mb-0">
            <span style={{ display: 'inline-block' }}>
              {activateWords.map((word, index) => (
                <span 
                  key={index} 
                  style={{
                    display: 'inline-block',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease, transform 0.6s ease`,
                    transitionDelay: `${0.1 + (index * 0.1)}s`,
                    marginRight: '0.2em'
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span style={{ display: 'inline-block' }}>
              {brandWords.map((word, index) => (
                <span 
                  key={index} 
                  className={word === "Brand" ? "text-gradient-primary" : ""}
                  style={{
                    display: 'inline-block',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease, transform 0.6s ease`,
                    transitionDelay: `${0.3 + (index * 0.1)}s`,
                    marginRight: '0.2em'
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
        </Col>
        <Col lg={6} xl={5} className="offset-xl-1 pt-3 pt-sm-4 pt-lg-3">
          <p 
            className="pb-4 mb-1 mb-md-2 mb-xl-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s ease, transform 1s ease',
              transitionDelay: '0.7s'
            }}
          >
            Turn brand strategy into consistent, real-world execution across every customer touchpoint. Our Perth-based team ensures your positioning is applied clearly and accurately, supporting stronger engagement, trust, and measurable revenue growth across Australia.
          </p>
          <Link 
            href="/contact" 
            className="btn btn-lg btn-primary shadow-primary"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              transitionDelay: '1s'
            }}
          >
            Start your project
          </Link>
        </Col>
      </Row>
      <hr 
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'opacity 1.2s ease, transform 1.2s ease',
          transitionDelay: '1.2s',
          transformOrigin: 'left center'
        }}
      />
    </section>
  );
};

export default PageTitle;