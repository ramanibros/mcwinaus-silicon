import React from 'react';
import about from '@/assets/img/landing/home/about_us.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
      <Row className="pt-xl-3">
        <Col md={5} className="text-center text-md-start pb-5">
          <h1 className="mb-4"><span className="text-gradient-primary">Digital Solutions</span> That Deliver Real Perth Growth</h1>
          <p className="fs-lg pb-lg-3 mb-4">
            McWIN iTECH—your growth partner, not just another agency. We build high-performing websites, SEO strategies, mobile apps, and custom software that turn Perth businesses into market leaders. Expect the unexpected—results that last.
          </p>
          <Link href="/about-v2" className="btn btn-primary shadow-primary btn-lg">
            More About Us
          </Link>
        </Col>
        <Col xl={6} md={7} className="offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
          <Image src={about} className="rounded-3 shadow-sm" alt="Image" />
        </Col>
      </Row>
    </section>
  );
};

export default About;
