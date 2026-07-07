import { useEffect, useState } from "react";
import logo from "../assets/social-spike-logo.png";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        setLoading(false);
      }, 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={hide ? "preloader hide" : "preloader"}>
      <div className="preloader-card">
        <div className="preloader-logo-wrap">
          <img src={logo} alt="Social Spike Logo" />
        </div>

        <h1>Social Spike</h1>
        <p>We Spike. You Grow.</p>

        <div className="loading-bar">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;