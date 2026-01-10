import React from 'react';
import dashboard from '@/assets/img/build-service/dashboard.png';
import Image from 'next/image';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const Offer = () => {
    return (
        <section className="overflow-hidden pt-md-2 pt-lg-3 pb-3 pb-md-4 pb-xl-5">
            <Container>
                <div className="d-flex flex-column flex-md-row flex-md-nowrap align-items-start">
                    <Col md={7} className="ps-0 pe-lg-4 mb-5 mb-md-0">
                        <div style={{maxWidth: '660px'}}>
                            <h2 className="h1 pb-3 mb-2 mb-md-3">What We <span
                                className="text-gradient-primary">Offer</span></h2>
                            <Row className="row-cols-1 row-cols-sm-2 gx-lg-5 g-4">
                                <Col className="pt-1 pt-sm-2 pt-lg-3">
                                    <IconifyIcon
                                        icon="bx:rocket"
                                        className="d-block fs-2 text-primary mb-2 mb-sm-3"
                                    />
                                    <h3 className="h5 pb-sm-1 mb-2">Proven Perth Expertise</h3>
                                    <p className="mb-0">
                                        25+ local developers delivering 3x faster builds with guaranteed results.

                                    </p>
                                </Col>
                                <Col className="pt-1 pt-sm-2 pt-lg-3">
                                    <IconifyIcon icon="bx:like" className="d-block fs-2 text-primary mb-2 mb-sm-3"/>
                                    <h3 className="h5 pb-sm-1 mb-2">Success Guarantee</h3>
                                    <p className="mb-0">
                                        67% higher conversions, or we keep optimising—your growth is guaranteed.

                                    </p>
                                </Col>
                                <Col className="pt-1 pt-sm-2 pt-lg-3">
                                    <IconifyIcon icon="bx:group" className="d-block fs-2 text-primary mb-2 mb-sm-3"/>
                                    <h3 className="h5 pb-sm-1 mb-2">Award-Winning Team</h3>
                                    <p className="mb-0">
                                        Perth's top IT professionals who genuinely care about your success.

                                    </p>
                                </Col>
                                <Col className="pt-1 pt-sm-2 pt-lg-3">
                                    <IconifyIcon
                                        icon="bx:time-five"
                                        className="d-block fs-2 text-primary mb-2 mb-sm-3"
                                    />
                                    <h3 className="h5 pb-sm-1 mb-2">On Time Delivery</h3>
                                    <p className="mb-0">
                                        Projects live 2x faster than competitors, revenue-ready from day one.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Image src={dashboard} width="836" className="ms-3 ms-sm-5 ms-xl-3" alt="Dashboard"/>
                </div>
            </Container>
        </section>
    );
};

export default Offer;
