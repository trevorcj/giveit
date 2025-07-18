import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
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
            Got something you no longer use? <br /> Post it here and someone
            else grab it — no account needed.
          </p>
          <h1>No Fees — No Agents</h1>
          <img className="hero-img" src="hero-img.png" />
          <Link to="/listings" className="cta-btn btn">
            See listings
          </Link>
        </main>
      </div>
      <section className="safety">
        <h2>We prioritize safety</h2>
        <div className="wrapper">
          <div className="tips">
            <div className="tip">
              <img src="check.png" alt="checkmark icon" />
              <p>Meet in safe public locations</p>
            </div>
            <div className="tip">
              <img src="wrong.png" alt="wrong icon" />
              <p>Avoid sharing sensitive personal info</p>
            </div>
            <div className="tip">
              <img src="caution.png" alt="caution icon" />
              <p>
                Report suspicious items{" "}
                <a href="mailto:trevorcjustus@gmail.com" target="_blank">
                  <b>here</b>
                </a>
              </p>
            </div>
          </div>
        </div>
        <img className="caution" src="3d-caution.png" alt="caution image" />
      </section>
      <Footer text="See listings" btnClass="cta-btn-main btn" />
    </>
  );
}
