import React, { useState, useEffect, useRef } from "react";
import "../style/components/Navbar_new.css";
import logo from "../images/wrs-80x80.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { MenuItems } from "./MenuItems";
import NavItem from "./NavItem";
import NavItemDropdown from "./NavItemDropdown";

import facebookSocial from "../images/social-icons/facebook_social.svg";
import linkedinSocial from "../images/social-icons/linkedin_social.svg";
import twitterSocial from "../images/social-icons/twitter_social.svg";

function Navbar() {
  const navbarContainerRef = useRef(null);
  const [mobile, setMobile] = useState(false);
  const [menuIconClick, setMenuIconClick] = useState(false);
  const [expertiseDropdown, setExpertiseDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  const [navbarBorder, setNavbarBorder] = useState(false);
  const closeMobileMenu = () => setMenuIconClick(false);

  useEffect(() => {
    if (window.innerWidth < 1010) {
      setMobile(true);
      setExpertiseDropdown(true);
      setContactDropdown(true);
      console.log("mobile");
    }
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
          onClick={() => {
            setMenuIconClick(!menuIconClick);
            // console.log(menuIconClick);
          }}
        >
          <i className={`fas ${menuIconClick ? "fa-times" : "fa-bars"}`} />
        </div>

        <ul className={`nav-menu ${menuIconClick ? "active" : ""}`}>
          <NavItem 
            title = "ACCEUIL"
            path = ""
          />
          <NavItem 
            title = "A PROPOS"
            path = "a-propos"
          />
          <NavItemDropdown
            title = "EXPERTISE"
            path = ""
            dropdownItems = {MenuItems.expertise}
            closeMobileMenu = {closeMobileMenu}
            dropdownMenu = {expertiseDropdown}
            setDropdownMenu = {setExpertiseDropdown}
            menuIconClick = {menuIconClick}
            mobile = {mobile}
          />
          <NavItem 
            
          />
          {/* <li className="nav-item">
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
            onMouseEnter={() => (mobile ? "" : setExpertiseDropdown(true))}
            onMouseLeave={() => (mobile ? "" : setExpertiseDropdown(false))}
            onClick={() => {
              if (mobile) {
                setExpertiseDropdown(!expertiseDropdown);
              }
            }}
          >
            <Link to="/" className="nav-links">
              EXPERTISE
            </Link>
            {mobile ? <i className="mobile-arrow fas fa-caret-right" /> : ""}
            {(mobile || expertiseDropdown) && (
              <Dropdown
                items={MenuItems.expertise}
                closeMobileMenu={closeMobileMenu}
                dropDownActive={expertiseDropdown}
                setDropDownActive={setExpertiseDropdown}
                menuIcon={menuIconClick}
              />
            )}
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
            onMouseEnter={() => (mobile ? "" : setContactDropdown(true))}
            onMouseLeave={() => (mobile ? "" : setContactDropdown(false))}
            onClick={() => {
              if (mobile) {
                setContactDropdown(!contactDropdown);
                console.log(contactDropdown);
              }
            }}
          >
            <Link to="/" className="nav-links">
              CONTACT
            </Link>
            {mobile ? <i className="mobile-arrow fas fa-caret-right" /> : ""}
            {(mobile || contactDropdown) && (
              <Dropdown
                items={MenuItems.contact}
                closeMobileMenu={closeMobileMenu}
                dropDownActive={contactDropdown}
                setDropDownActive={setContactDropdown}
                menuIcon={menuIconClick}
              />
            )}
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
