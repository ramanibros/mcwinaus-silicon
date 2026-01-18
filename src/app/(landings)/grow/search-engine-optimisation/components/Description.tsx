import IconifyIcon from '@/components/IconifyIcon';
import React from 'react';
import {Card, CardBody, Col, Row} from 'react-bootstrap';

const Description = () => {
    return (
        <section className="container mt-lg-4 mt-xl-5">
            <Row>
                <aside className="col-lg-4 col-md-5 offset-xl-1 order-md-2 mb-5">
                    <div style={{marginTop: '-96px'}}></div>
                    <div className="position-sticky top-0 pt-5">
                        <div className="pt-5 mt-md-3">
                            <Card className="shadow-sm p-sm-3">
                                <CardBody>
                                    <h4 className="mb-4">Top-Choice Package</h4>
                                    <ul className="list-unstyled pb-3">
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:slideshow" className="fs-xl text-muted me-2 pe-1"/>
                                            SEO Strategy & Analysis
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1"/>
                                            Technical & On-Page Optimisation
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1"/>
                                            Content SEO & Off-Page SEO / Backlinks
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1"/>
                                            Tracking & Reporting
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1"/>
                                            Regular Optimisation & Support
                                        </li>
                                    </ul>
                                    {/*<div className="h2 d-flex align-items-center mb-4">
                                        $2200
                                        <del className="text-muted fs-xl fw-normal ms-2">3000</del>
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
                    <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">What We <span
                        className="text-gradient-primary">Offer</span></h2>
                    <div className="steps steps-sm">
                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">1</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Local SEO Domination</h4>
                                <p className="mb-0">
                                    Google Business Profile optimisation and hyper-targeted location pages—
                                    driving up to 67% more local calls. Australian citation building boosts
                                    foot traffic without relying on paid ads.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">2</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Technical SEO Audits</h4>
                                <p className="mb-0">
                                    Master site speed, mobile usability, and schema markup—delivering up
                                    to 40% ranking improvement. Core Web Vitals excellence ensures stable
                                    top positions on Google.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">3</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Content Optimisation Strategy</h4>
                                <p className="mb-0">
                                    Keyword-rich service pages and blogs targeting search intent—driving
                                    up to 3× more organic traffic with content that ranks AND converts.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">4</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Link Building Campaigns</h4>
                                <p className="mb-0">
                                    High-authority Australian backlinks (DA50+) with strategic outreach—
                                    building domain authority that compounds rankings year over year.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">5</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Conversion Rate Optimisation</h4>
                                <p className="mb-0">
                                    Turn SEO traffic into revenue with strategic CTAs and trust signals—
                                    delivering up to 67% higher conversions from organic visitors through
                                    sales-focused optimisation.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">6</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Monthly Performance Reporting</h4>
                                <p className="mb-0">
                                    Transparent dashboards track ranking movement, traffic growth, and
                                    revenue attribution—proving real ROI every 30 days with actionable insights.
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
