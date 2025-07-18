import { Link } from "react-router-dom";

function Footer({ text, btnClass }) {
  return (
    <footer>
      <div>
        <Link to="/">
          <img src="logo-dark-s.svg" alt="giveit logo small" />
        </Link>

        <ul className="footer-links">
          <li>
            <a
              href="https://www.linkedin.com/in/trevorcjustus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say Hello
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/trevorcj"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+2349165536637"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {text === "Post an item" ? (
        <Link className={btnClass} to="/post">
          {text}
        </Link>
      ) : (
        <Link className={btnClass} to="/listings">
          {text}
        </Link>
      )}
    </footer>
  );
}

export default Footer;
