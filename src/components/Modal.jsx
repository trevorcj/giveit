function Modal({ card, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &#10006;
        </button>
        <img
          src={card.image || "fallback.png"}
          loading="lazy"
          alt={card.title}
        />
        <h2>{card.title}</h2>
        <div className="modal-details">
          <p>📍 {card.location}</p>
          <p>📅 {card.date}</p>
        </div>
        <p>{card.description}</p>
        <a className="tel-btn" href={`tel:${card.tel}`}>
          Contact Seller
        </a>
      </div>
    </div>
  );
}

export default Modal;
