import Image, { StaticImageData } from 'next/image';
import React from 'react';
import blog01 from '@/assets/img/blog/01.jpg';
import blog02 from '@/assets/img/blog/02.jpg';
import blog03 from '@/assets/img/blog/03.jpg';
import blog04 from '@/assets/img/blog/04.jpg';
import blog05 from '@/assets/img/blog/05.jpg';
import blog06 from '@/assets/img/blog/06.jpg';
import blog07 from '@/assets/img/blog/07.jpg';
import blog08 from '@/assets/img/blog/08.jpg';
import blog09 from '@/assets/img/blog/09.jpg';

import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar02 from '@/assets/img/avatar/02.jpg';
import avatar03 from '@/assets/img/avatar/03.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import {Badge, CardBody, Col, OverlayTrigger, Row, Tooltip} from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

type NewsItem = {
  id: number;
  category: string;
  date: string;
  title: string;
  link: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
};

const newsData: NewsItem[] = [
  {
    id: 5,
    category: 'Social Media Marketing',
    date: 'Sept 10, 2025',
    title: 'Local Link Building: Perth-Focused Strategies That Actually Work',
    link: '/blog/local-link-building-perth-strategies',
    description:
        'In the competitive Perth digital landscape, local SEO and smart link building are crucial for outperforming rivals and attracting real',
    likes: 5,
    comments: 3,
    shares: 9,
  },
  {
    id: 4,
    category: 'Digital Marketing',
    date: 'Sept 9, 2025',
    title: 'Why Businesses in Perth Should Choose a Local SEO Agency',
    link: '/blog/why-perth-businesses-should-choose-local-seo-agency',
    description:
        'In today’s digital environment, every Perth business owner recognizes the challenge: standing out online isn’t easy. Yet, with nearly half',
    likes: 8,
    comments: 7,
    shares: 3,
  },
  {
    id: 3,
    category: 'Digital Marketing',
    date: 'Aug 30, 2025',
    title: 'Digital Marketing Tips for Perth-Based Businesses: Grow Smarter in 2025',
    link: '/blog/digital-marketing-tips-for-perth-based-businesses-grow-smarter-in-2025',
    description:
        'In 2025, digital marketing isn’t just a side strategy — it’s the backbone of business growth. For Perth-based businesses',
    likes: 6,
    comments: 1,
    shares: 5,
  },
  {
    id: 2,
    category: 'Web Design & Development',
    date: 'Aug 22, 2025',
    title: 'Custom Website vs. Template: Which Is Right for Your Business?',
    link: '/blog/custom-website-vs-template-right-for-business',
    description:
        'In 2025, your website isn’t just a digital presence — it’s your first impression, sales channel, and brand identity all',
    likes: 8,
    comments: 4,
    shares: 2,
  },
  {
    id: 1,
    category: 'Social Media Markting',
    date: 'July 30, 2025',
    title: 'The Ultimate Digital Marketing Checklist for Australian Startups',
    link: '/blog/digital-marketing-checklist-australian-startups',
    description:
        'Launching a startup in Australia in 2025? Whether you’re bootstrapped or backed by funding, digital marketing is your lifeline for',
    likes: 2,
    comments: 0,
    shares: 3,
  },
];


const GridPost = () => {
  return (
    <Row className="row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
      {newsData.map(item => (
        <Col className="pb-3" key={item.id}>
          <article className="card border-0 shadow-sm h-100">
            <CardBody className="pb-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <Badge
                    bg="secondary"
                    className="fs-sm text-nav text-decoration-none position-relative zindex-2"
                >
                  {item.category}
                </Badge>
                <span className="fs-sm text-muted">{item.date}</span>
              </div>
              <h3 className="h6">
                <Link href={item.link} className="stretched-link">
                  {item.title}
                </Link>
              </h3>
              <p className="mb-0">{item.description}</p>
            </CardBody>
          </article>
        </Col>
      ))}
    </Row>
  );
};

export default GridPost;
