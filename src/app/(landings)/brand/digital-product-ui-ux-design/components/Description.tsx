import IconifyIcon from '@/components/IconifyIcon';
import React from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const Description = () => {
  return (
    <section className="container mt-lg-4 mt-xl-5">
      <Row>
        <aside className="col-lg-4 col-md-5 offset-xl-1 order-md-2 mb-5">
          <div style={{ marginTop: '-96px' }}></div>
          <div className="position-sticky top-0 pt-5">
            <div className="pt-5 mt-md-3">
              <Card className="shadow-sm p-sm-3">
                <CardBody>
                  <h4 className="mb-4">Top-Choice Package</h4>
                  <ul className="list-unstyled pb-3">
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:slideshow" className="fs-xl text-muted me-2 pe-1" />
                      Project Discovery & UX Research
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      Information Architecture & UX Design
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      UI Design (High-Fidelity Screens)
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Clickable Prototype
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      Handoff to Dev
                    </li>
                  </ul>
                  {/*<div className="h2 d-flex align-items-center mb-4">
                    $5000<del className="text-muted fs-xl fw-normal ms-2">7000</del>
                  </div>*/}
                  <a href="/contact" className="btn btn-primary btn-lg shadow-primary">
                    Contact To Sales
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
        </aside>

        <Col xl={7} lg={8} md={7} className="order-md-1 mb-5">
          <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">What We <span className="text-gradient-primary">Offer</span></h2>
          <div className="steps steps-sm">
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">1</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">User Journey Mapping</h4>
                <p className="mb-0">
                  Detailed wireframes mapping optimal user paths across web and mobile—
                  delivering up to 3× smoother flows. Built on real Australian user
                  behaviours to maximise retention and conversions.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Mobile App UI Design</h4>
                <p className="mb-0">
                  Native-feeling iOS and Android interfaces with intuitive navigation—
                  driving up to 67% higher engagement by turning downloads into loyal,
                  daily users.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Landing Page UX</h4>
                <p className="mb-0">
                  Conversion-focused landing page layouts with strategic CTAs—cutting
                  bounce rates by up to 50% and increasing leads from Australian traffic
                  without wasting ad spend.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Onboarding Flow Design</h4>
                <p className="mb-0">
                  Seamless first-use experiences engineered for activation—boosting
                  completion rates by up to 40% while creating addictive interfaces
                  that drive immediate value and long-term engagement.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">App Icons & Creatives</h4>
                <p className="mb-0">
                  Thumb-stopping app icons and promotional creatives—driving up to 3×
                  more downloads with visuals perfectly aligned to your brand positioning
                  across app stores and social profiles.
                </p>
              </div>
            </div>
          </div>

        </Col>
      </Row>
    </section>
  );
};

export default Description;
