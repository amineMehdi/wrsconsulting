import React from "react";
import "../style/ContactContainer.css";
import imgContact from "../images/img-contact.jpg";
function ContactContainer() {
  return (
    <div className="contact-container">
      <div
        className="contact-img"
        style={{ backgroundImage: `url(${imgContact})` }}
      ></div>
      <div className="contact-header">
        <header>Avez-Vous Une Question ? Contactez-nous</header>
      </div>
      <div className="contact-btn">
        <button onClick={() => (window.location.href = `/contact`)}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default ContactContainer;
