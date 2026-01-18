import React from 'react';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

import pricingBg from '@/assets/img/landing/saas-5/pricing-bg-pattern.png';
import Jarallax from '@/components/Jarallax';
import IconifyIcon from '@/components/IconifyIcon';

const Subscribe = () => {
  return (
    <section
      className="position-relative bg-dark pt-lg-4 pt-xl-5"
      style={{
        background: 'linear-gradient(90deg, #0b0f19 0%, #172033 51.04%, #0b0f19 100%)',
      }}
    >
      <Jarallax speed={0.4} className="position-absolute top-0 start-0 w-100 h-100">
        <div className="jarallax-img">
          <Image
            src={pricingBg}
            alt="Subscribe Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </Jarallax>

      <Container className="position-relative zindex-2 pt-5" data-bs-theme="dark">
        <div className="position-relative row justify-content-center">
          <Col xl={8} md={10} sm={12} className="text-center">
            <h2 className="h1 text-light mb-4">Ready to 3x Your <span className="text-gradient-primary">Business Growth?</span></h2>
            <p className="fs-lg text-light opacity-70 pb-4 mb-3">
              Write your email address so we can contact you
            </p>

            <form
              className="input-group input-group-lg d-none d-sm-flex needs-validation mb-3"
              noValidate
            >
              <input
                type="email"
                className="form-control rounded-start ps-5"
                placeholder="Your email"
                required
              />
              <IconifyIcon
                icon="bx:envelope"
                className="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
              />
              <div className="invalid-tooltip position-absolute top-100 start-0">
                Please provide a valid email address.
              </div>
              <button type="submit" className="btn btn-primary">
                Get in touch
              </button>
            </form>

            <form className="needs-validation d-sm-none mb-3" noValidate>
              <div className="position-relative mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-start ps-5"
                  placeholder="Your email"
                  required
                />
                <IconifyIcon
                  icon="bx:envelope"
                  className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
                />
                <div className="invalid-tooltip position-absolute top-0 start-0 mt-n4">
                  Please provide a valid email address.
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Get in touch
              </button>
            </form>
            <p className="fs-sm text-light opacity-50 mb-0">
              Local team. Long-term results. Your success is guaranteed.
            </p>
          </Col>
        </div>
      </Container>

      <div className="d-none d-xl-block" style={{ height: '300px' }}></div>
      <div className="d-none d-md-block d-xl-none" style={{ height: '260px' }}></div>
      <div className="d-md-none" style={{ height: '230px' }}></div>

      <div
        className="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1"
        style={{ color: 'var(--si-body-bg)' }}
      >
        <div
          className="position-relative start-50 translate-middle-x flex-shrink-0"
          style={{ width: '3774px' }}
        >
          <svg
            width="3774"
            height="201"
            viewBox="0 0 3774 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
