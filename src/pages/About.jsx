import { Link } from "react-router-dom";
import logo from "../assets/social-spike-logo.png";

function About() {
  return (
    <main className="page">
      <section className="about-premium-hero">
        <div className="about-premium-content">
          <span className="section-tag">About Social Spike</span>

          <h1>We Create Digital Content That Makes Brands Stand Out</h1>

          <p>
            Social Spike is a creative social media agency built for businesses,
            creators and local brands that want a strong and premium online
            presence.
          </p>

          <p>
            We work on reels, posters, branding, captions, content planning,
            page management, websites and digital campaigns that help your brand
            look active, modern and memorable.
          </p>

          <div className="about-actions">
            <Link to="/custom-quote" className="btn-primary">
              Get Custom Quote
            </Link>

            <Link to="/work" className="btn-secondary">
              View Work
            </Link>
          </div>
        </div>

        <div className="about-premium-logo-box">
          <img src={logo} alt="Social Spike Logo" />

          <div className="about-logo-floating-card">
            <h3>We Spike.</h3>
            <p>You Grow.</p>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-value-big">
          <span className="section-tag">Our Mission</span>

          <h2>Helping Brands Build A Strong Digital Identity</h2>

          <p>
            Our mission is to give every business a professional online
            presence through creative content, consistent branding and smart
            digital strategy.
          </p>
        </div>

        <div className="about-values-grid">
          <div>
            <span>01</span>
            <h3>Creative Thinking</h3>
            <p>
              We create fresh ideas that help your brand look different from the
              crowd.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Premium Design</h3>
            <p>
              Every post, reel and creative is made to look clean, modern and
              professional.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Consistent Growth</h3>
            <p>
              We focus on regular posting, better presentation and long-term
              brand recall.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Local Business Focus</h3>
            <p>
              We understand local businesses and create content that connects
              with the right audience.
            </p>
          </div>
        </div>
      </section>

      <section className="about-trust-section">
        <span className="section-tag">Why Brands Choose Us</span>

        <h2>Social Spike Is Built For Brands That Want To Look Serious Online</h2>

        <div className="about-trust-grid">
          <div>Reels + Posters + Captions</div>
          <div>Page Management Support</div>
          <div>Custom Packages Available</div>
          <div>Brand-Focused Creative Direction</div>
          <div>Local Promotion Experience</div>
          <div>Website & Branding Support</div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let’s Build Your Brand Online</h2>
        <p>Share your requirement and get a custom plan for your business.</p>

        <Link to="/custom-quote" className="btn-white">
          Get Custom Quotation
        </Link>
      </section>
    </main>
  );
}

export default About;