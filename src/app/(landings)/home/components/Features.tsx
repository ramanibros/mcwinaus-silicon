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
  description: React.ReactNode;
  link: string;
  linkText: string;
  icon: StaticImageData;
  phone?: string;
  techStack?: { light: StaticImageData; dark?: StaticImageData; alt: string; width: number }[];
};

const features: Feature[] = [
  {
    id: 1,
    title: 'BRAND',
    description:
        (
            <>
              Branding, Web Design, UI/UX & Mobile App Design that <b>boosts authority 3x faster.</b>
            </>
        ),
    link: '/brand',
    linkText: 'Read More',
    icon: brandIcon,
  },
  {
    id: 2,
    title: 'BUILD',
    description:
        (
            <>
              Websites, eCommerce, Apps & Custom Software that <b>increase conversions without spending thousands.</b>
            </>
        ),
    link: '/build',
    linkText: 'Read More',
    icon: buildIcon,
  },
  {
    id: 3,
    title: 'GROW',
    description:
        (
            <>
              SMM, SEO, SEM & Pay-Per-Click that <b>drive qualified leads</b>—proof not promises.
            </>
        ),
    link: '/grow',
    linkText: 'Read More',
    icon: growIcon,
  },
  {
    id: 4,
    title: 'SCALE',
    description:
        (
            <>
              Integrations, Optimisation & 24/7 Support for <b>businesses ready to scale big.</b>
            </>
        ),
    link: '/scale',
    linkText: 'Read More',
    icon: scaleIcon
  },
];

const Features = () => {
  return (
    <section className="mb-2 mb-md-4 mb-lg-5">
      <Container>
        <h2 className="h1 mb-md-4 mb-3 pt-xl-3">Your brand, <span className="text-gradient-primary">built to scale.</span></h2>
        <Row className="gy-sm-4 gy-3 pb-xl-2 pb-md-0 pb-sm-2">
          <Col md={6} xs={12}>
            <p className="mb-0 fs-lg">
              Get award-winning digital solutions with real insight into Perth's market. <b>We've got you covered</b> from vision to long-term results.
            </p>
          </Col>
        </Row>

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

                  <div className="text-end">
                    <Link href={feature.link} className="btn btn-link stretched-link px-0">
                      {feature.linkText}
                      <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-1" />
                    </Link>
                  </div>
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
