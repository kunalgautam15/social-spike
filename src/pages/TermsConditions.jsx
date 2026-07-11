import { Link } from "react-router-dom";

function TermsConditions() {
  return (
    <main className="page">
      <section className="legal-page-section">
        <div className="legal-page-card">
          <span className="section-tag">Terms & Conditions</span>

          <h1>Terms & Conditions</h1>

          <p className="legal-updated">Last Updated: July 2026</p>

          <p>
            Welcome to Social Spike. By using our website or contacting us for
            services, you agree to the following terms and conditions.
          </p>

          <h2>1. Services</h2>
          <p>
            Social Spike provides creative and digital services such as social
            media management, reels editing, graphic designing, branding, ads
            creative support, website design and custom digital marketing
            solutions.
          </p>

          <h2>2. Packages & Pricing</h2>
          <p>
            Package prices and services listed on the website may change from
            time to time. Final pricing, deliverables and timelines will be
            confirmed after discussion with the client.
          </p>

          <h2>3. Custom Quotations</h2>
          <p>
            Custom quotations are prepared based on the client’s requirements,
            service scope, content needs, platform type and project complexity.
          </p>

          <h2>4. Payments</h2>
          <p>
            Work starts only after confirmation of the project and payment
            terms. Payment details, advance amount and final payment schedule
            will be shared directly with the client.
          </p>

          <h2>5. Client Responsibilities</h2>
          <p>
            The client must provide accurate business details, brand material,
            logos, images, videos, page access or other required assets on time
            to avoid delay in work.
          </p>

          <h2>6. Revisions</h2>
          <p>
            Revisions will be handled according to the package or project scope.
            Major changes outside the agreed work may require additional
            charges.
          </p>

          <h2>7. Content Approval</h2>
          <p>
            Social Spike may share creatives, reels or content drafts for
            approval where required. Once approved by the client, Social Spike
            will not be responsible for later changes unless discussed
            separately.
          </p>

          <h2>8. Third-Party Platforms</h2>
          <p>
            Social Spike is not responsible for changes, restrictions, reach
            issues, policy updates or account-related actions by platforms such
            as Instagram, Facebook, YouTube, Google or WhatsApp.
          </p>

          <h2>9. Website Use</h2>
          <p>
            Users should not misuse this website, submit false information or
            attempt to harm the website in any way.
          </p>

          <h2>10. Contact</h2>
          <p>
            For any questions about our terms, services or packages, you can
            contact Social Spike at +91 90266 23417.
          </p>

          <div className="legal-actions">
            <Link to="/packages" className="btn-primary">
              View Packages
            </Link>

            <Link to="/" className="btn-secondary">
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsConditions;