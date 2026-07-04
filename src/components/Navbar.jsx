import { Link, NavLink } from "react-router-dom";
import logo from "../assets/social-spike-logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo-box">
        <img src={logo} alt="Social Spike" />
        <div>
          <h3>Social Spike</h3>
          <p>We Spike. You Grow.</p>
        </div>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/packages">Packages</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact" className="nav-btn">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;