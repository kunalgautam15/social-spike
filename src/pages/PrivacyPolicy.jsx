import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <main className="page">
      <section className="legal-page-section">
        <div className="legal-page-card">
          <span className="section-tag">Privacy Policy</span>

          <h1>Privacy Policy</h1>

          <p className="legal-updated">Last Updated: July 2026</p>

          <p>
            At Social Spike, we respect your privacy. This Privacy Policy
            explains how we collect, use and protect the information shared by
            users through our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you contact us or request a custom quotation, we may collect
            details such as your name, business name, phone number, Instagram
            handle, selected service, budget range and project requirement.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            The information you provide is used only to understand your
            requirement, contact you, share package details, provide quotations
            and start project-related communication.
          </p>

          <h2>3. WhatsApp Communication</h2>
          <p>
            Our website forms may redirect you to WhatsApp with your filled
            details. Once you continue on WhatsApp, communication will happen
            through WhatsApp according to its own privacy practices.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell, rent or trade your personal information. Your
            details are only used by Social Spike for business communication and
            service-related purposes.
          </p>

          <h2>5. Cookies & Analytics</h2>
          <p>
            Our website may use basic tools or browser-based technologies to
            improve performance, user experience and website visibility.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We take reasonable steps to protect the information you share with
            us. However, no online method is completely secure, so users should
            avoid sharing sensitive personal information through forms.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            For any privacy-related questions, you can contact Social Spike at
            +91 90266 23417 or through our Instagram page.
          </p>

          <div className="legal-actions">
            <Link to="/contact" className="btn-primary">
              Contact Us
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

export default PrivacyPolicy;