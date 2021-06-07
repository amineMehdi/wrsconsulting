import React from "react";
import FooterContainer from "./components/FooterContainer";
import "./style/GestionProjet.css";
import GestionImg from "./images/gestion-1.jpg";
function GestionProjet() {
  return (
    <div>
      <div className="gestion-container">
        <div className="gestion-header">
          <header>
            <strong>WRSConsulting: </strong> <span>Gestion de projet</span>
          </header>
        </div>
        <div className="gestion-intro">
          <div
            className="gestion-intro-img"
            style={{ backgroundImage: `url(${GestionImg})` }}
          ></div>
          <div className="gestion-intro-details">
            <p>
              Une maitrise du cycle de développement logiciel créateur de valeur
              pour l’entreprise passe par l’encadrement méthodologique et humain
              du projet. Le réseau d’experts WRS Consulting est composé de chef
              de projets certifiés et aguerris (10 à 20 ans d’expérience) à des
              projets d’envergures menés à travers le monde chez des clients
              grand comptes.
            </p>
            <p>
              Cette expérience s’appuie également sur une expertise
              technologique et fonctionnelle.
            </p>
            <p>
            WRS Consulting pilotera vos projets avec pour seul objectif :
            </p>
            <p>
            Respecter les exigences coûts, qualités et délais requis par vos projets.
            </p>
          </div>
        </div>
      </div>
      <FooterContainer/>
    </div>
  );
}

export default GestionProjet;
