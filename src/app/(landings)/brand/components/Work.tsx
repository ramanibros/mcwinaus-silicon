'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import ass1 from '@/assets/img/brand-service/tools/figma_5968705.png';
import ass2 from '@/assets/img/brand-service/tools/hatchful.png';
import ass3 from '@/assets/img/brand-service/tools/illustrator_5611037.png';
import ass4 from '@/assets/img/brand-service/tools/logo_10651757.png';
import ass5 from '@/assets/img/brand-service/tools/looka.png';
import ass6 from '@/assets/img/brand-service/tools/after-effects_5968428.png';
import ass7 from '@/assets/img/brand-service/tools/canva.png';
import ass8 from '@/assets/img/brand-service/tools/kittl.png';

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
                    <h2 className="h1 mb-4">Integrate Top <span className="text-gradient-primary">Design</span> Tools
                    </h2>
                    <p className="fs-lg text-muted mb-0">
                        Streamline your Perth brand with tools that 3x workflow efficiency—Figma, Adobe XD, Sketch,
                        Framer, Webflow, etc. No learning curve, instant professional results.
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
                                <Image src={brand.image} alt={brand.name} className="d-block mx-auto service_tools"/>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default Work;
