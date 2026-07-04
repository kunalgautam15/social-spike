import { Link } from "react-router-dom";

function Packages() {
  const whatsappNumber = "919026623417";

  const packages = [
    {
      name: "Starter",
      price: "₹4,999",
      desc: "Best for small businesses starting their online presence.",
      features: [
        "8 Creative Posts",
        "Basic Captions",
        "Page Management",
        "Monthly Content Plan",
        "Basic Design Theme",
      ],
    },
    {
      name: "Growth",
      price: "₹9,999",
      desc: "Best for brands that want regular content and better engagement.",
      features: [
        "12 Creative Posts",
        "4 Reels Editing",
        "Captions + Hashtags",
        "Page Management",
        "Growth Strategy",
        "Creative Planning",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹14,999",
      desc: "Best for complete monthly brand handling and premium content.",
      features: [
        "20 Creative Posts",
        "8 Reels Editing",
        "Ad Creative Support",
        "Complete Page Handling",
        "Monthly Report",
        "Brand Strategy",
      ],
    },
  ];

  const handlePlanInquiry = (planName, price) => {
    const text = `Hello Social Spike,%0A%0AI want to start with this plan.%0A%0APlan Name: ${planName}%0APrice: ${price}%0A%0APlease share the next steps and payment details.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
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

            <button
              className="package-action-btn"
              onClick={() => handlePlanInquiry(item.name, item.price)}
            >
              Start This Plan
            </button>
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