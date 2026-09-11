import { Badge, CardBody, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { caseStudies } from '../data';

const GridCaseStudies = () => {
  return (
    <Row className="row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
      {caseStudies.map(item => (
        <Col className="pb-3" key={item.slug}>
          <article className="card border h-100 bg-transparent">
            <CardBody className="p-4 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between mb-4 gap-2 flex-wrap">
                <Badge bg="secondary" className="fs-sm text-nav text-decoration-none">
                  {item.category}
                </Badge>
                <span className="fs-sm text-muted">{item.date}</span>
              </div>
              <h3 className="h4 mb-2">
                <Link
                  href={`/case-studies/${item.slug}`}
                  className="stretched-link text-decoration-none"
                >
                  {item.title}
                </Link>
              </h3>
              <p className="text-muted mb-4">{item.subtitle}</p>
              <div className="mt-auto d-flex align-items-end justify-content-between gap-3">
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-faded-primary text-primary">{item.industry}</span>
                  <span className="badge bg-faded-success text-success">{item.country}</span>
                </div>
                <span className="fs-sm fw-semibold text-primary text-nowrap">View study →</span>
              </div>
            </CardBody>
          </article>
        </Col>
      ))}
    </Row>
  );
};

export default GridCaseStudies;
