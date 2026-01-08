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
                        Clear, transparent, results-focused— that’s how we deliver long-term success for Perth
                        businesses.
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
                            <h3 className="h4">Plan & Discover (Week 1)</h3>
                            <p className="mb-0">
                                A Quick strategy session maps your goals, the Perth market, and your budget. Get a
                                custom roadmap without the guesswork.
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
                            <h3 className="h4">Design & Prototype (Weeks 2-3)</h3>
                            <p className="mb-0">
                                Visualise success first—wireframes and mockups approved before we code a single line.
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
                            <h3 className="h4">Build & Optimise (Weeks 4-6)</h3>
                            <p className="mb-0">
                                Speed and conversions guaranteed. Mobile-first, SEO-ready, and built to 3x your online
                                performance.
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
                                Go live with confidence. Ongoing optimisation, support, and growth strategies are
                                included.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
