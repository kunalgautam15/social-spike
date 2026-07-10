import { Link } from "react-router-dom";
import logo from "../assets/social-spike-logo.png";

function NotFound() {
  return (
    <main className="page">
      <section className="not-found-section">
        <div className="not-found-card">
          <img src={logo} alt="Social Spike Logo" />

          <span>404</span>

          <h1>Page Not Found</h1>

          <p>
            The page you are looking for does not exist or may have been moved.
            Let’s take you back to Social Spike.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              Go To Home
            </Link>

            <Link to="/custom-quote" className="btn-secondary">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;