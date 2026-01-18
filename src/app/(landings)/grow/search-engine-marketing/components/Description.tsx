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
                      Strategy & Campaign Planning
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1" />
                      Ad Setup & Optimisation
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1" />
                      Ad Creative & Copy
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1" />
                      Reporting & Analytics
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1" />
                      Ongoing Optimisation
                    </li>
                  </ul>
                 {/* <div className="h2 d-flex align-items-center mb-4">
                    $1300<del className="text-muted fs-xl fw-normal ms-2">2500</del>
                  </div>*/}
                  <a href="#" className="btn btn-primary btn-lg shadow-primary">
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
                <h4 className="mb-2">Google Search Ads Mastery</h4>
                <p className="mb-0">
                  Bottom-of-funnel keywords and dynamic search ads driving up to 3× ROAS.
                  Australian location targeting brings high-intent traffic that converts
                  instantly into sales.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Google Shopping Campaigns</h4>
                <p className="mb-0">
                  Product feed optimisation and Smart Shopping automation—delivering up to
                  40% lower CPC. Australian retail pricing strategies outperform Amazon
                  on profitability.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Remarketing That Works</h4>
                <p className="mb-0">
                  Abandoned cart and dynamic product ads recover up to 30% of lost revenue.
                  Pixel-perfect tracking ensures every dollar is spent targeting
                  high-value prospects.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Conversion Tracking Setup</h4>
                <p className="mb-0">
                  Google Analytics 4, Enhanced Conversions, and offline tracking provide
                  100% revenue visibility. No black-box budgets—see every sale clearly
                  attributed.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Smart Bidding Strategies</h4>
                <p className="mb-0">
                  Target ROAS and Maximise Conversion Value bidding improves efficiency
                  by up to 67%. Australian market data powers bid decisions that win
                  profitably every time.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">6</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Monthly Campaign Optimisation</h4>
                <p className="mb-0">
                  Weekly A/B testing, negative keyword mining, and bid adjustments deliver
                  consistent performance lifts. Stay ahead of competitors without wasting
                  time on outdated strategies.
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
