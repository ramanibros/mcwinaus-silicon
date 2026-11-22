'use client';
import React from 'react';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const deals = [
    {
        icon: 'bxl:wordpress',
        label: '5-Page WordPress Website',
        was: '$699',
        now: '$499',
        save: 'Save $200',
    },
    {
        icon: 'bx:image',
        label: 'Social Media Pack — 10 Posts',
        was: '$249',
        now: '$179',
        save: 'Save $70',
    },
    {
        icon: 'bx:code-alt',
        label: 'Custom Software Development',
        was: null,
        now: 'Custom Quote',
        save: 'Scope-Based',
    },
];

const FestivalOffer = () => (
    <section className="fo-section position-relative overflow-hidden my-2 py-5 py-lg-6" data-bs-theme="dark">
        <div className="fo-bg position-absolute top-0 start-0 w-100 h-100"/>
        <div className="fo-orb fo-orb-1 position-absolute"/>
        <div className="fo-orb fo-orb-2 position-absolute"/>

        <Container className="position-relative zindex-5">
            <Row className="align-items-center gy-5 gy-lg-0">

                <Col lg={6} xl={7}>
                    <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-pill fo-pill">
                        <IconifyIcon icon="bx:party" className="text-warning fs-sm"/>
                        <span className="fs-xs fw-bold text-uppercase fo-pill-text" style={{letterSpacing: '1.5px'}}>
                            Limited-Time Festival Offer
                        </span>
                        <IconifyIcon icon="bx:party" className="text-warning fs-sm"/>
                    </div>

                    <h2 className="display-5 fw-bold text-white mb-3 lh-sm">
                        Grow Your Business<br/>
                        <span className="text-gradient-primary">Without Breaking Budget</span>
                    </h2>
                    <p className="fs-lg text-white mb-5" style={{opacity: .75, maxWidth: '34rem'}}>
                        Special festival pricing on websites, social media content and custom
                        software — save up to 30% on selected services.
                    </p>

                    <div className="d-flex flex-column gap-3 mb-5">
                        {deals.map((d, i) => (
                            <div key={i} className="fo-deal d-flex align-items-center gap-3 px-4 py-3 rounded-3">
                                <div className="fo-deal-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                                    <IconifyIcon icon={d.icon} className="fs-xl text-white"/>
                                </div>
                                <span className="text-white fw-semibold flex-grow-1 fs-sm">{d.label}</span>
                                {d.was && (
                                    <span className="text-white fs-xs text-decoration-line-through" style={{opacity: .45}}>
                                        {d.was}
                                    </span>
                                )}
                                <span className="text-gradient-primary fw-bold fs-5">{d.now}</span>
                                <span className={`badge fo-save-badge fs-xs ${d.was ? 'fo-save-green' : 'fo-save-blue'}`}>
                                    {d.save}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Link href="/festival-offer" className="fo-cta d-inline-flex align-items-center gap-2">
                        <IconifyIcon icon="bx:rocket" className="fs-5"/>
                        Claim Your Festival Offer
                        <IconifyIcon icon="bx:right-arrow-alt" className="fs-5"/>
                    </Link>
                </Col>

                <Col lg={6} xl={5} className="d-flex justify-content-center">
                    <div className="fo-ticket-stack position-relative">
                        <div className="fo-ticket-glow position-absolute"/>
                        <div className="fo-ticket-back position-absolute"/>

                        <div className="fo-ticket position-relative">
                            {/* Ticket header */}
                            <div className="d-flex align-items-center justify-content-between px-4 pt-4 pb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <IconifyIcon icon="bx:party" className="text-warning fs-4"/>
                                    <span className="fs-xs fw-bold text-uppercase text-white" style={{letterSpacing: '2px'}}>
                                        Festival Offer
                                    </span>
                                </div>
                                <span className="fo-ticket-badge fs-xs fw-bold text-uppercase px-2 py-1 rounded-pill">
                                    Limited
                                </span>
                            </div>

                            {/* Big saving */}
                            <div className="text-center px-4 pb-4">
                                <span className="fs-xs fw-bold text-uppercase d-block mb-1" style={{color: 'rgba(255,255,255,.5)', letterSpacing: '2.5px'}}>
                                    Save up to
                                </span>
                                <span className="fo-ticket-pct text-gradient-primary d-block">30%</span>
                                <span className="fs-sm d-block mt-1" style={{color: 'rgba(255,255,255,.6)'}}>
                                    on selected services
                                </span>
                            </div>

                            {/* Perforation */}
                            <div className="fo-perf d-flex align-items-center px-4">
                                <IconifyIcon icon="bx:cut" className="fs-5 flex-shrink-0" style={{color: 'rgba(255,255,255,.35)'}}/>
                                <div className="fo-perf-line flex-grow-1 ms-2"/>
                            </div>

                            {/* Footer rows */}
                            <div className="px-4 pt-3 pb-4">
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <span className="d-flex align-items-center gap-2 fs-sm" style={{color: 'rgba(255,255,255,.6)'}}>
                                        <IconifyIcon icon="bx:layer" className="text-primary"/>
                                        Services included
                                    </span>
                                    <span className="fs-sm fw-bold text-white">3 Services</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <span className="d-flex align-items-center gap-2 fs-sm" style={{color: 'rgba(255,255,255,.6)'}}>
                                        <IconifyIcon icon="bx:wallet" className="text-primary"/>
                                        Bundle savings
                                    </span>
                                    <span className="fs-sm fw-bold text-gradient-primary">Up to $270</span>
                                </div>
                                <div className="fo-ticket-note fs-xs mt-3 px-3 py-2 rounded-2 text-center">
                                    Limited-time festival pricing · Terms apply
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        <style jsx>{`
            .fo-section {
                background: linear-gradient(160deg, #0b0f19 0%, #1a1033 50%, #0b0f19 100%);
                border-radius: 20px;
                margin-left: 12px;
                margin-right: 12px;
            }
            .py-lg-6 { padding-top: 5rem !important; padding-bottom: 5rem !important; }
            .fo-bg {
                background: radial-gradient(116% 118% at 50% 0%, rgba(99,102,241,.18) 0%, rgba(218,70,239,.08) 45%, rgba(241,244,253,.04) 85%);
            }
            .fo-orb {
                border-radius: 50%;
                filter: blur(90px);
                pointer-events: none;
                z-index: 1;
            }
            .fo-orb-1 {
                width: 420px; height: 420px;
                top: -120px; right: -60px;
                background: radial-gradient(circle, rgba(99,102,241,.38) 0%, transparent 70%);
            }
            .fo-orb-2 {
                width: 320px; height: 320px;
                bottom: -80px; left: -60px;
                background: radial-gradient(circle, rgba(217,70,239,.32) 0%, transparent 70%);
            }
            .fo-pill {
                background: rgba(255,186,8,.1);
                border: 1px solid rgba(255,186,8,.28);
            }
            .fo-pill-text { color: #ffba08; }
            .fo-deal {
                background: rgba(255,255,255,.05);
                border: 1px solid rgba(255,255,255,.09);
                transition: background .2s ease, border-color .2s ease;
            }
            .fo-deal:hover {
                background: rgba(141,65,249,.12);
                border-color: rgba(141,65,249,.35);
            }
            .fo-deal-icon {
                width: 44px; height: 44px;
                background: rgba(141,65,249,.28);
            }
            .fo-save-badge { font-weight: 700; padding: 4px 10px; border-radius: 999px; }
            .fo-save-green {
                background: rgba(34,197,94,.12);
                color: #22c55e;
                border: 1px solid rgba(34,197,94,.28);
            }
            .fo-save-blue {
                background: rgba(141,65,249,.15);
                color: #c084fc;
                border: 1px solid rgba(141,65,249,.3);
            }
            .fo-cta {
                padding: 14px 32px;
                background: linear-gradient(135deg, #8d41f9 0%, #d946ef 100%);
                border-radius: 12px;
                color: #fff !important;
                font-weight: 700;
                font-size: 1rem;
                text-decoration: none;
                box-shadow: 0 8px 32px rgba(141,65,249,.4);
                transition: transform .2s ease, box-shadow .2s ease;
            }
            .fo-cta:hover {
                transform: translateY(-2px);
                box-shadow: 0 14px 40px rgba(141,65,249,.55);
            }
            .fo-ticket-stack { width: 340px; max-width: 100%; }
            .fo-ticket-glow {
                width: 260px; height: 120px;
                left: 50%; bottom: -40px;
                transform: translateX(-50%);
                background: radial-gradient(ellipse, rgba(141,65,249,.4) 0%, transparent 70%);
                filter: blur(40px);
                z-index: 0;
            }
            .fo-ticket-back {
                inset: 0;
                border-radius: 20px;
                background: linear-gradient(160deg, rgba(141,65,249,.18), rgba(217,70,239,.1));
                border: 1px solid rgba(141,65,249,.3);
                transform: rotate(-5deg);
                z-index: 1;
            }
            .fo-ticket {
                border-radius: 20px;
                background: linear-gradient(160deg, #1d1338 0%, #120e24 100%);
                border: 1px solid rgba(255,255,255,.14);
                transform: rotate(2deg);
                box-shadow: 0 28px 64px rgba(0,0,0,.5);
                z-index: 2;
            }
            .fo-ticket-badge {
                background: rgba(255,186,8,.12);
                color: #ffba08;
                border: 1px solid rgba(255,186,8,.3);
                letter-spacing: 1px;
            }
            .fo-ticket-pct {
                font-size: 4.25rem;
                font-weight: 900;
                line-height: 1;
            }
            .fo-perf-line {
                border-top: 2px dashed rgba(255,255,255,.18);
            }
            .fo-ticket-note {
                background: rgba(255,255,255,.04);
                border: 1px solid rgba(255,255,255,.07);
                color: rgba(255,255,255,.45);
                letter-spacing: .5px;
            }
        `}</style>
    </section>
);

export default FestivalOffer;
