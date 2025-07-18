import { Link } from "react-router-dom";

function NavBar({ logo, btnClass, btnText }) {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="giveit logo" />
        </Link>

        {btnText === "Post an item" ? (
          <Link className={btnClass} to="/post">
            {btnText}
          </Link>
        ) : (
          <Link className={btnClass} to="/listings">
            {btnText}
          </Link>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
