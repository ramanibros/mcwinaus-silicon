
import React from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Row,
} from 'react-bootstrap';
import pattern1 from '@/assets/img/landing/online-courses/pattern-1.svg';
import pattern2 from '@/assets/img/landing/online-courses/pattern-2.svg';
import pattern3 from '@/assets/img/landing/online-courses/pattern-3.svg';
import Image from 'next/image';

type FaqItem = {
  id: string;
  question: string;
  answer: string | React.ReactNode;
};

const faqs: FaqItem[] = [
    {
        id: 'q1',
        question: 'Why choose a local Perth digital agency?',
        answer: (
            <>
                <p>
                    Local team advantage—we understand Perth market nuances, deliver 2x faster,
                    and provide 24/7 hands-on support that other agencies can't match.
                </p>
            </>
        ),
    },
    {
        id: 'q2',
        question: 'What makes McWIN iTECH different from others?',
        answer: (
            <>
                <p>
                    Proof, not promises. Guaranteed results through 3x lead growth,
                    award-winning designs, and personal partnership—we genuinely care
                    about your success.
                </p>
            </>
        ),
    },
    {
        id: 'q3',
        question: 'Do you guarantee Google ranking improvements?',
        answer: (
            <>
                <p>
                    Yes, ranking guarantee. Local Perth SEO mastery gets you Google's
                    top spots, or we keep working for free. Expect the unexpected.
                </p>
            </>
        ),
    },
    {
        id: 'q4',
        question: 'How quickly will my website be live?',
        answer: (
            <>
                <p>
                    Projects go live 2x faster than the industry average with our
                    Perth-based team. Ready to scale from day one.
                </p>
            </>
        ),
    },
    {
        id: 'q5',
        question: 'Do you offer cost-effective packages?',
        answer: (
            <>
                <p>
                    Yes! Flexible packages for Perth SMEs—branding, websites, and SEO
                    starting at an affordable price, delivering enterprise-level results
                    without spending thousands.
                </p>
            </>
        ),
    },
    {
        id: 'q6',
        question: 'Can you handle both design and development?',
        answer: (
            <>
                <p>
                    100% yes. Perth's best team delivering strategy → design → build →
                    marketing seamlessly. Full-stack digital solutions under one roof.
                </p>
            </>
        ),
    },
];

const Faqs = () => {
  return (
    <section className="container pt-1 pt-lg-3 mb-5">
      <div className="position-relative bg-primary rounded-3 overflow-hidden px-3 px-sm-4 px-md-0 py-5">
        <div
          className="rellax position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block"
          data-rellax-percentage="0.5"
          data-rellax-speed="1.75"
        >
          <Image
            src={pattern1}
            className="position-absolute top-0 start-100 translate-middle ms-n4"
            alt="Pattern"
          />
          <Image
            src={pattern2}
            className="position-absolute top-50 start-0 mt-n5 ms-n5"
            alt="Pattern"
          />
          <Image
            src={pattern3}
            className="position-absolute top-100 start-100 translate-middle ms-n5 mt-n5"
            alt="Pattern"
          />
        </div>
        <Row className="justify-content-center position-relative zindex-2 py-lg-4">
          <Col xl={8} lg={9} md={10} className="py-2">
            <h2 className="h1 text-light text-center mt-n2 mt-lg-0 mb-4 mb-lg-5">
              Frequently Asked Questions
            </h2>

            <Accordion defaultActiveKey="q1">
              {faqs.map(faq => (
                <AccordionItem
                  eventKey={faq.id}
                  key={faq.id}
                  className="mb-3 border-0 rounded-3 shadow-sm"
                >
                  <AccordionHeader>{faq.question}</AccordionHeader>
                  <AccordionBody className="fs-sm">{faq.answer}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Faqs;
