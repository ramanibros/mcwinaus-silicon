'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import Link from 'next/link';
import {Container} from 'react-bootstrap';
import Image from 'next/image';
import ass1 from "@/assets/img/brand-service/tools/figma_5968705.png";
import ass2 from "@/assets/img/brand-service/tools/hatchful.png";
import ass3 from "@/assets/img/brand-service/tools/illustrator_5611037.png";
import ass4 from "@/assets/img/brand-service/tools/logo_10651757.png";
import ass5 from "@/assets/img/brand-service/tools/looka.png";
import ass6 from "@/assets/img/brand-service/tools/after-effects_5968428.png";
import ass7 from "@/assets/img/brand-service/tools/photoshop.png";
import ass8 from "@/assets/img/brand-service/tools/kittl.png";

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
        <Container className="my-lg-4 my-xl-5" style={{marginTop:'0 !important', paddingTop:'0 !important'}}>
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
