import React from "react";
import "../style/components/Navbar_new.css";
import logo from "../images/wrs-80x80.png";
import { Link } from "react-router-dom";

import googleSocial from "../images/social-icons/google_social.svg";
import facebookSocial from "../images/social-icons/facebook_social.svg";
import linkedinSocial from "../images/social-icons/linkedin_social.svg";
import twitterSocial from "../images/social-icons/twitter_social.svg";

function Navbar() {
  return (
    <div className="navbar-contact-wrapper">
      <div className="contact-navbar-container">
        <div className="contact-navbar">
          <p>
            Contactez-nous +33 6 34 27 40 69 |{" "}
            <a href="mailto:contact@wrsconsulting.fr">
              contact@wrsconsulting.fr
            </a>
          </p>
        </div>
        <div className="contact-social">
          <a href="#" title="facebook">
            <img src={facebookSocial} alt="facebook" />
          </a>
          <a href="#" title="google">
            <img src={googleSocial} alt="google" />
          </a>
          <a href="#" title="twitter">
            <img src={twitterSocial} alt="twitter" />
          </a>
          <a href="#" title="linkedin">
            <img src={linkedinSocial} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="./">
            <img src={logo} />
          </a>
        </div>
        <ul className="items-list">
          <li>
            <Link to="/">ACCEUIL</Link>
          </li>

          <li>
            <Link to="/a-propos">A PROPOS</Link>
          </li>
          <li className="item-dropdown">
            <a href="acceuil">EXPERTISE WRS</a>
            <ul className="item-dropdown-content">
              <li>
                <Link to="/infrastructure-reseaux">
                  INFRASTRUCTURES & RÉSEAUX
                </Link>
              </li>
              <li>
                <Link to="/developpement-logiciel">DÉVELOPPEMENT LOGICIEL</Link>
              </li>
              <li>
                <Link to="/gestion-de-projet">GESTION DE PROJET</Link>
              </li>
              <li>
                <Link to="/consulting-en-strategie-it">
                  CONSULTING EN STRATÉGIE IT
                </Link>
              </li>
            </ul>
            {/* <span className="item-dropdown-arrow">&#10095;</span>
            <span className="item-dropdown-back-arrow">&#10096;</span> */}
          </li>
          <li>
            <Link to="/realisations">REALISATIONS</Link>
          </li>
          <li>
            <Link to="/nos-partenaires">NOS PARTENAIRES</Link>
          </li>
          <li className="item-dropdown">
            <a href="contact">CONTACT</a>
            <ul className="item-dropdown-content">
              <li>
                <Link to="/contact">Contactez-nous</Link>
              </li>
              <li>
                <Link to="/carriere">Postulez</Link>
              </li>
            </ul>
            {/* <span className="item-dropdown-arrow">&#10095;</span>
            <span className="item-dropdown-back-arrow">&#10096;</span> */}
          </li>
        </ul>
        <div className="items-menu">
        M
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
