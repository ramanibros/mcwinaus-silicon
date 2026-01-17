'use client';
import React, { useState, useEffect, useRef } from 'react'; // Added useEffect, useRef
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import testi1 from '@/assets/img/portfolio/aspireuniforms.png';
import testi2 from '@/assets/img/portfolio/austaire.png';
import testi3 from '@/assets/img/portfolio/blackdiamond.png';
import testi4 from '@/assets/img/portfolio/completeairsystems.png';
import testi5 from '@/assets/img/portfolio/icpgroupaustralia.png';
import testi6 from '@/assets/img/portfolio/jgwbookkeepingservices.png';
import testi7 from '@/assets/img/portfolio/levitaactive.png';
import testi8 from '@/assets/img/portfolio/quinnsrockstoolhire.png';
import testi9 from '@/assets/img/portfolio/sfeg.png';

import { Card, CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const testimonials = [
  {
    id: 1,
    text:
        'Aspire Uniforms provides complete uniform and branding solutions for businesses of all sizes.\n' +
        'We design and supply high-quality uniforms that combine comfort, durability, and style.\n' +
        'Our custom branding services help businesses create a strong and consistent identity.\n' +
        'From concept to delivery, we focus on precision and attention to detail.\n' +
        'Helping teams look professional, confident, and brand-ready every day.',
    name: 'Aspire Uniforms',
    role: 'A House of Uniforms & Branding Solutions',
    bg: testi1,
  },
  {
    id: 2,
    text:
        'D&Y Duct is recognised as one of Perth’s premier manufacturers of high-quality ducting and HVAC products.\n' +
        'Our motto, "Quality in Business, Quality in Product, Quality in Service", drives everything we do.\n' +
        'Local manufacturing allows strict quality control at every stage.\n' +
        'We ensure reliability, durability, and performance.\n' +
        'Delivering superior HVAC solutions our customers trust.',
    name: 'Austaire',
    role: 'D&Y Flexible Duct',
    bg: testi2,
  },
  {
    id: 3,
    text:
        'Black Diamond Security is a professional security company delivering dependable protection services.\n' +
        'We offer a wide range of tailored security solutions.\n' +
        'Our experienced team prioritises safety and reliability.\n' +
        'Services are designed to meet strict budget requirements.\n' +
        'Trusted security solutions even in challenging economic times.',
    name: 'Black Diamond',
    role: 'A Security Company',
    bg: testi3,
  },
  {
    id: 4,
    text:
        'Complete Air Systems is Perth\'s number one choice for premium quality residential and commercial air conditioning – we\'ve been in the business for over 30 years! We design and install systems to suit the lifestyle needs of our clients, and take into consideration the ever-increasing cost of power and changing architectural designs.',
    name: 'Complete Air Systems',
    role: 'A Complete Air Solutions',
    bg: testi4,
  },
  {
    id: 5,
    text:
        'ICP Group Australia is a forward-thinking security provider based in Perth, Western Australia, committed to delivering high-quality, cost-effective security solutions without compromising on efficiency, integrity, or reliability. As the security landscape evolves, so do the expectations placed on professional security providers.',
    name: 'ICP Group Australia',
    role: 'A Security Company',
    bg: testi5,
  },
  {
    id: 6,
    text:
        'JGW Bookkeeping is proudly owned and operated by Jackie Wadhwani, Principal, who brings a wealth of expertise and a personal touch to the local business community in Alkimos, WA, and the greater Perth region. With over 20 years of experience in the finance industry and a master\'s degree in accounting, JGW Bookkeeping is dedicated to supporting the growth and success of fellow small businesses and entrepreneurs in the area.',
    name: 'JGW Bookkeeping services',
    role: 'A Bookkeeping Service Provide',
    bg: testi6,
  },
  {
    id: 7,
    text:
        'Levita Active delivers affordable, high-quality activewear made for everyday movement. Designed with comfort, flexibility, and durability in mind. Each piece supports your active lifestyle without compromising style. Thoughtfully crafted to fit, flatter, and perform. So you can move confidently, wherever your day takes you.',
    name: 'Levita Active',
    role: 'Affordable, High-quality Activewear',
    bg: testi7,
  },
  {
    id: 8,
    text:
        'Quinns Rocks Tool Hire is your trusted local partner for high-quality tool rentals in Perth\'s northern suburbs. Founded by a skilled mechanic with over 19 years of experience, our business started as a small venture with just a few tools for hire. Today, we\'ve grown to offer a diverse range of 30+ tools, with more being added regularly.',
    name: 'Quinns Rocks Tool Hire',
    role: 'A tool rental service',
    bg: testi8,
  },
  {
    id: 9,
    text:
        'Saraceni Fire Engineering Group has a team of highly trained and experienced Fire Engineering Consultants led by Director, Loui Saraceni who in addition to his qualifications and experience in all aspects of fire engineering, has practical experience in the building industry as a registered building practitioner.',
    name: 'Saraceni Fire Engineering Group',
    role: 'A Fire Engineer Consultant',
    bg: testi9,
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Added refs for animation
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  // Added animation effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (h2Ref.current && spanRef.current) {
      const h2Text = h2Ref.current;
      const spanText = spanRef.current;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,
        }
      });

      // Animate the entire h2
      tl.fromTo(h2Text,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      );

      // Animate the gradient span with a different effect
      tl.fromTo(spanText,
        {
          opacity: 0,
          scale: 0.8,
          backgroundSize: "200% 200%",
          backgroundPosition: "100% 0%"
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          backgroundPosition: "0% 100%",
        },
        "-=0.8"
      );
    }

    // Cleanup
    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (h2Ref.current && trigger.trigger === h2Ref.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="container mb-5 pt-2 pb-3 py-md-4 py-lg-5">
      {/* Updated h2 with refs */}
      <h2 ref={h2Ref} className="h1 pb-2 pb-lg-0 mb-4 mb-lg-5 text-center">
        Work That Speaks. <span ref={spanRef} className="text-gradient-primary">Results That Scale.</span>
      </h2>
      <Row>
        <Col md={7}>
          <Card className="border-0 shadow-sm p-4 p-xxl-5 mb-4 me-xxl-4">
            <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{
                  delay: 3000, // no stop between slides
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: '.page-prev',
                  nextEl: '.page-next',
                }}
                className="mx-0"
                onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            >
              {testimonials.map(item => (
                <SwiperSlide key={item.id} className="h-auto">
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <h1 className="fw-semibold lh-base mb-0">{item.name}</h1>
                      <span className="fs-sm text-muted">{item.role}</span>
                      <div className="hr-indicator mb-5 mt-2" />
                      <p className="fs-lg mb-0">{item.text}</p>
                    </blockquote>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>

          <nav className="pagination d-flex justify-content-center justify-content-md-start">
            <div className="page-item me-2">
              <button className="page-link page-prev btn-icon btn-sm" aria-label="Previous">
                <IconifyIcon icon="bx:chevron-left" fontSize={18} />
              </button>
            </div>
            <ul className="list-unstyled d-flex justify-content-center w-auto mb-0"></ul>
            <div className="page-item ms-2">
              <button className="page-link page-next btn-icon btn-sm" aria-label="Next">
                <IconifyIcon icon="bx:chevron-right" fontSize={18} />
              </button>
            </div>
          </nav>
        </Col>

        <Col md={5} className="d-none d-md-block">
          <div className="swiper-tabs">
            {testimonials.map((item, idx) => (
              <Card
                key={item.id}
                className={`bg-transparent border-0 swiper-tab ${
                  activeIndex === idx ? 'active' : ''
                }`}
              >
                <CardBody
                  className="p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center"
                  style={{ backgroundImage: `url(${item.bg.src})` }}
                ></CardBody>
                <div className="card-footer d-flex w-100 border-0 pb-0">
                  <div className="border-start-xl ps-xl-4 ms-xl-2">
                    <h5 className="fw-semibold lh-base mb-0">{item.name}</h5>
                    <span className="fs-sm text-muted">{item.role}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;