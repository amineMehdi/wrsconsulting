import React, { useState } from "react";
import "./style/Contact.css";
import { Link } from "react-router-dom";
import ContactBg from "./images/contact-1.jpg";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <header>Contact</header>
        <p>
          Merci pour l'intérêt que vous portez à WRS CONSULTING et à nos
          services. Pour qu'on puisse répondre à votre demande, veuillez remplir
          le formulaire ci-dessous.
        </p>
      </div>
      <div
        className="contact-choice-container"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        <div className="contact-choice">
          <header></header>
          <img />
          <div className="btn">
            <button>Button</button>
          </div>
        </div>

        <div className="contact-choice">
          <header></header>
          <img />
          <div className="btn">
            <button>Button</button>
          </div>
        </div>

        <div className="contact-choice">
          <header></header>
          <img />
          <div className="btn">
            <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// <div className="btn">
// <Link to="/entreprise">
//   <button>
//     <span>Entreprise</span>
//   </button>
// </Link>
// </div>
// <div className="btn">
// <Link to="/candidature">
//   <button>
//     <span>Candidature</span>
//   </button>
// </Link>
// </div>
