'use client';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import React, { useState } from 'react';
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
        question: 'Do you have packages?',
        answer: (
            <>
              <p className="mb-0">
                Yes! We offer cost-effective packages customised for Perth businesses—covering Branding,
                Websites, SEO, and more. Our solutions start affordably and scale seamlessly up to
                enterprise-level needs.
              </p>
            </>
        ),
      },
      {
        question: 'What services drive Perth business growth?',
        answer: (
            <>
              <p className="mb-0">
                We deliver high-impact digital services including Websites, eCommerce, Mobile Apps,
                Custom Software, Branding, SEO, and Social Media Marketing—everything Perth SMEs need
                to dominate their local market.
              </p>
            </>
        ),
      },
      {
        question: 'How quickly will I see results?',
        answer: (
            <>
              <p className="mb-0">
                Websites typically go live within 4–8 weeks. SEO rankings begin improving within
                90 days. We commit to clear timelines—no excuses, no delays.
              </p>
            </>
        ),
      },
      {
        question: 'Do you serve beyond Perth?',
        answer: (
            <>
              <p className="mb-0">
                Yes. While our headquarters are in Perth, we proudly serve businesses across
                Western Australia and nationwide—combining local insight with national reach.
              </p>
            </>
        ),
      },
      {
        question: 'What makes your SEO different?',
        answer: (
            <>
              <p className="mb-0">
                Our SEO focuses on Perth-specific keyword mastery, Google Business Profile domination,
                and high-quality content that ranks, converts, and delivers long-term growth.
              </p>
            </>
        ),
      },
      {
        question: 'Design and development under one roof?',
        answer: (
            <>
              <p className="mb-0">
                100% yes. Strategy, design, development, and marketing—all handled by Perth’s top
                digital team for a seamless, results-driven experience.
              </p>
            </>
        ),
      },
    ];

const Faqs = () => {
  const [activeKey, setActiveKey] = useState<string | null>('0');

  return (
    <Container className="py-5 mb-lg-2">
      <Row className="py-2 py-md-4 py-lg-5">
        <Col xl={4} md={5} className="text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
          <h2 className="pb-3 mb-1 mb-lg-3">
            <span className="text-gradient-primary">Any questions?</span> <br className="d-none d-md-inline" />
            Check out the FAQs
          </h2>
          <p className="fs-lg pb-3 mb-2 mb-lg-3">
            Still have unanswered questions and need to get in touch?
          </p>
          <Row className="row-cols-1 row-cols-sm-2 g-3 g-sm-4">
            <Col>
              <Card className="card-hover">
                <CardBody className="pb-3">
                  <span className="d-block fs-2 text-primary mb-2 py-1">
                    <IconifyIcon icon="bxl:whatsapp" className="w-100" />
                  </span>
                  <p className="fs-sm mb-2">Still have questions?</p>
                  <Link href="https://wa.me/+61466953095" target="_blank" className="btn btn-link stretched-link px-0">
                    Whatsapp us
                    <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="card-hover">
                <CardBody className="pb-3">
                  <span className="d-block fs-2 text-success mb-2 py-1">
                    <IconifyIcon icon="bx:envelope" className="w-100" />
                  </span>
                  <p className="fs-sm mb-2">Still have questions?</p>
                  <Link href="mailto:hello@mcwinitech.com.au" className="btn btn-link text-success stretched-link px-0">
                   Mail Us
                    <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={7} className="offset-xl-1">
          <Accordion activeKey={activeKey} onSelect={k => setActiveKey(k as string)}>
            {faqs.map((faq, idx) => (
              <AccordionItem
                eventKey={idx.toString()}
                key={idx}
                className="border-0 rounded-3 shadow-sm mb-3"
              >
                <AccordionHeader>{faq.question}</AccordionHeader>
                <AccordionBody className="fs-sm pt-0">{faq.answer}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faqs;
