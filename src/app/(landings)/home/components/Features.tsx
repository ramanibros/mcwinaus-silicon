'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';

import doctorIcon from '@/assets/img/landing/medical/icons/doctor.svg';
import ambulanceIcon from '@/assets/img/landing/medical/icons/ambulance.svg';
import virusIcon from '@/assets/img/landing/medical/icons/virus.svg';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import vueLight from '@/assets/img/landing/software-agency-2/services/vue-light.png';
import vueDark from '@/assets/img/landing/software-agency-2/services/vue-dark.png';
import nodeLight from '@/assets/img/landing/software-agency-2/services/node-light.png';
import nodeDark from '@/assets/img/landing/software-agency-2/services/node-dark.png';
import javaLogo from '@/assets/img/landing/software-agency-2/services/java.png';
import reactLogo from '@/assets/img/landing/software-agency-2/services/react.png';

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
    title: 'BRAND',
    description:
      'Web Design, Branding & App Design that elevates your business.',
    link: '#',
    linkText: 'Read More',
    icon: doctorIcon,
    techStack: [
      { light: vueLight, dark: vueDark, alt: 'Vue.js', width: 92 },
      { light: nodeLight, dark: nodeDark, alt: 'Node.js', width: 77 },
      { light: javaLogo, alt: 'Java', width: 77 },
      { light: reactLogo, alt: 'React', width: 104 },
    ],
  },
  {
    id: 2,
    title: 'BUILD',
    description:
      'SEO, SMM, SEM & Automation that drive real growth.',
    link: '#',
    linkText: 'Read More',
    icon: ambulanceIcon,
    techStack: [
      { light: vueLight, dark: vueDark, alt: 'Vue.js', width: 92 },
      { light: nodeLight, dark: nodeDark, alt: 'Node.js', width: 77 },
      { light: javaLogo, alt: 'Java', width: 77 },
      { light: reactLogo, alt: 'React', width: 104 },
    ],
  },
  {
    id: 3,
    title: 'GROW',
    description:
      'Scalable Web, App & eCommerce Development services.',
    link: '#',
    linkText: 'Read More',
    icon: virusIcon,
    techStack: [
      { light: vueLight, dark: vueDark, alt: 'Vue.js', width: 92 },
      { light: nodeLight, dark: nodeDark, alt: 'Node.js', width: 77 },
      { light: javaLogo, alt: 'Java', width: 77 },
      { light: reactLogo, alt: 'React', width: 104 },
    ],
  },
  {
    id: 4,
    title: 'SCALE',
    description:
      'PickFlow, your trusted Fleet Management Specialists.',
    link: '#',
    linkText: 'Read More',
    icon: virusIcon
  },
];

const Features = () => {
  return (
    <section className="mb-2 mb-md-4 mb-lg-5">
      <Container>
        <h2 className="h1 mb-md-4 mb-3 pt-xl-3">Your brand, built to scale.</h2>
        <Row className="gy-sm-4 gy-3 pb-xl-2 pb-md-0 pb-sm-2">
          <Col md={6} xs={12}>
            <p className="mb-0 fs-lg">
              We bring real solutions to each client&apos;s problems through a deep understanding of
              their market, solution, and vision.
            </p>
          </Col>
        </Row>

        <Row xs={1} md={2} className="g-4 pt-2 pt-md-4 pb-lg-2">
          {features.map(feature => (
            <Col key={feature.id}>
              <Card className="flex-column flex-sm-row flex-md-column flex-xxl-row align-items-center card-hover border-primary h-100">
                <Image src={feature.icon} alt={feature.title} width={168} height={168} priority />
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
