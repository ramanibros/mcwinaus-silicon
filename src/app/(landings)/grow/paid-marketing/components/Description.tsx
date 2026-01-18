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
                                            Paid Marketing Strategy
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1"/>
                                            Campaign Setup & Management
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1"/>
                                            Ad Creative & Copy
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1"/>
                                            Landing Page Optimisation
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1"/>
                                            Reporting & Insights
                                        </li>
                                    </ul>
                                    {/*<div className="h2 d-flex align-items-center mb-4">
                                        $28.99
                                        <del className="text-muted fs-xl fw-normal ms-2">49.99</del>
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
                    <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">What We <span
                        className="text-gradient-primary">Offer</span></h2>
                    <div className="steps steps-sm">
                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">1</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Google Ads Campaign Management</h4>
                                <p className="mb-0">
                                   High-intent Google Ads campaigns built around keyword strategy, ad relevance, and bidding control. Designed to improve conversion efficiency while keeping cost per acquisition within sustainable limits.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">2</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Meta Ads Lead Machine</h4>
                                <p className="mb-0">
                                    Paid campaigns across Facebook and Instagram using audience segmentation, creative testing, and retargeting. Focused on generating qualified leads and supporting full-funnel conversion paths.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">3</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Microsoft Advertising Expansion</h4>
                                <p className="mb-0">
                                    Microsoft Advertising campaigns across Bing and partner networks, providing access to additional high-intent audiences—often at lower competition and cost than Google Search.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">4</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Shopping Ads Revenue Boost</h4>
                                <p className="mb-0">
                                    Product-based advertising across Google Shopping and Meta catalogue formats. Feed structure, bidding logic, and product segmentation are optimised to support higher purchase intent and average order value.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">5</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Youtube Video Ads</h4>
                                <p className="mb-0">
                                  Intent-aligned Youtube advertising designed to support awareness, remarketing, and mid-funnel engagement. Campaigns are structured to balance reach, cost efficiency, and assisted conversions.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">6</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Cross-Platform Optimisation</h4>
                                <p className="mb-0">
                                    Unified optimisation across Google, Meta, and Microsoft platforms. Budget allocation, performance review, and bid adjustments are managed holistically to reduce waste and improve overall return.
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
