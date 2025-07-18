import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="hero">
        <NavBar
          logo="logo-light-b.svg"
          btnClass="cta-btn-main btn"
          btnText="Post an item"
        />
        <main>
          <p>
            The page you requested does not exist. <br />
            Maybe you landed here by mistake.
          </p>
          <h1>Page not found!</h1>
          <img className="hero-img" src="error.webp" />
          <Link to="/" className="cta-btn btn">
            Go to Homepage
          </Link>
        </main>
        <footer>
          <br />
          <br />
          <div>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/trevorcjustus"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--secondary)" }}
                >
                  Say Hello
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/trevorcj"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--secondary)" }}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+2349165536637"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--secondary)" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default NotFound;
