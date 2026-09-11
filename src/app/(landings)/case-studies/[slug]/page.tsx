import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import IconifyIcon from '@/components/IconifyIcon';
import NavbarPage from '@/components/navbar/Navbar-page';
import Subscribe from '@/components/common/subscribe';
import Footer from '@/components/common/Footer';
import { caseStudies, getCaseStudyBySlug } from '../data';
import GenixCaseStudyLayout from './components/GenixCaseStudyLayout';

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | McWIN iTECH',
    };
  }

  const canonicalUrl = `https://www.mcwinitech.com.au/case-studies/${caseStudy.slug}/`;
  const description = caseStudy.overview || caseStudy.subtitle;
  const keywords = [
    caseStudy.title,
    caseStudy.category,
    caseStudy.industry,
    caseStudy.country,
    'case study',
    'McWIN iTECH',
  ];

  return {
    title: `${caseStudy.title} | McWIN iTECH Case Study`,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'en_AU',
      url: canonicalUrl,
      siteName: 'McWIN iTECH',
      title: `${caseStudy.title} | McWIN iTECH Case Study`,
      description,
    },
    twitter: {
      card: 'summary',
      title: `${caseStudy.title} | McWIN iTECH Case Study`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

const CaseStudyPage = async ({ params }: Params) => {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const isGenixCaseStudy = caseStudy.slug === 'genixhr-anvaya-hr-transformation';

  return (
    <>
      <NavbarPage
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />

      <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item">
            <Link href="/case-studies">Case Studies</Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            {caseStudy.title}
          </li>
        </ol>
      </nav>

      <section className="container mt-4 pt-lg-2 pb-4">
        <div className="rounded-4 border p-4 p-lg-5">
          <div className="row align-items-end g-4">
            <div className="col-lg-8">
              <span className="text-primary fw-semibold text-uppercase fs-sm">Case study</span>
              <h1 className="h1 mt-2 mb-3">{caseStudy.title}</h1>
              <p className="fs-lg text-muted mb-0">{caseStudy.subtitle}</p>
              <p className="text-muted fs-sm mt-3 mb-0">Prepared by McWIN iTECH</p>
            </div>
            <div className="col-lg-4">
              <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                <span className="badge border bg-transparent text-primary">
                  {caseStudy.category}
                </span>
                <span className="badge border bg-transparent text-success">
                  {caseStudy.industry}
                </span>
                <span className="badge border bg-transparent text-info">{caseStudy.country}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5 pt-2 pb-2">
        <div className="row g-4 mb-5">
          <div className="col-lg-7">
            <span className="text-primary fw-semibold text-uppercase fs-sm">The client</span>
            <h2 className="h2 mt-2 mb-3">
              {caseStudy.clientHeading || 'Building a stronger local search presence'}
            </h2>
            <p className="mb-0">{caseStudy.clientOverview || caseStudy.overview}</p>
          </div>
          <div className="col-lg-5">
            <div className="card border h-100 bg-transparent">
              <div className="card-body p-4">
                <span className="text-primary fw-semibold text-uppercase fs-sm">At a glance</span>
                {caseStudy.snapshot ? (
                  caseStudy.snapshot.map((item, index) => (
                    <div
                      className={`d-flex justify-content-between ${index < caseStudy.snapshot!.length - 1 ? 'border-bottom' : ''} ${index === caseStudy.snapshot!.length - 1 ? 'pt-3' : 'py-3'}`}
                      key={item.label}
                    >
                      <span className="text-muted">{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="d-flex justify-content-between border-bottom py-3">
                      <span className="text-muted">Campaign</span>
                      <strong>8 months</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-3">
                      <span className="text-muted">Focus</span>
                      <strong>Local SEO</strong>
                    </div>
                    <div className="d-flex justify-content-between pt-3">
                      <span className="text-muted">Service area</span>
                      <strong>Perth north</strong>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {isGenixCaseStudy ? (
          <GenixCaseStudyLayout caseStudy={caseStudy} />
        ) : (
          <>
            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="card border h-100 bg-transparent">
                  <div className="card-body p-4 p-lg-5">
                    <span className="text-primary fw-semibold text-uppercase fs-sm">
                      01 — Challenge
                    </span>
                    <h2 className="h4 mt-2 mb-3">Competing for the searches that matter</h2>
                    {caseStudy.challengeIntro ? (
                      caseStudy.challengeIntro.map(paragraph => <p key={paragraph}>{paragraph}</p>)
                    ) : (
                      <ul className="mb-0 ps-3">
                        {caseStudy.challenge.map(point => (
                          <li key={point} className="mb-2">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border h-100 bg-transparent">
                  <div className="card-body p-4 p-lg-5">
                    <span className="text-primary fw-semibold text-uppercase fs-sm">
                      02 — Strategy
                    </span>
                    <h2 className="h4 mt-2 mb-3">
                      {caseStudy.strategyHeading || 'One connected SEO campaign'}
                    </h2>
                    {caseStudy.solutionRationale && <p>{caseStudy.solutionRationale}</p>}
                    {caseStudy.approachIntro ? (
                      <p>{caseStudy.approachIntro}</p>
                    ) : (
                      <ul className="mb-0 ps-3">
                        {caseStudy.solution.map(point => (
                          <li key={point} className="mb-2">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {caseStudy.approach && (
              <div className="mb-4">
                <div className="mb-4">
                  <span className="text-primary fw-semibold text-uppercase fs-sm">
                    03 — Our approach
                  </span>
                  <h2 className="h2 mt-2 mb-0">
                    {caseStudy.approachHeading || 'Built around how customers actually search'}
                  </h2>
                </div>
                <div className="row g-3">
                  {caseStudy.approach.map((item, index) => (
                    <div className="col-md-6 col-lg-4" key={item.title}>
                      <div className="card border h-100 bg-transparent">
                        <div className="card-body p-4">
                          <span className="text-primary fw-semibold">0{index + 1}</span>
                          <h3 className="h5 mt-3 mb-2">{item.title}</h3>
                          <p className="text-muted mb-0">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="card border h-100 bg-transparent">
                  <div className="card-body p-4 p-lg-5">
                    <span className="text-primary fw-semibold text-uppercase fs-sm">
                      {caseStudy.deliveryHeading || 'What we delivered'}
                    </span>
                    <h2 className="h4 mt-2 mb-3">
                      {caseStudy.deliverySubheading || 'Practical SEO improvements'}
                    </h2>
                    <ul className="mb-0 ps-3">
                      {caseStudy.services.map(item => (
                        <li key={item} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border h-100 bg-transparent">
                  <div className="card-body p-4 p-lg-5">
                    <span className="text-primary fw-semibold text-uppercase fs-sm">
                      Supporting tools
                    </span>
                    <h2 className="h4 mt-2 mb-3">Reporting and technology</h2>
                    <ul className="mb-0 ps-3">
                      {caseStudy.techStack.map(item => (
                        <li key={item} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {caseStudy.additionalSections?.map(section => (
              <div className="card border bg-transparent mb-4" key={section.title}>
                <div className="card-body p-4 p-lg-5">
                  <span className="text-primary fw-semibold text-uppercase fs-sm">
                    Supporting section
                  </span>
                  <h2 className="h4 mt-2 mb-3">{section.title}</h2>
                  {section.paragraphs.map(paragraph => (
                    <p key={paragraph} className="mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="card border bg-transparent mb-4">
              <div className="card-body p-4 p-lg-5">
                <span className="text-primary fw-semibold text-uppercase fs-sm">04 — Results</span>
                <h2 className="h2 mt-2 mb-3">
                  {caseStudy.resultsHeading || 'Search performance snapshot'}
                </h2>
                {caseStudy.resultsIntro?.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {caseStudy.metrics && (
                  <div className="row row-cols-2 g-4 border-top border-bottom py-4 my-4">
                    {caseStudy.metrics.map(metric => (
                      <div className="col" key={metric.label}>
                        <div className="h3 mb-1">{metric.value}</div>
                        <div className="text-muted">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                <ul className="mb-0 ps-3">
                  {caseStudy.results.map(item => (
                    <li key={item} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {caseStudy.conclusion && (
              <div className="card border h-100 bg-transparent mb-4">
                <div className="card-body p-4 p-lg-5">
                  <span className="text-primary fw-semibold text-uppercase fs-sm">
                    05 — Conclusion
                  </span>
                  <p className="fs-lg fw-normal mt-3 mb-0">{caseStudy.conclusion}</p>
                </div>
              </div>
            )}

            {caseStudy.testimonial && (
              <div className="card border bg-transparent mb-4">
                <div className="card-body p-4 p-lg-5">
                  <span className="text-primary fw-semibold text-uppercase fs-sm">
                    Client feedback
                  </span>
                  <p className="fs-lg fw-normal mt-3 mb-3">“{caseStudy.testimonial.quote}”</p>
                  <p className="mb-0 text-primary fw-semibold">— {caseStudy.testimonial.author}</p>
                </div>
              </div>
            )}

            {caseStudy.cta && (
              <div className="card border bg-transparent">
                <div className="card-body p-4 p-lg-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
                  <div>
                    <h2 className="h4 mb-2">{caseStudy.cta.title}</h2>
                    <p className="mb-3">{caseStudy.cta.description}</p>
                  </div>
                  <Link href="/contact" className="btn btn-primary flex-shrink-0">
                    Talk to our team
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <Subscribe />
      <Footer />
    </>
  );
};

export default CaseStudyPage;
