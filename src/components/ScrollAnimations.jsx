import { useEffect } from "react";

function ScrollAnimations() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".section, .card, .growth-section, .process-section, .process-step, .work-grid div, .service-card-new, .service-premium-card, .services-premium-hero, .services-hero-box, .service-highlight-section, .service-highlight-list div, .work-card-new, .package-new-card, .package-process-section, .package-process-grid div, .package-note, .work-bottom-cta, .about-new-left, .about-new-right, .about-premium-hero, .about-premium-logo-box, .about-values-section, .about-values-grid div, .about-trust-section, .about-trust-grid div, .contact-premium-hero, .contact-info-grid a, .contact-info-grid div, .contact-brand-panel, .contact-left-card, .contact-form-card, .quote-premium-hero, .quote-brand-panel, .quote-info-card, .quote-form-card, .quote-process-section, .quote-process-grid div, .legal-page-card, .real-work-section, .real-work-grid div, .cta-section, .work-premium-hero, .work-hero-panel, .portfolio-card, .work-process-mini, .work-process-grid div"
    );

    animatedElements.forEach((element) => {
      element.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null;
}

export default ScrollAnimations;