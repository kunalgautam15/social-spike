import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/social-spike-logo.png";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    instagram: "",
    service: "",
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

    const text = `Hello Social Spike,%0A%0AI want to discuss my project.%0A%0AName: ${form.name}%0ABusiness / Brand: ${form.business}%0AInstagram: ${form.instagram}%0AService Required: ${form.service}%0AMessage: ${form.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="page">
      <section className="contact-premium-hero">
        <div>
          <span className="section-tag">Contact Social Spike</span>

          <h1>Let’s Talk About Your Brand Growth</h1>

          <p>
            Share your business details and requirement. Our team will connect
            with you and suggest the right content, design or social media plan.
          </p>

          <div className="contact-info-grid">
            <a href="tel:+919026623417">
              <span>Call Us</span>
              <strong>+91 90266 23417</strong>
            </a>

            <a
              href="https://www.instagram.com/socialspike.co.in/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
              <strong>@socialspike.co.in</strong>
            </a>

            <div>
              <span>Agency Type</span>
              <strong>Online Creative Agency</strong>
            </div>
          </div>
        </div>

        <div className="contact-brand-panel">
          <img src={logo} alt="Social Spike Logo" />
          <h3>We Spike. You Grow.</h3>
          <p>Reels • Branding • Ads • Design • Websites</p>
        </div>
      </section>

      <section className="contact-modern contact-premium-layout">
        <div className="contact-left-card">
          <span className="section-tag">Quick Inquiry</span>

          <h1>
            Start Your <br />
            Project Today
          </h1>

          <p>
            Fill this form and your details will be sent directly to Social
            Spike on WhatsApp. We will discuss your requirement and suggest the
            best package.
          </p>

          <div className="contact-social-card">
            <h3>Need Custom Pricing?</h3>
            <p>
              For reels-only, design-only, event promotion or full page
              management, you can request a custom quotation.
            </p>

            <Link to="/custom-quote" className="mini-link-btn">
              Get Custom Quote
            </Link>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="form-top">
            <span>Project Inquiry</span>
            <h2>Tell Us Your Requirement</h2>
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

            <input
              type="text"
              name="instagram"
              placeholder="Instagram Handle / Page Link"
              value={form.instagram}
              onChange={handleChange}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Social Media Management">
                Social Media Management
              </option>
              <option value="Reels Editing">Reels Editing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Paid Ads">Paid Ads</option>
              <option value="Website Design">Website Design</option>
              <option value="Complete Branding">Complete Branding</option>
            </select>

            <textarea
              name="message"
              placeholder="Briefly tell us about your requirement..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Inquiry On WhatsApp</button>
          </form>

          <p className="form-note">
            You can also call us directly at +91 90266 23417
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;