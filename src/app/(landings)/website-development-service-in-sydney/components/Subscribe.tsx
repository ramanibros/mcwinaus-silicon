import React from 'react';
import Image from 'next/image';
import {Col, Container} from 'react-bootstrap';

import pricingBg from '@/assets/img/landing/saas-5/pricing-bg-pattern.png';
import Jarallax from '@/components/Jarallax';
import IconifyIcon from '@/components/IconifyIcon';

const Subscribe = () => {
    return (
        <section
            className="position-relative bg-dark pt-lg-4 pt-xl-5 overflow-hidden"
            style={{
                background: 'linear-gradient(90deg, #0b0f19 0%, #172033 51.04%, #0b0f19 100%)',
            }}
        >
            {/* Animated SVG Background */}
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-80">
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid slice"
                    className="w-100 h-100"
                    style={{filter: 'blur(40px)'}}
                >
                    <defs>
                        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="34s" values="0%;10%;0%" repeatCount="indefinite"/>
                            <stop offset="0%" stop-color="#2563eb"/>
                            {/* Blue */}
                            <stop offset="100%" stop-color="#2563eb00"/>
                        </radialGradient>
                        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="23.5s" values="0%;15%;0%" repeatCount="indefinite"/>
                            <stop offset="0%" stop-color="#ec4899"/>
                            {/* Pink */}
                            <stop offset="100%" stop-color="#ec489900"/>
                        </radialGradient>
                        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="50%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="21.5s" values="0%;12%;0%" repeatCount="indefinite"/>
                            <stop offset="0%" stop-color="#1e3a8a"/>
                            {/* Navy Blue */}
                            <stop offset="100%" stop-color="#1e3a8a00"/>
                        </radialGradient>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
                        <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"/>
                        <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"/>
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50"
                                          dur="17s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
                        <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"/>
                        <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"/>
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50"
                                          dur="18s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
                        <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"/>
                        <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite"/>
                        <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50"
                                          dur="19s" repeatCount="indefinite"/>
                    </rect>
                </svg>
            </div>

            {/* Optional: Keep the Jarallax image but with reduced opacity for layered effect */}
            <Jarallax speed={0.4} className="position-absolute top-0 start-0 w-100 h-100">
                <div className="jarallax-img opacity-30">
                    <Image
                        src={pricingBg}
                        alt="Subscribe Background"
                        fill
                        style={{objectFit: 'cover'}}
                        priority
                    />
                </div>
            </Jarallax>

            <Container className="position-relative zindex-2 pt-5" data-bs-theme="dark">
                <div className="position-relative row justify-content-center">
                    <Col xl={8} md={10} sm={12} className="text-center">
                        <h2 className="h1 text-light mb-4">Ready to Dominate <span className="text-gradient-primary">Sydney Search Results?</span>
                        </h2>
                        <p className="fs-lg text-light opacity-70 pb-4 mb-3">
                            Get Free SEO Audit & Custom Proposal Today!
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
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    color: '#fff'
                                }}
                            />
                            <IconifyIcon
                                icon="bx:envelope"
                                className="fs-lg text-light position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
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
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderColor: 'rgba(255, 255, 255, 0.2)',
                                        color: '#fff'
                                    }}
                                />
                                <IconifyIcon
                                    icon="bx:envelope"
                                    className="bx bx-envelope fs-lg text-light position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
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
                            Complete our 60-second form for your Sydney web development roadmap.
                        </p>
                    </Col>
                </div>
            </Container>

            <div className="d-none d-xl-block" style={{height: '300px'}}></div>
            <div className="d-none d-md-block d-xl-none" style={{height: '260px'}}></div>
            <div className="d-md-none" style={{height: '230px'}}></div>

            <div
                className="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1"
                style={{color: 'var(--si-body-bg)'}}
            >
                <div
                    className="position-relative start-50 translate-middle-x flex-shrink-0"
                    style={{width: '3774px'}}
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