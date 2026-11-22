'use client';
import React from 'react';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

type NoteItem = { icon: string; title: string; body: string };

const notes: NoteItem[] = [
    {
        icon: 'bx:dollar-circle',
        title: 'Pricing Currency',
        body: 'All prices are quoted in Australian dollars (AUD). Applicable taxes, if any, will be added to the invoice.',
    },
    {
        icon: 'bx:server',
        title: 'Hosting & Third-Party Costs',
        body: 'Domain registration, hosting, premium themes/plugins, and paid stock assets are not included and will be charged separately with prior approval.',
    },
    {
        icon: 'bx:file',
        title: 'Website Scope',
        body: 'The website offer covers up to 5 standard pages. E-commerce, advanced integrations, copywriting, and additional pages are outside this package unless agreed in writing.',
    },
    {
        icon: 'bx:image',
        title: 'Social Media Scope',
        body: '10 static post creatives per month with headline, caption, hashtags and call-to-action. Reels, publishing, community management, and paid ads are not included.',
    },
    {
        icon: 'bx:user-check',
        title: 'Client Responsibilities',
        body: 'The client is responsible for providing accurate business info, brand assets, approvals and required account access in a timely manner.',
    },
    {
        icon: 'bx:calendar',
        title: 'Project Timeline',
        body: 'The schedule will be agreed after receipt of required content and initial payment. Festival prices are promotional and subject to written confirmation at booking.',
    },
];

const trustItems = [
    {icon: 'bx:lock-open-alt', label: 'No Lock-in Contracts'},
    {icon: 'bx:support', label: '24/7 Perth Team Support'},
    {icon: 'bx:star', label: '5-Star Rated Agency'},
    {icon: 'bx:check-double', label: 'Clear Scope, No Surprises'},
];

const NotesAndCta = () => (
    <>
        {/* Notes section */}
        <section className="nc-notes py-5">
            <Container className="py-md-2 py-lg-4">
                <div className="text-center mb-5">
                    <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2 rounded-pill nc-eyebrow">
                        <IconifyIcon icon="bx:info-circle" className="text-primary fs-sm"/>
                        <span className="fs-xs fw-bold text-uppercase text-primary" style={{letterSpacing: '1.5px'}}>
                            Pricing &amp; Project Notes
                        </span>
                    </div>
                    <h2 className="h1 mb-3">
                        Before You <span className="text-gradient-primary">Get Started</span>
                    </h2>
                    <p className="fs-lg text-muted mx-auto" style={{maxWidth: '38rem'}}>
                        We believe in full transparency. Here&apos;s everything you need to know
                        before committing — no fine print surprises.
                    </p>
                </div>

                <Row className="g-3 justify-content-center">
                    {notes.map((note, i) => (
                        <Col key={i} md={6} lg={4}>
                            <div className="nc-note-card h-100 p-4 d-flex gap-3 align-items-start">
                                <div className="nc-note-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                                    <IconifyIcon icon={note.icon} className="text-primary fs-xl"/>
                                </div>
                                <div>
                                    <h4 className="h6 fw-bold mb-1">{note.title}</h4>
                                    <p className="fs-sm text-muted mb-0">{note.body}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

        {/* CTA section */}
        <section className="nc-cta position-relative overflow-hidden py-5">
            <div className="nc-cta-bg position-absolute top-0 start-0 w-100 h-100"/>
            <div className="nc-cta-orb nc-cta-orb-1 position-absolute"/>
            <div className="nc-cta-orb nc-cta-orb-2 position-absolute"/>

            <Container className="position-relative zindex-5 py-4 py-lg-5" data-bs-theme="dark">
                <Row className="align-items-center gy-5 gy-lg-0">

                    <Col lg={6}>
                        <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-pill nc-cta-pill">
                            <IconifyIcon icon="bx:party" className="text-warning fs-sm"/>
                            <span className="fs-xs fw-bold text-uppercase" style={{letterSpacing: '1.5px', color: '#ffba08'}}>
                                Limited Time Offer
                            </span>
                        </div>
                        <h2 className="display-5 fw-bold text-white mb-3 lh-sm">
                            Ready to Claim Your<br/>
                            <span className="text-gradient-primary">Festival Deal?</span>
                        </h2>
                        <p className="fs-lg text-white mb-5" style={{opacity: .7, maxWidth: '32rem'}}>
                            Tell us what you need. We&apos;ll identify the right next step, confirm a
                            clear scope, and lock in your festival price before the offer ends.
                        </p>

                        <div className="d-flex flex-wrap gap-3">
                            <Link href="/contact" className="hero-btn">
                                <IconifyIcon icon="bx:phone-call" className="fs-5"/>
                                Contact Us Now
                            </Link>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="nc-trust-grid">
                            {trustItems.map((t, i) => (
                                <div key={i} className="nc-trust-item d-flex align-items-center gap-3 p-4 rounded-3">
                                    <div className="nc-trust-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                                        <IconifyIcon icon={t.icon} className="text-white fs-xl"/>
                                    </div>
                                    <span className="text-white fw-semibold">{t.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="nc-brand-strip mt-4 px-4 py-3 rounded-3 d-flex align-items-center gap-3">
                            <IconifyIcon icon="bx:map-pin" className="text-primary fs-xl flex-shrink-0"/>
                            <span className="text-white fs-sm" style={{opacity: .75}}>
                                McWIN iTECH — Perth&apos;s trusted digital partner for websites, social media &amp; software.
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Spacers for wave/footer overlap */}
            <div className="d-none d-xl-block" style={{height: '300px'}}/>
            <div className="d-none d-md-block d-xl-none" style={{height: '260px'}}/>
            <div className="d-md-none" style={{height: '230px'}}/>

            {/* Bottom wave */}
            <div
                className="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1"
                style={{color: 'var(--si-body-bg)'}}
            >
                <div className="position-relative start-50 translate-middle-x flex-shrink-0" style={{width: '3774px'}}>
                    <svg width="3774" height="201" viewBox="0 0 3774 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
        </section>

        <style jsx>{`
            /* Notes */
            .nc-notes { background: var(--si-secondary-bg, #f8f9fa); }
            .nc-eyebrow {
                background: rgba(141,65,249,.08);
                border: 1px solid rgba(141,65,249,.2);
            }
            .nc-note-card {
                background: var(--si-body-bg, #fff);
                border: 1px solid var(--si-border-color, rgba(0,0,0,.08));
                border-radius: 16px;
                box-shadow: 0 2px 16px rgba(0,0,0,.04);
                transition: transform .2s ease, box-shadow .2s ease;
            }
            .nc-note-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 28px rgba(0,0,0,.09);
            }
            .nc-note-icon {
                width: 48px; height: 48px;
                background: rgba(141,65,249,.1);
                flex-shrink: 0;
            }

            /* CTA */
            .nc-cta {
                background: linear-gradient(160deg, #0b0f19 0%, #172033 51%, #0b0f19 100%);
            }
            .nc-cta-bg {
                background: radial-gradient(116% 118% at 50% 100%, rgba(99,102,241,.15) 0%, rgba(218,70,239,.06) 45%, rgba(241,244,253,.03) 85%);
            }
            .nc-cta-orb {
                border-radius: 50%;
                filter: blur(90px);
                pointer-events: none;
                z-index: 1;
            }
            .nc-cta-orb-1 {
                width: 400px; height: 400px;
                top: -120px; left: -80px;
                background: radial-gradient(circle, rgba(99,102,241,.3) 0%, transparent 70%);
            }
            .nc-cta-orb-2 {
                width: 350px; height: 350px;
                bottom: -80px; right: -60px;
                background: radial-gradient(circle, rgba(217,70,239,.28) 0%, transparent 70%);
            }
            .nc-cta-pill {
                background: rgba(255,186,8,.1);
                border: 1px solid rgba(255,186,8,.28);
            }
            .nc-trust-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }
            .nc-trust-item {
                background: rgba(255,255,255,.05);
                border: 1px solid rgba(255,255,255,.09);
                transition: background .2s ease;
            }
            .nc-trust-item:hover {
                background: rgba(141,65,249,.12);
            }
            .nc-trust-icon {
                width: 44px; height: 44px;
                background: rgba(141,65,249,.28);
            }
            .nc-brand-strip {
                background: rgba(255,255,255,.04);
                border: 1px solid rgba(255,255,255,.08);
            }
            @media (max-width: 480px) {
                .nc-trust-grid { grid-template-columns: 1fr; }
            }
        `}</style>
    </>
);

export default NotesAndCta;
