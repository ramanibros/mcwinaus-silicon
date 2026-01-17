import React from 'react';
import layer from '@/assets/img/build-service/build.png';
import Image from 'next/image';
import {Col, Container, Row} from 'react-bootstrap';
import Parallax from '@/components/Parallax';

const Hero = () => {
    return (
        <section className="position-relative overflow-hidden zindex-2 pt-4 pt-md-5 mt-5 pb-5">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Parallax>
                        <Col xl={6} lg={7} md={6} sm={8} xs={10} className="offset-xl-1 order-md-2">
                            <div className="parallax mx-auto" style={{maxWidth: '556px'}}>
                                <div className="parallax-layer" data-depth="0.1">
                                    <Image src={layer} alt="Bubble"/>
                                </div>
                                {/*<div className="parallax-layer" data-depth="-0.2">
                                    <Image src={layer02} alt="Bubble"/>
                                </div>
                                <div className="parallax-layer" data-depth="-0.3">
                                    <Image src={layer03} alt="Bubble"/>
                                </div>
                                <div className="parallax-layer" data-depth="0.4">
                                    <Image src={layer04} alt="Bubble"/>
                                </div>
                                <div className="parallax-layer" data-depth="-0.1">
                                    <Image src={layer05} alt="Screen"/>
                                </div>
                                <div className="parallax-layer" data-depth="0.2">
                                    <Image src={layer06} alt="Screen"/>
                                </div>*/}
                            </div>
                        </Col>
                    </Parallax>

                    <Col lg={5} md={6} className="text-center text-md-start order-md-1">
                        <h1 className="display-5 mb-lg-4"><span
                            className="text-gradient-primary">Built on Trust.</span> Powered by Perth Expertise.</h1>
                        <p className="fs-xl pb-3 pb-lg-0 mb-4 mb-lg-5">
                            Get high-converting digital foundations that 3x sales without spending thousands. Your
                            growth partner delivers guaranteed results—local team, long-term success.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
