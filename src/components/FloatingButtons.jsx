import { useEffect, useState } from "react";

function FloatingButtons() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-actions">
      {showTopButton && (
        <button className="scroll-top-btn" onClick={goToTop} aria-label="Go to top">
          ↑
        </button>
      )}

      <a href="tel:+919026623417" className="bottom-call-btn" aria-label="Call Social Spike">
        ☎
      </a>
    </div>
  );
}

export default FloatingButtons;