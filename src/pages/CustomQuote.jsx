import { useState } from "react";
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

    const text = `Hello Social Spike,%0A%0AI want a custom quotation.%0A%0AName: ${form.name}%0ABusiness / Brand: ${form.business}%0APhone: ${form.phone}%0AInstagram / Page Link: ${form.instagram}%0AServices Required: ${form.services}%0ABudget Range: ${form.budget}%0ARequirement: ${form.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="page">
      <section className="contact-modern">
        <div className="contact-left-card">
          <img src={logo} alt="Social Spike Logo" className="contact-logo" />

          <span className="section-tag">Custom Quotation</span>

          <h1>
            Need A Custom <br />
            Plan For Your Brand?
          </h1>

          <p>
            Every brand has different needs. Tell us your business details,
            required services and budget range. Social Spike will create a
            custom quotation according to your requirement.
          </p>

          <div className="contact-social-card">
            <h3>What You Can Request</h3>
            <p>Reels-only package</p>
            <p>Design-only package</p>
            <p>Full social media handling</p>
            <p>Event promotion</p>
            <p>Website + branding package</p>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="form-top">
            <span>Custom Quote Form</span>
            <h2>Tell Us What You Need</h2>
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
    </main>
  );
}

export default CustomQuote;