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
                                            220 hours on-demand support video
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:file" className="fs-xl text-muted me-2 pe-1"/>
                                            18 articles
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:download" className="fs-xl text-muted me-2 pe-1"/>
                                            25 downloadable resources
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:infinite" className="fs-xl text-muted me-2 pe-1"/>
                                            Full lifetime access
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <IconifyIcon icon="bx:trophy" className="fs-xl text-muted me-2 pe-1"/>
                                            Certificate of completion
                                        </li>
                                    </ul>
                                    <div className="h2 d-flex align-items-center mb-4">
                                        $28.99
                                        <del className="text-muted fs-xl fw-normal ms-2">49.99</del>
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
                    <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">What We <span
                        className="text-gradient-primary">Offer</span></h2>
                    <div className="steps steps-sm">
                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">1</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Inventory Management Systems</h4>
                                <p className="mb-0">
                                   Custom inventory management systems with real-time stock tracking across one or multiple locations. Automated alerts and reordering logic help reduce overselling, improve stock accuracy, and provide clearer cash-flow visibility.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">2</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">CRM Customisation</h4>
                                <p className="mb-0">
                                   Custom CRM configuration aligned with your sales process, customer lifecycle, and reporting needs. Designed to improve pipeline visibility, sales efficiency, and compliance with Australian data requirements.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">3</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Workflow Automation Tools</h4>
                                <p className="mb-0">
                                    Workflow automation tools that reduce repetitive manual tasks across teams. We integrate systems such as accounting, CRM, and inventory platforms to improve operational efficiency and reduce processing time.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">4</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">Internal Dashboard Systems</h4>
                                <p className="mb-0">
                                   Custom internal dashboards providing real-time visibility into key business metrics. Designed for management teams to monitor performance, identify trends, and make faster, data-informed decisions across devices.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">5</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">API Integrations</h4>
                                <p className="mb-0">
                                   Secure API integrations that connect existing business systems and reduce reliance on manual data entry. This improves data accuracy, saves time, and allows teams to work more efficiently across connected platforms.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">
                                <div className="step-number-inner">6</div>
                            </div>
                            <div className="step-body">
                                <h4 className="mb-2">SaaS Custom Modules</h4>
                                <p className="mb-0">
                                    Custom modules that extend existing SaaS platforms with missing or specialised functionality. This approach often costs significantly less than replacing core systems while delivering features tailored to your workflow.
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
