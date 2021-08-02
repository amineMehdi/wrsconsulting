import React, { useState, useEffect, useRef } from "react";
import "../style/components/Navbar_new.css";
import logo from "../images/wrs-80x80.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { MenuItems } from "./MenuItems";

import facebookSocial from "../images/social-icons/facebook_social.svg";
import linkedinSocial from "../images/social-icons/linkedin_social.svg";
import twitterSocial from "../images/social-icons/twitter_social.svg";

function Navbar() {
  const navbarContainerRef = useRef(null);
  const [menuIconClick, setMenuIconClick] = useState(false);
  const [expertiseDropdown, setExpertiseDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  const [navbarBorder, setNavbarBorder] = useState(false);
  const closeMobileMenu = () => setMenuIconClick(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const contactNavbarHeight = navbarContainerRef.current.querySelector(
        ":scope > .contact-navbar-container"
      ).clientHeight;
      if (window.scrollY > 90) {
        navbarContainerRef.current.style.transform = `translateY(-${contactNavbarHeight}px)`;
      } else if (window.scrollY < 60) {
        navbarContainerRef.current.style.transform = `translateY(0px)`;
      }
    });
  }, []);
  return (
    <div
      className={`navbar-contact-wrapper ${navbarBorder ? "active" : ""}`}
      onMouseEnter={() => setNavbarBorder(true)}
      onMouseLeave={() => setNavbarBorder(false)}
      ref={navbarContainerRef}
    >
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
          <a href="#" title="twitter">
            <img src={twitterSocial} alt="twitter" />
          </a>
          <a href="#" title="linkedin">
            <img src={linkedinSocial} alt="linkedin" />
          </a>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="./">
            <img src={logo} />
          </Link>
        </div>
        <div
          className="menu-icon"
          onClick={() => setMenuIconClick(!menuIconClick)}
        >
          <i className={`fas ${menuIconClick ? "fa-times" : "fa-bars"}`} />
        </div>

        <ul className={`nav-menu ${menuIconClick ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              ACCEUIL
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/a-propos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              A PROPOS
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => setExpertiseDropdown(true)}
            onMouseLeave={() => setExpertiseDropdown(false)}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              EXPERTISE
            </Link>
            {expertiseDropdown && <Dropdown items={MenuItems.expertise} />}
          </li>

          <li className="nav-item">
            <Link
              to="/realisations"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              REALISATIONS
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/partenaires"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              PARTENAIRES
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => setContactDropdown(true)}
            onMouseLeave={() => setContactDropdown(false)}
          >
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
            </Link>
            {contactDropdown && <Dropdown items={MenuItems.contact} />}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
