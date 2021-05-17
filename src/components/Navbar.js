import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import logo from "../images/wrs-80x80.png";
import googleSocial from "../images/google_social.svg";
import facebookSocial from "../images/facebook_social.svg";
import linkedinSocial from "../images/linkedin_social.svg";
import twitterSocial from "../images/twitter_social.svg";
// import FacebookIcon from "./icons/facebookIcon";
// import GoogleIcon from "./icons/googleIcon";
// import LinkedInIcon from "./icons/linkedInIcon";
// import TwitterIcon from "./icons/twitterIcon";
// const socialColors = {
//   twitterStroke: "#55acee",
//   facebookStroke: "#3b5999",
//   linkedInStroke: "#0077B5",
//   googleStroke: "#dd4b39",
// };
// let socialColorsHover = {
//   twitter: "#000000",
//   facebook: "#000000",
//   google: "#000000",
//   linkedIn: "#000000"
// }
function Navbar(props) {
  const [borderBottom, setBorderBottom] = useState(false);

  useEffect(() => {
    const nav = document.getElementsByClassName("navbar-container")[0];
    if (borderBottom) nav.style.borderBottomColor = "#67b7e1";
    else nav.style.borderBottomColor = "transparent";
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

    const navbarOptions = nav.querySelectorAll(".items-list> li>a");
    const dropdownMenuOptions = document.querySelector(
      ".item-dropdown-content"
    );
    [...navbarOptions, dropdownMenuOptions].forEach((option) => {
      option.addEventListener("mouseenter", () => {
        toggleBorder(option, false);
      });
      option.addEventListener("mouseleave", () => {
        toggleBorder(option, true);
      });
    });

    const optionsMenutoggle = document.querySelector(".items-menu");
    optionsMenutoggle.addEventListener("click", () => {
      optionsMenutoggle.classList.toggle("menu-active");
      document
        .querySelector(".items-list")
        .classList.toggle("items-slide-active");
    });
  }, []);
  const toggleBorder = (element, toggle) => {
    if (window.screen.width >= 900) toggleBorderOption(element);
    setBorderBottom(toggle);
  };
  const toggleBorderOption = (element) => {
    const selected = element.parentElement.classList.length
      ? "dropdown-selected"
      : "item-selected";
    element.classList.toggle(selected);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-contact-container">
        <div className="navbar-contact">
          <p>
            Contactez nous +336 34 27 40 69 |{" "}
            <a href="mailto:contact@wrsconsulting.fr">
              contact@wrsconsulting.fr
            </a>
          </p>
        </div>
        <div className="navbar-social">
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
      <nav className="navbar">
        <div className="logo-container">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="items-list">
          <li>
            <a href="#">ACCEUIL </a>
          </li>
          <li>
            <a href="#">A PROPOS</a>
          </li>
          <li className="item-dropdown">
            <a href="#">EXPERTISE WRS</a>
            <ul className="item-dropdown-content">
              <li>
                <a href="#">INFRASTRUCTURES & RÉSEAUX</a>
              </li>
              <li>
                <a href="#">DÉVELOPPEMENT LOGICIEL</a>
              </li>
              <li>
                <a href="#">GESTION DE PROJET</a>
              </li>
              <li>
                <a href="#">CONSULTING EN STRATÉGIE IT</a>
              </li>
            </ul>
            <span className="item-dropdown-arrow">
            </span>
          </li>
          <li>
            <a href="#">REALISATIONS</a>
          </li>
          <li>
            <a href="#">NOS PARTENAIRES</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <div className="items-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
