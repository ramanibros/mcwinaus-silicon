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
                      Strategy & Planning
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      Content Creation & Publishing
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      Community & Engagement
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Analytics & Reporting
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      Monthly Strategy Calls
                    </li>
                  </ul>
                  {/*<div className="h2 d-flex align-items-center mb-4">
                    $2200<del className="text-muted fs-xl fw-normal ms-2">4000</del>
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
                <h4 className="mb-2">Instagram Growth Systems</h4>
                <p className="mb-0">
                 Instagram growth strategies using Reels, Stories, and carousel content aligned with Australian audience behaviour. Designed to increase reach, profile engagement, and inbound enquiries through consistent, relevant content.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Facebook Lead Generation</h4>
                <p className="mb-0">
                  Facebook lead generation campaigns using audience segmentation, retargeting, and automated messaging. Built to improve lead quality and reduce cost inefficiencies through better targeting and qualification.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">LinkedIn B2B Domination</h4>
                <p className="mb-0">
                 LinkedIn strategies for B2B brands focused on thought leadership, employer advocacy, and relationship-driven growth. Designed to support higher-quality conversations and longer-term sales opportunities.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Reel Viral Systems</h4>
                <p className="mb-0">
                  Trending audio and Aussie-humour hooks drive up to 5× more video views.
                  User-generated content campaigns convert viewers into paying customers
                  through social proof multiplication.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Content Calendar Mastery</h4>
                <p className="mb-0">
                  60-day platform-specific posting schedules maintain a consistent brand
                  voice. Peak-time publishing maximises engagement without daily manual
                  management.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">6</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Social Analytics & Optimisation</h4>
                <p className="mb-0">
                  ROAS tracking, audience insights, and competitor benchmarking. Weekly
                  strategy pivots ensure continuous performance improvement and
                  maximised ad spend efficiency.
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
