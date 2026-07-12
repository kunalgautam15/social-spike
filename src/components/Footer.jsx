import { Link } from "react-router-dom";
import logo from "../assets/social-spike-logo.png";

function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-brand-new">
        <img src={logo} alt="Social Spike Logo" />

        <div>
          <h2>Social Spike</h2>
          <p>We Spike. You Grow.</p>
        </div>
      </div>

      <div className="footer-menu-new">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/work">Work</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/custom-quote">Custom Quote</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="footer-menu-new">
        <h3>Services</h3>
        <p>Social Media Management</p>
        <p>Reels Editing</p>
        <p>Graphic Designing</p>
        <p>Branding & Ads</p>
      </div>

      <div className="footer-menu-new">
        <h3>Connect</h3>

        <a href="tel:+919026623417">+91 90266 23417</a>

        <a href="mailto:growth@socialspike.co.in">
          growth@socialspike.co.in
        </a>

        <a
          href="https://www.instagram.com/socialspike.co.in/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61591832428058"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>

        <p>Online Creative Agency</p>
      </div>

      <div className="footer-legal-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-conditions">Terms & Conditions</Link>
      </div>

      <div className="footer-bottom-new">
        <p>© 2026 Social Spike. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;