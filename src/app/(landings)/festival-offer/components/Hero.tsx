'use client';

import React from 'react';
import Image from 'next/image';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import santaImage from '@/assets/img/festival-offer/santa-digital-offer.png';

const offerHighlights = [
    'Australian business focused',
    'Clear, practical packages',
    'Limited festival pricing',
];

const Hero = () => (
    <>
        <section className="festival-hero" data-bs-theme="dark">
            <div className="festival-hero__grid" aria-hidden="true"/>
            <div className="festival-hero__glow festival-hero__glow--one" aria-hidden="true"/>
            <div className="festival-hero__glow festival-hero__glow--two" aria-hidden="true"/>

            <Container className="festival-hero__container position-relative zindex-5">
                <Row className="align-items-center gy-5 gx-xl-5">
                    <Col lg={6} xl={7}>
                        <div className="festival-hero__content">
                            <div className="festival-hero__eyebrow">
                                <span className="festival-hero__eyebrow-icon" aria-hidden="true">
                                    <IconifyIcon icon="bx:party"/>
                                </span>
                                Festival growth offer
                            </div>

                            <h1 className="festival-hero__title">
                                Give Your Business
                                <span>A Stronger Digital Presence</span>
                            </h1>

                            <p className="festival-hero__lead">
                                Special festival pricing on website development, social media
                                content and custom software solutions.
                            </p>

                            <div className="festival-hero__special">
                                <span>Festival Special</span>
                                <span className="festival-hero__special-divider" aria-hidden="true"/>
                                <strong>Save Up To 30% On Selected Services</strong>
                            </div>

                            <div className="festival-hero__actions">
                                <a href="#festival-pricing" className="festival-hero__primary-btn">
                                    Explore Packages
                                    <IconifyIcon icon="bx:down-arrow-alt" className="fs-5"/>
                                </a>
                            </div>

                            <ul className="festival-hero__highlights">
                                {offerHighlights.map((highlight) => (
                                    <li key={highlight}>
                                        <IconifyIcon icon="bx:check" aria-hidden="true"/>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>

                    <Col lg={6} xl={5}>
                        <div className="festival-santa" aria-label="Santa presenting the festival digital offer">
                            <div className="festival-santa__halo" aria-hidden="true"/>
                            <span className="festival-santa__sparkle festival-santa__sparkle--one" aria-hidden="true">✦</span>
                            <span className="festival-santa__sparkle festival-santa__sparkle--two" aria-hidden="true">✦</span>
                            <span className="festival-santa__sparkle festival-santa__sparkle--three" aria-hidden="true">✦</span>

                            <div className="festival-santa__discount">
                                <span>Save up to</span>
                                <strong>30%</strong>
                                <small>Festival special</small>
                            </div>

                            <div className="festival-santa__deal festival-santa__deal--website">
                                <span className="festival-santa__deal-icon" aria-hidden="true">
                                    <IconifyIcon icon="bx:globe"/>
                                </span>
                                <span>
                                    <small>5-page website</small>
                                    <strong>$499</strong>
                                </span>
                            </div>

                            <div className="festival-santa__deal festival-santa__deal--social">
                                <span className="festival-santa__deal-icon" aria-hidden="true">
                                    <IconifyIcon icon="bx:camera"/>
                                </span>
                                <span>
                                    <small>10-post social pack</small>
                                    <strong>$179</strong>
                                </span>
                            </div>

                            <Image
                                src={santaImage}
                                alt="Santa Claus holding a laptop and a Christmas gift"
                                className="festival-santa__image"
                                priority
                                sizes="(max-width: 991px) 90vw, 42vw"
                            />

                            <div className="festival-santa__base" aria-hidden="true"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <style jsx global>{`
            .festival-hero {
                position: relative;
                isolation: isolate;
                overflow: hidden;
                min-height: 760px;
                display: flex;
                align-items: center;
                background:
                    radial-gradient(circle at 8% 20%, rgba(124, 58, 237, .3), transparent 34%),
                    radial-gradient(circle at 92% 82%, rgba(219, 39, 119, .22), transparent 32%),
                    linear-gradient(135deg, #07091b 0%, #111231 52%, #09091e 100%);
                color: #fff;
            }

            .festival-hero__container {
                padding-top: 9.5rem;
                padding-bottom: 4rem;
            }

            .festival-hero__grid {
                position: absolute;
                inset: 0;
                z-index: -3;
                opacity: .17;
                background-image:
                    linear-gradient(rgba(255,255,255,.11) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.11) 1px, transparent 1px);
                background-size: 64px 64px;
                mask-image: linear-gradient(to bottom, transparent 0%, #000 28%, #000 72%, transparent 100%);
            }

            .festival-hero__glow {
                position: absolute;
                z-index: -2;
                width: 26rem;
                height: 26rem;
                border-radius: 50%;
                filter: blur(90px);
                opacity: .24;
                pointer-events: none;
            }

            .festival-hero__glow--one { top: 4rem; right: 12%; background: #8b5cf6; }
            .festival-hero__glow--two { bottom: -10rem; left: 18%; background: #ec4899; }
            .festival-hero__content { max-width: 47rem; }

            .festival-hero__eyebrow,
            .festival-hero__title,
            .festival-hero__lead,
            .festival-hero__special,
            .festival-hero__actions,
            .festival-hero__highlights {
                animation: festival-hero-content-in .72s cubic-bezier(.22, 1, .36, 1) both;
            }

            .festival-hero__eyebrow { animation-delay: .1s; }
            .festival-hero__title { animation-delay: .2s; }
            .festival-hero__lead { animation-delay: .32s; }
            .festival-hero__special { animation-delay: .44s; }
            .festival-hero__actions { animation-delay: .56s; }
            .festival-hero__highlights { animation-delay: .68s; }

            .festival-santa {
                animation: festival-hero-santa-in .9s .28s cubic-bezier(.22, 1, .36, 1) both;
            }

            @keyframes festival-hero-content-in {
                from { opacity: 0; transform: translate3d(-34px, 22px, 0); }
                to { opacity: 1; transform: translate3d(0, 0, 0); }
            }

            @keyframes festival-hero-santa-in {
                from { opacity: 0; transform: translate3d(54px, 16px, 0) scale(.96); }
                to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
            }

            .festival-hero__eyebrow {
                width: fit-content;
                display: inline-flex;
                align-items: center;
                gap: .65rem;
                margin-bottom: 1.6rem;
                padding: .45rem .8rem .45rem .5rem;
                border: 1px solid rgba(253, 230, 138, .28);
                border-radius: 999px;
                background: rgba(253, 230, 138, .07);
                color: #fde68a;
                font-size: .72rem;
                font-weight: 800;
                letter-spacing: .09em;
                text-transform: uppercase;
            }

            .festival-hero__eyebrow-icon {
                display: grid;
                place-items: center;
                width: 1.7rem;
                height: 1.7rem;
                border-radius: 50%;
                background: rgba(253, 230, 138, .14);
                font-size: 1rem;
            }

            .festival-hero__eyebrow-divider {
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background: currentColor;
                opacity: .65;
            }

            .festival-hero__title {
                max-width: 48rem;
                margin: 0 0 1.5rem;
                color: #fff;
                font-size: clamp(3.25rem, 5.9vw, 5.8rem);
                font-weight: 850;
                letter-spacing: -.06em;
                line-height: .95;
                text-wrap: balance;
            }

            .festival-hero__title span {
                display: block;
                padding: .08em 0 .1em;
                background: linear-gradient(90deg, #c4b5fd 0%, #f0abfc 48%, #fda4af 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }

            .festival-hero__lead {
                max-width: 39rem;
                margin: 0 0 1.45rem;
                color: rgba(226, 232, 240, .78);
                font-size: clamp(1rem, 1.45vw, 1.15rem);
                line-height: 1.75;
            }

            .festival-hero__special {
                width: fit-content;
                display: inline-flex;
                align-items: center;
                gap: .7rem;
                margin-bottom: 1.8rem;
                padding: .68rem .9rem;
                border: 1px solid rgba(253, 230, 138, .22);
                border-radius: .75rem;
                background: linear-gradient(90deg, rgba(245, 158, 11, .1), rgba(225, 29, 72, .08));
                color: #fde68a;
                font-size: .7rem;
                font-weight: 800;
                letter-spacing: .065em;
                line-height: 1.35;
                text-transform: uppercase;
            }

            .festival-hero__special strong {
                color: #fff;
                font-weight: 800;
            }

            .festival-hero__special-divider {
                width: 1px;
                align-self: stretch;
                background: rgba(253, 230, 138, .3);
            }

            .festival-hero__actions {
                display: flex;
                margin-bottom: 2rem;
            }

            .festival-hero__primary-btn {
                min-height: 3.45rem;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: .55rem;
                padding: .85rem 1.6rem;
                border: 1px solid rgba(255, 255, 255, .1);
                border-radius: .9rem;
                background: linear-gradient(135deg, #7c3aed, #db2777);
                box-shadow: 0 16px 34px rgba(124, 58, 237, .28);
                color: #fff;
                font-weight: 750;
                text-decoration: none;
                transition: transform .2s ease, box-shadow .2s ease;
            }

            .festival-hero__primary-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 20px 40px rgba(124, 58, 237, .42);
                color: #fff;
            }

            .festival-hero__primary-btn:focus-visible {
                outline: 3px solid #fde68a;
                outline-offset: 3px;
            }

            .festival-hero__highlights {
                display: flex;
                flex-wrap: wrap;
                gap: .75rem 1.2rem;
                margin: 0;
                padding: 0;
                list-style: none;
                color: rgba(226, 232, 240, .72);
                font-size: .82rem;
                font-weight: 600;
            }

            .festival-hero__highlights li { display: inline-flex; align-items: center; gap: .35rem; }
            .festival-hero__highlights svg { color: #a7f3d0; font-size: 1.05rem; }

            .festival-santa {
                position: relative;
                min-height: 590px;
                max-width: 34rem;
                margin-left: auto;
                display: flex;
                align-items: flex-end;
                justify-content: center;
            }

            .festival-santa__halo {
                position: absolute;
                top: 9%;
                left: 50%;
                width: 92%;
                aspect-ratio: 1;
                transform: translateX(-50%);
                border: 1px solid rgba(255, 255, 255, .13);
                border-radius: 50%;
                background:
                    radial-gradient(circle at 50% 38%, rgba(253, 230, 138, .16), transparent 40%),
                    linear-gradient(145deg, rgba(124, 58, 237, .28), rgba(219, 39, 119, .11));
                box-shadow: inset 0 0 70px rgba(196, 181, 253, .08), 0 30px 90px rgba(0, 0, 0, .18);
            }

            .festival-santa__halo::before,
            .festival-santa__halo::after {
                content: '';
                position: absolute;
                inset: 7%;
                border: 1px dashed rgba(253, 230, 138, .17);
                border-radius: inherit;
            }

            .festival-santa__halo::after {
                inset: 18%;
                border-style: solid;
                border-color: rgba(255,255,255,.07);
            }

            .festival-santa__image {
                position: relative;
                z-index: 2;
                width: min(100%, 460px);
                height: auto;
                filter: drop-shadow(0 30px 32px rgba(0, 0, 0, .42));
            }

            .festival-santa__base {
                position: absolute;
                z-index: 1;
                bottom: 1.2rem;
                left: 50%;
                width: 78%;
                height: 2.2rem;
                transform: translateX(-50%);
                border-radius: 50%;
                background: rgba(0, 0, 0, .46);
                filter: blur(16px);
            }

            .festival-santa__discount {
                position: absolute;
                z-index: 4;
                top: 3.5rem;
                right: -.5rem;
                width: 8.2rem;
                aspect-ratio: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                transform: rotate(7deg);
                border: 2px solid rgba(255,255,255,.62);
                border-radius: 50%;
                background: linear-gradient(145deg, #f59e0b, #e11d48);
                box-shadow: 0 20px 46px rgba(225, 29, 72, .34), inset 0 0 0 5px rgba(255,255,255,.1);
                color: #fff;
                text-align: center;
            }

            .festival-santa__discount span,
            .festival-santa__discount small {
                font-size: .62rem;
                font-weight: 800;
                letter-spacing: .06em;
                line-height: 1;
                text-transform: uppercase;
            }

            .festival-santa__discount strong {
                margin: .15rem 0;
                font-size: 2.25rem;
                font-weight: 900;
                letter-spacing: -.07em;
                line-height: 1;
            }

            .festival-santa__deal {
                position: absolute;
                z-index: 5;
                min-width: 10.5rem;
                display: flex;
                align-items: center;
                gap: .65rem;
                padding: .65rem .8rem;
                border: 1px solid rgba(255,255,255,.18);
                border-radius: 1rem;
                background: rgba(11, 12, 35, .76);
                box-shadow: 0 16px 35px rgba(0,0,0,.28);
                backdrop-filter: blur(14px);
            }

            .festival-santa__deal--website { left: -1.5rem; top: 13rem; }
            .festival-santa__deal--social { right: -1rem; bottom: 5.2rem; }

            .festival-santa__deal-icon {
                flex-shrink: 0;
                display: grid;
                place-items: center;
                width: 2.1rem;
                height: 2.1rem;
                border-radius: .7rem;
                background: rgba(139, 92, 246, .2);
                color: #c4b5fd;
                font-size: 1.05rem;
            }

            .festival-santa__deal small,
            .festival-santa__deal strong { display: block; }
            .festival-santa__deal small { color: rgba(226,232,240,.62); font-size: .62rem; font-weight: 700; text-transform: uppercase; }
            .festival-santa__deal strong { color: #fff; font-size: 1.1rem; font-weight: 850; line-height: 1.2; }

            .festival-santa__sparkle {
                position: absolute;
                z-index: 3;
                color: #fde68a;
                text-shadow: 0 0 18px rgba(253, 230, 138, .65);
            }

            .festival-santa__sparkle--one { top: 6rem; left: 3rem; font-size: 1.4rem; }
            .festival-santa__sparkle--two { top: 14rem; right: 1.5rem; font-size: .8rem; }
            .festival-santa__sparkle--three { bottom: 10rem; left: 2rem; font-size: 1rem; }

            @media (max-width: 1199.98px) {
                .festival-hero__title { font-size: clamp(3rem, 5.2vw, 4.5rem); }
                .festival-santa__deal--website { left: 0; }
                .festival-santa__deal--social { right: 0; }
                .festival-santa__discount { right: 0; }
            }

            @media (max-width: 991.98px) {
                .festival-hero { min-height: auto; }
                .festival-hero__container { padding-top: 10rem; padding-bottom: 3rem; }
                .festival-hero__content { max-width: 44rem; margin-inline: auto; text-align: center; }
                .festival-hero__eyebrow,
                .festival-hero__special,
                .festival-hero__actions,
                .festival-hero__highlights { justify-content: center; margin-inline: auto; }
                .festival-hero__lead { margin-inline: auto; }
                .festival-santa { margin-inline: auto; }
            }

            @media (max-width: 575.98px) {
                .festival-hero__container { padding-top: 8.75rem; padding-bottom: 2.5rem; }
                .festival-hero__eyebrow { gap: .45rem; font-size: .6rem; }
                .festival-hero__title { font-size: clamp(2.65rem, 12.5vw, 3.5rem); }
                .festival-hero__special { align-items: stretch; gap: .55rem; font-size: .58rem; text-align: left; }
                .festival-hero__primary-btn { width: 100%; }
                .festival-hero__highlights { display: grid; justify-content: start; width: fit-content; text-align: left; }

                .festival-santa { min-height: 500px; margin-top: -1rem; }
                .festival-santa__image { width: min(100%, 360px); }
                .festival-santa__halo { top: 17%; width: 95%; }
                .festival-santa__discount { top: 4rem; right: 0; width: 6.8rem; }
                .festival-santa__discount strong { font-size: 1.85rem; }
                .festival-santa__deal { min-width: 9rem; padding: .55rem .65rem; }
                .festival-santa__deal--website { top: 12rem; left: 0; }
                .festival-santa__deal--social { right: 0; bottom: 2.7rem; }
                .festival-santa__deal small { font-size: .55rem; }
                .festival-santa__deal strong { font-size: .95rem; }
            }

            @media (prefers-reduced-motion: reduce) {
                .festival-hero__eyebrow,
                .festival-hero__title,
                .festival-hero__lead,
                .festival-hero__special,
                .festival-hero__actions,
                .festival-hero__highlights,
                .festival-santa {
                    animation: none;
                }

                .festival-hero__primary-btn { transition: none; }
            }
        `}</style>
    </>
);

export default Hero;
