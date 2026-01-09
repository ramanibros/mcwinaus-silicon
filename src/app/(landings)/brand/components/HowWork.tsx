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
        <h2 className="h1">Our Proven 4-Step <span className="text-gradient-primary">Brand Process</span></h2>
        <p className="mb-0">
          Clear, collaborative, results-driven—how Perth businesses get award-winning brands that deliver.
        </p>
      </div>

      <div className="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3">
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">1</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Discovery </h3>
            <p className="mb-0">Deep-dive into your Perth market, audience, and vision. Custom strategy mapped in 48 hours.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">2</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Design & Concepts</h3>
            <p className="mb-0">3 unique concepts presented—pick your winner with stakeholder feedback built-in.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">3</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Refinement & Assets</h3>
            <p className="mb-0">Perfect your brand with unlimited revisions plus complete digital asset delivery.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">4</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Launch & Scale</h3>
            <p className="mb-0">Brand guidelines & coaching sessions to ensure long-term consistency across all channels.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Work;
