'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';

import brandIcon from '@/assets/img/services/brand.png';
import growIcon from '@/assets/img/services/grow.png';
import buildIcon from '@/assets/img/services/build.png';
import scaleIcon from '@/assets/img/services/scale.png';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';

type Feature = {
  id: number;
  title: string;
  description?: string;
  link: string;
  linkText: string;
  icon: StaticImageData;
  phone?: string;
  techStack?: { light: StaticImageData; dark?: StaticImageData; alt: string; width: number }[];
};

const features: Feature[] = [
  {
    id: 1,
    title: 'Our Mission',
    description:
      'At Genesis Envision, our mission is to provide businesses with customizable, future-ready software solutions that remove complexity, increase efficiency, and drive success. Our mission is to help businesses improve their operational efficiency, automate business processes, and make decisions with confidence using expense management system and financial analytics tools.',
    link: '#',
    linkText: 'Read More',
    icon: brandIcon,
  },
  {
    id: 2,
    title: 'Our Vision',
    description:
      'We see ourselves as the global leader in custom software development, and our mission is to transform challenges into solutions that count. At Genesis Envision, we are not only creating software, we are creating opportunities, making processes simpler, and initiating digital transformation through workforce management software and best efficient hr.',
    link: '#',
    linkText: 'Read More',
    icon: buildIcon,
  }
];

const Features = () => {
  return (
    <section className="mb-2 mb-md-4 mb-lg-5">
      <Container>
        <h2 className="h1 mb-md-4 mb-3 pt-xl-3"><span className="text-gradient-primary">Revolutionizing</span> The Way Businesses Operate</h2>

        <Row xs={1} md={2} className="g-4 pt-2 pt-md-4 pb-lg-2">
          {features.map(feature => (
            <Col key={feature.id}>
              <Card className="flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100">
                <Image style={{margin:"20px 20px auto 20px",maxWidth:"80px"}}  src={feature.icon} alt={feature.title} width={100} height={100} priority />
                <Card.Body className="text-center text-sm-start text-md-center text-xxl-start pb-3 pb-sm-2 pb-md-3 pb-xxl-2">
                  <h3 className="mb-2 mt-n4 mt-sm-0 mt-md-n4 mt-xxl-0">{feature.title}</h3>
                  <div className="hr-indicator mb-2" />
                  {feature.phone ? (
                    <p className="d-flex align-items-center text-nav fs-xl fw-medium mb-2">
                      <IconifyIcon icon="bx:phone-call" className="fs-4 text-muted me-1" />
                      {feature.phone}
                    </p>
                  ) : (
                    <p className="fs-sm mb-1">{feature.description}</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
