import React from 'react';
import heroBg from '@/assets/img/about/hero-bg.svg';
import ClutchDark from '@/assets/img/about/clutch-dark.png';
import ClutchLight from '@/assets/img/about/clutch-light.png';
import Image from 'next/image';
import IconifyIcon from '@/components/IconifyIcon';
import about01 from '@/assets/img/about/hero/Gemini_Generated_Image_k4mhhik4mhhik4mh.png';
import about02 from '@/assets/img/about/hero/Gemini_Generated_Image_a36tgka36tgka36t.png';
import hero03 from '@/assets/img/about/hero/Gemini_Generated_Image_k5c2csk5c2csk5c2.png';
import hero04 from '@/assets/img/about/hero/Gemini_Generated_Image_wris3bwris3bwris.png';
import {Breadcrumb, BreadcrumbItem, Col, Container, Nav, Row} from 'react-bootstrap';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="position-relative pt-5">
            <div
                className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
                style={{backgroundImage: `url(${heroBg.src})`}}
            >
                <div className="d-lg-none" style={{height: '960px'}}></div>
                <div className="d-none d-lg-block" style={{height: '768px'}}></div>
            </div>

            <Container className="position-relative zindex-5 pt-5">
                <Row>
                    <Col lg={6}>
                        <nav className="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4" aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <Link href="/index">
                                        <IconifyIcon icon="bx:home-alt" className="fs-lg me-1"/>
                                        Home
                                    </Link>
                                </li>
                                <span className="d-flex align-items-center mx-2">
                  <IconifyIcon icon="bx:chevrons-right"/>
                </span>
                                <li className="breadcrumb-item active" aria-current="page">
                                    About us
                                </li>
                            </ol>
                        </nav>

                        <h1 className="pb-2 pb-md-3">About <span className="text-gradient-primary">McWIN iTECH</span>
                        </h1>
                        <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" style={{maxWidth: '526px'}}>
                            <b>Perth's trusted digital growth partner</b> delivering award-winning websites, SEO
                            strategies, mobile apps, and custom software for Australian businesses—from Perth startups
                            to national leaders. <b>Local team. Long-term results. Your success is guaranteed.</b>
                        </p>
                        <Image src={ClutchDark} className=" d-dark-mode-none" width="175" alt="Clutch"/>
                        <Image
                            src={ClutchLight}
                            className="d-none d-dark-mode-block"
                            width="175"
                            alt="Clutch"
                        />
                        <Row className="row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
                            <Col>
                                <h3 className="h2 mb-2">30+</h3>
                                <p className="mb-0">
                                    <strong>IT</strong> Experts
                                </p>
                            </Col>
                            <Col>
                                <h3 className="h2 mb-2">100+</h3>
                                <p className="mb-0">
                                    <strong>Clients</strong> per Month
                                </p>
                            </Col>
                            <Col>
                                <h3 className="h2 mb-2">500+</h3>
                                <p className="mb-0">
                                    <strong>Requests</strong> per Week
                                </p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6} className="mt-xl-3 pt-5 pt-lg-4">
                        <Row className="row-cols-2 gx-3 gx-lg-4">
                            <Col className="pt-lg-5 mt-lg-1">
                                <Image src={about01} className="d-block rounded-3 mb-3 mb-lg-4" alt="Image"/>
                                <Image src={about02} className="d-block rounded-3" alt="Image"/>
                            </Col>
                            <Col>
                                <Image src={hero03} className="d-block rounded-3 mb-3 mb-lg-4" alt="Image"/>
                                <Image src={hero04} className="d-block rounded-3" alt="Image"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
