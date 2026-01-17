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
    question: 'Why does implementation matter most?',
    answer: (
        <>
          <p>
            Because strategy without execution is wasted spend. There’s up to a 67% conversion
            gap between great ideas and poor rollout—flawless implementation unlocks up to
            3× revenue by turning strategy into real-world results.
          </p>
        </>
    ),
  },
  {
    question: 'Can you fix inconsistent existing brands?',
    answer: (
        <>
          <p>
            Yes. This is a core speciality. We audit fragmented brands, eliminate inconsistency,
            and realign everything fast—turning chaos into a conversion-focused system within
            weeks, not months.
          </p>
        </>
    ),
  },
  {
    question: 'Do you cover all digital channels?',
    answer: (
        <>
          <p>
            Absolutely. Website, social media, email, ads, and digital assets—100% coverage
            across every platform Australians engage with, ensuring one cohesive brand
            experience everywhere.
          </p>
        </>
    ),
  },
  {
    question: 'Can you work with our existing assets?',
    answer: (
        <>
          <p>
            Yes. We keep what’s working and upgrade what isn’t. The result is a smooth
            transition that maintains momentum while instantly elevating quality and
            performance.
          </p>
        </>
    ),
  },
  {
    question: 'What makes your rollout genuinely different?',
    answer: (
        <>
          <p>
            Revenue-first execution. Every rollout is tracked, measured, and optimised—we care
            about performance, not just delivery. If it doesn’t drive ROI, it doesn’t ship.
          </p>
        </>
    ),
  },
  {
    question: 'Can you guarantee brand consistency?',
    answer: (
        <>
          <p>
            Yes—100% adherence. We ensure flawless execution across every team member, partner,
            and channel, protecting your brand equity at every touchpoint.
          </p>
        </>
    ),
  },
  {
    question: 'Do you track actual revenue impact?',
    answer: (
        <>
          <p>
            From day one. Full attribution dashboards track conversions, engagement, and
            revenue—proving brand ROI with hard data, not opinions or assumptions.
          </p>
        </>
    ),
  },
  {
    question: 'Is this scalable as the business grows?',
    answer: (
        <>
          <p className="mb-0">
            Completely. Our systems are built to scale effortlessly—from MVP to enterprise—
            so you can grow without rebuilding or redoing your core brand implementation.
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
