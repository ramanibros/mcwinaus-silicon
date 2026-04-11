'use client';

import React, { useState, useEffect } from 'react';
import {Badge, CardBody, Col, Row} from 'react-bootstrap';
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

const GridPost = () => {
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/blogData.json')
            .then(response => response.json())
            .then(data => {
                setNewsData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Row className="row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
            {newsData.map(item => (
                <Col className="pb-3" key={item.id}>
                    <article className="card border-0 shadow-sm h-100">
                            <div className="card-image-container">
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
