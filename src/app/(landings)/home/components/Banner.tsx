'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/assets/json/animation-financial-landing.json';
import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from "@/components/IconifyIcon";

const Banner: React.FC = () => {
  return (
    <section className="container mt-5">
      <Card className="bg-white border-primary shadow-sm px-4 px-lg-0" data-bs-theme="light">
        <Row className="align-items-center py-3">
          <Col xl={5} md={6} className="offset-lg-1 text-center text-md-start py-4 py-lg-5">
            <h2 className="h1">What You'll Get With <span className="text-gradient-primary">McWIN iTECH</span></h2>
            {/*<h3 className="h4 text-primary">Get remote financial consulting help</h3>*/}
            <ul className="list-unstyled mb-0">
              <li className="d-flex mb-2">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                3x More Qualified Leads
              </li>
              <li className="d-flex mb-2">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                67% Higher Conversion Rates
              </li>
              <li className="d-flex">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                Projects Live 2x Faster
              </li>
              <li className="d-flex">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                24/7 Perth Team Support
              </li>
              <li className="d-flex">
                <IconifyIcon icon="bx:check" className="text-primary lead me-2" />
                Long-Term Scalable Growth
              </li>
            </ul>
          </Col>

          <Col xl={6} lg={5} md={6}>
            <div style={{ maxWidth: 416, margin: '0 auto' }}>
              <Lottie animationData={animationData} loop autoplay />
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default Banner;
