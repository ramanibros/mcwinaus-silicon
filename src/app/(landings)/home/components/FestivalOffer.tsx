'use client';
import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const delay = (s: number) => ({'--d': `${s}s`} as React.CSSProperties);

const FestivalOffer = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, {threshold: 0.2});
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
    <section ref={sectionRef} className={`fo-section position-relative overflow-hidden py-5 py-lg-6${inView ? ' fo-in' : ''}`} data-bs-theme="light">
        <Container className="position-relative zindex-5">
            <Row className="align-items-center gy-5 gy-lg-0 fo-row">

                <Col lg={6} xl={7}>
                    <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-pill fo-pill fo-reveal" style={delay(0)}>
                        <IconifyIcon icon="bx:party" className="text-warning fs-sm"/>
                        <span className="fs-xs fw-bold text-uppercase fo-pill-text" style={{letterSpacing: '1.5px'}}>
                            Limited-Time Festival Offer
                        </span>
                        <IconifyIcon icon="bx:party" className="text-warning fs-sm"/>
                    </div>

                    <h2 className="display-5 fw-bold text-dark mb-3 lh-sm fo-reveal" style={delay(0.12)}>
                        Grow Your Business<br/>
                        <span className="fo-hl">Without Breaking Budget</span>
                    </h2>
                    <p className="fs-lg text-dark mb-5 fo-reveal" style={{...delay(0.24), maxWidth: '34rem'}}>
                        Special festival pricing on websites, social media content and custom
                        software — save up to 30% on selected services.
                    </p>

                    <div className="d-flex flex-column gap-3 mb-5">
                        {deals.map((d, i) => (
                            <div key={i} className="fo-deal fo-reveal fo-reveal-left d-flex align-items-center gap-3 px-4 py-3 rounded-3" style={delay(0.36 + i * 0.14)}>
                                <div className="fo-deal-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                                    <IconifyIcon icon={d.icon} className="fs-xl text-white"/>
                                </div>
                                <span className="text-dark fw-semibold flex-grow-1 fs-sm">{d.label}</span>
                                {d.was && (
                                    <span className="text-dark fs-xs text-decoration-line-through" style={{opacity: .45}}>
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

                    <div className="fo-reveal" style={delay(0.8)}>
                        <Link href="/festival-offer" className="fo-cta d-inline-flex align-items-center gap-2">
                            <IconifyIcon icon="bx:rocket" className="fs-5 fo-cta-rocket"/>
                            Claim Your Festival Offer
                            <IconifyIcon icon="bx:right-arrow-alt" className="fs-5 fo-cta-arrow"/>
                        </Link>
                    </div>
                </Col>

                <Col lg={6} xl={5} className="d-flex justify-content-center justify-content-lg-end">
                    <div className="fo-visual fo-reveal fo-reveal-right position-relative" style={delay(0.3)}>
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

                        <Image
                            src="/images/festival/santa-claus.png"
                            alt="Santa Claus waving"
                            width={1024}
                            height={1536}
                            className="fo-santa position-absolute"
                            sizes="(min-width: 1200px) 250px, (min-width: 992px) 210px, 42vw"
                        />
                    </div>
                </Col>
            </Row>
        </Container>

        <style jsx>{`
            @media (min-width: 992px) {
                :global(.row.fo-row) { --bs-gutter-x: 7rem !important; }
            }
            @media (min-width: 1200px) {
                :global(.row.fo-row) { --bs-gutter-x: 10rem !important; }
            }
            .py-lg-6 { padding-top: 5rem !important; padding-bottom: 5rem !important; }
            .fo-section {
                background: #fff;
            }
            .fo-pill {
                background: rgba(255,186,8,.16);
                border: 1px solid rgba(217,119,6,.35);
            }
            .fo-pill-text { color: #b45309; }
            .fo-reveal { opacity: 0; }
            .fo-in .fo-reveal { animation: fo-up .7s cubic-bezier(.22,1,.36,1) var(--d, 0s) both; }
            .fo-in .fo-reveal-left { animation-name: fo-left; }
            .fo-in .fo-reveal-right { animation-name: fo-right; }
            .fo-in .fo-pill {
                animation: fo-up .7s cubic-bezier(.22,1,.36,1) var(--d, 0s) both, fo-ring 2.4s ease-out 1.2s infinite;
            }
            .fo-hl {
                position: relative;
                display: inline-block;
                background: linear-gradient(90deg, #8d41f9, #d946ef, #6366f1, #8d41f9);
                background-size: 300% 100%;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                color: transparent;
                animation: fo-shimmer 6s linear infinite;
            }
            .fo-in .fo-save-green { animation: fo-badge 2.2s ease-in-out 1.6s infinite; }
            .fo-in .fo-ticket-stack { animation: fo-float 5s ease-in-out 1s infinite; }
            .fo-in .fo-santa { animation: fo-float 4.2s ease-in-out .4s infinite; }
            .fo-in .fo-ticket { animation: fo-ticket-glow 3s ease-in-out 1s infinite; }
            .fo-in .fo-ticket-pct { animation: fo-pct 2.6s ease-in-out 1s infinite; }
            .fo-cta { position: relative; overflow: hidden; }
            .fo-cta::after {
                content: '';
                position: absolute;
                top: 0; bottom: 0; left: -60%;
                width: 40%;
                background: linear-gradient(100deg, transparent, rgba(255,255,255,.45), transparent);
                transform: skewX(-20deg);
                animation: fo-sheen 3.4s ease-in-out 1.5s infinite;
            }
            .fo-cta-arrow { animation: fo-nudge 1.4s ease-in-out infinite; }
            .fo-cta-rocket { animation: fo-wiggle 2.4s ease-in-out infinite; }
            @keyframes fo-up { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: none; } }
            @keyframes fo-left { from { opacity: 0; transform: translateX(-34px); } to { opacity: 1; transform: none; } }
            @keyframes fo-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: none; } }
            @keyframes fo-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
            @keyframes fo-shimmer { from { background-position: 0% 0; } to { background-position: 300% 0; } }
            @keyframes fo-ring { 0% { box-shadow: 0 0 0 0 rgba(255,186,8,.45); } 70%, 100% { box-shadow: 0 0 0 12px rgba(255,186,8,0); } }
            @keyframes fo-badge { 0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,.4); } 50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); } }
            @keyframes fo-ticket-glow { 0%, 100% { box-shadow: 0 28px 64px rgba(0,0,0,.5), 0 0 0 rgba(141,65,249,0); } 50% { box-shadow: 0 28px 64px rgba(0,0,0,.5), 0 0 42px rgba(141,65,249,.65); } }
            @keyframes fo-pct { 0%, 100% { filter: drop-shadow(0 0 0 rgba(217,70,239,0)); } 50% { filter: drop-shadow(0 0 16px rgba(217,70,239,.7)); } }
            @keyframes fo-sheen { 0% { left: -60%; } 50%, 100% { left: 130%; } }
            @keyframes fo-nudge { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
            @keyframes fo-wiggle { 0%, 80%, 100% { transform: rotate(0); } 85% { transform: rotate(-14deg); } 92% { transform: rotate(10deg); } }
            @media (prefers-reduced-motion: reduce) {
                .fo-reveal { opacity: 1; }
                .fo-in .fo-reveal, .fo-in .fo-pill, .fo-in .fo-save-green, .fo-in .fo-ticket-stack,
                .fo-in .fo-santa, .fo-in .fo-ticket, .fo-in .fo-ticket-pct, .fo-hl, .fo-cta::after, .fo-cta-arrow, .fo-cta-rocket {
                    animation: none;
                }
            }
            .fo-deal {
                background: #fff;
                border: 1px solid rgba(141,65,249,.18);
                box-shadow: 0 4px 16px rgba(141,65,249,.08);
                transition: background .2s ease, border-color .2s ease, box-shadow .2s ease;
            }
            .fo-deal:hover {
                background: #faf5ff;
                border-color: rgba(141,65,249,.5);
                box-shadow: 0 10px 28px rgba(141,65,249,.22), inset 4px 0 0 #8d41f9;
            }
            .fo-deal-icon {
                width: 44px; height: 44px;
                background: linear-gradient(135deg, #8d41f9 0%, #d946ef 100%);
            }
            .fo-save-badge { font-weight: 700; padding: 4px 10px; border-radius: 999px; }
            .fo-save-green {
                background: rgba(34,197,94,.12);
                color: #15803d;
                border: 1px solid rgba(34,197,94,.28);
            }
            .fo-save-blue {
                background: rgba(141,65,249,.15);
                color: #7e22ce;
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
            .fo-visual {
                width: 520px;
                max-width: 100%;
                min-height: 510px;
                display: flex;
                align-items: center;
            }
            .fo-ticket-stack {
                width: 340px;
                max-width: 72%;
                margin-left: 0;
                z-index: 2;
            }
            .fo-santa {
                width: 250px;
                height: auto;
                right: -20px;
                bottom: -54px;
                z-index: 3;
                pointer-events: none;
                filter: drop-shadow(0 24px 24px rgba(0,0,0,.45));
            }
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
            @media (max-width: 1199.98px) {
                .fo-visual { min-height: 470px; }
                .fo-santa { width: 210px; right: -8px; bottom: -38px; }
            }
            @media (max-width: 991.98px) {
                .fo-visual { width: 520px; min-height: 500px; }
                .fo-ticket-stack { max-width: 70%; }
                .fo-santa { width: 42%; right: 0; bottom: -42px; }
            }
            @media (max-width: 575.98px) {
                .fo-visual { min-height: 440px; }
                .fo-ticket-stack { width: 310px; max-width: 76%; }
                .fo-santa { width: 44%; right: -12px; bottom: -26px; }
                .fo-ticket-pct { font-size: 3.5rem; }
            }
        `}</style>
    </section>
    );
};

export default FestivalOffer;
