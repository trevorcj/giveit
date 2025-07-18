import { useState } from "react";
import { API_BASE_URL } from "../api/config";
import Spinner from "./Spinner";

function Form() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: today,
    image: "",
    tel: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [imageValid, setImageValid] = useState(null); // null = untouched, true = valid, false = invalid

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "image") {
      setImageValid(null); // Reset preview until validation runs again
    }
  }

  function validateImage(url) {
    if (!url.trim()) {
      setImageValid(null);
      return;
    }

    const img = new Image();
    img.onload = () => setImageValid(true);
    img.onerror = () => setImageValid(false);
    img.src = url;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/giveaways`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Submission failed");

      setResponse(data);
      setFormData({
        title: "",
        description: "",
        location: "",
        date: today,
        image: "",
        tel: "",
      });
      setImageValid(null);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="title"
          placeholder="e.g. Free office chair in good condition"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Add details about the item – condition, size, and anything important."
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="e.g. Ikeja Mall, Lagos"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <input
            type="text"
            name="image"
            placeholder="e.g. https://i.imgur.com/..."
            value={formData.image}
            onChange={handleChange}
            onBlur={() => validateImage(formData.image)}
          />
          {imageValid === true && (
            <img
              src={formData.image}
              alt="preview"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          )}
        </div>

        {imageValid === false && formData.image.trim() && (
          <p style={{ color: "red" }}>
            ❌ Invalid image link. Please check and try again.
          </p>
        )}

        <p>
          <strong>Suggestion:</strong> Upload your image to Imgur and paste the
          link here.{" "}
          <a
            href="https://youtu.be/ZejNCI2-odU"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn how
          </a>
        </p>

        <input
          type="tel"
          name="tel"
          placeholder="e.g. 08012345678"
          value={formData.tel}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {loading ? <Spinner text="Posting..." /> : "Post item"}
        </button>
      </form>

      {response && !loading && (
        <div className={`alert-message ${error ? "error" : "successMessage"}`}>
          <p>{error || response.message}</p>
        </div>
      )}
    </>
  );
}

export default Form;
