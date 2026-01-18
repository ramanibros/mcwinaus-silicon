'use client';
import React from 'react';
import Image, {StaticImageData} from 'next/image';
import {Container, Card, CardBody, Col, Row} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import icon1 from '@/assets/img/landing/software-agency-3/icons/01.svg';
import icon2 from '@/assets/img/landing/software-agency-3/icons/02.svg';
import icon3 from '@/assets/img/landing/software-agency-3/icons/03.svg';
import icon4 from '@/assets/img/landing/software-agency-3/icons/04.svg';
import IconifyIcon from "@/components/IconifyIcon";
import Link from "next/link";

type PointsItem = {
    title: string;
};

type Solution = {
    id: number;
    icon: StaticImageData;
    title: string;
    description: string;
    points: PointsItem[];
    url: string;
};

const solutionsData: Solution[] = [
    {
        id: 1,
        icon: icon1,
        title: 'Brand Strategy & Positioning',
        points: [],
        url: "/brand/brand-strategy-and-positioning",
        description: 'Perth market analysis, competitor insights, vision workshops—position your brand 3x stronger.The Local team crafts unique positioning that dominates WA without spending thousands on guesswork.'
    },
    {
        id: 2,
        icon: icon2,
        title: 'Visual Identity & Logo Design',
        points: [],
        url: "/brand/visual-identity-logo-design",
        description: 'Award-winning logos, custom colour systems, typography—instant authority boost. Perth businesses stand out 3x more with visual identities that build trust and drive referrals immediately.'
    },
    {
        id: 3,
        icon: icon3,
        title: 'Digital Product UI/UX Design',
        points: [],
        url: "/brand/digital-product-ui-ux-design",
        description: 'Brand-led websites, iOS/Android apps, landing pages—67% higher conversions guaranteed. Perth-first UX mapping turns visitors into customers with seamless, on-brand digital experiences.'
    },
    {
        id: 4,
        icon: icon4,
        title: 'Brand Implementation',
        points: [],
        url: "/brand/brand-implementation",
        description: 'Cross-platform consistency, style guides, asset libraries—we\'ve got you covered. Local Perth team ensures perfect execution across web, app, social—long-term brand value guaranteed.'
    },
];

const Solutions = () => {
    return (
        <section className="mb-5 pb-lg-5 pb-md-4 pb-3">
            <Container>
                <h2 className="h1 pb-4 pb-lg-5">How our <span
                    className="text-gradient-primary">Perth Brand</span> Agency Drives Growth.</h2>
                <Row xs={1} md={2} className="g-4 pt-2 pt-md-4 pb-lg-2">
                    {solutionsData.map(item => (
                        <Col key={item.id}>
                            <Link href={item.url} className="text-decoration-none">
                                <Card className="card-hover h-100 mx-2">
                                <CardBody>
                                    <div className="d-table position-relative p-3 mb-4">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={32}
                                            height={32}
                                            className="position-relative zindex-2"
                                        />
                                        <span
                                            className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-circle opacity-8"></span>
                                    </div>
                                    <h3 className="h5 pb-1 mb-2">{item.title}</h3>
                                    <p className="mb-0">{item.description}</p>
                                    <ul className="list-unstyled mb-0">
                                        {item.points.map(point => (
                                            <li className="d-flex mb-2">
                                                <IconifyIcon icon="bx:check" className="text-primary lead me-2"/>
                                                {point.title}
                                            </li>
                                        ))}
                                    </ul>
                                </CardBody>
                            </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Solutions;
