"use client"
import basic from '@/assets/img/landing/saas-1/pricing/basic.png';
import standard from '@/assets/img/landing/saas-1/pricing/standard.png';
import ultimate from '@/assets/img/landing/saas-1/pricing/ultimate.png';
import IconifyIcon from '@/components/IconifyIcon';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

type Feature = {
  text: string;
  available: boolean;
};

type PricingPlan = {
  name: string;
  monthly: number;
  annually: number;
  image: StaticImageData;
  featured: boolean;
  features: Feature[];
};
const plans: PricingPlan[] = [
  {
    name: 'Basic',
    monthly: 350,
    annually: 350,
    image: basic,
    featured: false,
    features: [
      { text: '10 Keywords', available: true },
      { text: 'Keyword research & strategy', available: true },
      { text: 'Analytics & conversion tracking', available: true },
      { text: 'Google Business optimisation & posting', available: true },
      { text: 'Local Link Building', available: true },
      { text: 'On-page optimisation', available: true },
      { text: 'Technical optimisation', available: true },
      { text: 'Monthly reporting', available: true }
    ]
  },
  {
    name: 'Standard',
    monthly: 450,
    annually: 450,
    image: standard,
    featured: true,
    features: [
      { text: '20 Keywords', available: true },
      { text: 'Keyword research & strategy', available: true },
      { text: 'Analytics & conversion tracking', available: true },
      { text: 'Google Business optimisation & posting', available: true },
      { text: 'Local Link Building', available: true },
      { text: 'On-page optimisation', available: true },
      { text: 'Technical optimisation', available: true },
      { text: 'Monthly reporting', available: true }
    ]
  },
  {
    name: 'Ultimate',
    monthly: 599,
    annually: 599,
    image: ultimate,
    featured: false,
    features: [
      { text: '30 Keywords', available: true },
      { text: 'Keyword research & strategy', available: true },
      { text: 'Analytics & conversion tracking', available: true },
      { text: 'Google Business optimisation & posting', available: true },
      { text: 'Local Link Building', available: true },
      { text: 'On-page optimisation', available: true },
      { text: 'Technical optimisation', available: true },
      { text: 'Monthly reporting', available: true }
    ]
  },
];

const Package = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
      <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
        <h2 className="h1">Our <span className="text-gradient-primary">Pricing</span></h2>
        <div className="hr-indicator mb-4" />

        <Row className="g-4 flex-nowrap overflow-auto pb-3">
          {plans.map((plan, idx) => (
              <Col key={idx} style={{ minWidth: '18rem' }}>
                <Card
                    className={`h-100 border-0 shadow-sm ${
                        plan.featured ? 'bg-primary text-light shadow-primary' : ''
                    }`}
                >
                  <CardBody>
                    <div className="d-flex align-items-center pb-3 mb-3">
                      <div
                          className={`flex-shrink-0 rounded-3 ${
                              plan.featured ? 'bg-white bg-opacity-10' : 'bg-secondary'
                          }`}
                      >
                        <Image src={plan.image} width={84} height={84} alt={`${plan.name} plan`} />
                      </div>
                      <div className="ps-4">
                        <h3
                            className={`fs-lg fw-normal mb-2 ${
                                plan.featured ? 'text-light opacity-75' : 'text-body'
                            }`}
                        >
                          {plan.name}
                        </h3>
                        <h4 className={`h3 lh-1 mb-0 ${plan.featured ? 'text-light' : 'text-body'}`}>
                          ${isAnnual ? plan.annually : plan.monthly}
                        </h4>
                      </div>
                    </div>

                    <ul className="list-unstyled fs-sm pb-3 mb-3">
                      {plan.features.map((f, i) => (
                          <li
                              key={i}
                              className={`d-flex mb-2 ${
                                  f.available
                                      ? plan.featured
                                          ? 'text-light'
                                          : ''
                                      : plan.featured
                                          ? 'text-light opacity-50'
                                          : 'text-muted'
                              }`}
                          >
                            <IconifyIcon
                                icon={f.available ? 'bx:check' : 'bx:x'}
                                className={`fs-xl me-1 ${f.available ? 'text-success' : 'text-danger'}`}
                                style={{ fontWeight: "bold" }}
                            />
                            <span className={plan.featured ? 'opacity-75' : ''}>{f.text}</span>
                          </li>
                      ))}
                    </ul>
                  </CardBody>

                  <CardFooter className="border-0 pt-0 pb-4">
                    <Button variant={plan.featured ? 'light' : 'outline-primary'} className="w-100">
                      Contact Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
          ))}
        </Row>
      </Container>
  );
};

export default Package;
