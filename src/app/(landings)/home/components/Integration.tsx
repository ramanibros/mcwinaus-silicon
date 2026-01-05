'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import integration01Light from '@/assets/img/landing/saas-4/integrations/01-light.png';
import integration01Dark from '@/assets/img/landing/saas-4/integrations/01-dark.png';
import integration02Light from '@/assets/img/landing/saas-4/integrations/02-light.png';
import integration02Dark from '@/assets/img/landing/saas-4/integrations/02-dark.png';
import integration03Light from '@/assets/img/landing/saas-4/integrations/03-light.png';
import integration03Dark from '@/assets/img/landing/saas-4/integrations/03-dark.png';
import integration04Light from '@/assets/img/landing/saas-4/integrations/04-light.png';
import integration04Dark from '@/assets/img/landing/saas-4/integrations/04-dark.png';
import integration05Light from '@/assets/img/landing/saas-4/integrations/05-light.png';
import integration05Dark from '@/assets/img/landing/saas-4/integrations/05-dark.png';
import { Card } from 'react-bootstrap';
import vueLight from "@/assets/img/landing/software-agency-2/services/vue-light.png";
import vueDark from "@/assets/img/landing/software-agency-2/services/vue-dark.png";
import nodeLight from "@/assets/img/landing/software-agency-2/services/node-light.png";
import nodeDark from "@/assets/img/landing/software-agency-2/services/node-dark.png";
import javaLogo from "@/assets/img/landing/software-agency-2/services/java.png";
import reactLogo from "@/assets/img/landing/software-agency-2/services/react.png";

const integrationsData = [
    { light: vueLight, dark: vueDark, alt: 'Vue.js', width: 110 },
    { light: nodeLight, dark: nodeDark, alt: 'Node.js', width: 100 },
    { light: javaLogo, dark: javaLogo, alt: 'Java', width: 100 },
    { light: reactLogo, dark: reactLogo, alt: 'React', width: 110 },
    { light: vueLight, dark: vueDark, alt: 'Vue.js', width: 110 },
    { light: nodeLight, dark: nodeDark, alt: 'Node.js', width: 100 },
    { light: javaLogo, dark: javaLogo, alt: 'Java', width: 100 },
    { light: reactLogo, dark: reactLogo, alt: 'React', width: 110 }
]

const Integration = () => {
  return (
    <section className="container pb-lg-5 pb-md-4 pb-3 mt-5">
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
          0: { slidesPerView: 2, spaceBetween: 4 },
          600: { slidesPerView: 3, spaceBetween: 16 },
          991: { slidesPerView: 4, spaceBetween: 24 },
          1200: { slidesPerView: 5, spaceBetween: 38 },
        }}
        className="mt-n2 mb-xl-2"
      >
        {integrationsData.map((integration, idx) => (
          <SwiperSlide key={idx} className="h-auto py-2">
            <Card
              as="a"
              className="card-body card-hover h-100 py-sm-4 py-3 px-3 mx-2 border-0 shadow-sm"
            >
              <div className="d-block d-dark-mode-none" style={{margin:"auto"}}>
                <Image
                  src={integration.light}
                  alt={`Integration ${idx + 1}`}
                  width={integration.width}
                  className="mx-auto my-1 my-sm-0"
                />
              </div>
              <div className="d-none d-dark-mode-block" style={{margin:"auto"}}>
                <Image
                  src={integration.dark}
                  alt={`Integration ${idx + 1} Dark`}
                  width={integration.width}
                  className="mx-auto my-1 my-sm-0"
                />
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Integration;
