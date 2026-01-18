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
        question: 'Why ditch marketplaces for your own store?',
        answer: (
            <>
                <p className="mb-0">
                    Own your customers and profits—up to 67% higher margins and 3× more customer data.
                    Marketplaces control your audience; your custom store builds real assets and long-term growth.
                </p>
            </>
        ),
    },
    {
        question: 'Mobile shoppers properly handled?',
        answer: (
            <>
                <p className="mb-0">
                    Aussie thumb-optimised checkout drives up to 60% higher mobile conversions.
                    No mobile optimisation means losing modern business opportunities.
                </p>
            </>
        ),
    },
    {
        question: 'Afterpay and Zip Pay sorted?',
        answer: (
            <>
                <p className="mb-0">
                    Every major Aussie payment method included—Afterpay, Zip, credit cards. Buy-now-pay-later boosts order value by up to 30%, with a checkout everyone trusts.
                </p>
            </>
        ),
    },
    {
        question: 'Works Australia-wide, shipping?',
        answer: (
            <>
                <p className="mb-0">
                    100% national coverage with AusPost, StarTrack, and Sendle integration. Perth HQ powers Darwin-to-Melbourne delivery perfection.
                </p>
            </>
        ),
    },
    {
        question: 'What makes you genuinely different?',
        answer: (
            <>
                <p className="mb-0">
                    Daily sales obsession over launch parties. Conversion engineering is our focus, not just website building—we genuinely care about your revenue.
                </p>
            </>
        ),
    },
    {
        question: 'Inventory disasters avoided?',
        answer: (
            <>
                <p className="mb-0">
                    Real-time stock sync across all channels prevents overselling. Multi-warehouse ready for national growth without operational chaos.
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
