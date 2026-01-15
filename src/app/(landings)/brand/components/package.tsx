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
    monthly: 150,
    annually: 150,
    image: basic,
    featured: false,
    features: [
      { text: 'Business Logo', available: true },
      { text: 'Brand Color Guide', available: true },
      { text: 'Business Card Design', available: false },
      { text: 'Letter Head Design', available: false },
      { text: 'Envelope Design', available: false },
      { text: 'Brochure/Flyer Design', available: false },
    ],
  },
  {
    name: 'Standard',
    monthly: 299,
    annually: 299,
    image: standard,
    featured: true,
    features: [
      { text: 'Business Logo', available: true },
      { text: 'Brand Color Guide', available: true },
      { text: 'Business Card Design', available: true },
      { text: 'Letter Head Design', available: true },
      { text: 'Envelope Design', available: false },
      { text: 'Brochure/Flyer Design', available: false },
    ],
  },
  {
    name: 'Ultimate',
    monthly: 350,
    annually: 350,
    image: ultimate,
    featured: false,
    features: [
      { text: 'Business Logo', available: true },
      { text: 'Brand Color Guide', available: true },
      { text: 'Business Card Design', available: true },
      { text: 'Letter Head Design', available: true },
      { text: 'Envelope Design', available: true },
      { text: 'Brochure/Flyer Design', available: true },
    ],
  },
];

const Package = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
      <h2 className="h1">Our <span className="text-gradient-primary">Pricing</span></h2>
      <div className="hr-indicator mb-4" />

     {/* <div className="form-check form-switch price-switch justify-content-center mt-2 mb-4">
        <input
          type="checkbox"
          className="form-check-input"
          id="pricing"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
        />
        <label className="form-check-label" htmlFor="pricing">
          Monthly
        </label>
        <label className="form-check-label d-flex align-items-start" htmlFor="pricing">
          Annually <span className="text-danger fs-xs fw-semibold mt-n2 ms-2">-10%</span>
        </label>
      </div>*/}

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
                      {/*<span className="fs-sm fw-normal opacity-70"> / per month</span>*/}
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
