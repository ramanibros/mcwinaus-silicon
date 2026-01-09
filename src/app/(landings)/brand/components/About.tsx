'use client';
import React from 'react';
import about01 from '@/assets/img/landing/saas-4/about/01.png';
import about02 from '@/assets/img/landing/saas-4/about/02.png';
import about03 from '@/assets/img/landing/saas-4/about/03.png';
import Image from 'next/image';
import {
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContainer,
    TabContent,
    TabPane,
} from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

const About = () => {
    return (
        <Container className=" pt-xl-5 pt-lg-4 pt-md-3 pb-lg-5 pb-md-4 pb-3">
            <Row className="justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
                <Col lg={8} md={9} className="text-center">
                    <h2 className="h1 mb-4">Why <span className="text-gradient-primary">McWIN iTECH</span> ?</h2>
                    <p className="fs-lg text-muted mb-0">
                        Perth businesses get 3x better ROI with our local team, who understand Australian design trends
                        and WA market psychology. Your growth partner—guaranteed standout branding that works harder
                        than competitors.
                    </p>
                </Col>
            </Row>

            <TabContainer defaultActiveKey="#economic-analysis">
                <Nav
                    className="nav nav-tabs flex-nowrap justify-content-sm-center overflow-auto mb-lg-4 mb-3 pb-md-3 pb-2 text-nowrap"
                    role="tablist"
                >
                    <NavItem>
                        <NavLink
                            eventKey="#economic-analysis"
                            className="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                        >
                            <IconifyIcon icon="bx:star" className="opacity-60 me-2 fs-lg"/>
                          Brand Strategy
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="#investments" data-bs-toggle="tab" role="tab">
                            <IconifyIcon icon="bx:briefcase-alt-2" className="opacity-60 me-2 fs-lg"/>
                          Visual Identity
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            eventKey="#corporate-finance"
                            className="nav-link"
                            data-bs-toggle="tab"
                            role="tab"
                        >
                            <IconifyIcon icon="bx:bar-chart-alt-2" className="opacity-60 me-2 fs-lg"/>
                          Digital Asset Kit
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent className="mb-xl-3 py-4 bg-secondary rounded-3">
                    <TabPane className="fade show" eventKey="#economic-analysis" role="tabpanel">
                        <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
                            <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                                <h3 className="h2 mb-lg-4 mb-3">Brand Strategy</h3>
                                <p className="mb-4 pb-lg-3">
                                  Market positioning that dominates locally and scales nationally.
                                </p>
                            </Col>
                            <Col lg={6} md={7} className="mt-4 pt-md-0 pt-2">
                                <Image
                                    src={about01}
                                    className="d-block my-lg-2 mx-auto me-md-0"
                                    width="595"
                                    alt="Image"
                                />
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane className="fade" eventKey="#investments" role="tabpanel">
                        <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
                            <Col lg={5} md={6} className="offset-lg-1 text-center text-md-start">
                                <h3 className="h2 mb-lg-4 mb-3">Visual Identity</h3>
                                <div className="d-sm-flex mb-4 pb-lg-3 text-sm-start">
                                    <p className="w-100 mb-sm-0">
                                      Cohesive design systems that build instant trust.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={5} md={6} className="mt-4 pt-md-0 pt-2">
                                <Image
                                    src={about02}
                                    className="d-block my-lg-2 mx-auto me-md-0 rounded-3"
                                    width="595"
                                    alt="Image"
                                />
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane className="fade" eventKey="#corporate-finance" role="tabpanel">
                        <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
                            <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                                <h3 className="h2 mb-lg-4 mb-3">Digital Asset Kit</h3>
                              <div className="d-sm-flex mb-4 pb-lg-3 text-sm-start">
                                <p className="w-100 mb-sm-0">
                                  Ready-to-use templates save hundreds of hours.
                                </p>
                              </div>
                            </Col>
                            <Col lg={6} md={7} className="mt-4 pt-md-0 pt-2">
                                <Image
                                    src={about03}
                                    className="d-block my-lg-2 mx-auto me-md-0 rounded-3"
                                    width="595"
                                    alt="Image"
                                />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </TabContainer>
        </Container>
    );
};

export default About;
