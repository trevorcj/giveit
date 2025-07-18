import { useState, useEffect } from "react";
import { API_BASE_URL } from "../api/config";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import GiveawayList from "../components/GiveawayList";

function Listings() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGiveaways() {
    try {
      setError("");
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/giveaways`);
      const data = await res.json();

      if (!res.ok)
        throw new Error(data.message || "An error occured while loading items");

      setItems(data.data);
      setSuccess(data.message || "Successfully loaded items!");
    } catch (error) {
      setError(error);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGiveaways();

    setError("");
    setSuccess("");
    setTimeout(() => {}, 3000);
  }, []);

  return (
    <>
      <div className="hero-listings">
        <NavBar
          logo="logo-dark-b.svg"
          btnClass="footer-btn btn"
          btnText="Post an item"
        />
        <main>
          <h1 style={{ color: "var(--primary)" }}>Listings</h1>
          <p style={{ color: "var(--black)", margin: "20px 0 60px 0" }}>
            Contact the giver directly to arrange a <br /> meetup or delivery
          </p>
        </main>
      </div>
      <GiveawayList
        items={items}
        error={error}
        success={success}
        loading={loading}
      />
      <Footer text="Post an item" btnClass="footer-btn btn" />
    </>
  );
}

export default Listings;
