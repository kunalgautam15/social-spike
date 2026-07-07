import { useEffect } from "react";

function ScrollAnimations() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".section, .card, .growth-section, .process-section, .process-step, .work-grid div, .service-card-new, .service-premium-card, .services-premium-hero, .services-hero-box, .service-highlight-section, .service-highlight-list div, .work-card-new, .package-new-card, .package-note, .work-bottom-cta, .about-new-left, .about-new-right, .contact-left-card, .contact-form-card, .cta-section, .work-premium-hero, .work-hero-panel, .portfolio-card, .work-process-mini, .work-process-grid div"
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