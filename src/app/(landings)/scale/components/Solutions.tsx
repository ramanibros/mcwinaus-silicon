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

const solutionsData: Solution[] =[
  {
    id: 1,
    icon: icon1,
    title: 'Integrations',
    points: [],
    description: 'CRM, payments, Xero, Shopify sync—50% admin slashed. Local Perth experts eliminate data chaos, automate workflows, and increase efficiency 3x without wasting ad spend on manual processes.'
  },
  {
    id: 2,
    icon: icon2,
    title: 'Optimisation',
    points: [],
    description: '67% faster websites, Core Web Vitals domination—3x sales from the same traffic. Perth performance specialists guarantee conversion growth that stays on top of Google rankings.'
  },
  {
    id: 3,
    icon: icon3,
    title: '24/7 Support',
    points: [],
    description: 'Under 30-min response guaranteed—local Perth team who genuinely care. 99.9% uptime, security monitoring, feature upgrades—your growth partner keeping platforms revenue-ready always.'
  },
  {
    id: 4,
    icon: icon4,
    title: 'Advanced Scale Services',
    points: [],
    description: 'AWS migration & custom APIs—10x scale ready. What makes us different: Perth-based foresight, building future-proof systems that grow without rebuilds—proof not promises.'
  }
];

const Solutions = () => {
  return (
      <section className="mb-5 pb-lg-5 pb-md-4 pb-3">
        <Container>
          <h2 className="h1 pb-4 pb-lg-5">
              How Our <span className="text-gradient-primary">Scale Services</span> Unlock Your Growth</h2>
          <Row xs={1} md={2} className="g-4 pt-2 pt-md-4 pb-lg-2">
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
                </Col>
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default Solutions;
