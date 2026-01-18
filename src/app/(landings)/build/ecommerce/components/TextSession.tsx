import React from 'react';
import image02 from '@/assets/img/services/single/image02.jpg';
import Image from 'next/image';
import {Col, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const TextSession = () => {
    return (
        <section className="container pb-sm-1 pb-md-3">
            <Row className="align-items-lg-center pt-md-3 pb-5 mb-2 mb-lg-4 mb-xl-5">
                <Col md={6} className="order-md-1 mb-4 mb-md-0">
                    <Image src={image02} className="rounded-3" alt="Image"/>
                </Col>
                <Col md={6} className="order-md-2">
                    <div className="pe-xl-5 me-md-2 me-lg-4">
                        <h2 className="h1 mb-3 mb-sm-4">Australia's eCommerce Revenue Machine</h2>
                        <p className="mb-3 mb-sm-4">
                            Online stores that actually fill orders—not empty showrooms. What makes us different: Perth
                            locals genuinely care about your daily sales. Proof, not promises: 67% revenue guaranteed.
                        </p>
                        <ul className="list-unstyled mb-0">
                            <li className="d-flex mb-2">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Nationwide Checkout Perfection
                            </li>
                            <li className="d-flex mb-2">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Cart Recovery Automation
                            </li>
                            <li className="d-flex">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                Scale-Ready Architecture
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default TextSession;
