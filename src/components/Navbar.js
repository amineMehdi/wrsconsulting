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

    const navbarOptions = nav.querySelectorAll(".options-list > li > a");
    const dropdownMenuOptions = document.querySelector(".nav-dropdown-content");
    [...navbarOptions, dropdownMenuOptions].forEach((option) => {
      option.addEventListener("mouseenter", () => {
        toggleBorder(option, false);
      });
      option.addEventListener("mouseleave", () => {
        toggleBorder(option, true);
      });
    });

    const optionsMenutoggle = document.querySelector(".options-menu");
    optionsMenutoggle.addEventListener("click", ()=>{
      optionsMenutoggle.classList.toggle('menu-active');
      document.querySelector('.options-list').classList.toggle('options-slide-active');
    });
  }, []);
  const toggleBorder = (element, toggle) => {
    if (window.screen.width >= 900) toggleBorderOption(element);
    setBorderBottom(toggle);
  };
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
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
