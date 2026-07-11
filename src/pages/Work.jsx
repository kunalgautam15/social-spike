import { Link } from "react-router-dom";

function Work() {
  const workItems = [
    {
      title: "Jhansi Times Media Work",
      text: "News reels, thumbnails, breaking updates, local coverage and social media content for Jhansi audience.",
      tag: "Media Page",
      number: "01",
      icon: "📰",
    },
    {
      title: "Restaurant Promotions",
      text: "Food offers, party booking reels, menu promotions, monsoon offers and local restaurant campaigns.",
      tag: "Food Brands",
      number: "02",
      icon: "🍽️",
    },
    {
      title: "School Campaigns",
      text: "Admission creatives, parent-focused reels, event coverage, preschool promotions and educational branding.",
      tag: "Education",
      number: "03",
      icon: "🎒",
    },
    {
      title: "Clinic Branding",
      text: "Healthcare awareness, cosmetic treatments, appointment creatives, camp promotions and trust-building content.",
      tag: "Healthcare",
      number: "04",
      icon: "🏥",
    },
    {
      title: "YouTube Thumbnails",
      text: "Eye-catching thumbnails for news, events, political updates, local incidents and promotional videos.",
      tag: "YouTube",
      number: "05",
      icon: "🎯",
    },
    {
      title: "Website Projects",
      text: "Business websites, restaurant websites, agency websites, landing pages and mobile responsive designs.",
      tag: "Web Design",
      number: "06",
      icon: "💻",
    },
  ];

  return (
    <main className="page">
      <section className="work-premium-hero">
        <div>
          <span className="section-tag">Our Work</span>

          <h1>Creative Work That Makes Brands Look Premium Online</h1>

          <p>
            Social Spike creates content for media pages, restaurants, schools,
            clinics, local businesses and growing brands with a focus on design,
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
            <p>Hooks, edits, captions and trending formats</p>
          </div>

          <div>
            <h3>Designs</h3>
            <p>Posters, offers, thumbnails and ad creatives</p>
          </div>

          <div>
            <h3>Websites</h3>
            <p>Modern landing pages and business websites</p>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase">
        {workItems.map((item) => (
          <div className="portfolio-card filled-card" key={item.number}>
            <div className="portfolio-card-top">
              <span>{item.tag}</span>
              <h2>{item.number}</h2>
            </div>

            <div className="portfolio-icon">{item.icon}</div>

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