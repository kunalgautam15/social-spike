import logo from "../assets/social-spike-logo.png";

function About() {
  return (
    <main className="page">
      <section className="about-new">
        <div className="about-new-left">
          <span className="section-tag">About Social Spike</span>

          <h1>
            We Create Digital Content That Makes Brands Stand Out
          </h1>

          <p>
            Social Spike is a creative social media agency built for businesses,
            creators and local brands that want a strong online presence.
          </p>

          <p>
            We work on reels, posters, branding, captions, content planning,
            social media management and campaigns that help your brand look
            active, premium and memorable.
          </p>

          <div className="about-mini-grid">
            <div>
              <h3>Creative</h3>
              <p>Fresh ideas and modern content style.</p>
            </div>

            <div>
              <h3>Consistent</h3>
              <p>Planned posting and brand presentation.</p>
            </div>

            <div>
              <h3>Growth Focused</h3>
              <p>Content made for reach and engagement.</p>
            </div>
          </div>
        </div>

        <div className="about-new-right">
          <div className="about-logo-card">
            <img src={logo} alt="Social Spike Logo" />
          </div>

          <div className="about-value-card">
            <span>Mission</span>
            <h2>We Spike. You Grow.</h2>
            <p>
              Our mission is to give brands a professional digital identity with
              powerful content and creative execution.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;