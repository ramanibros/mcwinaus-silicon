import Link from 'next/link';
import React from 'react';
import {Col, Row} from 'react-bootstrap';

const PageTitle = () => {
    return (
        <section className="container pb-5 mb-md-2 mb-lg-4 mb-xl-5" style={{marginBottom: '0 !important'}}>
            <Row className="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
                <Col lg={6}>
                    <h1 className="display-2 mb-0"><span className="text-gradient-primary">Mobile Apps</span> That
                        Convert
                    </h1>
                </Col>
                <Col lg={6} xl={5} className="offset-xl-1 pt-3 pt-sm-4 pt-lg-3">
                    <p className="pb-4 mb-1 mb-md-2 mb-xl-3">
                        Perth-built apps driving Aussie revenue—67% higher engagement nationwide without wasting
                        thousands on offshore devs. A local team that genuinely cares, delivering frictionless
                        iOS/Android experiences, ready to scale.
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
