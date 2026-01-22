'use client';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Card,
    CardBody,
    Col,
    Container,
    Row,
} from 'react-bootstrap';

type FaqType = {
    question: string;
    answer: React.ReactNode;
};

const faqs: FaqType[] = [
    {
        question: 'Does branding really increase sales?',
        answer: (
            <>
                <p >
                    Absolutely. Strong branding builds trust, credibility, and emotional connection with your audience. Our clients consistently see up to 3x more qualified leads when their brand feels cohesive and professional.
                </p>
                <p className="mb-0">A well-defined brand identity converts better than generic logos by clearly communicating value, positioning, and authority—turning interest into action.</p>
            </>
        ),
    },
    {
        question: 'How much does Perth web design cost?',
        answer: (
            <>
                <p>
                    Perth web design doesn’t have to cost thousands. Our custom-built websites start at affordable rates while still delivering high performance and modern design.
                </p>
                  <p className="mb-0">
                    With conversion-focused layouts proven to drive up to 67% higher engagement, our tiered packages are designed to fit every business size and budget.


                </p>
            </>
        ),
    },
    {
        question: 'Whats the difference between Ui and Ux?',
        answer: (
            <>
             <p>
                   UI (User Interface) focuses on how your product looks—colors, typography, and visual appeal. UX (User Experience) focuses on how it works—flow, usability, and ease of use.
                </p>
                <p className="mb-0">
                   When combined, UI and UX can drive up to 4x higher engagement. Our Perth-based team masters both to create designs that look great and perform even better.
                </p>
               
            </>
        ),
    },
    {
        question: 'Do you design for both iOS and Android?',
        answer: (
            <>
                <p>
                   Yes, we design native app experiences for both iOS and Android platforms, ensuring consistency and performance across devices.
                </p>
                <p className="mb-0">
                   Our platform-optimised designs support up to 85% higher app retention, giving your users a seamless experience wherever they are.
                </p>
            </>
        ),
    },
    {
        question: 'What makes your designs different?',
        answer: (
            <>
                <p>
                   We’re a local Perth team that understands Australian audiences, trends, and expectations. Every design is built with long-term relevance and scalability in mind.
                </p>
                <p className="mb-0">
                  Expect the unexpected—our designs stay competitive and impactful for 3+ years, not just launch day.
                </p>
            </>
        ),
    },
    {
        question: 'What results can Perth business expect?',
        answer: (
            <>
                <p className="mb-0">
                    Our process is results-driven. Businesses working with us typically experience up to 3x brand recognition and a 67% increase in conversions.
                </p>
                 <p className="mb-0">
                    With projects delivered up to 2x faster by our local team, you get measurable growth and long-term value—not just good-looking design.


                </p>
            </>
        ),
    },
];

const Faqs = () => {
    const [activeKey, setActiveKey] = useState<string | null>('0');
    
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

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
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );

            tl.fromTo(spanText,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" },
                "-=0.8"
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <Container className="py-5 mb-lg-2">
            <Row className="py-2 py-md-4 py-lg-5">
                <Col xl={4} md={5} className="text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                    <h2 ref={h2Ref} className="pb-3 mb-1 mb-lg-3">
                        <span ref={spanRef} className="text-gradient-primary">Any questions?</span> <br
                        className="d-none d-md-inline"/>
                        Check out the FAQs.
                    </h2>
                    <p className="fs-lg pb-3 mb-2 mb-lg-3">
                        Still have unanswered questions and need to get in touch?
                    </p>
                    
                    {/* CLEAN PROFESSIONAL BOX DESIGN */}
                    <Row className="row-cols-1 row-cols-sm-2 g-3 g-sm-4">
                        {/* WhatsApp Box */}
                        <Col>
                            <Card className="border-0 shadow-sm bg-light hover-shadow transition-all">
                                <CardBody className="p-4 text-center">
                                    <div className="mb-3">
                                        <div className="rounded-circle bg-success bg-opacity-10 d-inline-flex align-items-center justify-content-center p-3">
                                            <IconifyIcon 
                                                icon="bxl:whatsapp" 
                                                className="fs-2 text-success"
                                            />
                                        </div>
                                    </div>
                                    <p className="fs-sm text-muted mb-2">Still have questions?</p>
                                    <Link 
                                        href="https://wa.me/+61466953095" 
                                        target="_blank"
                                        className="btn btn-success btn-sm rounded-pill px-3 d-inline-flex align-items-center"
                                    >
                                        WhatsApp Us
                                        <IconifyIcon icon="bx:right-arrow-alt" className="ms-2" />
                                    </Link>
                                </CardBody>
                            </Card>
                        </Col>
                        
                        {/* Email Box */}
                        <Col>
                            <Card className="border-0 shadow-sm bg-light hover-shadow transition-all">
                                <CardBody className="p-4 text-center">
                                    <div className="mb-3">
                                        <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center p-3">
                                            <IconifyIcon 
                                                icon="bx:envelope" 
                                                className="fs-2 text-primary"
                                            />
                                        </div>
                                    </div>
                                    <p className="fs-sm text-muted mb-2">Still have questions?</p>
                                    <Link 
                                        href="mailto:hello@mcwinitech.com.au"
                                        className="btn btn-primary btn-sm rounded-pill px-3 d-inline-flex align-items-center"
                                    >
                                        Mail Us
                                        <IconifyIcon icon="bx:right-arrow-alt" className="ms-2" />
                                    </Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                
                {/* FAQs Section */}
                <Col md={7} className="offset-xl-1">
                    <Accordion activeKey={activeKey} onSelect={k => setActiveKey(k as string)}>
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                eventKey={idx.toString()}
                                key={idx}
                                className="border-0 rounded-3 shadow-sm mb-3"
                            >
                                <AccordionHeader>{faq.question}</AccordionHeader>
                                <AccordionBody className="fs-sm ">{faq.answer}</AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Faqs;