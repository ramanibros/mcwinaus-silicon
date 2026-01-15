import React from 'react';
import {Col, Row} from 'react-bootstrap';

const PostContent = () => {
  return (
    <section className="container mb-5 pt-4 pb-2 py-mg-4">
      <Row className="gy-4">
        <Col lg={12}>
          <article style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.7 }}>

            {/* Intro */}
            <p style={{ fontSize: '18px', marginBottom: '24px' }}>
              Launching a startup in Australia in 2025? Whether you’re bootstrapped or backed by funding,
              digital marketing is your lifeline for reaching new customers, building trust, and scaling fast.
              But with so many channels, platforms, and tools available, it’s easy to feel overwhelmed.
            </p>

            <p style={{ marginBottom: '32px' }}>
              That’s why we’ve put together the <strong>Ultimate Digital Marketing Checklist</strong> —
              specifically designed for Aussie startups looking to build strong online foundations,
              maximise ROI, and compete with confidence.
            </p>

            {/* Section 1 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>1. Define Your Brand Identity</h2>
            <p style={{ marginBottom: '16px' }}>Before you build campaigns, define who you are and what makes you unique.</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Brand name, logo, and tagline</li>
              <li style={{ marginBottom: '8px' }}>Tone of voice and messaging style</li>
              <li style={{ marginBottom: '8px' }}>Colour palette and visual guidelines</li>
              <li style={{ marginBottom: '8px' }}>Mission, values, and brand story</li>
            </ul>
            <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
              Tip: Use your brand story to connect emotionally with your audience — especially on your About page.
            </p>

            {/* Section 2 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>2. Set Clear Marketing Goals</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Website traffic growth</li>
              <li style={{ marginBottom: '8px' }}>Lead generation</li>
              <li style={{ marginBottom: '8px' }}>Online sales or conversions</li>
              <li style={{ marginBottom: '8px' }}>Email list growth</li>
              <li style={{ marginBottom: '8px' }}>Regional brand awareness</li>
            </ul>
            <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
              Tip: Use SMART goals to track real progress.
            </p>

            {/* Section 3 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>3. Build a High-Converting Website</h2>
            <p style={{ marginBottom: '16px' }}>Your website is your digital storefront. Make it count.</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Mobile-optimised and fast-loading</li>
              <li style={{ marginBottom: '8px' }}>Clear value proposition above the fold</li>
              <li style={{ marginBottom: '8px' }}>Strong CTAs (Book a Demo, Start Free Trial)</li>
              <li style={{ marginBottom: '8px' }}>SEO-optimised service pages</li>
              <li style={{ marginBottom: '8px' }}>Privacy policy, terms, and contact info</li>
            </ul>

            {/* Section 4 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>4. Claim and Optimise Google Business Profile</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Add accurate business details</li>
              <li style={{ marginBottom: '8px' }}>Upload logo and real photos</li>
              <li style={{ marginBottom: '8px' }}>Use local keywords in services</li>
              <li style={{ marginBottom: '8px' }}>Enable messaging and Q&A</li>
              <li style={{ marginBottom: '8px' }}>Collect and respond to reviews</li>
            </ul>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
              📍 Pro Tip: Boosts Google Maps and local search visibility.
            </p>

            {/* Section 5 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>5. Launch Your Social Media Presence</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Instagram:</strong> Visual storytelling</li>
              <li style={{ marginBottom: '8px' }}><strong>LinkedIn:</strong> B2B and SaaS growth</li>
              <li style={{ marginBottom: '8px' }}><strong>Facebook:</strong> Community engagement</li>
              <li style={{ marginBottom: '8px' }}><strong>TikTok:</strong> Gen Z & trend-driven products</li>
            </ul>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
              Short-form video dominates engagement in 2025.
            </p>

            {/* Section 6 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>6. Develop a Content Marketing Strategy</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '8px' }}>SEO blogs and long-tail keywords</li>
              <li style={{ marginBottom: '8px' }}>eBooks, checklists, and templates</li>
              <li style={{ marginBottom: '8px' }}>Case studies and how-to guides</li>
              <li style={{ marginBottom: '8px' }}>Repurpose content across platforms</li>
            </ul>

            {/* Section 7 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>7. Master SEO for Organic Growth</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Local & niche keyword research</li>
              <li style={{ marginBottom: '8px' }}>Optimised meta titles and headings</li>
              <li style={{ marginBottom: '8px' }}>Internal linking & schema markup</li>
              <li style={{ marginBottom: '8px' }}>Backlinks via PR & guest blogging</li>
            </ul>

            {/* Section 8 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>8. Run Paid Campaigns (PPC & Social)</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Google Ads for intent-driven traffic</li>
              <li style={{ marginBottom: '8px' }}>Facebook & Instagram for awareness</li>
              <li style={{ marginBottom: '8px' }}>LinkedIn Ads for B2B leads</li>
              <li style={{ marginBottom: '8px' }}>Retargeting abandoned visitors</li>
            </ul>

            {/* Section 9 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>9. Email Marketing & Automation</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Welcome email sequences</li>
              <li style={{ marginBottom: '8px' }}>Newsletters</li>
              <li style={{ marginBottom: '8px' }}>Automated onboarding & sales flows</li>
              <li style={{ marginBottom: '8px' }}>Audience segmentation</li>
            </ul>

            {/* Section 10 */}
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 16px' }}>10. Track, Measure & Optimise</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
              <li style={{ marginBottom: '8px' }}>Google Analytics & Search Console</li>
              <li style={{ marginBottom: '8px' }}>Conversion and behaviour tracking</li>
              <li style={{ marginBottom: '8px' }}>Heatmaps with Hotjar</li>
              <li style={{ marginBottom: '8px' }}>Monthly performance reports</li>
            </ul>

            {/* Final Thoughts */}
            <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f1f5f9', borderLeft: '4px solid #16a34a', borderRadius: '4px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Final Thoughts</h2>
              <p style={{ marginBottom: '12px' }}>
                Starting a business is hard enough — your marketing shouldn’t be. With this checklist,
                your startup can grow faster and smarter in Australia’s competitive digital market.
              </p>
              <p style={{ fontWeight: 500 }}>
                👉 Ready to launch smarter? Contact <strong>McWIN iTECH</strong> and let’s build your custom growth plan.
              </p>
            </div>
          </article>
        </Col>
      </Row>
    </section>
  );
};

export default PostContent;
