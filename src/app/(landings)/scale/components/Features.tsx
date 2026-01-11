import features1 from '@/assets/img/landing/software-agency-1/features/01.svg';
import features2 from '@/assets/img/landing/software-agency-1/features/02.svg';
import features3 from '@/assets/img/landing/software-agency-1/features/03.svg';
import features4 from '@/assets/img/landing/software-agency-1/features/04.svg';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

type featureType = {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string
};

const features: featureType[] =[
  {
    id: 1,
    icon: features1,
    title: 'Perth scale specialists',
    description: '25+ local experts delivering 3x faster scaling than offshore agencies with guaranteed results.',
  },
  {
    id: 2,
    icon: features2,
    title: 'No vendor lock-in',
    description: 'Clean code, full documentation, and easy migration—your product always stays in your control.',
  },
  {
    id: 3,
    icon: features3,
    title: 'Future-proof architecture',
    description: 'React, AWS, and API-first systems built to scale 10x without breaking for long-term ROI.',
  },
  {
    id: 4,
    icon: features4,
    title: 'Perth-based growth partner',
    description: 'A WA-focused team that understands local business growth—not just tech support.',
  },
]


const Features = () => {
  return (
    <section className="py-5 my-2 my-md-4 my-lg-5">
      <Container>
        <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">
          Why Perth Businesses Choose  <span className="text-gradient-primary">McWIN iTECH to Scale</span></h2>
        <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">
          Scale without limits with Perth's most trusted tech team. Local expertise, global results—systems engineered to increase conversions 3x and stay on top.
        </p>

        <Row xs={1} sm={2} lg={4} className="g-4 pb-xl-3">
          {features.map((feature, index) => (
            <Col
              key={feature.id}
              className={`text-center ${index !== features.length - 1 ? 'border-end' : ''}`}
            >
              <Card className="d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                <Image src={feature.icon} width={32} height={32} alt={feature.title} />
              </Card>
              <h3 className="h5 mb-2 mb-lg-0">{feature.title}</h3>
              <p className="mb-0">{feature.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
