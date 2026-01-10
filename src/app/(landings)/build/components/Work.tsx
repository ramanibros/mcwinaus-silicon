'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import google from '@/assets/img/brands/google.svg';
import zoom from '@/assets/img/brands/zoom.svg';
import slack from '@/assets/img/brands/slack.svg';
import gmail from '@/assets/img/brands/gmail.svg';
import trello from '@/assets/img/brands/trello.svg';
import mailChimp from '@/assets/img/brands/mailchimp.svg';
import dropbox from '@/assets/img/brands/dropbox.svg';
import evernote from '@/assets/img/brands/evernote.svg';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import Image from 'next/image';

const brands = [
    {name: 'Google', image: google},
    {name: 'Zoom', image: zoom},
    {name: 'Slack', image: slack},
    {name: 'Gmail', image: gmail},
    {name: 'Trello', image: trello},
    {name: 'Mailchimp', image: mailChimp},
    {name: 'Dropbox', image: dropbox},
    {name: 'Evernote', image: evernote},
];

const Work = () => {
    return (
        <Container className="py-5 my-md-2 my-lg-4 my-xl-5">
            <Row className="justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
                <Col lg={8} md={9} className="text-center">
                    <h2 className="h1 mb-4">Integrate Top <span className="text-gradient-primary">Work Tools</span></h2>
                    <p className="fs-lg text-muted mb-0">
                        React, AWS, MySQL, Stripe and Australia Posts are future-proof platforms that scale with your
                        Perth business. We've got you covered.
                    </p>
                </Col>
            </Row>

            <Swiper
                modules={[Pagination]}
                pagination={{clickable: true}}
                spaceBetween={8}
                slidesPerView={2}
                breakpoints={{
                    500: {slidesPerView: 3},
                    600: {slidesPerView: 4},
                    768: {slidesPerView: 5},
                    850: {slidesPerView: 6},
                    1000: {slidesPerView: 7},
                    1200: {slidesPerView: 8},
                }}
                className="mx-n2"
            >
                {brands.map((brand, i) => (
                    <SwiperSlide key={i} className="py-3">
                        <Link href="#" className="card card-hover border-0 shadow-sm py-3 mx-2">
                            <div className="card-body">
                                <Image src={brand.image} alt={brand.name} className="d-block mx-auto"/>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default Work;
