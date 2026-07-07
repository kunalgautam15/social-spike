import { Link } from "react-router-dom";

function Work() {
  const workItems = [
    {
      title: "Restaurant Promotions",
      text: "Food offers, party booking reels, menu promotions and local restaurant campaigns.",
      tag: "Food Brands",
      number: "01",
    },
    {
      title: "School Campaigns",
      text: "Admission creatives, parent-focused reels, event coverage and educational branding.",
      tag: "Education",
      number: "02",
    },
    {
      title: "Clinic Branding",
      text: "Healthcare awareness, cosmetic treatments, appointment-based creatives and trust-building content.",
      tag: "Healthcare",
      number: "03",
    },
    {
      title: "YouTube Thumbnails",
      text: "Eye-catching thumbnails for news, events, promotions and high-click content.",
      tag: "YouTube",
      number: "04",
    },
    {
      title: "Event Marketing",
      text: "Launch events, exhibitions, college events, local shows and promotional campaigns.",
      tag: "Events",
      number: "05",
    },
    {
      title: "Local Business Reels",
      text: "Short-form reels for shops, cafes, salons, gyms and growing local businesses.",
      tag: "Local Growth",
      number: "06",
    },
  ];

  return (
    <main className="page">
      <section className="work-premium-hero">
        <div>
          <span className="section-tag">Our Work</span>

          <h1>
            Creative Work That Makes Brands Look Premium Online
          </h1>

          <p>
            Social Spike creates content for restaurants, schools, clinics,
            local businesses, events and growing brands with a focus on design,
            reach and brand recall.
          </p>

          <div className="work-hero-actions">
            <Link to="/custom-quote" className="btn-primary">
              Start Your Project
            </Link>

            <Link to="/packages" className="btn-secondary">
              View Packages
            </Link>
          </div>
        </div>

        <div className="work-hero-panel">
          <div>
            <h3>Reels</h3>
            <p>Hooks, edits & captions</p>
          </div>

          <div>
            <h3>Designs</h3>
            <p>Posters, ads & creatives</p>
          </div>

          <div>
            <h3>Branding</h3>
            <p>Premium social identity</p>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase">
        {workItems.map((item) => (
          <div className="portfolio-card" key={item.number}>
            <div className="portfolio-card-top">
              <span>{item.tag}</span>
              <h2>{item.number}</h2>
            </div>

            <div className="portfolio-card-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="work-process-mini">
        <span className="section-tag">Content Style</span>

        <h2>Every Creative Is Planned With A Purpose</h2>

        <div className="work-process-grid">
          <div>
            <h3>Scroll-Stopping Hook</h3>
            <p>
              We focus on strong opening lines and visuals so people stop and
              watch your content.
            </p>
          </div>

          <div>
            <h3>Premium Visual Design</h3>
            <p>
              Every graphic and reel is designed to match your brand style and
              audience.
            </p>
          </div>

          <div>
            <h3>Clear Call To Action</h3>
            <p>
              Content is created with purpose — inquiry, booking, visit,
              awareness or brand recall.
            </p>
          </div>
        </div>
      </section>

      <section className="work-bottom-cta">
        <h2>Want Your Brand To Look Premium?</h2>
        <p>
          Share your requirement with Social Spike and get a custom content plan
          for your business.
        </p>

        <Link to="/custom-quote" className="btn-primary">
          Get Custom Quotation
        </Link>
      </section>
    </main>
  );
}

export default Work;