import React, { useEffect, useRef } from "react";
import "../style/components/Navbar_new.css";
import logo from "../images/wrs-80x80.png";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es";

import googleSocial from "../images/social-icons/google_social.svg";
import facebookSocial from "../images/social-icons/facebook_social.svg";
import linkedinSocial from "../images/social-icons/linkedin_social.svg";
import twitterSocial from "../images/social-icons/twitter_social.svg";

function Navbar() {
  const navbarContainerRef = useRef(null);
  const navbarRef = useRef(null);
  const itemsListRef = useRef(null);
  const contactNavbarRef = useRef(null);
  useEffect(() => {
    navbarContainerRef.current.addEventListener("mouseenter", () => {
      navbarContainerRef.current.classList.add("active");
    });
    navbarContainerRef.current.addEventListener("mouseleave", () => {
      navbarContainerRef.current.classList.remove("active");
    });

    itemsListRef.current.querySelectorAll(":scope > li").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        navbarContainerRef.current.classList.remove("active");
        item.classList.add("active");
      });
      item.addEventListener("mouseleave", () => {
        navbarContainerRef.current.classList.add("active");
        item.classList.remove("active");
      });
    });
  }, []);
  return (
    <div className="navbar-contact-wrapper" ref={navbarContainerRef}>
      <div className="contact-navbar-container" ref={contactNavbarRef}>
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
      <div className="navbar" ref={navbarRef}>
        <div className="navbar-logo">
          <a href="./">
            <img src={logo} />
          </a>
        </div>
          <ul className="items-list" ref={itemsListRef}>
            <li className="active">
              <Link to="/">
                <span>ACCEUIL</span>
              </Link>
            </li>

            <li>
              <Link to="/a-propos">
                <span>A PROPOS</span>
              </Link>
            </li>
            <li className="item-dropdown">
              <Link to="/">
                <span>EXPERTISE WRS</span>
              </Link>
              <ul className="item-dropdown-content">
                <li>
                  <Link to="/infrastructure-reseaux">
                    <span>INFRASTRUCTURES & RÉSEAUX</span>
                  </Link>
                </li>
                <li>
                  <Link to="/developpement-logiciel">
                    <span>DÉVELOPPEMENT LOGICIEL</span>
                  </Link>
                </li>
                <li>
                  <Link to="/gestion-de-projet">
                    <span>GESTION DE PROJET</span>
                  </Link>
                </li>
                <li>
                  <Link to="/consulting-en-strategie-it">
                    <span>CONSULTING EN STRATÉGIE IT</span>
                  </Link>
                </li>
              </ul>
              {/* <span className="item-dropdown-arrow">&#10095;</span>
            <span className="item-dropdown-back-arrow">&#10096;</span> */}
            </li>
            <li>
              <Link to="/realisations">
                <span>REALISATIONS</span>
              </Link>
            </li>
            <li>
              <Link to="/nos-partenaires">
                <span>NOS PARTENAIRES</span>
              </Link>
            </li>
            <li className="item-dropdown">
              <Link to="/contact">
                <span>CONTACT</span>
              </Link>
              <ul className="item-dropdown-content">
                <li>
                  <Link to="/contact">
                    <span>CONTACTEZ-NOUS</span>
                  </Link>
                </li>
                <li>
                  <Link to="/carriere">
                    <span>CANDIDATURE</span>
                  </Link>
                </li>
              </ul>
              {/* <span className="item-dropdown-arrow">&#10095;</span>
            <span className="item-dropdown-back-arrow">&#10096;</span> */}
            </li>
          </ul>
        <div className="items-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
