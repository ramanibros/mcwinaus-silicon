import React from 'react';
import type { CaseStudy } from '../../data';

type Props = {
  caseStudy: CaseStudy;
};

const GenixCaseStudyLayout = ({ caseStudy }: Props) => {
  return (
    <div className="genix-case-study">
      <div className="row g-4 mb-4">
        <div className="col-lg-7">
          <div className="card border h-100 bg-transparent">
            <div className="card-body p-4 p-lg-5">
              <span className="text-primary fw-semibold text-uppercase fs-sm">
                01 — The challenge
              </span>
              <h2 className="h3 mt-2 mb-4">A manual, disconnected HR process</h2>
              {caseStudy.challengeIntro?.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card border h-100 bg-transparent">
            <div className="card-body p-4 p-lg-5">
              <span className="text-primary fw-semibold text-uppercase fs-sm">
                02 — The decision
              </span>
              <h2 className="h4 mt-2 mb-3">Why a custom solution was needed</h2>
              <p className="mb-0">{caseStudy.solutionRationale}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card border bg-transparent mb-4">
        <div className="card-body p-4 p-lg-5">
          <span className="text-primary fw-semibold text-uppercase fs-sm">03 — The solution</span>
          <h2 className="h3 mt-2 mb-3">GenixHR</h2>
          <p className="mb-0">{caseStudy.approachIntro}</p>
        </div>
      </div>

      {caseStudy.approach && (
        <div className="mb-4">
          <div className="mb-4">
            <span className="text-primary fw-semibold text-uppercase fs-sm">
              04 — Key modules & features
            </span>
            <h2 className="h3 mt-2 mb-0">One connected HR management system</h2>
          </div>
          <div className="row g-3">
            {caseStudy.approach.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div className="card border h-100 bg-transparent">
                  <div className="card-body p-4">
                    <span className="text-primary fw-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="h5 mt-3 mb-2">{item.title}</h3>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="card border bg-transparent mb-4">
        <div className="card-body p-4 p-lg-5">
          <span className="text-primary fw-semibold text-uppercase fs-sm">
            05 — How we solved each challenge
          </span>
          <h2 className="h3 mt-2 mb-4">Turning disconnected work into structured workflows</h2>
          <div className="row g-4">
            {caseStudy.services.map((item, index) => {
              const [challenge, solution] = item.split(' → ');
              return (
                <div className="col-md-6" key={item}>
                  <div className="border-top pt-3 h-100">
                    <span className="text-primary fw-semibold fs-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="h5 mt-2 mb-2">{challenge}</h3>
                    <p className="text-muted mb-0">{solution || item}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-lg-8">
          <div className="card border h-100 bg-transparent">
            <div className="card-body p-4 p-lg-5">
              <span className="text-primary fw-semibold text-uppercase fs-sm">
                06 — Technology stack
              </span>
              <h2 className="h3 mt-2 mb-4">Built for secure, reliable operations</h2>
              {caseStudy.techStack.map(item => {
                const [name, description] = item.split(': ');
                return (
                  <div className="border-top pt-3 mb-3" key={item}>
                    <h3 className="h5 mb-1">{name}</h3>
                    <p className="text-muted mb-0">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border h-100 bg-transparent">
            <div className="card-body p-4 p-lg-5">
              <span className="text-primary fw-semibold text-uppercase fs-sm">System scope</span>
              <div className="display-6 mt-3 mb-2">10</div>
              <p className="mb-3">purpose-built modules</p>
              <p className="text-muted mb-0">
                A cloud based HR SaaS platform connecting employee, payroll, leave, recruitment,
                document, task, correspondence, and tender workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card border bg-transparent mb-4">
        <div className="card-body p-4 p-lg-5">
          <span className="text-primary fw-semibold text-uppercase fs-sm">
            07 — Results & business impact
          </span>
          <h2 className="h3 mt-2 mb-3">One connected system for Anvaya</h2>
          {caseStudy.resultsIntro?.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="row g-3 mt-2">
            {caseStudy.results.map((item, index) => (
              <div className="col-md-6" key={item}>
                <div className="border-top pt-3 h-100">
                  <span className="text-primary fw-semibold fs-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mb-0 mt-2">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {caseStudy.additionalSections?.map(section => (
        <div className="card border bg-transparent mb-4" key={section.title}>
          <div className="card-body p-4 p-lg-5">
            <span className="text-primary fw-semibold text-uppercase fs-sm">
              08 — Product walkthrough
            </span>
            <h2 className="h4 mt-2 mb-3">{section.title}</h2>
            {section.paragraphs.map(paragraph => (
              <p className="mb-0" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}

      {caseStudy.testimonial && (
        <div className="card border bg-transparent mb-4">
          <div className="card-body p-4 p-lg-5">
            <span className="text-primary fw-semibold text-uppercase fs-sm">
              09 — Client testimonial
            </span>
            <p className="fs-lg fw-normal mt-3 mb-3">“{caseStudy.testimonial.quote}”</p>
            <p className="mb-0 text-primary fw-semibold">— {caseStudy.testimonial.author}</p>
          </div>
        </div>
      )}

      {caseStudy.conclusion && (
        <div className="card border bg-transparent mb-4">
          <div className="card-body p-4 p-lg-5">
            <span className="text-primary fw-semibold text-uppercase fs-sm">10 — Conclusion</span>
            <p className="fs-lg fw-normal mt-3 mb-0">{caseStudy.conclusion}</p>
          </div>
        </div>
      )}

      {caseStudy.cta && (
        <div className="card border bg-transparent">
          <div className="card-body p-4 p-lg-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
            <div>
              <span className="text-primary fw-semibold text-uppercase fs-sm">
                11 — Call to action
              </span>
              <h2 className="h4 mt-2 mb-2">{caseStudy.cta.title}</h2>
              <p className="mb-0">{caseStudy.cta.description}</p>
            </div>
            <a href="/contact" className="btn btn-primary flex-shrink-0">
              Talk to our team
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenixCaseStudyLayout;
