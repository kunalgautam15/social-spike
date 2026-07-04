import { Link } from "react-router-dom";
import logo from "../assets/social-spike-logo.png";

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-left">
          <span className="hero-badge">Creative Social Media Agency</span>

          <h1>
            We Spike Your <br />
            Brand Growth
          </h1>

          <p>
            Social Spike helps brands grow online with creative reels, premium
            graphics, social media strategy, branding and digital campaigns.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>

            <a
              href="https://www.instagram.com/socialspike.co.in/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              View Instagram
            </a>
          </div>

          <div className="home-service-pills">
            <span>Reels</span>
            <span>Branding</span>
            <span>Ads</span>
            <span>Design</span>
          </div>
        </div>

        <div className="home-hero-right">
          <div className="hero-logo-card">
            <img src={logo} alt="Social Spike" />
          </div>

          <div className="hero-floating-card top-card">
            <h3>Content</h3>
            <p>Strategy + Creativity</p>
          </div>

          <div className="hero-floating-card bottom-card">
            <h3>Growth</h3>
            <p>Reach + Engagement</p>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="section-tag">What We Do</span>
        <h2>Services That Make Your Brand Stand Out</h2>

        <div className="cards">
          <div className="card">
            <span>01</span>
            <h3>Social Media Management</h3>
            <p>
              Instagram, Facebook and YouTube page handling with content
              planning, posting and brand consistency.
            </p>
          </div>

          <div className="card">
            <span>02</span>
            <h3>Reels & Video Editing</h3>
            <p>
              Trending reels, hooks, scripts, captions and scroll-stopping video
              editing for your brand.
            </p>
          </div>

          <div className="card">
            <span>03</span>
            <h3>Branding & Design</h3>
            <p>
              Posters, thumbnails, ad creatives, brand identity and premium
              designs for businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="growth-section">
        <div>
          <span className="section-tag">Why Social Spike?</span>
          <h2>We Build A Digital Identity, Not Just Posts</h2>

          <p>
            We focus on content that looks premium, feels modern and connects
            with the right audience. From local businesses to growing brands,
            Social Spike helps you stay active and memorable online.
          </p>

          <Link to="/contact" className="btn-primary">
            Get Free Consultation
          </Link>
        </div>

        <div className="growth-box">
          <div>Reels Strategy</div>
          <div>Creative Posters</div>
          <div>Page Growth</div>
          <div>Ad Campaigns</div>
        </div>
      </section>

      <section className="section">
        <span className="section-tag">Portfolio</span>
        <h2>Work Categories We Handle</h2>

        <div className="work-grid">
          <div>Restaurant Promotions</div>
          <div>School Campaigns</div>
          <div>Clinic Branding</div>
          <div>Event Marketing</div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready To Grow With Social Spike?</h2>
        <p>We Spike. You Grow.</p>

        <Link to="/contact" className="btn-white">
          Contact Now
        </Link>
      </section>
    </main>
  );
}

export default Home;