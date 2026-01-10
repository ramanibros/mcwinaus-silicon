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

type PointsItem = {
    title: string;
};

type Solution = {
    id: number;
    icon: StaticImageData;
    title: string;
    description: string;
    points: PointsItem[];
};

const solutionsData: Solution[] = [
  {
    id: 1,
    icon: icon1,
    title: 'Brand Strategy & Positioning',
    points: [
      { title: 'Brand discovery consultation' },
      { title: 'Market and competitor analysis' },
      { title: 'Brand vision & mission' },
    ],
    description: ''
  },
  {
    id: 2,
    icon: icon2,
    title: 'Visual Identity & Logo Design',
    points: [
      { title: 'Logo concepts and refinements' },
      { title: 'Colour palette and typography systems' },
      { title: 'Rebranding and visual refresh projects' },
    ],
    description: ''
  },
  {
    id: 3,
    icon: icon3,
    title: 'Website & UI/UX Design (Brand-Led)',
    points: [
      { title: 'Brand-focused website UI design' },
      { title: 'Landing page design for campaigns' },
      { title: 'UX wireframes and user journey mapping' },
    ],
    description: ''
  },
  {
    id: 4,
    icon: icon4,
    title: 'Mobile App UI/UX & Product Branding',
    points: [
      { title: 'App interface design (iOS & Android)' },
      { title: 'Onboarding flows and in-app journeys' },
      { title: 'App icon and store listing creatives' },
    ],
    description: ''
  },
  {
    id: 5,
    icon: icon1,
    title: 'Brand Collateral & Marketing Creatives',
    points: [
      { title: 'Brochures, flyers, pull-up banners' },
      { title: 'Social media templates and post designs' },
      { title: 'Ad creatives for Google & Meta campaigns' },
    ],
    description: ''
  },
  {
    id: 6,
    icon: icon2,
    title: 'Brand Implementation',
    points: [
      { title: 'Cross-platform consistency (web, app, social)' },
      { title: 'Full asset library handover (vectors, fonts, files)' },
      { title: 'Team-ready style guides & brand manuals' },
      { title: 'Ongoing creative refresh support' },
    ],
    description: ''
  }
];

const Solutions = () => {
    return (
        <section className="mb-5 pb-lg-5 pb-md-4 pb-3">
            <Container>
                <h2 className="h1 pb-4 pb-lg-5">How our <span
                    className="text-gradient-primary">Perth Brand</span> Agency Drives Growth.</h2>
                <Row xs={1} md={3} className="g-4 pt-2 pt-md-4 pb-lg-2">
                    {solutionsData.map(item => (
                        <Col key={item.id}>
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
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Solutions;
