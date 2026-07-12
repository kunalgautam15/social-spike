import { useEffect, useState } from "react";

function FloatingButtons() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const instagramLink = "https://www.instagram.com/socialspike.co.in/";
  const facebookLink = "https://www.facebook.com/profile.php?id=61591832428058";
  const emailLink =
    "mailto:growth@socialspike.co.in?subject=Project Inquiry - Social Spike";

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
    <>
      <div className="floating-social-actions">
        <div className={showSocials ? "social-popup show" : "social-popup"}>
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="social-mini-btn"
            aria-label="Open Instagram"
          >
            IG
          </a>

          <a
            href={facebookLink}
            target="_blank"
            rel="noreferrer"
            className="social-mini-btn"
            aria-label="Open Facebook"
          >
            FB
          </a>

          <a href={emailLink} className="social-mini-btn" aria-label="Send Email">
            @
          </a>
        </div>

        <button
          className={showSocials ? "main-social-btn active" : "main-social-btn"}
          onClick={() => setShowSocials(!showSocials)}
          aria-label="Open social links"
        >
          ✦
        </button>
      </div>

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
    </>
  );
}

export default FloatingButtons;