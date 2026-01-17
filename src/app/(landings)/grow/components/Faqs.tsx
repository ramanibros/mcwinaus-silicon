'use client';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import React, {useState} from 'react';
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
    question: 'Can you fix websites not converting from traffic?',
    answer: (
        <>
          <p>
            Yes. We audit user behaviour, rebuild landing pages, optimise messaging, and improve page
            speed and CTAs. Our conversion-focused approach has boosted conversion rates by up to 67%
            for Perth businesses.
          </p>
        </>
    ),
  },
  {
    question: "What's included in your SEO packages?",
    answer: (
        <>
          <p>
            Our SEO packages include local Perth keyword research, Google Business Profile optimisation,
            on-page SEO, content strategy, technical fixes, and high-quality backlink building for
            long-term ranking growth.
          </p>
        </>
    ),
  },
  {
    question: 'Do you manage full Google Ads campaigns?',
    answer: (
        <>
          <p>
            Absolutely. We handle everything—keyword research, ad copywriting, landing page optimisation,
            conversion tracking, and continuous performance optimisation to maximise ROI.
          </p>
        </>
    ),
  },
  {
    question: 'How do you target Perth customers specifically?',
    answer: (
        <>
          <p>
            We use geo-fencing, Perth-specific and WA-based keywords, location targeting, and
            suburb-level audience segmentation to ensure your ads reach only local, high-intent
            customers—no wasted spend.
          </p>
        </>
    ),
  },
  {
    question: 'Can you handle all social platforms?',
    answer: (
        <>
          <p>
            Yes. We manage Facebook, Instagram, LinkedIn, and TikTok with platform-specific strategies,
            creative formats, and audience targeting designed to maximise engagement and conversions.
          </p>
        </>
    ),
  },
  {
    question: "What's your minimum ad spend requirement?",
    answer: (
        <>
          <p>
            There’s no minimum ad spend. Whether your budget is small or large, we optimise every dollar
            to deliver measurable growth for Perth businesses.
          </p>
        </>
    ),
  }
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
