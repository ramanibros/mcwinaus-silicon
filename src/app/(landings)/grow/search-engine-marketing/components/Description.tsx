"use client";

import IconifyIcon from '@/components/IconifyIcon';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Card, CardBody, Col, Row} from 'react-bootstrap';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Description = () => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation for "Offer" word
      if (h2Ref.current && spanRef.current) {
        const h2Text = h2Ref.current;
        const spanText = spanRef.current;
        
        gsap.fromTo(h2Text,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: h2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              markers: false,
            }
          }
        );

        gsap.fromTo(spanText,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: h2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              markers: false,
            }
          }
        );
      }

      // Animation for step numbers
      if (stepRefs.current.length > 0) {
        const stepNumbers = stepRefs.current.filter(Boolean) as HTMLDivElement[];
        
        const stepsContainer = document.querySelector('.steps');
        
        if (stepsContainer) {
          // Animate step numbers with stagger
          const stepNumberInners = stepNumbers.map(step => 
            step.querySelector('.step-number-inner')
          ).filter(Boolean) as HTMLElement[];
          
          gsap.fromTo(stepNumberInners,
            {
              opacity: 0,
              scale: 0,
              rotation: 90
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: stepsContainer,
                start: "top 80%",
                toggleActions: "play none none reverse",
                markers: false,
              }
            }
          );

          // Animate step content
          const stepTitles = stepNumbers.map(step => 
            step.querySelector('h4')
          ).filter(Boolean) as HTMLElement[];
          
          const stepTexts = stepNumbers.map(step => 
            step.querySelector('p')
          ).filter(Boolean) as HTMLElement[];
          
          gsap.fromTo(stepTitles,
            {
              opacity: 0,
              y: 15
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stepsContainer,
                start: "top 80%",
                toggleActions: "play none none reverse",
                markers: false,
              }
            }
          );

          gsap.fromTo(stepTexts,
            {
              opacity: 0,
              y: 15
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.15,
              ease: "power2.out",
              delay: 0.2,
              scrollTrigger: {
                trigger: stepsContainer,
                start: "top 80%",
                toggleActions: "play none none reverse",
                markers: false,
              }
            }
          );
        }
      }

    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section className="container mt-lg-4 mt-xl-5">
      <Row>
        <aside className="col-lg-4 col-md-5 offset-xl-1 order-md-2 mb-5">
          <div style={{ marginTop: '-96px' }}></div>
          <div className="position-sticky top-0 pt-5">
            <div className="pt-5 mt-md-3">
              <Card className="shadow-sm p-sm-3">
                <CardBody>
                  <h4 className="mb-4">Top-Choice Package</h4>
                  <ul className="list-unstyled pb-3">
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:slideshow" className="fs-xl text-muted me-2 pe-1" />
                      Strategy & Campaign Planning
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      Ad Setup & Optimisation
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      Ad Creative & Copy
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Reporting & Analytics
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      Ongoing Optimisation
                    </li>
                  </ul>
                  <a href="/contact" className="btn btn-primary btn-lg shadow-primary">
                    Contact To Sales
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
        </aside>

        <Col xl={7} lg={8} md={7} className="order-md-1 mb-5">
          <h2 ref={h2Ref} className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">
            What We <span ref={spanRef} className="text-gradient-primary">Offer</span>
          </h2>
          <div className="steps steps-sm">
            <div 
              ref={(el: HTMLDivElement | null) => { stepRefs.current[0] = el; }}
              className="step"
            >
              <div className="step-number">
                <div 
                  className="step-number-inner gradient-bg-1"
                  style={{
                    '--gradient-color-1': '102, 126, 234',
                    '--gradient-color-2': '118, 75, 162'
                  } as React.CSSProperties}
                >
                  1
                </div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Google Search Campaign Management</h4>
                <p className="mb-0">
                  High-intent Google Search campaigns targeting users actively looking for your products or services. Keyword strategy, ad copy, and bidding are structured to maximise return while controlling cost per acquisition.
                </p>
              </div>
            </div>

            <div 
              ref={(el: HTMLDivElement | null) => { stepRefs.current[1] = el; }}
              className="step"
            >
              <div className="step-number">
                <div 
                  className="step-number-inner gradient-bg-2"
                  style={{
                    '--gradient-color-1': '245, 87, 108',
                    '--gradient-color-2': '245, 101, 101'
                  } as React.CSSProperties}
                >
                  2
                </div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Google Shopping Campaigns</h4>
                <p className="mb-0">
                  Optimised Google Shopping campaigns including product feed structuring, bidding strategy, and performance monitoring—designed to improve visibility and efficiency for Australian eCommerce businesses.
                </p>
              </div>
            </div>

            <div 
              ref={(el: HTMLDivElement | null) => { stepRefs.current[2] = el; }}
              className="step"
            >
              <div className="step-number">
                <div 
                  className="step-number-inner gradient-bg-3"
                  style={{
                    '--gradient-color-1': '79, 172, 254',
                    '--gradient-color-2': '0, 242, 254'
                  } as React.CSSProperties}
                >
                  3
                </div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Remarketing & Audience Re-Engagement</h4>
                <p className="mb-0">
                  Remarketing strategies targeting previous visitors, abandoned carts, and high-intent users. Designed to recover lost opportunities and improve conversion efficiency across search and display networks.
                </p>
              </div>
            </div>

            <div 
              ref={(el: HTMLDivElement | null) => { stepRefs.current[3] = el; }}
              className="step"
            >
              <div className="step-number">
                <div 
                  className="step-number-inner gradient-bg-4"
                  style={{
                    '--gradient-color-1': '67, 233, 123',
                    '--gradient-color-2': '56, 249, 215'
                  } as React.CSSProperties}
                >
                  4
                </div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Conversion Tracking Setup</h4>
                <p className="mb-0">
                  End-to-end conversion tracking setup including GA4, enhanced conversions, and event tracking—ensuring accurate measurement of leads, sales, and campaign performance.
                </p>
              </div>
            </div>

            <div 
              ref={(el: HTMLDivElement | null) => { stepRefs.current[4] = el; }}
              className="step"
            >
              <div className="step-number">
                <div 
                  className="step-number-inner gradient-bg-5"
                  style={{
                    '--gradient-color-1': '255, 119, 69',
                    '--gradient-color-2': '255, 206, 49'
                  } as React.CSSProperties}
                >
                  5
                </div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Smart Bidding Strategies</h4>
                <p className="mb-0">
                  Data-driven bidding strategies such as Target ROAS and Conversion Value optimisation, aligned with your business goals and budget efficiency requirements.
                </p>
              </div>
            </div>

            <div 
              ref={(el: HTMLDivElement | null) => { stepRefs.current[5] = el; }}
              className="step"
            >
              <div className="step-number">
                <div 
                  className="step-number-inner gradient-bg-6"
                  style={{
                    '--gradient-color-1': '157, 78, 221',
                    '--gradient-color-2': '255, 119, 230'
                  } as React.CSSProperties}
                >
                  6
                </div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Monthly Campaign Optimisation</h4>
                <p className="mb-0">
                  Ongoing campaign optimisation including keyword refinement, bid adjustments, and performance review. Campaigns are refined regularly to adapt to market changes and maintain efficiency.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <style jsx global>{`
        /* Text gradient */
        .text-gradient-primary {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        /* Step number styles */
        .step .step-number {
          position: relative;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1.5rem;
        }

        .step .step-number-inner {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          will-change: transform, box-shadow;
        }

        /* Gradient backgrounds */
        .gradient-bg-1 {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .gradient-bg-2 {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
        
        .gradient-bg-3 {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }
        
        .gradient-bg-4 {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }
        
        .gradient-bg-5 {
          background: linear-gradient(135deg, #ff7745 0%, #ffce31 100%);
        }
        
        .gradient-bg-6 {
          background: linear-gradient(135deg, #9d4edd 0%, #ff77e6 100%);
        }

        /* Hover effects */
        .step:hover .step-number-inner {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        /* Step body hover effect */
        .step:hover h4 {
          color: var(--step-color, #667eea) !important;
          transition: color 0.3s ease;
        }

        .step:nth-child(1):hover h4 {
          --step-color: #667eea;
        }
        .step:nth-child(2):hover h4 {
          --step-color: #f5576c;
        }
        .step:nth-child(3):hover h4 {
          --step-color: #4facfe;
        }
        .step:nth-child(4):hover h4 {
          --step-color: #43e97b;
        }
        .step:nth-child(5):hover h4 {
          --step-color: #ff7745;
        }
        .step:nth-child(6):hover h4 {
          --step-color: #9d4edd;
        }

        /* Shine effect */
        .step-number-inner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          transition: transform 0.6s ease;
        }

        .step:hover .step-number-inner::before {
          transform: translateX(300%) rotate(30deg);
        }

        /* Performance optimizations */
        .step-number-inner,
        .step h4,
        .step p {
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </section>
  );
};

export default Description;