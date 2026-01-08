'use client';
import React from 'react';
import Image from 'next/image';
import cms from '@/assets/img/services/icons/cms.svg';
import rocket from '@/assets/img/services/icons/rocket.svg';
import mobileApp from '@/assets/img/services/icons/mobile-app.svg';
import analytics from '@/assets/img/services/icons/analytics.svg';
import search from '@/assets/img/services/icons/web-search.svg';
import timer from '@/assets/img/services/icons/timer.svg';
import {Col, Container, Row} from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

type Service = {
    title: string;
    description: string;
    icon: string;
};

const services: Service[] = [
    {
        title: 'Government',
        description: 'Experts. Infinite possibilities. One integrated team.',
        icon: cms,
    },
    {
        title: 'Healthcare',
        description: '3x more patient bookings with compliant apps and local SEO that fills appointment schedules.',
        icon: rocket,
    },
    {
        title: 'Trades',
        description: '40% more jobs from local SEO and instant booking sites—Perth contractors are winning bigger.',
        icon: mobileApp,
    },
    {
        title: 'eCommerce',
        description: 'Online stores are boosting sales 3x with fast payments and abandoned cart recovery systems.',
        icon: mobileApp,
    },
    {
        title: 'Real Estate',
        description: 'Property sites are converting 2x better with virtual tours and instant agent lead capture.',
        icon: analytics,
    },
    {
        title: 'Hospitality',
        description: 'Tables filled year-round with reservation platforms and review-driven marketing campaigns.',
        icon: search,
    },
    {
        title: 'Finance',
        description: 'Secure fintech tools bringing high-value clients through compliant, trust-building websites.',
        icon: timer,
    },
    {
        title: 'Education',
        description: 'Course platforms are driving 50% more enrolments with engaging student funnels.',
        icon: analytics,
    }
];

const Industry = () => {
    return (
        <section className="bg-secondary pb-md-2 pb-lg-5">
            <Container className="pb-4">

                <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">Industries Transformed By <span
                    className="text-gradient-primary">McWIN iTECH</span></h2>

                <Row className="align-items-center pb-5 mb-lg-2">
                    <Col md={8} className="text-center text-md-start">
                        <p className="fs-lg text-muted mb-md-0">
                            We've helped Perth leaders across 8 key sectors get more customers and higher conversions
                            without wasting ad dollars.
                        </p>
                    </Col>
                </Row>

                <Row className="row-cols-1 row-cols-md-4">
                    {services.map((service, index) => (
                        <Col key={index} className="my-2 my-sm-3">
                            <Link
                                href="#"
                                className="card card-hover h-100 border-0 shadow-sm text-decoration-none px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
                            >
                                <div className="card-body">
                                    <h2 className="h5 d-inline-flex align-items-center">
                                        {service.title}
                                        {/*<IconifyIcon icon="bx:right-arrow-circle" className="text-primary fs-3 ms-2" />*/}
                                    </h2>
                                    <div className="hr-indicator mb-2"/>
                                    <p className="fs-sm text-body mb-0">{service.description}</p>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Industry;
