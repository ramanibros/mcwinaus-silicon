'use client';
import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, FreeMode} from 'swiper/modules';
import brand1 from '@/assets/img/client/cl-1.png';
import brand2 from '@/assets/img/client/cl-2.png';
import brand3 from '@/assets/img/client/cl-3.png';
import brand4 from '@/assets/img/client/cl-4.png';
import brand5 from '@/assets/img/client/cl-5.png';
import brand6 from '@/assets/img/client/cl-6.png';
import brand7 from '@/assets/img/client/cl-7.png';
import brand8 from '@/assets/img/client/cl-8.webp';
import Link from 'next/link';

const brands1 = [
    {id: 1, logo: brand1, alt: 'Brand 1', link: '#'},
    {id: 2, logo: brand2, alt: 'Brand 2', link: '#'},
    {id: 3, logo: brand3, alt: 'Brand 3', link: '#'},
    {id: 4, logo: brand4, alt: 'Brand 4', link: '#'},
    {id: 5, logo: brand5, alt: 'Brand 5', link: '#'},
    {id: 6, logo: brand6, alt: 'Brand 6', link: '#'},
    {id: 7, logo: brand7, alt: 'Brand 7', link: '#'},
    {id: 8, logo: brand8, alt: 'Brand 8', link: '#'},
];

const Brands = () => {
    return (
        <section className="container mt-2 mb-lg-2 mb-xl-4 pt-3 pt-lg-5">
             <h2 className="text-center pb-md-2">Trusted by Leading &amp; Companies</h2>
            <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                freeMode={{
                    enabled: true,
                    momentum: false, // IMPORTANT for smooth flow
                }}
                autoplay={{
                    delay: 0, // no stop between slides
                    disableOnInteraction: false,
                }}
                speed={6000} // higher = smoother & slower movement
                breakpoints={{
                    0: {slidesPerView: 2, spaceBetween: 4},
                    600: {slidesPerView: 3, spaceBetween: 16},
                    991: {slidesPerView: 4, spaceBetween: 24},
                    1200: {slidesPerView: 5, spaceBetween: 38},
                }}
                className="mx-n2"
            >
                {brands1.map(brand => (
                    <SwiperSlide key={brand.id} className="py-3">
                        <Link href={brand.link} className="card card-body card-hover px-2 mx-2">
                            <Image
                                src={brand.logo}
                                alt={brand.alt}
                                width={120}
                                height={50}
                                className="d-block mx-auto my-2"
                            />
                        </Link>
                    </SwiperSlide>
                ))}

                <div className="swiper-pagination position-relative pt-2 mt-4"></div>
            </Swiper>
        </section>
    );
};

export default Brands;
