import React from 'react';
import {Container} from 'react-bootstrap';

const Work = () => {
  return (
    <Container>
      <div className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto" style={{ maxWidth: '530px' }}>
        <h2 className="h1">How Does It   <span className="text-gradient-primary">Work?</span></h2>
        <p className="mb-0">
          Clear 4-step process delivering guaranteed results for Perth businesses—no surprises, just success.

        </p>
      </div>

      <div className="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3">
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">1</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Strategy Session </h3>
            <p className="mb-0">A quick discovery call maps your goals, Perth market gaps, and budget. Custom roadmap ready in 48 hours.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">2</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Design Approval</h3>
            <p className="mb-0">Interactive prototypes you approve before code. Visualise success—zero guesswork.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">3</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Lightning Build</h3>
            <p className="mb-0">2x faster delivery with daily updates. Mobile-first, SEO-ready, conversion-optimised.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">4</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Launch & Scale</h3>
            <p className="mb-0">Go live with confidence. 24/7 Perth support and performance guarantees are included.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Work;
