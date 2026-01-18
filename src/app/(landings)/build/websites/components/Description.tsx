import IconifyIcon from '@/components/IconifyIcon';
import React from 'react';
import {Card, CardBody, Col, Row} from 'react-bootstrap';

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
                      Website Strategy & Structure
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      Custom UI Design
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      Website Development
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Core Pages Built
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      Launch & Handover
                    </li>
                  </ul>
                  {/*<div className="h2 d-flex align-items-center mb-4">
                    $5000<del className="text-muted fs-xl fw-normal ms-2">7500</del>
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
                <h4 className="mb-2">Custom WordPress Development</h4>
                <p className="mb-0">
       Custom WordPress development using lightweight, purpose-built themes focused on performance and flexibility. Our sites are optimised for fast load times, clean SEO structure, and custom functionality aligned with your business requirements.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">eCommerce Website Builds</h4>
                <p className="mb-0">
                 WooCommerce and Shopify website builds designed for smooth checkout experiences and operational efficiency. We integrate Australian payment gateways, inventory synchronisation, and cart recovery flows to reduce friction and improve purchase completion.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Landing Page Optimisation</h4>
                <p className="mb-0">
                  High-conversion landing pages designed around a single, clear objective. Through layout optimisation, CTA placement, and behavioural insights, we help reduce bounce rates and improve lead quality.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Mobile-Responsive Design</h4>
                <p className="mb-0">
                  Pixel-perfect performance across every device—driving up to 40% more
                  mobile conversions with Aussie thumb-friendly navigation that ensures
                  zero lost sales from phone and tablet users.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">SEO-First Architecture</h4>
                <p className="mb-0">
                  SEO-first website architecture built with clean code, structured data, and performance best practices. This creates a strong technical foundation that supports sustainable search visibility and long-term ranking growth.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">6</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Ongoing Performance Maintenance</h4>
                <p className="mb-0">
                 Ongoing website maintenance including monthly performance checks, security updates, and technical improvements—helping your site remain stable, secure, and aligned with evolving search standards.
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
