import React from "react";
import "../style/components/ContactContainer.css";
// import anime from "animejs/lib/anime.es";
import { Link } from "react-router-dom";
function ContactContainer() {
  return (
    <div className="home-contact-container">
      <div className="home-contact-img"></div>
      <div className="home-contact-header">
        <header>Avez-vous une Question ? Contactez-nous</header>
      </div>
      <div className="btn home-contact-btn">
        <button>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ContactContainer;
