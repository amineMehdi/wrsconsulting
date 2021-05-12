import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import logo from "../images/wrs-80x80.png";
import googleSocial from "../images/google_social.svg";
import facebookSocial from "../images/facebook_social.svg";
import linkedinSocial from "../images/linkedin_social.svg";
import twitterSocial from "../images/twitter_social.svg";

function Navbar(props) {
  const [borderBottom, setBorderBottom] = useState(false);
  useEffect(() => {
    const nav = document.getElementsByClassName("navbar-container")[0];
    // nav.classList.toggle("navbar-selected");
    borderBottom
      ? nav.classList.add("navbar-selected")
      : nav.classList.remove("navbar-selected");
  }, [borderBottom]);
  // all event listeners on component mount.
  useEffect(() => {
    const nav = document.getElementsByClassName("navbar-container")[0];
    nav.addEventListener("mouseenter", () => {
      setBorderBottom(true);
    });
    nav.addEventListener("mouseleave", () => {
      setBorderBottom(false);
    });
    const navbarOptions = nav.querySelectorAll(
      ".options-container > ul > li > a"
    );
    const dropdownMenuOptions = document.querySelector(".nav-dropdown-content");
    [...navbarOptions, dropdownMenuOptions].forEach((option) => {
      option.addEventListener("mouseenter", () => {
        toggleBorderOption(option);
        setBorderBottom(false);
      });
      option.addEventListener("mouseleave", () => {
        toggleBorderOption(option);
        setBorderBottom(true);
      });
    });
  }, []);
  const toggleBorderOption = (element) => {
    const selected = element.parentElement.classList.length
      ? "dropdown-selected"
      : "option-selected";
    element.classList.toggle(selected);
  };
  return (
    <div className="navbar-container">
      <div className="contact-navbar-wrapper">
        <div className="contact-navbar">
          <p>
            Contactez nous +336 34 27 40 69 |{" "}
            <a href="mailto:contact@wrsconsulting.fr">
              contact@wrsconsulting.fr
            </a>
          </p>
        </div>
        <div className="social-navbar">
          <img src={facebookSocial} alt="facebook" />
          <img src={googleSocial} alt="google" />
          <img src={twitterSocial} alt="twitter" />
          <img src={linkedinSocial} alt="linkedin" />
        </div>
      </div>
      <nav className="navbar">
        <div className="logo-container">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="options-container">
          <ul className="options-list">
            <li>
              <a href="#">Acceuil</a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
            <li className="nav-dropdown">
              <a href="#">Expertise WRS</a>
              <ul className="nav-dropdown-content">
                <li>
                  <a href="#">Infrastructures & Réseaux</a>
                </li>
                <li>
                  <a href="#">Développement logiciel</a>
                </li>
                <li>
                  <a href="#">Gestion de projet</a>
                </li>
                <li>
                  <a href="#">Consulting en stratégie IT</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Realisations</a>
            </li>
            <li>
              <a href="#">Nos Partenaires</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="options-menu">
            <div className="options-menu-line"></div>
            <div className="options-menu-line"></div>
            <div className="options-menu-line"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
