import { useEffect } from "react";

function ScrollAnimations() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".section, .card, .growth-section, .work-grid div, .service-card-new, .work-card-new, .package-new-card, .package-note, .work-bottom-cta, .about-new-left, .about-new-right, .contact-left-card, .contact-form-card, .cta-section"
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