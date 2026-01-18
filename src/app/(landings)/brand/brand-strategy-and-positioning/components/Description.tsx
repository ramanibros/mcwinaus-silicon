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
                      220 hours on-demand video
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      18 articles
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      25 downloadable resources
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Full lifetime access
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      Certificate of completion
                    </li>
                  </ul>
                  <div className="h2 d-flex align-items-center mb-4">
                    $28.99<del className="text-muted fs-xl fw-normal ms-2">49.99</del>
                  </div>
                  <a href="#" className="btn btn-primary btn-lg shadow-primary">
                    Join the course
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
                <h4 className="mb-2">Brand Discovery & Research</h4>
                <p className="mb-0">
                  We dig deep into your business, audience, and market to uncover what truly
                  sets you apart—no fluff, just clear, actionable insights that drive
                  immediate impact.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Competitor & Market Analysis</h4>
                <p className="mb-0">
                  Identify exactly where you can win against competitors using Australia-wide
                  market intelligence—stay ahead while others scramble to catch up.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Core Purpose & Narrative</h4>
                <p className="mb-0">
                  Craft a compelling brand story that resonates with customers and teams—
                  building long-term loyalty and turning casual browsers into committed
                  buyers.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Positioning Strategy Framework</h4>
                <p className="mb-0">
                  A tailored roadmap to own your niche—driving up to 3× more premium leads
                  through focused, strategic brand positioning.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Messaging & Tone System</h4>
                <p className="mb-0">
                  Define a consistent, conversion-driven voice across every channel—boosting
                  engagement by up to 67%, cutting ad waste, and delivering measurable
                  results.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">6</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Implementation Roadmap</h4>
                <p className="mb-0">
                  Clear, step-by-step execution plans so you can move fast with confidence—
                  combining local expertise with national reach for real-world results.
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
