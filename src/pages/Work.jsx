function Work() {
  const workItems = [
    {
      title: "Restaurant Promotions",
      text: "Food offers, party booking reels, menu promotions and local restaurant campaigns.",
      tag: "Food Brands",
    },
    {
      title: "School Campaigns",
      text: "Admission open creatives, reels, event coverage and educational brand promotions.",
      tag: "Education",
    },
    {
      title: "Clinic Branding",
      text: "Healthcare, cosmetic clinic, treatment awareness and appointment-based promotions.",
      tag: "Healthcare",
    },
    {
      title: "YouTube Thumbnails",
      text: "Eye-catching news, event and promotional thumbnails for better clicks.",
      tag: "YouTube",
    },
    {
      title: "Event Marketing",
      text: "Exhibition, party, launch, college event and local event digital promotion.",
      tag: "Events",
    },
    {
      title: "Local Business Reels",
      text: "Short-form reels for shops, cafes, salons, gyms and growing local businesses.",
      tag: "Local Growth",
    },
  ];

  return (
    <main className="page">
      <section className="work-hero">
        <span className="section-tag">Portfolio</span>
        <h1>Creative Work That Helps Brands Look Premium</h1>
        <p>
          Social Spike creates content for local businesses, brands, schools,
          clinics, restaurants and creators with a focus on reach, design and
          brand recall.
        </p>
      </section>

      <section className="work-showcase-new">
        {workItems.map((item, index) => (
          <div className="work-card-new" key={index}>
            <div className="work-card-top">
              <span>{item.tag}</span>
              <h3>0{index + 1}</h3>
            </div>

            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="work-bottom-cta">
        <h2>Want your brand to look like this?</h2>
        <p>Let Social Spike create premium digital content for your business.</p>
      </section>
    </main>
  );
}

export default Work;