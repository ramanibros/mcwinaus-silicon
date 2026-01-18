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
        question: 'Why bother with custom software?',
        answer: (
            <>
                <p className="mb-0">
                    Generic tools never quite fit. Custom solutions deliver up to 67% efficiency gains
                    and 3× faster operations—built for your business, not forced workarounds.
                </p>
            </>
        ),
    },
    {
        question: 'Help with ancient systems that keep breaking?',
        answer: (
            <>
                <p className="mb-0">
                    Legacy escape experts provide smooth migrations with zero downtime. Turn
                    outdated headaches into modern, efficient systems safely.
                </p>
            </>
        ),
    },
    {
        question: 'Grows with the business, does it?',
        answer: (
            <>
                <p className="mb-0">
                    Designed to scale—supporting 10 staff today, 100 tomorrow. No painful rewrites
                    when your business succeeds.
                </p>
            </>
        ),
    },
    {
        question: 'Can you kill our spreadsheet nightmare?',
        answer: (
            <>
                <p className="mb-0">
                    Real-time dashboards and automated workflows eliminate spreadsheet chaos,
                    saving 20+ hours per week and eradicating errors permanently.
                </p>
            </>
        ),
    },
    {
        question: 'What makes you different from the big agencies?',
        answer: (
            <>
                <p className="mb-0">
                    ROI-first focus, not billable hours. Local team delivering real business results,
                    without corporate fluff.
                </p>
            </>
        ),
    },
    {
        question: 'What happens after we launch?',
        answer: (
            <>
                <p className="mb-0">
                    Full support package included—updates, fixes, and new features as your business
                    grows. Never left stranded with useless software.
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
