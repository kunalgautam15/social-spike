import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/social-spike-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="premium-navbar">
        <Link to="/" className="premium-brand" onClick={closeMenu}>
          <img src={logo} alt="Social Spike" />

          <div>
            <h3>Social Spike</h3>
            <p>We Spike. You Grow.</p>
          </div>
        </Link>

        <nav className="desktop-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/packages">Packages</NavLink>
          <NavLink to="/custom-quote">Custom Quote</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="nav-right-actions">
          <Link to="/contact" className="desktop-contact-btn">
            Contact
          </Link>

          <button
            className={menuOpen ? "premium-menu-btn active" : "premium-menu-btn"}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={menuOpen ? "mobile-menu-overlay show" : "mobile-menu-overlay"}>
        <div className="mobile-menu-top">
          <div className="mobile-menu-brand">
            <img src={logo} alt="Social Spike" />
            <div>
              <h3>Social Spike</h3>
              <p>Creative Social Media Agency</p>
            </div>
          </div>

          <button className="mobile-close-btn" onClick={closeMenu}>
            ×
          </button>
        </div>

        <nav className="mobile-menu-links">
          <NavLink to="/" onClick={closeMenu}>
            <span>01</span> Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            <span>02</span> Services
          </NavLink>

          <NavLink to="/work" onClick={closeMenu}>
            <span>03</span> Work
          </NavLink>

          <NavLink to="/packages" onClick={closeMenu}>
            <span>04</span> Packages
          </NavLink>

          <NavLink to="/custom-quote" onClick={closeMenu}>
            <span>05</span> Custom Quote
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            <span>06</span> About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            <span>07</span> Contact
          </NavLink>
        </nav>

        <div className="mobile-menu-bottom">
          <a href="tel:+919026623417">Call Now</a>

          <a
            href="https://www.instagram.com/socialspike.co.in/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;