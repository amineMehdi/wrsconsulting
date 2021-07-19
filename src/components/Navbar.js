import React, { useEffect, useState } from "react";
import "../style/components/Navbar.css";
import logo from "../images/wrs-80x80.png";
import facebookSocial from "../images/social-icons/facebook_social.svg";
import linkedinSocial from "../images/social-icons/linkedin_social.svg";
import twitterSocial from "../images/social-icons/twitter_social.svg";
import anime from "animejs";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [borderBottom, setBorderBottom] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".navbar-container");
    if (borderBottom) nav.style.borderBottomColor = "#67b7e1";
    else nav.style.borderBottomColor = "transparent";
  }, [borderBottom]);

  // all event listeners on component mount.
  useEffect(() => {
    const toggleBorder = (element, toggle) => {
      if (window.innerWidth >= 900) toggleBorderOption(element);
      setBorderBottom(toggle);
    };
    const toggleBorderOption = (element) => {
      if (!element.parentElement.classList.length)
        element.classList.toggle("item-selected");
    };
    const nav = document.querySelector(".navbar-container");
    nav.addEventListener("mouseenter", () => {
      setBorderBottom(true);
    });
    nav.addEventListener("mouseleave", () => {
      setBorderBottom(false);
    });

    const navbarItems = nav.querySelectorAll(".items-list> li>a");
    const itemDropdownContent = document.querySelector(
      ".item-dropdown-content"
    );
    [...navbarItems, itemDropdownContent].forEach((option) => {
      option.addEventListener("mouseenter", () => {
        toggleBorder(option, false);
      });
      option.addEventListener("mouseleave", () => {
        toggleBorder(option, true);
      });
    });

    const itemsMenutoggle = document.querySelector(".items-menu");
    itemsMenutoggle.addEventListener("click", () => {
      itemsMenutoggle.classList.toggle("menu-active");
      document
        .querySelector(".items-list")
        .classList.toggle("items-slide-active");
    });

    const itemDropdownArrow = document.querySelector(".item-dropdown-arrow");
    itemDropdownArrow.addEventListener("click", () => {
      document.querySelector(".item-dropdown-back-arrow").style =
        "visibility: visible; display: block";
      itemDropdownContent.style = "visibility: visible; display:block";
    });

    const itemDropdownBackArrow = document.querySelector(
      ".item-dropdown-back-arrow"
    );
    itemDropdownBackArrow.addEventListener("click", () => {
      document.querySelector(".items-list").style.visibility = "visible";
      itemDropdownBackArrow.style.display = "none";
      itemDropdownContent.style.display = "none";
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        anime({
          targets: ".navbar-container",
          translateY: window.innerWidth < 1010 ? "-95px" : "-50px",
          duration: 100,
          easing: "linear",
        });
      } else if (window.scrollY < 60) {
        anime({
          targets: ".navbar-container",
          translateY: "0px",
          duration: 100,
          easing: "linear",
        });
        document.querySelector(".navbar-contact-container").style.display =
          "flex";
      }
    });
  }, []);

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
          <a href="./">
            <img src={logo} alt="logo" />
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
                <Link to="/developpement-logiciel">DÉVELOPPEMENT</Link>
              </li>
              <li>
                <Link to="/gestion-de-projet">GESTION DE PROJET</Link>
              </li>
              <li>
                <Link to="/consulting-en-strategie-it">
                  CONSULTING EN STRATÉGIE IT
                </Link>
              </li>

              <li>
                <Link to="/audit">AUDIT</Link>
              </li>
            </ul>
            <span className="item-dropdown-arrow">&#10095;</span>
            <span className="item-dropdown-back-arrow">&#10096;</span>
          </li>
          <li>
            <Link to="/realisations">REALISATIONS</Link>
          </li>
          <li>
            <Link to="/nos-partenaires">NOS PARTENAIRES</Link>
          </li>
          {/* <li>
            <Link to="/contact">CONTACT</Link>
          </li> */}
          <li className="item-dropdown">
            <Link to="/contact">
              <span>CONTACT</span>
            </Link>
            {/* <a href="/contact">CONTACT</a> */}
            <ul className="item-dropdown-content">
              <li>
                <Link to="/entreprise">Contactez-nous</Link>
              </li>
              <li>
                <Link to="/candidature">Postulez</Link>
              </li>
            </ul>
            <span className="item-dropdown-arrow">&#10095;</span>
            <span className="item-dropdown-back-arrow">&#10096;</span>
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
