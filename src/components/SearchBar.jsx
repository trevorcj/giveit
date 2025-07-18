import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by title or location..."
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
