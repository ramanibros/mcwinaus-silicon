'use client';
import React, {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import testi1 from '@/assets/img/top-web-development-company-in-brisbane/brisbane-tourism-illustration.png';

import {Card, CardBody, Col, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const testimonials = [
    {
        id: 1,
        text:
            '<div class="case-study-text">' +
            '<font><strong>Client:</strong> Townsville-based coral reef research institute</font><br/>' +
            '<font><strong>Challenge:</strong> Fragmented data collection, poor researcher collaboration, limited public outreach</font><br/>' +
            '<font><strong>Solution:</strong> Integrated reef monitoring platform, Townsville SEO strategy, public data portal</font><br/>' +
            '<font><strong>Results:</strong> +450% research collaboration, +320% data accessibility, 38% funding increase</font>' +
            '</div>',
        name: 'Townsville Marine Research Success',
        role: 'Live: #1 Google for "Great Barrier Reef monitoring Townsville" | 23K monthly visits',
        bg: testi1,
    }
]

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (h2Ref.current && spanRef.current) {
            const h2Text = h2Ref.current;
            const spanText = spanRef.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: h2Ref.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                    markers: false,
                }
            });

            tl.fromTo(h2Text,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                }
            );

            tl.fromTo(spanText,
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

        // Animate background shapes
        if (boxRef.current) {
            const shapes = boxRef.current.querySelectorAll('.bg-shape');

            shapes.forEach((shape, index) => {
                gsap.to(shape, {
                    duration: 20 + index * 5, // Slower movement for some shapes
                    x: `+=${30 + index * 10}`,
                    y: `+=${20 + index * 5}`,
                    rotation: 360,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        }

        return () => {
            const triggers = ScrollTrigger.getAll();
            triggers.forEach(trigger => {
                if (h2Ref.current && trigger.trigger === h2Ref.current) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <>
            <style jsx global>{`
        /* MODERN BOX WITH BACKGROUND SHAPES */
        .modern-testimonial-box {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.08),
            0 8px 25px rgba(59, 130, 246, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          position: relative;
          overflow: hidden;
        }
        
        .modern-testimonial-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.03) 0%, 
            rgba(139, 92, 246, 0.02) 100%);
          pointer-events: none;
        }
        
        .box-border-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          box-shadow: inset 0 0 60px rgba(59, 130, 246, 0.05);
          pointer-events: none;
        }
        
        /* Background shapes - slow moving */
        .bg-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          pointer-events: none;
          filter: blur(20px);
        }
        
        .shape-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          top: -30px;
          left: -30px;
        }
        
        .shape-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ec4899, #f59e0b);
          bottom: -20px;
          right: -20px;
        }
        
        .shape-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #10b981, #06b6d4);
          top: 40%;
          right: 10%;
        }
        
        .shape-4 {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #f97316, #dc2626);
          bottom: 30%;
          left: 5%;
        }
        
        .shape-5 {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          top: 20%;
          right: 30%;
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
        }
      `}</style>

            <section className="container mb-5 pt-2 pb-3 py-md-4 py-lg-5">
                <h3 ref={h2Ref} className="h1 pb-2 pb-lg-0 mb-4 mb-lg-5 text-center">
                    Work That Speaks. <span ref={spanRef} className="text-gradient-primary">Results That Scale.</span>
                </h3>
                <Row>
                    <Col md={7}>
                        <div ref={boxRef}
                             className="modern-testimonial-box p-4 p-xxl-5 mb-4 me-xxl-4 position-relative">
                            {/* Background shapes */}
                            <div className="bg-shape shape-1"></div>
                            <div className="bg-shape shape-2"></div>
                            <div className="bg-shape shape-3"></div>
                            <div className="bg-shape shape-4"></div>
                            <div className="bg-shape shape-5"></div>

                            <div className="box-border-glow"></div>

                            <div className="content-wrapper">
                                <Swiper
                                    modules={[Autoplay, Navigation]}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={{
                                        prevEl: '.page-prev',
                                        nextEl: '.page-next',
                                    }}
                                    className="mx-0"
                                    onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                                >
                                    {testimonials.map(item => (
                                        <SwiperSlide key={item.id} className="h-auto">
                                            <figure className="card h-100 position-relative border-0 bg-transparent">
                                                <blockquote className="card-body p-0 mb-0">
                                                    <h4 className="fw-semibold lh-base mb-0 h4-h1">{item.name}</h4>
                                                    <span className="fs-sm text-muted">{item.role}</span>
                                                    <div className="hr-indicator mb-5 mt-2"/>
                                                    <div className="fs-lg mb-0" dangerouslySetInnerHTML={{__html: item.text}}/>
                                                </blockquote>
                                            </figure>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        <nav className="pagination d-flex justify-content-center justify-content-md-start">
                            <div className="page-item me-2">
                                <button className="page-link page-prev btn-icon btn-sm" aria-label="Previous">
                                    <IconifyIcon icon="bx:chevron-left" fontSize={18}/>
                                </button>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center w-auto mb-0"></ul>
                            <div className="page-item ms-2">
                                <button className="page-link page-next btn-icon btn-sm" aria-label="Next">
                                    <IconifyIcon icon="bx:chevron-right" fontSize={18}/>
                                </button>
                            </div>
                        </nav>
                    </Col>

                    <Col md={5} className="d-none d-md-block">
                        <div className="swiper-tabs">
                            {testimonials.map((item, idx) => (
                                <Card
                                    key={item.id}
                                    className={`bg-transparent border-0 swiper-tab ${
                                        activeIndex === idx ? 'active' : ''
                                    }`}
                                >
                                    <CardBody
                                        className="p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center"
                                        style={{backgroundImage: `url(${item.bg.src})`}}
                                    ></CardBody>
                                    <div className="card-footer d-flex w-100 border-0 pb-0">
                                        <div className="border-start-xl ps-xl-4 ms-xl-2">
                                            <h4 className="fw-semibold lh-base mb-0">{item.name}</h4>
                                            {/* <h5 className="fs-sm text-muted">{item.role}</h5> */}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default Testimonials;