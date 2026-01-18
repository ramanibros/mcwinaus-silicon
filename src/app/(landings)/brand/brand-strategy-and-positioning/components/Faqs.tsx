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
    question: 'Why bother with positioning?',
    answer: (
        <>
          <p className="mb-0">
            Positioning builds up to 3× stronger market presence. Unpositioned brands
            get lost in the noise, while well-positioned brands own their niche long-term.
          </p>
        </>
    ),
  },
  {
    question: 'How do you beat competitors?',
    answer: (
        <>
          <p className="mb-0">
            Smart competitor and market analysis uncovers unique winning angles,
            letting you claim your niche while others scramble chasing trends.
          </p>
        </>
    ),
  },
  {
    question: 'Can you reposition established brands?',
    answer: (
        <>
          <p className="mb-0">
            Absolutely. With decades of experience, we turn good brands into
            category leaders, revitalising their relevance and market impact.
          </p>
        </>
    ),
  },
  {
    question: 'Do you work Australia-wide?',
    answer: (
        <>
          <p className="mb-0">
           Yes. While we are based in Perth, we deliver brand strategy projects across Australia.
          </p>
        </>
    ),
  },
  {
    question: 'What makes your approach different?',
    answer: (
        <>
          <p className="mb-0">
           Every strategy is tailored to the business, market, and objectives—no templates, no generic positioning frameworks.
          </p>
        </>
    ),
  },
  {
    question: 'Will brand positioning support sales growth?',
    answer: (
        <>
          <p className="mb-0">
           Effective positioning attracts better-qualified customers, improves conversion efficiency, and supports long-term revenue growth when implemented consistently.
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
            Check out the FAQs.
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
                    WhatsApp Us
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
