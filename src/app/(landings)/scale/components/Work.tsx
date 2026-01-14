'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import Image from 'next/image';
import ass1 from "@/assets/img/scale-service/tools/alibabacloud.png";
import ass2 from "@/assets/img/scale-service/tools/aws.png";
import ass3 from "@/assets/img/scale-service/tools/azure.png";
import ass4 from "@/assets/img/scale-service/tools/digitalocean.png";
import ass5 from "@/assets/img/scale-service/tools/gcp.png";
import ass6 from "@/assets/img/scale-service/tools/ibm.png";
import ass7 from "@/assets/img/scale-service/tools/oracle.png";

const brands = [
    {name: 'ass1', image: ass1},
    {name: 'ass2', image: ass2},
    {name: 'ass3', image: ass3},
    {name: 'ass4', image: ass4},
    {name: 'ass5', image: ass5},
    {name: 'ass6', image: ass6},
    {name: 'ass7', image: ass7},
];

const Work = () => {
    return (
        <Container className="my-md-2 my-lg-4 my-xl-5">
            <Row className="justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
                <Col lg={8} md={9} className="text-center">
                    <h2 className="h1 mb-4">Integrate Top <span className="text-gradient-primary">Work Tools</span></h2>
                    <p className="fs-lg text-muted mb-0">
                        Seamlessly connect CRM, payments, accounting & shipping—67% faster workflows, 3x team efficiency
                        without wasting ad spend or tech stack chaos.
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
