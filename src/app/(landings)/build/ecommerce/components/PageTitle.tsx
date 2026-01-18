import Link from 'next/link';
import React from 'react';
import {Col, Row} from 'react-bootstrap';

const PageTitle = () => {
    return (
        <section className="container pb-5 mb-md-2 mb-lg-4 mb-xl-5" style={{marginBottom: '0 !important'}}>
            <Row className="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
                <Col lg={6}>
                    <h1 className="display-2 mb-0"><span className="text-gradient-primary">eCommerce</span> Stores That
                        Sell
                    </h1>
                </Col>
                <Col lg={6} xl={5} className="offset-xl-1 pt-3 pt-sm-4 pt-lg-3">
                    <p className="pb-4 mb-1 mb-md-2 mb-xl-3">
                        Perth-built online shops are smashing sales records—67% higher conversions across Australia
                        without wasting thousands on failed platforms. A local team who genuinely care, delivering
                        scalable cart fillers that grow with your business.
                    </p>
                    <Link href="/contact" className="btn btn-lg btn-primary shadow-primary">
                        Start your project
                    </Link>
                </Col>
            </Row>
            <hr/>
        </section>
    );
};

export default PageTitle;
