import { useState } from "react";
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
      <section className="contact-modern">
        <div className="contact-left-card">
          <img src={logo} alt="Social Spike Logo" className="contact-logo" />

          <span className="section-tag">Start Your Growth</span>

          <h1>
            Let’s Spike Your <br />
            Brand Online
          </h1>

          <p>
            Tell us about your business and the service you need. Social Spike
            will help you build a premium digital presence with content, reels,
            designs and brand strategy.
          </p>

          <div className="contact-social-card">
            <h3>Connect With Us</h3>

            <a href="tel:+919026623417">+91 90266 23417</a>

            <a
              href="https://www.instagram.com/socialspike.co.in/"
              target="_blank"
              rel="noreferrer"
            >
              @socialspike.co.in
            </a>

            <p>Online Creative Social Media Agency</p>
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