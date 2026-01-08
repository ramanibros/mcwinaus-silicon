'use client';
import React from 'react';
import Image from 'next/image';
import cms from '@/assets/img/services/icons/cms.svg';
import rocket from '@/assets/img/services/icons/rocket.svg';
import mobileApp from '@/assets/img/services/icons/mobile-app.svg';
import {Col, Container, Row} from 'react-bootstrap';
import Link from 'next/link';

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: 'Certified Digital Experts',
    description:
      '20+ Perth IT professionals with 5+ years delivering 3x faster project turnaround than competitors.',
    icon: cms,
  },
  {
    title: 'Genuine Hands-On Partnership',
    description:
      'We genuinely care—no cookie-cutter templates. Every project gets personal collaboration and 24/7 local support.',
    icon: rocket,
  },
  {
    title: 'Future-Proof Technology Stack',
    description:
      'React, MySQL, Java, Oracle, AWS—scalable solutions that grow with your business for the long haul.',
    icon: mobileApp,
  }/*,
  {
    title: 'What Makes Us Different',
    description:
        'Local Perth team who understand WA market dynamics. Your growth partner delivering guaranteed results, not empty promises.\n',
    icon: mobileApp,
  }*/
];

const Choose = () => {
  return (
    <section className="bg-secondary pb-md-2">
      <div className="d-none d-lg-block" style={{ marginTop: '-60px', paddingTop: '60px' }}></div>

      <Container className="pt-5">
        <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">Why Perth Businesses Choose <span className="text-gradient-primary">McWIN iTECH</span></h2>

        <Row className="align-items-center pb-5 mb-lg-2">
          <Col md={8} className="text-center text-md-start">
            <p className="fs-lg text-muted mb-md-0">
              Transform enquiries into customers with Perth's most trusted digital team. Local team, global results—high-performing websites built to increase conversions and stay on top of Google rankings.
            </p>
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-md-3">
          {services.map((service, index) => (
            <Col key={index} className="py-4 my-2 my-sm-3">
              <Link
                href="#"
                className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
              >
                <div className="card-body pt-3 ">
                  <div className="d-inline-block bg_gradient_primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="d-block m-1"
                    />
                  </div>

                  <h2 className="h4 d-inline-flex align-items-center">
                    {service.title}
                  </h2>
                  <div className="hr-indicator mb-2" />
                  <p className="fs-sm text-body mb-0">{service.description}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Choose;
