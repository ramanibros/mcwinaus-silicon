import React from 'react';
import {Container} from 'react-bootstrap';

const Work = () => {
    return (
        <Container>
            <div className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto" style={{maxWidth: '530px'}}>
                <h2 className="h1">
                    Our Proven <span className="text-gradient-primary">4-Step Growth</span> Process
                </h2>
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
                        <h3 className="h4 mb-3">Campaign Strategy
                        </h3>
                        <p className="mb-0">Deep audience analysis and Perth market research = custom growth roadmap
                            targeting high-value customers.
                        </p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">
                        <div className="step-number-inner">2</div>
                    </div>
                    <div className="step-body">
                        <h3 className="h4 mb-3">Creative & Setup</h3>
                        <p className="mb-0">Award-winning ad creatives and pixel-perfect landing pages optimised for
                            maximum conversions.
                        </p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">
                        <div className="step-number-inner">3</div>
                    </div>
                    <div className="step-body">
                        <h3 className="h4 mb-3">Launch & Optimise</h3>
                        <p className="mb-0">Live campaigns with daily monitoring—scale winners, kill losers and 3x your
                            ROI continuously.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">
                        <div className="step-number-inner">4</div>
                    </div>
                    <div className="step-body">
                        <h3 className="h4 mb-3">Scale & Dominate</h3>
                        <p className="mb-0">Automated systems and ongoing optimisation deliver predictable revenue
                            growth month after month.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Work;
