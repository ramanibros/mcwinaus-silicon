import React from 'react';
import image01 from '@/assets/img/services/single/image01.jpg';
import image02 from '@/assets/img/services/single/image02.jpg';
import Image from 'next/image';
import {Col, Row} from 'react-bootstrap';
import Link from 'next/link';
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
                        <h2 className="h1 mb-3 mb-sm-4">Australia's UI/UX Revenue Machine</h2>
                        <p className="mb-3 mb-sm-4">
                            UI/UX design focused on commercial outcomes—not just aesthetics or wireframes. Our Perth-based team applies usability principles, data-led decisions, and iterative testing to support measurable improvements in conversion and retention.
                        </p>
                        <ul className="list-unstyled mb-0">
                            <li className="d-flex mb-2">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                             Nationwide user experience expertise
                            </li>
                            <li className="d-flex mb-2">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                               Conversion-focused design decisions
                            </li>
                            <li className="d-flex">
                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                               Development-ready design deliverables
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default TextSession;
