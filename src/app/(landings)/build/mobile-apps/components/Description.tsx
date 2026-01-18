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
                      220 hours on-demand support video
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
          <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">
            What We <span className="text-gradient-primary">Offer</span>
          </h2>
          <div className="steps steps-sm">
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">1</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Native iOS App Development</h4>
                <p className="mb-0">
                  Native iOS app development using Swift and SwiftUI, aligned with Apple Human
                  Interface Guidelines. Our apps are built for responsiveness, performance, and App
                  Store readiness, with optional push notification systems to support repeat usage
                  and retention.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Native Android App Development</h4>
                <p className="mb-0">
                  High-performance Kotlin apps crafted with Material Design 3 excellence— driving up
                  to 67% higher engagement. Google Play optimised with deep linking and
                  revenue-focused notification strategies.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Cross-Platform React Native</h4>
                <p className="mb-0">
                  Single codebase apps for iOS and Android—cutting development costs by up to 50%
                  while maintaining native-level performance. Aussie localisation ensures consistent
                  experiences across every device.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">App Store Optimisation (ASO)</h4>
                <p className="mb-0">
                  App Store Optimisation services including keyword research, metadata optimisation,
                  and visual asset guidance—designed to improve app visibility and organic discovery
                  across the App Store and Google Play.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Push Notification Systems</h4>
                <p className="mb-0">
                  Push notification systems with audience segmentation and timing strategies aligned
                  to Australian user behaviour. Designed to encourage repeat engagement and support
                  retention without relying solely on paid acquisition.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">6</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">App Analytics & Iteration</h4>
                <p className="mb-0">
                  Firebase and CleverTap dashboards track every conversion path. Weekly performance
                  reporting ensures continuous optimisation, smarter feature prioritisation, and
                  compounding revenue growth.
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
