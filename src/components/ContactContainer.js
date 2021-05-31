import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../style/ContactContainer.css";
import anime from "animejs/lib/anime.es";

function ContactContainer() {
  return (
    <div className="contact-container">
      <div className="contact-img"></div>
      <div className="contact-header">
        <header>Avez-vous une Question ? Contactez-nous</header>
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
