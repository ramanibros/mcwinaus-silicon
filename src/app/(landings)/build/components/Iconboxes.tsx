'use client';
import React from 'react';
import Image from 'next/image';
import icon01 from '@/assets/img/landing/online-courses/icons/01.svg';
import icon02 from '@/assets/img/landing/online-courses/icons/02.svg';
import icon03 from '@/assets/img/landing/online-courses/icons/03.svg';
import {Card, CardBody, Col, Row} from 'react-bootstrap';

const iconBoxes = [
    {
        id: 1,
        icon: icon01,
        title: '25K+ Online Video Courses',
        description:
            'Leo condimentum dignissim venenatis sit dignissim vel. Adipiscing tristique dictum vitae elementum neque.',
    },
    {
        id: 2,
        icon: icon02,
        title: 'Mentor-Based Learning',
        description:
            'Ac dapibus lacus, malesuada ridiculus donec condimentum nunc vestibulum. Mi feugiat tellus faucibus fermentum mattis ultrices.',
    },
    {
        id: 3,
        icon: icon03,
        title: 'Lifetime Access',
        description:
            'Donec interdum risus convallis tristique quis elit. Sapien turpis enim, viverra cursus facilisis dignissim condimentum.',
    },
    {
        id: 1,
        icon: icon01,
        title: '25K+ Online Video Courses',
        description:
            'Leo condimentum dignissim venenatis sit dignissim vel. Adipiscing tristique dictum vitae elementum neque.',
    },
    {
        id: 2,
        icon: icon02,
        title: 'Mentor-Based Learning',
        description:
            'Ac dapibus lacus, malesuada ridiculus donec condimentum nunc vestibulum. Mi feugiat tellus faucibus fermentum mattis ultrices.',
    },
    {
        id: 3,
        icon: icon03,
        title: 'Lifetime Access',
        description:
            'Donec interdum risus convallis tristique quis elit. Sapien turpis enim, viverra cursus facilisis dignissim condimentum.',
    },
];

const Iconboxes = () => {
    return (
        <section className="container pt-1 pt-xl-3 pb-5">
            <h2 className="h1 pb-3 pb-md-0 mb-md-5">How our <span className="text-gradient-primary">Developing</span> Help you to build.</h2>

            <Row xs={1} md={3} className="g-4 pt-2 pt-md-4 pb-lg-2">
                {iconBoxes.map(item => (
                    <Col key={item.id}>
                        <Card className="card-hover h-100 mx-2">
                            <CardBody>
                                <div className="d-table position-relative p-3 mb-4">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={32}
                                        height={32}
                                        className="position-relative zindex-2"
                                    />
                                    <span
                                        className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-circle opacity-8"></span>
                                </div>
                                <h3 className="h5 pb-1 mb-2">{item.title}</h3>
                                <p className="mb-0">{item.description}</p>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Iconboxes;
