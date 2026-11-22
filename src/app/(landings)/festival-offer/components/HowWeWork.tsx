'use client';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We understand your business goals, target audience, and project requirements in a focused consultation.',
        icon: 'bx:search-alt',
        grad: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        glow: 'rgba(99,102,241,.35)',
    },
    {
        number: '02',
        title: 'Scope Confirmation',
        description: 'We lock in deliverables, timeline, responsibilities and a clear final quotation — no hidden surprises.',
        icon: 'bx:clipboard',
        grad: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
        glow: 'rgba(139,92,246,.35)',
    },
    {
        number: '03',
        title: 'Design & Build',
        description: 'Our team executes the agreed solution and shares progress checkpoints for your review throughout.',
        icon: 'bx:code-alt',
        grad: 'linear-gradient(135deg, #a855f7, #d946ef)',
        glow: 'rgba(217,70,239,.35)',
    },
    {
        number: '04',
        title: 'Review & Handover',
        description: 'We finalise revisions, launch or deliver the work, and walk you through everything at handover.',
        icon: 'bx:check-double',
        grad: 'linear-gradient(135deg, #22c55e, #16a34a)',
        glow: 'rgba(34,197,94,.35)',
    },
];

const HowWeWork = () => (
    <section className="hww-section position-relative overflow-hidden py-5" data-bs-theme="dark">
        <div className="hww-bg position-absolute top-0 start-0 w-100 h-100"/>
        <div className="hww-orb hww-orb-1 position-absolute"/>
        <div className="hww-orb hww-orb-2 position-absolute"/>

        <Container className="position-relative zindex-5 py-md-3 py-lg-5">
            <div className="text-center mb-5">
                <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2 rounded-pill hww-eyebrow">
                    <IconifyIcon icon="bx:git-commit" className="fs-sm" style={{color: '#8d41f9'}}/>
                    <span className="fs-xs fw-bold text-uppercase" style={{letterSpacing: '1.5px', color: '#c084fc'}}>
                        Our Process
                    </span>
                </div>
                <h2 className="h1 text-white mb-3">
                    How We <span className="text-gradient-primary">Work</span>
                </h2>
                <p className="fs-lg text-white mx-auto" style={{opacity: .65, maxWidth: '38rem'}}>
                    A clear, transparent process from first conversation to final handover — no guesswork, no delays.
                </p>
            </div>

            <Row xs={1} md={2} lg={4} className="g-4">
                {steps.map((step, i) => (
                    <Col key={i}>
                        <div className="hww-card h-100 p-4 d-flex flex-column position-relative overflow-hidden">
                            <div className="hww-card-glow" style={{background: step.glow}}/>

                            <div
                                className="hww-icon-wrap d-flex align-items-center justify-content-center rounded-circle mb-4 flex-shrink-0"
                                style={{background: step.grad, boxShadow: `0 6px 20px ${step.glow}`}}
                            >
                                <IconifyIcon icon={step.icon} className="text-white fs-2"/>
                            </div>

                            <div className="hww-num-label mb-1 fw-black text-uppercase" style={{
                                background: step.grad,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: '2.5rem',
                                lineHeight: 1,
                            }}>
                                {step.number}
                            </div>

                            <h3 className="h5 text-white mb-2">{step.title}</h3>
                            <p className="fs-sm mb-0" style={{color: 'rgba(255,255,255,.6)'}}>{step.description}</p>

                            {i < steps.length - 1 && (
                                <div className="d-lg-none mt-4 d-flex align-items-center gap-2">
                                    <div className="hww-mobile-line flex-grow-1"/>
                                    <IconifyIcon icon="bx:chevron-down" className="text-white opacity-25"/>
                                </div>
                            )}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>

        <style jsx>{`
            .hww-section {
                background: linear-gradient(160deg, #0b0f19 0%, #12102a 50%, #0b0f19 100%);
            }
            .hww-bg {
                background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,.14) 0%, rgba(217,70,239,.07) 50%, transparent 100%);
            }
            .hww-orb {
                border-radius: 50%;
                filter: blur(100px);
                pointer-events: none;
                z-index: 1;
            }
            .hww-orb-1 {
                width: 500px; height: 300px;
                top: -60px; left: 50%;
                transform: translateX(-50%);
                background: radial-gradient(circle, rgba(141,65,249,.2) 0%, transparent 70%);
            }
            .hww-orb-2 {
                width: 300px; height: 300px;
                bottom: -80px; right: 5%;
                background: radial-gradient(circle, rgba(217,70,239,.18) 0%, transparent 70%);
            }
            .hww-eyebrow {
                background: rgba(141,65,249,.12);
                border: 1px solid rgba(141,65,249,.28);
            }

            .hww-card {
                background: rgba(255,255,255,.04);
                border: 1px solid rgba(255,255,255,.08);
                border-radius: 20px;
                backdrop-filter: blur(12px);
                transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
            }
            .hww-card:hover {
                transform: translateY(-6px);
                border-color: rgba(255,255,255,.16);
                box-shadow: 0 20px 48px rgba(0,0,0,.35);
            }
            .hww-card-glow {
                position: absolute;
                width: 120px; height: 120px;
                top: -40px; right: -40px;
                border-radius: 50%;
                filter: blur(50px);
                opacity: .2;
                pointer-events: none;
            }

            .hww-icon-wrap { width: 64px; height: 64px; }

            .hww-mobile-line {
                height: 1px;
                background: rgba(255,255,255,.12);
            }
        `}</style>
    </section>
);

export default HowWeWork;
