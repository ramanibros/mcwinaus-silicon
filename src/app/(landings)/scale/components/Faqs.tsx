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
        question: 'Will integrations save my team time?',
        answer: (
            <>
              <p className="mb-0">
                Yes—up to a <strong>50% reduction in admin work</strong>. CRM, payment gateways, and Xero
                integrations eliminate manual data entry and streamline your workflows permanently.
              </p>
            </>
        ),
      },
      {
        question: 'How much faster will my website load?',
        answer: (
            <>
              <p className="mb-0">
                <strong>67% faster guaranteed.</strong> We optimise Core Web Vitals to improve performance,
                user experience, and conversions—resulting in up to <strong>3× more sales</strong> from the
                same traffic.
              </p>
            </>
        ),
      },
      {
        question: 'How much does scaling cost?',
        answer: (
            <>
              <p className="mb-0">
                We offer <strong>cost-effective packages</strong> that scale with your business. No wasted
                spend—just maximum ROI aligned with your growth stage.
              </p>
            </>
        ),
      },
      {
        question: 'Can you connect my Shopify & Xero?',
        answer: (
            <>
              <p className="mb-0">
                <strong>Absolutely.</strong> Enjoy real-time inventory sync, automated invoicing, and
                seamless payment reconciliation for flawless eCommerce operations.
              </p>
            </>
        ),
      },
      {
        question: 'Do I get locked into your systems?',
        answer: (
            <>
              <p className="mb-0">
                <strong>Never.</strong> We deliver clean code, full documentation, and easy migration.
                Your data and systems always remain under your control.
              </p>
            </>
        ),
      },
      {
        question: 'Do you train my team on new systems?',
        answer: (
            <>
              <p className="mb-0">
                Yes. We provide <strong>complete onboarding and documentation</strong> so your team can
                confidently use every feature with zero learning curve.
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
