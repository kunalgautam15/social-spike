import { Link } from "react-router-dom";

function Packages() {
  const whatsappNumber = "919026623417";

  const packages = [
    {
      name: "Basic Plan",
      price: "₹4,999",
      desc: "Best for small businesses starting their online presence with basic content.",
      features: ["2 Reels", "1 Graphic Post", "2 Stories"],
    },
    {
      name: "Growth Plan",
      price: "₹7,999",
      desc: "Best for brands that want regular content and better page activity.",
      features: [
        "4 Reels",
        "7 - 9 Stories",
        "5 Graphic Posts",
        "Meta Ads — Extra Charge Accordingly",
        "Insight Management",
        "Logo Suggestions",
      ],
      popular: true,
    },
    {
      name: "Premium + Business Pro Plan",
      price: "₹11,999",
      desc: "Best for complete brand handling with content, management and website support.",
      features: [
        "6 Reels",
        "15 Stories",
        "8 Graphic Posts",
        "Meta Ads — Extra Charge",
        "Page Management",
        "Basic Website",
        "Logo Designing",
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

        <h1>Choose The Right Plan For Your Brand</h1>

        <p>
          Flexible social media packages designed for businesses, creators and
          local brands who want to grow with premium content.
        </p>
      </section>

      <section className="packages-new">
        {packages.map((item, index) => (
          <div
            className={
              item.popular ? "package-new-card popular-new" : "package-new-card"
            }
            key={index}
          >
            {item.popular && (
              <div className="popular-new-tag">Most Popular</div>
            )}

            <div className="package-head">
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>

            <div className="package-price">
              <h3>{item.price}</h3>
              <span>/ month</span>
            </div>

            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <a
              href={getWhatsappLink(item.name, item.price)}
              target="_blank"
              rel="noreferrer"
              className="package-action-btn"
            >
              Start This Plan
            </a>
          </div>
        ))}
      </section>

      <section className="package-note">
        <h2>Need a custom package?</h2>
        <p>
          For reels-only, design-only, event promotions or full brand handling,
          custom plans can be created according to your requirement.
        </p>

        <Link to="/custom-quote" className="btn-primary">
          Get Custom Quotation
        </Link>
      </section>
    </main>
  );
}

export default Packages;