import { Link } from "react-router-dom";

function Packages() {
  const whatsappNumber = "919026623417";

  const packages = [
    {
      name: "Basic Plan",
      price: "₹12,000",
      desc: "Perfect for startups and local businesses looking to build a strong online presence with consistent, high-quality content.",
      features: [
        "2 Professional Reels",
        "1 Premium Graphic Post",
        "2 Creative Stories",
        "Content Strategy",
        "Caption Writing",
        "Hashtag Research",
        "Basic Performance Report",
      ],
    },
    {
      name: "Growth Plan",
      price: "₹25,000",
      desc: "Ideal for growing brands that want higher reach, better engagement and quality leads through consistent content.",
      features: [
        "4 Professional Reels",
        "5 Premium Graphic Posts",
        "7–9 Creative Stories",
        "Monthly Content Calendar",
        "Meta Ads Management (Ad Spend Extra)",
        "Performance Insights",
        "Competitor Analysis",
        "Logo Suggestions",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Premium + Business Pro Plan",
      price: "₹35,000",
      desc: "A complete digital growth solution for businesses that want full brand management under one roof.",
      features: [
        "6 Premium Reels",
        "8 Premium Graphic Posts",
        "15 Creative Stories",
        "Page Management",
        "Meta Ads Management (Ad Spend Extra)",
        "Basic Business Website",
        "Logo Designing",
        "Brand Identity Support",
        "Monthly Performance Report",
        "Priority Client Support",
      ],
    },
  ];

  const getWhatsappLink = (planName, price) => {
    const message = `Hello Social Spike,

I want to start with this plan.

Plan Name: ${planName}
Price: ${price}

Please share the next steps and payment details.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="page">
      <section className="packages-hero">
        <span className="section-tag">Pricing Plans</span>

        <h1>Choose The Plan That Grows Your Brand</h1>

        <p>
          Premium digital marketing packages designed to help businesses
          increase their reach, generate quality leads and build a powerful
          online presence.
        </p>
      </section>

      <section className="packages-new">
        {packages.map((item, index) => (
          <div
            className={
              item.popular
                ? "package-new-card popular-new"
                : "package-new-card"
            }
            key={index}
          >
            {item.popular && (
              <div className="popular-new-tag">⭐ Most Popular</div>
            )}

            <div className="package-head">
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>

            <div className="package-price">
              <h3>{item.price}</h3>
              <span>/ Month</span>
            </div>

            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>

            <a
              href={getWhatsappLink(item.name, item.price)}
              target="_blank"
              rel="noreferrer"
              className="package-action-btn"
            >
              Get Started
            </a>
          </div>
        ))}
      </section>

      <section className="package-process-section">
        <span className="section-tag">Our Process</span>

        <h2>Simple, Transparent & Result-Oriented</h2>

        <div className="package-process-grid">
          <div>
            <span>01</span>
            <h3>Choose Your Plan</h3>
            <p>
              Select the package that best matches your business goals and send
              us your inquiry.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Requirement Discussion</h3>
            <p>
              We understand your business, audience, competitors and marketing
              objectives before starting.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Content Planning</h3>
            <p>
              Our team prepares a complete strategy including reels, graphics,
              captions and posting schedule.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Execution & Growth</h3>
            <p>
              We create premium content, manage your brand presence and monitor
              performance for continuous growth.
            </p>
          </div>
        </div>
      </section>

      <section className="package-note">
        <h2>Need a Custom Marketing Solution?</h2>

        <p>
          Whether you need social media management, website development,
          branding, paid advertising or a complete digital marketing solution,
          we'll create a custom package tailored to your business goals.
        </p>

        <Link to="/custom-quote" className="btn-primary">
          Get Custom Quotation
        </Link>
      </section>
    </main>
  );
}

export default Packages;