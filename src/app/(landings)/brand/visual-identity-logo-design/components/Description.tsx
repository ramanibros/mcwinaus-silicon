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
                      Primary + Secondary Logo Design
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      Colour Palette & Typography System
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      Visual Identity Guidelines
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Brand Assets Starter Kit
                    </li>
                   {/* <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      Certificate of completion
                    </li>*/}
                  </ul>
                  {/*<div className="h2 d-flex align-items-center mb-4">
                    $1500<del className="text-muted fs-xl fw-normal ms-2">1000</del>
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
                <h4 className="mb-2">Logo Design Mastery</h4>
                <p className="mb-0">
                 Custom logo design that reflects your brand’s personality, values, and positioning. Built for clarity, recognition, and differentiation in competitive Australian markets.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Visual Identity Systems</h4>
                <p className="mb-0">
                  Complete visual identity frameworks including colour palettes, typography,
                  and design rules—ensuring consistency across every touchpoint and driving
                  up to 67% higher engagement through cohesive, trust-building design.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Brand Style Guides</h4>
                <p className="mb-0">
                  Clear and practical brand style guides that ensure accurate implementation across teams and partners, supporting consistency as your business grows.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Icon & Illustration Sets</h4>
                <p className="mb-0">
       Custom iconography and illustration sets designed to complement your brand identity across digital, print, and social platforms, improving clarity and visual cohesion.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Digital Asset Packages</h4>
                <p className="mb-0">
                  Ready-to-use digital assets including social profile graphics, favicons, and app icons—allowing fast deployment while maintaining consistent brand standards.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">6</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Brand Video & Motion Graphics</h4>
                <p className="mb-0">
                Brand-led motion graphics, animations, and short-form video assets designed to capture attention and reinforce brand positioning across digital channels.
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
