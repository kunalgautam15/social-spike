import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      number: "01",
      title: "Social Media Management",
      text: "Complete Instagram, Facebook and YouTube page handling with content calendar, captions, posting and brand consistency.",
      points: ["Content Planning", "Regular Posting", "Page Handling"],
    },
    {
      number: "02",
      title: "Reels & Video Editing",
      text: "Creative reels with hooks, scripts, captions, transitions and trending short-form content style.",
      points: ["Reels Editing", "Hooks & Scripts", "Trending Style"],
    },
    {
      number: "03",
      title: "Graphic Designing",
      text: "Premium posters, thumbnails, offer creatives, festival posts and brand visuals for your business.",
      points: ["Posters", "Thumbnails", "Ad Creatives"],
    },
    {
      number: "04",
      title: "Branding",
      text: "Brand identity, content theme, color direction and visual style to make your business look professional.",
      points: ["Brand Look", "Visual Theme", "Creative Direction"],
    },
    {
      number: "05",
      title: "Paid Ads",
      text: "Local promotion campaigns and Meta ads creatives to help your business reach the right audience.",
      points: ["Meta Ads", "Local Reach", "Lead Campaigns"],
    },
    {
      number: "06",
      title: "Website Design",
      text: "Modern landing pages and business websites for brands, creators, restaurants, clinics and local businesses.",
      points: ["Landing Pages", "Business Websites", "Responsive Design"],
    },
  ];

  return (
    <main className="page">
      <section className="services-premium-hero">
        <div>
          <span className="section-tag">Our Services</span>

          <h1>Creative Digital Services For Serious Brand Growth</h1>

          <p>
            Social Spike gives your brand a complete digital push with reels,
            designs, social media management, branding, ads and website
            solutions.
          </p>

          <div className="services-hero-actions">
            <Link to="/custom-quote" className="btn-primary">
              Get Custom Quote
            </Link>

            <Link to="/packages" className="btn-secondary">
              View Packages
            </Link>
          </div>
        </div>

        <div className="services-hero-box">
          <div>
            <span>01</span>
            <h3>Plan</h3>
            <p>Content direction according to your business.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Create</h3>
            <p>Premium reels, designs and creative execution.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Grow</h3>
            <p>Consistent posting, engagement and brand recall.</p>
          </div>
        </div>
      </section>

      <section className="services-premium-grid">
        {services.map((service) => (
          <div className="service-premium-card" key={service.number}>
            <div className="service-premium-number">{service.number}</div>

            <div className="service-premium-content">
              <h2>{service.title}</h2>
              <p>{service.text}</p>

              <div className="service-points">
                {service.points.map((point, index) => (
                  <span key={index}>{point}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="service-highlight-section">
        <div>
          <span className="section-tag">Complete Solution</span>

          <h2>One Agency For Content, Design, Ads & Digital Presence</h2>

          <p>
            You do not need separate people for reels, posts, captions, ads and
            website. Social Spike helps you manage everything under one creative
            direction.
          </p>

          <Link to="/contact" className="btn-primary">
            Discuss Your Project
          </Link>
        </div>

        <div className="service-highlight-list">
          <div>Reels Strategy</div>
          <div>Poster Designing</div>
          <div>Page Management</div>
          <div>Meta Ads Creative</div>
          <div>Brand Identity</div>
          <div>Website Design</div>
        </div>
      </section>
    </main>
  );
}

export default Services;