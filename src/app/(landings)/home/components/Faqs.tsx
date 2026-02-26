'use client';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import React, {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
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
        question: 'Why choose custom websites over templates?',
        answer: (
            <>
                <p className="mb-0">
                    Custom sites outperform templates—delivering up to 67% higher conversions
                    and 3× stronger Google rankings. Templates limit growth and flexibility,
                    while bespoke builds let your brand stand out and dominate its niche.
                </p>
            </>
        ),
    },
    {
        question: 'Is ongoing support included?',
        answer: (
            <>
                <p className="mb-0">
                    Absolutely. Monthly maintenance is standard—covering security updates,
                    speed optimisation, and Google compliance. You stay protected and
                    competitive without any technical headaches.
                </p>
            </>
        ),
    },
    {
        question: 'Can you fix slow existing websites?',
        answer: (
            <>
                <p className="mb-0">
                    Yes—speed optimisation is our specialty. We typically achieve up to 3×
                    faster load times, transforming sluggish sites into high-performing
                    conversion machines quickly.
                </p>
            </>
        ),
    },
    {
        question: 'Do you work Australia-wide?',
        answer: (
            <>
                <p className="mb-0">
                    We do. With our headquarters in Perth, we support businesses nationwide—
                    from Darwin startups to Melbourne corporates. Coast to coast coverage,
                    same high-performance standards.
                </p>
            </>
        ),
    },
    {
        question: 'What genuinely makes you different?',
        answer: (
            <>
                <p className="mb-0">
                    We focus on revenue engineering—not just pixel pushing. Every decision is
                    data-driven, conversion-focused, and tied directly to real sales growth.
                    We care about results, not just visuals.
                </p>
            </>
        ),
    },
    {
        question: 'Do you build eCommerce stores?',
        answer: (
            <>
                <p className="mb-0">
                    Yes—WooCommerce and Shopify specialists. We engineer frictionless checkout
                    experiences that boost completion rates by up to 67%, with Australian
                    payment gateways and flawless inventory synchronisation.
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
                {opacity: 0, y: 50},
                {opacity: 1, y: 0, duration: 1, ease: "power2.out"}
            );

            tl.fromTo(spanText,
                {opacity: 0, scale: 0.8},
                {opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)"},
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
                                        <div
                                            className="rounded-circle bg-success bg-opacity-10 d-inline-flex align-items-center justify-content-center p-3">
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
                                        <IconifyIcon icon="bx:right-arrow-alt" className="ms-2"/>
                                    </Link>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* Email Box */}
                        <Col>
                            <Card className="border-0 shadow-sm bg-light hover-shadow transition-all">
                                <CardBody className="p-4 text-center">
                                    <div className="mb-3">
                                        <div
                                            className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center p-3">
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
                                        <IconifyIcon icon="bx:right-arrow-alt" className="ms-2"/>
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
                                <AccordionHeader as="h3">{faq.question}</AccordionHeader>
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