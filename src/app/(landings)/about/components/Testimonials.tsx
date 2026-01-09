'use client';
import avatar01 from '@/assets/img/avatar/01.jpg';
import avatr05 from '@/assets/img/avatar/05.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import clutchLight from '@/assets/img/about/clutch-logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import avatar1 from "@/assets/img/avatar/13.jpg";
import avatar2 from "@/assets/img/avatar/14.jpg";
import avatar3 from "@/assets/img/avatar/11.jpg";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: StaticImageData;
};


const testimonials = [
  {
    id: 1,
    text: "McWIN iTECH is Perth's best digital company! Their services are awesome, professional, 24/7 support and affordable pricing, making them a big advantage. Highly recommended!",
    author: "Courtenay Holgate",
    role: "Owner",
    avatar: avatar1,
  },
  {
    id: 2,
    text: "Very pleased with the work; helped with putting my ideas on paper when it came to rebranding my business, doing a complete new website and also managing my business's social media.",
    author: "Alysha Cheetham",
    role: "Client",
    avatar: avatar2,
  },
  {
    id: 3,
    text: "Very good service. Completed a job for me on very short notice and at a very high standard. I would highly recommend them.",
    author: "Jaymie Andersen",
    role: "Client",
    avatar: avatar3,
  },
  {
    id: 4,
    text: "Very helpful, worked through with me step by step till we got what I wanted.",
    author: "All Right Towing",
    role: "Business Owner",
    avatar: avatar1,
  },
  {
    id: 5,
    text: "Very happy with their service 😊 highly professional team",
    author: "Cristina Kennedy",
    role: "Client",
    avatar: avatar2,
  }
];

const Testimonials = () => {
  return (
    <section className="container pb-5 mb-2 mb-md-4 mb-xl-5">
      <Row>
        <Col md={5} className="mb-4 mb-md-0">
          <Card className="justify-content-center bg-dark h-100 p-4 p-lg-5">
            <div className="p-2">
              <h3 className="display-4 text-primary mb-1">200+</h3>
              <h2 className="text-light pb-5 mb-2">Clients Already Served</h2>
              <Link
                href="#"
                className="d-inline-flex align-items-center rounded-3 text-decoration-none py-3 px-4"
                style={{ backgroundColor: '#3e4265' }}
              >
                <div className="pe-3">
                  <div className="fs-xs text-light text-uppercase opacity-70 mb-2">Reviewed on</div>
                  <Image src={clutchLight} alt="Clutch" width={97} height={32} />
                </div>
                <div className="ps-1">
                  <div className="text-nowrap mb-2">
                    {[...Array(5)].map((_, i) => (
                      <IconifyIcon key={i} icon="bxs:star" className="text-warning" />
                    ))}
                  </div>
                  <div className="text-light opacity-70">49 reviews</div>
                </div>
              </Link>
            </div>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="border-0 shadow-sm p-4 p-xxl-5">
            <div className="d-flex justify-content-between pb-4 mb-2">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <IconifyIcon icon="bxs:quote-left" />
              </span>
              <div className="d-flex">
                <button
                  type="button"
                  id="prev"
                  className="btn btn-prev btn-icon btn-sm me-2"
                  aria-label="Previous"
                >
                  <IconifyIcon icon="bx:chevron-left" fontSize={20} />
                </button>
                <button
                  type="button"
                  id="next"
                  className="btn btn-next btn-icon btn-sm ms-2"
                  aria-label="Next"
                >
                  <IconifyIcon icon="bx:chevron-right" fontSize={20} />
                </button>
              </div>
            </div>

            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={24}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{ prevEl: '#prev', nextEl: '#next' }}
              className="mx-0 mb-md-n2 mb-xxl-n3"
            >
              {testimonials.map(t => (
                <SwiperSlide key={t.id} className="h-auto">
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">{t.text}</p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        width={48}
                        height={48}
                        className="rounded-circle"
                      />
                      <div className="ps-3">
                        <h5 className="fw-semibold lh-base mb-0">{t.author}</h5>
                        <span className="fs-sm text-muted">{t.role}</span>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination position-relative pt-3 mt-4"></div>
            </Swiper>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;
