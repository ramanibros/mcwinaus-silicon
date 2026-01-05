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
  link: string;
  icon: string;
};

const services: Service[] = [
  {
    title: 'Government',
    description: 'Experts. Infinite possibilities. One integrated team.',
    link: '/services-single-v1',
    icon: cms,
  },
  {
    title: 'B2B',
    description: 'Websites built for growth, not just presence.',
    link: '/services-single-v1',
    icon: rocket,
  },
  {
    title: 'B2C',
    description: 'Years of trusted experience in creative, marketing, and tech.',
    link: '/services-single-v1',
    icon: mobileApp,
  },
  {
    title: 'Consultation',
    description: 'Success stories and more in the making.',
    link: '/services-single-v1',
    icon: mobileApp,
  },
  {
    title: 'eCommerce',
    description: 'Experts. Infinite possibilities. One integrated team.',
    link: '/services-single-v1',
    icon: cms,
  },
  {
    title: 'Construction',
    description: 'Websites built for growth, not just presence.',
    link: '/services-single-v1',
    icon: rocket,
  },
  {
    title: 'Nonprofit',
    description: 'Years of trusted experience in creative, marketing, and tech.',
    link: '/services-single-v1',
    icon: mobileApp,
  },
  {
    title: 'Startups',
    description: 'Success stories and more in the making.',
    link: '/services-single-v1',
    icon: mobileApp,
  },
];

const Industry = () => {
  return (
    <section className="bg-secondary pb-md-2 pb-lg-5">
      <Container className="pb-4">

        <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">Industries we specialise in.</h2>

        <Row className="align-items-center pb-5 mb-lg-2">
          <Col md={8} className="text-center text-md-start">
            <p className="fs-lg text-muted mb-md-0">
              We specialise in creating marketing strategies for different industries, including government, B2B, B2C, e-commerce, and construction. Our subjective business solutions are designed to meet your unique needs, drive effective engagement, and deliver measurable results across all digital platforms.
            </p>
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-md-4">
          {services.map((service, index) => (
            <Col key={index} className="my-2 my-sm-3">
              <Link
                href={service.link}
                className="card card-hover h-100 border-0 shadow-sm text-decoration-none px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
              >
                <div className="card-body">
                  <h2 className="h5 d-inline-flex align-items-center">
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

export default Industry;
