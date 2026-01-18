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
                      App Strategy & Planning
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      UI/UX Design
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      Cross-platform (Flutter / React Native)
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Backend & API Integration
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      App Store Launch & Handover
                    </li>
                  </ul>
                  <div className="h2 d-flex align-items-center mb-4">
                    $15000<del className="text-muted fs-xl fw-normal ms-2">17000</del>
                  </div>
                  <a href="/contact" className="btn btn-primary btn-lg shadow-primary">
                    Contact Now
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
                <h4 className="mb-2">Native iOS App Development</h4>
                <p className="mb-0">
                  SwiftUI-powered iOS apps built to Apple Human Interface Guidelines—
                  delivering up to 3× faster interactions. Fully optimised for the
                  Australian App Store, with push notifications boosting retention by
                  up to 40% from day one.
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
                  High-performance Kotlin apps crafted with Material Design 3 excellence—
                  driving up to 67% higher engagement. Google Play optimised with deep
                  linking and revenue-focused notification strategies.
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
                  Single codebase apps for iOS and Android—cutting development costs by
                  up to 50% while maintaining native-level performance. Aussie localisation
                  ensures consistent experiences across every device.
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
                  Keyword-rich titles, descriptions, and conversion-focused screenshots—
                  driving up to 3× more organic downloads by dominating Australian search
                  results on both the App Store and Google Play.
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
                  Intelligent segmentation and personalised messaging increase retention
                  by up to 40%. Aussie time-zone–triggered notifications drive repeat
                  engagement and revenue without ongoing ad spend.
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
                  Firebase and CleverTap dashboards track every conversion path. Weekly
                  performance reporting ensures continuous optimisation, smarter feature
                  prioritisation, and compounding revenue growth.
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
