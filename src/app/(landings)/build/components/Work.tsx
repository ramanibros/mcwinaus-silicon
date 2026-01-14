'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import ass1 from '@/assets/img/build-service/tools/angular.png';
import ass2 from '@/assets/img/build-service/tools/java_226777.png';
import ass3 from '@/assets/img/build-service/tools/php_9496483.png';
import ass4 from '@/assets/img/build-service/tools/programing_15484303.png';
import ass5 from '@/assets/img/build-service/tools/python_1387537.png';
import ass6 from '@/assets/img/build-service/tools/science_10303368.png';
import ass7 from '@/assets/img/build-service/tools/shopify_5968919.png';
import ass8 from '@/assets/img/build-service/tools/wordpress_174881.png';

import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import Image from 'next/image';

const brands = [
    {name: 'ass1', image: ass1},
    {name: 'ass2', image: ass2},
    {name: 'ass3', image: ass3},
    {name: 'ass4', image: ass4},
    {name: 'ass5', image: ass5},
    {name: 'ass6', image: ass6},
    {name: 'ass7', image: ass7},
    {name: 'ass8', image: ass8},
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
                        <Link href="#" className="card card-hover border-0 shadow-sm mx-2">
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
