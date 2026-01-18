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
                                            Brand Asset Implementation
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1"/>
                                            Digital Brand Rollout
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1"/>
                                            Brand Guidelines Finalisation
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1"/>
                                            Internal Brand Enablement
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1"/>
                                            Launch Support
                                        </li>
                                    </ul>
                                    {/*<div className="h2 d-flex align-items-center mb-4">
                                        $7500
                                        <del className="text-muted fs-xl fw-normal ms-2">9000</del>
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
                                <h4 className="mb-2">Website Brand Integration</h4>
                                <p className="mb-0">
                                    Your brand strategy embedded across every page—hero sections, CTAs, and
                                    messaging fully aligned to deliver up to 3× stronger trust signals that
                                    turn first-time visitors into loyal customers.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">2</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Social Media Asset Deployment</h4>
                                <p className="mb-0">
                                    Profile banners, post templates, and story graphics rolled out across
                                    platforms—driving up to 67% higher engagement through a consistent,
                                    scroll-stopping visual language.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">3</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Email & Marketing Materials</h4>
                                <p className="mb-0">
                                    Brand-perfect email templates, newsletters, and ad creatives—cutting
                                    production time by up to 50% while significantly improving open rates
                                    and click-through performance.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">4</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Digital Asset Rollout</h4>
                                <p className="mb-0">
                                    Favicons, app icons, and browser assets implemented flawlessly—delivering
                                    professional polish and instant credibility across every digital
                                    touchpoint.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">5</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Team Brand Guidelines</h4>
                                <p className="mb-0">
                                    Clear, practical brand playbooks that keep teams and partners aligned—
                                    eliminating inconsistency and protecting long-term brand equity at
                                    every stage of growth.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">6</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Performance Tracking Setup</h4>
                                <p className="mb-0">
                                    Analytics dashboards tracking brand impact, engagement, and conversions—
                                    proving ROI daily with clear data directly tied to real revenue outcomes.
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
