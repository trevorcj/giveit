import Spinner from "../components/Spinner";
import Modal from "../components/Modal";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

function GiveawayList({ items, error, success, loading }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const hasItems = items && items.length > 0;

  function timeAgo(dateString) {
    const today = new Date();
    const givenDate = new Date(dateString);
    const msInDay = 24 * 60 * 60 * 1000;

    const diffInDays = Math.floor(
      (today.setHours(0, 0, 0, 0) - givenDate.setHours(0, 0, 0, 0)) / msInDay
    );

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    return `${diffInDays} days ago`;
  }

  function showModal(item) {
    setSelectedCard(item);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedCard(null);
  }

  const filteredItems = hasItems
    ? items
        .filter((item) => {
          // Only show items from the last 14 days
          const postedDate = new Date(item.date);
          const now = new Date();
          const diffInDays = (now - postedDate) / (1000 * 60 * 60 * 24);
          return diffInDays <= 14;
        })
        .filter((item) => {
          // Filter by search query (case insensitive)
          const query = searchQuery.toLowerCase();
          return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query)
          );
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  return (
    <div className="listings-section">
      <div className="listings-header">
        <h2>All listings</h2>
        <p>⏳ Items get archived after 2 weeks</p>
      </div>

      <SearchBar onSearch={setSearchQuery} />

      <div className="listings-grid">
        {!loading && filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={index}
              className="listing-card"
              onClick={() => showModal(item)}
            >
              <img
                src={item.image || `fallback.png`}
                loading="lazy"
                alt={item.title}
              />
              <div className="listing-info">
                <h3>{item.title}</h3>
                <p className="location">
                  {item.location} • Posted {timeAgo(item.date)}
                </p>
                <p className="description">
                  {item.description.length > 47
                    ? item.description.substring(0, 47) + "..."
                    : item.description}
                </p>
              </div>
            </div>
          ))
        ) : !loading && hasItems && searchQuery.trim() !== "" ? (
          <p className="empty">No items match your search.</p>
        ) : !loading && !hasItems ? (
          <p className="empty">
            No items to show. Help someone by giving something.
          </p>
        ) : null}
      </div>

      {loading && <Spinner text="Fetching items" />}

      {success && hasItems && !loading && (
        <div className={`alert-message ${error ? "error" : "successMessage"}`}>
          <p>{error || success}</p>
        </div>
      )}

      {isOpen && selectedCard && (
        <Modal card={selectedCard} onClose={closeModal} />
      )}
    </div>
  );
}

export default GiveawayList;
