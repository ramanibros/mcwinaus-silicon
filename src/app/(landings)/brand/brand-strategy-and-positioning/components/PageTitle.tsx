import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const PageTitle = () => {
  return (
    <section
      className="container pb-5 mb-md-2 mb-lg-4 mb-xl-5"
      style={{ marginBottom: '0 !important' }}
    >
      <Row className="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
        <Col lg={6}>
          <h1 className="display-2 mb-0">
            <span className="text-gradient-primary">Build a Brand </span> That Owns Its Market
          </h1>
        </Col>
        <Col lg={6} xl={5} className="offset-xl-1 pt-3 pt-sm-4 pt-lg-3">
          <p className="pb-4 mb-1 mb-md-2 mb-xl-3">
            Create a clear and defensible brand position that helps Australian businesses compete on
            value rather than price. Our Perth-based team delivers strategy-led positioning focused
            on long-term growth, clarity, and measurable business impact.
          </p>
          <Link href="/contact" className="btn btn-lg btn-primary shadow-primary">
            Start your project
          </Link>
        </Col>
      </Row>
      <hr />
    </section>
  );
};

export default PageTitle;
