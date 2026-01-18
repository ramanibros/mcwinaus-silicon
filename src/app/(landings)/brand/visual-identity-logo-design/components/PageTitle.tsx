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
            <span className="text-gradient-primary">Design a Visual Identity </span>That Builds
            Trust
          </h1>
        </Col>
        <Col lg={6} xl={5} className="offset-xl-1 pt-3 pt-sm-4 pt-lg-3">
          <p className="pb-4 mb-1 mb-md-2 mb-xl-3">
            Create a visually distinctive brand that is instantly recognisable across every
            touchpoint. Our Perth-based design team builds strategic visual identities and logos
            that strengthen brand recall, trust, and long-term business growth across Australia.
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
