import GlightBox from '@/components/GlightBox';
import IconifyIcon from '@/components/IconifyIcon';
import videoColor from '@/assets/img/landing/saas-3/video-cover.png';
import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

const Work = () => {
  return (
    <Container>
      <div className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto" style={{ maxWidth: '530px' }}>
        <h2 className="h1">How Does It Work?</h2>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus
          facilisis ultrices
        </p>
      </div>

      <div className="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3">
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">1</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Registration </h3>
            <p className="mb-0">Massa enim libero dictumst consectetur in convallis lobortis</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">2</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Identity verification</h3>
            <p className="mb-0">At ultricies id non quisque integer eget velit. Facilisis enim</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">3</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Start trading</h3>
            <p className="mb-0">Pellentesque rhoncus viverra vestibulum, purus purus</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">4</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Earn with Silicon</h3>
            <p className="mb-0">Massa enim libero dictumst consectetur in convallis lobortis</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Work;
