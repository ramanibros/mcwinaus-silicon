import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Image from 'next/image';

import scooterIcon from '@/assets/img/landing/startup/icons/riding-scooter.svg';
import diamondIcon from '@/assets/img/landing/startup/icons/diamond.svg';
import planetIcon from '@/assets/img/landing/startup/icons/planet.svg';

const Features = () => {
  const featureData = [
    {
      icon: scooterIcon,
      title: 'Freedom of movement',
      description:
        'Integer laoreet aliquam mi, est at vitae, egestas. Nisl proin ipsum dui, sagittis mauris vel arcu lacinia massa.',
    },
    {
      icon: diamondIcon,
      title: 'Quality & style',
      description:
        'Nunc aliquam arcu pretium mauris nibh quisque quis. Urna purus fringilla iaculis turpis libero mattis commodo.',
    },
    {
      icon: planetIcon,
      title: 'Cities made for living',
      description:
        'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh diam volutpat posuere venenatis.',
    },
  ];

  return (
    <Container className="pt-1 py-sm-2 py-md-4 py-lg-5">
      <Row className="justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
        <Col lg={8} md={9} className="text-center">
          <h2 className="h1 mb-4">Why   <span className="text-gradient-primary">McWIN iTECH</span> ?</h2>
          <p className="fs-lg text-muted mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
            Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at
            nec lacus.
          </p>
        </Col>
      </Row>

      <Row className="row-cols-1 row-cols-md-3 g-4 py-5 mb-2 mb-sm-3">
        {featureData.map((feature, index) => (
          <Col key={index} className="pt-2 pt-md-0 text-center px-xl-4">
            <Image
              src={feature.icon}
              alt={`${feature.title} Icon`}
              width={70}
              height={70}
              className="d-inline-block mb-4"
            />
            <h3 className="h4 mb-2">{feature.title}</h3>
            <p className="fs-lg mb-0">{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
