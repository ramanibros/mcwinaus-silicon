'use client';
import React, { useEffect, useRef } from 'react'; // Added useEffect, useRef
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import avatar1 from '@/assets/img/avatar/13.jpg';
import avatar2 from '@/assets/img/avatar/14.jpg';
import avatar3 from '@/assets/img/avatar/11.jpg';
import {Card, CardBody, Col, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const testimonials = [
    {
        id: 1,
        text: "McWIN iTECH is Perth's best digital company! Their services are awesome, professional, 24/7 support and affordable pricing, making them a big advantage. Highly recommended!",
        author: "Courtenay Holgate",
        role: "Owner",
        avatar: avatar1,
    },
    {
        id: 2,
        text: "Very pleased with the work; helped with putting my ideas on paper when it came to rebranding my business, doing a complete new website and also managing my business's social media.",
        author: "Alysha Cheetham",
        role: "Client",
        avatar: avatar2,
    },
    {
        id: 3,
        text: "Very good service. Completed a job for me on very short notice and at a very high standard. I would highly recommend them.",
        author: "Jaymie Andersen",
        role: "Client",
        avatar: avatar3,
    },
    {
        id: 4,
        text: "Very helpful, worked through with me step by step till we got what I wanted.",
        author: "All Right Towing",
        role: "Business Owner",
        avatar: avatar1,
    },
    {
        id: 5,
        text: "Very happy with their service 😊 highly professional team",
        author: "Cristina Kennedy",
        role: "Client",
        avatar: avatar2,
    }
];

const Testimonials = () => {
    // Added refs for animation
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    // Added animation effect
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

            // Animate the entire h2
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

            // Animate the gradient span with a different effect
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

        // Cleanup
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
        <section className="container pb-5">
            <Row>
                <Col md={5}>
                    <Card className="h-100 border-0 overflow-hidden px-md-4">
                        <span
                            className="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100 opacity-10 d-none d-md-block"></span>
                        <CardBody
                            className="d-flex flex-column align-items-center justify-content-center position-relative zindex-2 p-0 pb-2 p-lg-4">
                            {/* Updated h2 with refs */}
                            <h2 ref={h2Ref} className="h1 text-center text-md-start p-lg-4">
                                Real Results From <span ref={spanRef} className="text-gradient-primary">Perth Clients</span>
                            </h2>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={7}>
                    <Card className="border-0 shadow-sm p-4 p-xxl-5">
                        <div className="d-flex justify-content-between pb-4 mb-2">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <IconifyIcon icon="bxs:quote-left"/>
              </span>
                            <div className="d-flex">
                                <button
                                    type="button"
                                    id="testimonials-prev"
                                    className="btn btn-prev btn-icon btn-sm me-2"
                                    aria-label="Previous"
                                >
                                    <IconifyIcon icon="bx:chevron-left" fontSize={20}/>
                                </button>
                                <button
                                    type="button"
                                    id="testimonials-next"
                                    className="btn btn-next btn-icon btn-sm ms-2"
                                    aria-label="Next"
                                >
                                    <IconifyIcon icon="bx:chevron-right" fontSize={20}/>
                                </button>
                            </div>
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={24}
                            loop
                            pagination={{clickable: true}}
                            navigation={{
                                prevEl: '#testimonials-prev',
                                nextEl: '#testimonials-next',
                            }}
                            className="mx-0 mb-md-n2 mb-xxl-n3"
                        >
                            {testimonials.map(item => (
                                <SwiperSlide key={item.id} className="h-auto">
                                    <figure className="card h-100 position-relative border-0 bg-transparent">
                                        <blockquote className="card-body p-0 mb-0">
                                            <p className="fs-lg mb-0">{item.text}</p>
                                        </blockquote>
                                        <figcaption
                                            className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                                            <Image
                                                src={item.avatar}
                                                width={60}
                                                height={60}
                                                alt={item.author}
                                                className="rounded-circle"
                                            />
                                            <div className="ps-3">
                                                <h6 className="fw-semibold lh-base mb-0">{item.author}</h6>
                                                <span className="fs-sm text-muted">{item.role}</span>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination position-relative mt-5"></div>
                        </Swiper>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default Testimonials;