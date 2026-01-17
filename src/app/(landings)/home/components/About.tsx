'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import about from '@/assets/img/landing/home/about_us.png';
import Image from 'next/image';
import Link from 'next/link';
import {Col, Row} from 'react-bootstrap';

const About = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // REMOVE this line - DON'T register here
        // if (typeof window !== 'undefined') {
        //   gsap.registerPlugin(ScrollTrigger);
        // }

        if (h1Ref.current && spanRef.current) {
            const h1Text = h1Ref.current;
            const spanText = spanRef.current;
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                    markers: false,
                }
            });

            tl.fromTo(h1Text,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
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

        // Change cleanup to this:
        return () => {
            const triggers = ScrollTrigger.getAll();
            triggers.forEach(trigger => {
                if (h1Ref.current && trigger.trigger === h1Ref.current) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
            <Row className="pt-xl-3">
                <Col md={5} className="text-center text-md-start pb-5">
                    <h1 ref={h1Ref} className="mb-4">
                        <span ref={spanRef} className="text-gradient-primary">Digital Solutions</span> That Deliver Real Business Growth
                    </h1>
                    <p className="fs-lg pb-lg-3 mb-4">
                        McWIN iTECH—your <b>growth partner, not just another agency.</b> We build high-performing
                        websites, SEO strategies, mobile apps, and custom software that turn Perth businesses into
                        market leaders. <b>Expect the unexpected</b>—results that last.
                    </p>
                    <Link href="/about" className="btn btn-primary shadow-primary btn-lg">
                        More About Us
                    </Link>
                </Col>
                <Col xl={6} md={7} className="offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
                    <Image src={about} className="rounded-3 shadow-lg" alt="Image"/>
                </Col>
            </Row>
        </section>
    );
};

export default About;