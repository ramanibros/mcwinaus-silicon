'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import {Container, Card, CardBody, Col, Row} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import icon1 from '@/assets/img/landing/software-agency-3/icons/01.svg';
import icon2 from '@/assets/img/landing/software-agency-3/icons/02.svg';
import icon3 from '@/assets/img/landing/software-agency-3/icons/03.svg';
import icon4 from '@/assets/img/landing/software-agency-3/icons/04.svg';

type Solution = {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
};

const solutionsData: Solution[] = [
  {
    id: 1,
    icon: icon1,
    title: 'Software Development',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.',
  },
  {
    id: 2,
    icon: icon2,
    title: 'App Development',
    description: 'Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Support & Maintenance',
    description:
      'Turpis ultrices lacinia ut placerat dignissim morbi. Amet lectus sed tortor in elit adipiscing magnis.',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Software QA & Testing',
    description: 'Amet felis viverra proin feugiat. Eget metus metus lorem dolor pellentesque.',
  },
  {
    id: 5,
    icon: icon1,
    title: 'Software Development',
    description:
        'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.',
  },
  {
    id: 6,
    icon: icon2,
    title: 'App Development',
    description: 'Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.',
  }
];

const Solutions = () => {
  return (
    <section className="mb-5 pb-lg-5 pb-md-4 pb-3">
      <Container>
        <h2 className="h1 pb-3 pb-md-0 mb-md-5">How our <span className="text-gradient-primary">Developing</span> Help you to build.</h2>
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
                    <p className="mb-0">{item.description}</p>
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
