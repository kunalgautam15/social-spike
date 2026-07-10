import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/social-spike-logo.png";

function CustomQuote() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    instagram: "",
    services: "",
    budget: "",
    message: "",
  });

  const whatsappNumber = "919026623417";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Social Spike,

I want a custom quotation.

Name: ${form.name}
Business / Brand: ${form.business}
Phone: ${form.phone}
Instagram / Page Link: ${form.instagram}
Services Required: ${form.services}
Budget Range: ${form.budget}
Requirement: ${form.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main className="page">
      <section className="quote-premium-hero">
        <div>
          <span className="section-tag">Custom Quotation</span>

          <h1>Need A Plan Made Only For Your Brand?</h1>

          <p>
            Every brand has different goals, audience and content needs. Share
            your requirement and Social Spike will create a custom quotation
            according to your business.
          </p>

          <div className="quote-hero-actions">
            <a href="tel:+919026623417" className="btn-primary">
              Call Now
            </a>

            <Link to="/packages" className="btn-secondary">
              View Packages
            </Link>
          </div>
        </div>

        <div className="quote-brand-panel">
          <img src={logo} alt="Social Spike Logo" />

          <div className="quote-panel-card">
            <h3>Custom Plan</h3>
            <p>Reels • Designs • Ads • Website • Branding</p>
          </div>
        </div>
      </section>

      <section className="quote-main-layout">
        <div className="quote-info-card">
          <span className="section-tag">What You Can Request</span>

          <h2>Tell Us Exactly What Your Brand Needs</h2>

          <p>
            You can ask for reels-only, design-only, page management, event
            promotion, website, branding or a complete monthly content plan.
          </p>

          <div className="quote-service-list">
            <div>Reels Only Package</div>
            <div>Graphic Design Package</div>
            <div>Full Page Management</div>
            <div>Event Promotion</div>
            <div>Website + Branding</div>
            <div>Ads Creative Support</div>
          </div>
        </div>

        <div className="quote-form-card">
          <div className="form-top">
            <span>Custom Quote Form</span>
            <h2>Share Your Requirement</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="business"
                placeholder="Business / Brand Name"
                value={form.business}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-row">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="instagram"
                placeholder="Instagram Handle / Page Link"
                value={form.instagram}
                onChange={handleChange}
              />
            </div>

            <select
              name="services"
              value={form.services}
              onChange={handleChange}
              required
            >
              <option value="">Select Required Service</option>
              <option value="Social Media Management">
                Social Media Management
              </option>
              <option value="Reels Editing">Reels Editing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Paid Ads">Paid Ads</option>
              <option value="Website Design">Website Design</option>
              <option value="Complete Branding">Complete Branding</option>
              <option value="Multiple Services">Multiple Services</option>
            </select>

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
            >
              <option value="">Select Budget Range</option>
              <option value="Below ₹5,000">Below ₹5,000</option>
              <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
              <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
              <option value="Above ₹20,000">Above ₹20,000</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>

            <textarea
              name="message"
              placeholder="Explain your requirement in detail..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Custom Quote Request</button>
          </form>

          <p className="form-note">
            Your custom quotation request will be sent directly to Social Spike
            on WhatsApp.
          </p>
        </div>
      </section>

      <section className="quote-process-section">
        <span className="section-tag">Quote Process</span>

        <h2>How We Create Your Custom Plan</h2>

        <div className="quote-process-grid">
          <div>
            <span>01</span>
            <h3>Requirement</h3>
            <p>You share your business details, goals and content needs.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Discussion</h3>
            <p>We understand your audience, platform and expected output.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Quotation</h3>
            <p>We prepare pricing according to your selected services.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Work Start</h3>
            <p>After confirmation, content planning and execution begins.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CustomQuote;