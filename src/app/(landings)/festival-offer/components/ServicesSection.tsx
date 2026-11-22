'use client';
import React from 'react';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

type PricingCard = {
    num: string;
    icon: string;
    accentGrad: string;
    iconColor: string;
    badge?: string;
    title: string;
    desc: string;
    festivalPrice: string;
    regularPrice: string | null;
    saving: string | null;
    features: string[];
    featured: boolean;
};

const pricingCards: PricingCard[] = [
    {
        num: '01',
        icon: 'bxl:wordpress',
        accentGrad: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
        iconColor: '#6366f1',
        title: 'WordPress Website',
        desc: 'A professional, mobile-ready 5-page website that builds credibility and converts visitors into enquiries.',
        festivalPrice: '$499',
        regularPrice: '$699',
        saving: 'Save $200',
        featured: false,
        features: [
            'Up to 5 pages (Home, About, Services, Contact + 1)',
            'Responsive desktop, tablet & mobile layout',
            'Modern design aligned with your brand',
            'Contact form & WhatsApp integration',
            'Social media links & on-page SEO setup',
            'Website launch assistance',
        ],
    },
    {
        num: '02',
        icon: 'bx:image',
        accentGrad: 'linear-gradient(90deg, #8d41f9, #d946ef)',
        iconColor: '#8d41f9',
        badge: 'Most Popular',
        title: 'Social Media Pack',
        desc: 'A complete monthly content package — 10 ready-to-publish posts with captions, hashtags and scheduling.',
        festivalPrice: '$179',
        regularPrice: '$249',
        saving: 'Save $70',
        featured: true,
        features: [
            '10 custom-designed post creatives',
            'Monthly content calendar',
            'Headline + caption for every post',
            'Relevant hashtags per post',
            'Clear call-to-action in each post',
            'Brand-aligned design (logo, colours)',
            'Up to 2 consolidated revision rounds',
            '8 additional posts available on request',
        ],
    },
    {
        num: '03',
        icon: 'bx:code-alt',
        accentGrad: 'linear-gradient(90deg, #4c82f7, #6366f1)',
        iconColor: '#4c82f7',
        title: 'Custom Software',
        desc: 'Have a process to automate or an idea to build? We scope, quote and deliver tailored digital solutions.',
        festivalPrice: 'Custom Quote',
        regularPrice: null,
        saving: 'Scope-Based',
        featured: false,
        features: [
            'Business & web applications',
            'CRM / ERP systems',
            'Workflow automation tools',
            'Dashboards & reporting',
            'Third-party API integrations',
            'Transparent pricing after scoping call',
        ],
    },
];

const ServicesSection = () => (
    <section id="festival-pricing" className="ss-section py-5">
        <Container className="py-md-2 py-lg-5">

            <div className="text-center mb-5">
                <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2 rounded-pill ss-eyebrow">
                    <IconifyIcon icon="bx:star" className="text-warning fs-sm"/>
                    <span className="fs-xs fw-bold text-uppercase" style={{letterSpacing: '1.5px', color: '#ffba08'}}>
                        Festival Special — Save Up To 30%
                    </span>
                </div>
                <h2 className="h1 mb-3">
                    Choose Your <span className="text-gradient-primary">Festival Package</span>
                </h2>
                <p className="fs-lg text-muted mx-auto" style={{maxWidth: '38rem'}}>
                    Limited-time pricing on our most popular services. Pick the one that
                    moves your business forward — or combine them all.
                </p>
            </div>

            <Row className="g-4 align-items-stretch justify-content-center">
                {pricingCards.map((card, i) => (
                    <Col key={i} lg={4} md={6}>
                        <div className={`ss-card h-100 d-flex flex-column position-relative overflow-hidden ${card.featured ? 'ss-card-featured' : ''}`}>

                            {card.badge && (
                                <div className="ss-popular-badge position-absolute top-0 end-0 px-3 py-1 fs-xs fw-bold text-uppercase">
                                    {card.badge}
                                </div>
                            )}

                            <div className="ss-accent-bar" style={{background: card.accentGrad}}/>

                            <div className="p-4 pb-0">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div
                                        className="ss-icon-wrap d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                        style={{background: `${card.iconColor}1a`}}
                                    >
                                        <IconifyIcon icon={card.icon} className="fs-2" style={{color: card.iconColor}}/>
                                    </div>
                                    <div>
                                        <span className="ss-num-badge fw-bold fs-xs text-uppercase" style={{color: card.iconColor, letterSpacing: '1px'}}>
                                            {card.num}
                                        </span>
                                        <h3 className="h5 mb-0 mt-1">{card.title}</h3>
                                    </div>
                                </div>

                                <p className="text-muted fs-sm mb-4">{card.desc}</p>

                                <div className="ss-price-row d-flex align-items-end gap-2 mb-1">
                                    <span className="ss-festival-price text-gradient-primary">{card.festivalPrice}</span>
                                    {card.regularPrice && (
                                        <span className="text-muted fs-sm text-decoration-line-through mb-1">
                                            {card.regularPrice}
                                        </span>
                                    )}
                                </div>
                                {card.saving && (
                                    <span className={`ss-save-pill fs-xs fw-bold ${card.regularPrice ? 'ss-save-green' : 'ss-save-purple'}`}>
                                        {card.saving}
                                    </span>
                                )}

                                <div className="ss-divider my-4"/>
                            </div>

                            <div className="px-4 pb-2 flex-grow-1">
                                <p className="fs-xs fw-bold text-uppercase text-muted mb-3" style={{letterSpacing: '1px'}}>
                                    What&apos;s included
                                </p>
                                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                                    {card.features.map((f, fi) => (
                                        <li key={fi} className="d-flex align-items-start gap-2">
                                            <IconifyIcon icon="bx:check-circle" className="fs-lg flex-shrink-0 mt-1" style={{color: card.iconColor}}/>
                                            <span className="fs-sm text-muted">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-4 pt-4 mt-auto">
                                <Link
                                    href="/contact"
                                    className={`ss-cta-btn d-flex align-items-center justify-content-center gap-2 w-100 ${card.featured ? 'ss-cta-featured' : 'ss-cta-outline'}`}
                                >
                                    <IconifyIcon icon="bx:phone-call" className="fs-5"/>
                                    {card.regularPrice ? 'Claim This Offer' : 'Get a Free Quote'}
                                    <IconifyIcon icon="bx:right-arrow-alt" className="fs-5"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>

        <style jsx>{`
            .ss-section { background: var(--si-body-bg); }

            .ss-eyebrow {
                background: rgba(255,186,8,.08);
                border: 1px solid rgba(255,186,8,.22);
            }

            .ss-card {
                background: var(--si-card-bg, #fff);
                border-radius: 20px;
                border: 1px solid var(--si-border-color, rgba(0,0,0,.08));
                box-shadow: 0 4px 24px rgba(0,0,0,.06);
                transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
            }
            .ss-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 20px 48px rgba(0,0,0,.12);
            }
            .ss-card-featured {
                border-color: rgba(141,65,249,.35);
                box-shadow: 0 8px 40px rgba(141,65,249,.18);
            }
            .ss-card-featured:hover {
                box-shadow: 0 20px 56px rgba(141,65,249,.28);
            }

            .ss-popular-badge {
                background: linear-gradient(135deg, #8d41f9, #d946ef);
                color: #fff;
                border-radius: 0 20px 0 12px;
                font-size: .68rem;
                letter-spacing: 1px;
            }

            .ss-accent-bar {
                height: 4px;
                border-radius: 20px 20px 0 0;
            }

            .ss-icon-wrap { width: 60px; height: 60px; }

            .ss-num-badge { display: block; }

            .ss-festival-price {
                font-size: 2.4rem;
                font-weight: 900;
                line-height: 1;
            }

            .ss-save-pill {
                display: inline-block;
                padding: 3px 10px;
                border-radius: 999px;
            }
            .ss-save-green {
                background: rgba(34,197,94,.12);
                color: #22c55e;
                border: 1px solid rgba(34,197,94,.25);
            }
            .ss-save-purple {
                background: rgba(141,65,249,.12);
                color: #a855f7;
                border: 1px solid rgba(141,65,249,.25);
            }

            .ss-divider {
                height: 1px;
                background: var(--si-border-color, rgba(0,0,0,.08));
            }

            .ss-cta-btn {
                padding: 13px 20px;
                border-radius: 12px;
                font-weight: 700;
                font-size: .95rem;
                text-decoration: none;
                transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
            }
            .ss-cta-featured {
                background: linear-gradient(135deg, #8d41f9, #d946ef);
                color: #fff !important;
                box-shadow: 0 6px 24px rgba(141,65,249,.35);
            }
            .ss-cta-featured:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 32px rgba(141,65,249,.5);
                color: #fff !important;
            }
            .ss-cta-outline {
                background: transparent;
                color: var(--si-body-color) !important;
                border: 2px solid var(--si-border-color, rgba(0,0,0,.12));
            }
            .ss-cta-outline:hover {
                border-color: rgba(141,65,249,.5);
                color: #8d41f9 !important;
                transform: translateY(-2px);
            }
        `}</style>
    </section>
);

export default ServicesSection;
