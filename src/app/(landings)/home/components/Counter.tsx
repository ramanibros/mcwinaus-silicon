'use client';
import React from 'react';
import Image from 'next/image';
import cms from '@/assets/img/services/icons/cms.svg';
import rocket from '@/assets/img/services/icons/rocket.svg';
import mobileApp from '@/assets/img/services/icons/mobile-app.svg';
import analytics from '@/assets/img/services/icons/analytics.svg';
import search from '@/assets/img/services/icons/web-search.svg';
import timer from '@/assets/img/services/icons/timer.svg';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: '3x',
    description: 'More Qualified Leads',
    icon: cms,
  },
  {
    title: '67%',
    description: 'Higher Conversion Rates',
    icon: rocket,
  },
  {
    title: '2x',
    description: 'Faster Projects Live',
    icon: mobileApp,
  },
  {
    title: '24/7',
    description: 'Perth Team Support',
    icon: mobileApp,
  },
];

const Counter = () => {
  return (
    <section className="bg-secondary pb-md-2 pb-lg-5">
      <Container className="pb-4">
        <Row className="row-cols-1 row-cols-md-4">
          {services.map((service, index) => (
            <Col key={index} className="py-4 my-2 my-sm-3">
              <Link
                href="#"
                className="card card-hover h-100 border-0 shadow-sm text-decoration-none px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
              >
                <div className="card-body">
                  <h2 className="h1 d-inline-flex align-items-center">
                    {service.title}
                    {/*<IconifyIcon icon="bx:right-arrow-circle" className="text-primary fs-3 ms-2" />*/}
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

export default Counter;
