import React from "react";
import "../style/FooterContainer.css";
import logo from "../images/wrs-80x80.png";
function FooterContainer() {
  return (
    <div>
      <footer className="footer-container">
        <div class="footer-logo">
            logo
            <img src={logo}/>
        </div>
        <div class="footer-services">Services</div>
        <div class="footer-entreprise">Entreprise</div>
        <div class="footer-contact">Contact</div>
        <div class="footer-social">Social</div>
      </footer>
    </div>
  );
}

export default FooterContainer;
