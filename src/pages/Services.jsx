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
      <section className="services-hero">
        <span className="section-tag">Our Services</span>
        <h1>Creative Services That Spike Your Brand Growth</h1>
        <p>
          From reels to branding, Social Spike provides complete digital
          solutions to make your brand look active, premium and memorable online.
        </p>
      </section>

      <section className="services-showcase">
        {services.map((service) => (
          <div className="service-card-new" key={service.number}>
            <div className="service-number">{service.number}</div>

            <div>
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
    </main>
  );
}

export default Services;