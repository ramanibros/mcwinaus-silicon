'use client';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import brand1 from '@/assets/img/client/cl-1.png';
import brand2 from '@/assets/img/client/cl-2.png';
import brand3 from '@/assets/img/client/cl-3.png';
import brand4 from '@/assets/img/client/cl-4.png';
import brand5 from '@/assets/img/client/cl-5.png';
import brand6 from '@/assets/img/client/cl-6.png';
import brand7 from '@/assets/img/client/cl-7.png';
import brand8 from '@/assets/img/client/cl-8.webp';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

type Brand = {
  id: number;
  image: StaticImageData;
  alt: string;
  href: string;
};

const brands: Brand[] = [
  { id: 1, image: brand1, alt: 'Brand 1', href: '#' },
  { id: 2, image: brand2, alt: 'Brand 2', href: '#' },
  { id: 3, image: brand3, alt: 'Brand 3', href: '#' },
  { id: 4, image: brand4, alt: 'Brand 4', href: '#' },
  { id: 5, image: brand5, alt: 'Brand 5', href: '#' },
  { id: 6, image: brand6, alt: 'Brand 6', href: '#' },
  { id: 7, image: brand7, alt: 'Brand 7', href: '#' },
  { id: 8, image: brand8, alt: 'Brand 8', href: '#' },
];

const Brands = () => {
  return (
    <section className="pb-4 pb-lg-5 mb-3 mt-5">
      <Container>
        <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
          <h2 className="mb-0">Trusted by Awesome Clients</h2>

          <div className="d-md-flex d-none ms-4">
            <Button
              id="prev-brand"
              variant="light"
              size="sm"
              className="btn btn-prev btn-icon btn-sm me-2"
              aria-label="Previous"
            >
              <IconifyIcon icon="bx:chevron-left" fontSize={20} />
            </Button>
            <Button
              id="next-brand"
              variant="light"
              size="sm"
              className="btn btn-next btn-icon btn-sm ms-2"
              aria-label="Next"
            >
              <IconifyIcon icon="bx:chevron-right" fontSize={20} />
            </Button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            prevEl: '#prev-brand',
            nextEl: '#next-brand',
          }}
          pagination={{
            el: '.brands-pagination',
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 8 },
            500: { slidesPerView: 3, spaceBetween: 8 },
            650: { slidesPerView: 4, spaceBetween: 8 },
            900: { slidesPerView: 5, spaceBetween: 8 },
            1100: { slidesPerView: 6, spaceBetween: 8 },
          }}
          freeMode={{
            enabled: true,
            momentum: false, // IMPORTANT for smooth flow
          }}
          autoplay={{
            delay: 0, // no stop between slides
            disableOnInteraction: false,
          }}
          speed={6000} // higher = smoother & slower movement
        >
          {brands.map(brand => (
            <SwiperSlide key={brand.id} className="py-3">
              <Link href={brand.href} className="card card-body card-hover px-2 mx-2">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  width={120}
                  height={50}
                  className="d-block mx-auto my-2"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination brands-pagination position-relative pt-3 mt-4 d-md-none d-flex"></div>
      </Container>
    </section>
  );
};

export default Brands;
