import React from "react";
import "../style/components/FooterContainer.css";
import logo from "../images/wrs-80x80.png";
import { Link } from "react-router-dom";
import googleSocial from "../images/social-icons/google_social.svg";
import facebookSocial from "../images/social-icons/facebook_social.svg";
import linkedinSocial from "../images/social-icons/linkedin_social.svg";
import twitterSocial from "../images/social-icons/twitter_social.svg";

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';

function FooterContainer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-services">
          <h2>Services</h2>
          <ul className="footer-services-list">
            <li>
              <Link to="/infrastructure-reseaux">
                <div>Infrastructures & Réseaux</div>
              </Link>
            </li>
            <li>
              <Link to="/developpement-logiciel">Développement logiciel</Link>
            </li>
            <li>
              <Link to="/gestion-de-projet">Gestion de projet</Link>
            </li>
            <li>
              <Link to="/consulting-en-strategie-it">
                Consulting en stratégie IT
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-entreprise">
          <h2>Entreprise</h2>
          <ul className="footer-entreprise-list">
            <li>
              <Link to="/realisations">Realisations</Link>
            </li>
            <li>
              <Link to="/partenaires">Nos Partenaires</Link>
            </li>
            <li>
              <Link to="/a-propos">A propos</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <LocationOnIcon style={{color : `#06313D`}}/>
              <div>4 bis rue cadet de vaux 95130 Franconville</div>
            </li>
            <li>
              <PhoneIcon style={{color : `#06313D`}}/>
              <div>+336 34 27 40 69</div>
            </li>
            <li>
              <MailIcon style={{color : `#06313D`}}/>
              <div>
                <a href="mailto:contact@wrsconsulting.fr">
                  contact@wrsconsulting.fr
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <div className="footer-copyright">
            <p>© WRSConsulting 2021. All rights reserved.</p>
          </div>
          <div className="footer-social-icons">
            <a href="/" title="Facebook">
              <img src={facebookSocial} alt="facebook" />
            </a>
            <a href="/" title="Google">
              <img src={googleSocial} alt="google" />
            </a>
            <a href="/" title="Twitter">
              <img src={twitterSocial} alt="twitter" />
            </a>
            <a href="/" title="Linkedin">
              <img src={linkedinSocial} alt="linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterContainer;
