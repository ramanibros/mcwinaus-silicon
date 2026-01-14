'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import Image from 'next/image';

import ass1 from '@/assets/img/grow-service/tools/Ahrefslogo.png';
import ass2 from '@/assets/img/grow-service/tools/Google-Search-Console.png';
import ass3 from '@/assets/img/grow-service/tools/Google_analytics.png';
import ass4 from '@/assets/img/grow-service/tools/rankmath.png';
import ass5 from '@/assets/img/grow-service/tools/samrush.png';
import ass6 from '@/assets/img/grow-service/tools/screeming.png';
import ass7 from '@/assets/img/grow-service/tools/spyfu.png';
import ass8 from '@/assets/img/grow-service/tools/yoast.png';


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
                    <h2 className="h1 mb-4"><span className="text-gradient-primary">Your Growth Engine,</span> Built To
                        Scale</h2>
                    <p className="fs-lg text-muted mb-0">
                        Award-winning marketing powered by deep Perth market insight. We've got you covered—turning
                        clicks into customers with strategies that deliver long-term results.
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
