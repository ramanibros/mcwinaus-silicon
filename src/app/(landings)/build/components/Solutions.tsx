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
    title: 'Websites',
    points: [],
    description: 'Award-winning Perth websites that convert 67% better. Mobile-first design, local SEO built-in, lightning speed. 3x more leads without ad spend waste—proof, not promises, from your local growth partner.'
  },
  {
    id: 2,
    icon: icon2,
    title: 'eCommerce',
    points: [],
    description: 'Online stores delivering 3x sales growth. Seamless Australia Post integration, abandoned cart recovery, and payment security. Increase conversions without spending thousands on useless plugins—long-term results guaranteed.'
  },
  {
    id: 3,
    icon: icon3,
    title: 'Mobile Apps',
    points: [],
    description: 'iOS/Android apps that boost customer retention 2x. Perth-focused push notifications, offline functionality. Expect the unexpected—apps so good that competitors copy them. Local team, global performance.'
  },
  {
    id: 4,
    icon: icon4,
    title: 'Custom Software',
    points: [],
    description: 'Bespoke systems cut admin time by 50%. Inventory, CRM, workflows—built for your Perth operations. What makes us different: We genuinely care about your daily challenges and solve them permanently.'
  }
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
