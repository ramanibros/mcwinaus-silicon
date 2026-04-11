'use client';

import React, {useEffect, useRef, useState} from 'react'; // Added useEffect, useRef, useState
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Badge, Card, CardBody, Container} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';

type NewsItem = {
    id: number;
    category: string;
    date: string;
    title: string;
    link: string;
    description: string;
    image: string;
    likes: number;
    comments: number;
    shares: number;
};


const NewsSlider = () => {
    // State for news data
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    // Added refs for animation
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    // Fetch data from JSON
    useEffect(() => {
        fetch('/data/blogData.json')
            .then(response => response.json())
            .then(data => {
                // Get the last 5 items from the data
                const lastFiveItems = data.slice(-5);
                setNewsData(lastFiveItems);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
                setLoading(false);
            });
    }, []);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className=" border-bottom border-light py-5" style={{
            background: 'linear-gradient(127deg,rgba(255, 255, 255, 0) 0%, rgba(247, 215, 255, 0.4) 54%, rgba(195, 186, 255, 1) 100%);',
        }}>
            <Container className="py-md-3 py-lg-5">
                {/* Updated h2 with refs */}
                <h3 ref={h2Ref} className="h1 text-center pb-2">
                    News &amp; <span ref={spanRef} className="text-gradient-primary">Insights</span>
                </h3>

                <div className="position-relative mx-md-2 px-md-5">
                    <button
                        type="button"
                        id="news-prev"
                        className="btn btn-prev btn-icon btn-sm position-absolute top-50 start-0 translate-middle-y mt-n4 d-none d-md-inline-flex"
                        aria-label="Previous"
                    >
                        <IconifyIcon icon="bx:chevron-left" fontSize={20}/>
                    </button>
                    <button
                        type="button"
                        id="news-next"
                        className="btn btn-next btn-icon btn-sm position-absolute top-50 end-0 translate-middle-y mt-n4 d-none d-md-inline-flex"
                        aria-label="Next"
                    >
                        <IconifyIcon icon="bx:chevron-right" fontSize={20}/>
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={8}
                        loop
                        navigation={{
                            prevEl: '#news-prev',
                            nextEl: '#news-next',
                        }}
                        pagination={{clickable: true}}
                        breakpoints={{
                            0: {slidesPerView: 1},
                            560: {slidesPerView: 2},
                            992: {slidesPerView: 3},
                        }}
                        className="swiper-nav-onhover mx-n2"
                    >
                        {newsData.map(item => (
                            <SwiperSlide key={item.id} className="h-auto py-3">
                                <Card className="p-md-3 p-2 border-0 shadow-sm card-hover-primary h-100 mx-2">
                                    <div className="card-image-container mb-3">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="card-img-top rounded-3"
                                            style={{ 
                                                width: '100%',
                                                height: '200px',
                                                display: 'block'
                                            }}
                                            onError={(e) => {
                                                // Fallback to existing image if image fails to load
                                                e.currentTarget.src = '/images/blog/blog1.png';
                                            }}
                                        />
                                    </div>
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
                                        <h4 className="h6">
                                            <Link href={item.link} className="stretched-link">
                                                {item.title}
                                            </Link>
                                        </h4>
                                        <p className="mb-0">{item.description}</p>
                                    </CardBody>
                                    {/*<CardFooter className="d-flex align-items-center py-4 text-muted border-top-0">
                    <div className="d-flex align-items-center me-3">
                      <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                      <span className="fs-sm">{item.likes}</span>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                      <span className="fs-sm">{item.comments}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                      <span className="fs-sm">{item.shares}</span>
                    </div>
                  </CardFooter>*/}
                                </Card>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default NewsSlider;