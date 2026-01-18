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
                <h4 className="mb-2">Logo Design Mastery</h4>
                <p className="mb-0">
                  Custom logo design that captures your unique Aussie essence—delivering
                  instant brand recognition and up to 3× stronger premium appeal. Built to
                  stand out in crowded markets from the very first glance.
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
                  Detailed, easy-to-use brand playbooks that remove guesswork for teams and
                  partners—scalable systems that protect consistency and maintain premium
                  positioning as your brand grows.
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
                  Bespoke iconography and illustrations crafted for your brand—boosting
                  conversion rates by up to 3× across digital, print, and social channels
                  with visuals that cut through the noise.
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
                  Ready-to-use social media profiles, favicons, and app icons for immediate
                  rollout—saving thousands in production time while maintaining consistent,
                  professional brand standards everywhere.
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
                  Dynamic animations, intro videos, and social reels that drive up to 67%
                  higher engagement—motion-led storytelling that captures attention instantly
                  and reinforces premium brand positioning across all platforms.
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
