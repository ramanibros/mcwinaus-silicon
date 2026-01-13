import React from 'react';
import Image from 'next/image';

import Step1Dark from '@/assets/img/landing/online-courses/steps/01-dark.svg';
import Step1Light from '@/assets/img/landing/online-courses/steps/01-light.svg';
import Step2Dark from '@/assets/img/landing/online-courses/steps/02-dark.svg';
import Step2Light from '@/assets/img/landing/online-courses/steps/02-light.svg';
import Step3Dark from '@/assets/img/landing/online-courses/steps/03-dark.svg';
import Step3Light from '@/assets/img/landing/online-courses/steps/03-light.svg';
import Step4Dark from '@/assets/img/landing/online-courses/steps/04-dark.svg';
import Step4Light from '@/assets/img/landing/online-courses/steps/04-light.svg';
import {Col, Row} from "react-bootstrap";

const Work = () => {
    return (
        <section className="container pt-4 pt-lg-0 pb-4 pb-lg-5 mt-5">
            <h2 className="h1 text-center pb-md-0">Our Proven <span
                className="text-gradient-primary">4-Step</span> Process</h2>
            <Row className="align-items-center pb-5 mb-lg-2 text-center">
                <Col md={12} className="text-center">
                    <p className="fs-lg text-muted mb-md-0">
                        Clear, transparent, results-focused—Perth's most reliable path to 3x business growth. Local team delivers guaranteed long-term success without wasting time or budget.
                    </p>
                </Col>
            </Row>
            <div className="steps">
                <div className="step pt-0 pt-md-3 pb-5">
                    <div className="step-number">
                        <div className="step-number-inner">1</div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div
                            className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="-0.3"
                            data-disable-parallax-down="lg"
                        >
                            <Image src={Step1Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step1Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div
                            className="rellax ps-md-4 ps-xl-5"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="0.4"
                            data-disable-parallax-down="lg"
                        >
                            <h3 className="h4">Plan & Discover</h3>
                            <p className="mb-0">
                                Deep-dive strategy session uncovers your goals, maps Perth market dynamics, and aligns budget reality. Custom growth roadmap eliminates guesswork—your success blueprint approved before work begins.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="step pt-0 pt-md-4 pb-5">
                    <div className="step-number">
                        <div className="step-number-inner">2</div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div
                            className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="-0.5"
                            data-disable-parallax-down="lg"
                        >
                            <Image src={Step2Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step2Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div
                            className="rellax ps-md-4 ps-xl-5"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="0.5"
                            data-disable-parallax-down="lg"
                        >
                            <h3 className="h4">Design & Prototype</h3>
                            <p className="mb-0">
                                Visualise revenue first—interactive wireframes, mockups, and user journeys, client-approved before coding starts. 67% higher conversion designs locked in, no surprises, Perth-first aesthetics guaranteed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="step pt-0 pt-md-4 pb-5">
                    <div className="step-number">
                        <div className="step-number-inner">3</div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div
                            className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="-0.3"
                            data-disable-parallax-down="lg"
                        >
                            <Image src={Step3Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step3Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div
                            className="rellax ps-md-4 ps-xl-5"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="0.4"
                            data-disable-parallax-down="lg"
                        >
                            <h3 className="h4">Build & Optimise</h3>
                            <p className="mb-0">
                                Speed and conversions guaranteed. Mobile-first, SEO-optimised, Core Web Vitals domination—platforms delivering 3x online performance. Award-winning Perth developers perfect every pixel and function.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="step pt-0 pt-md-4 pb-5">
                    <div className="step-number">
                        <div className="step-number-inner">4</div>
                    </div>
                    <div className="step-body d-flex align-items-center ps-xl-5">
                        <div
                            className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="-0.5"
                            data-disable-parallax-down="lg"
                        >
                            <Image src={Step4Dark} className="d-dark-mode-none" width={306} alt="Illustration"/>
                            <Image
                                src={Step4Light}
                                className="d-none d-dark-mode-block"
                                width={306}
                                alt="Illustration"
                            />
                        </div>
                        <div
                            className="rellax ps-md-4 ps-xl-5"
                            data-rellax-percentage="0.5"
                            data-rellax-speed="0.6"
                            data-disable-parallax-down="lg"
                        >
                            <h3 className="h4">Launch & Scale (Week 7+)</h3>
                            <p className="mb-0">
                                Go live with total confidence. 99.9% uptime, 24/7 monitoring, continuous A/B testing, and growth strategies included. Your growth partner ensures platforms scale 10x seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
