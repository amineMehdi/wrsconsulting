import React from "react";
import Tile from "./Tile";
import "../style/TilesContainer.css";
import developpementIcon from "../images/developpement_logiciel_icon.svg";
import editionIcon from "../images/edition_logiciel_icon.svg";
import reseauIcon from "../images/reseaux_infrastructure_icon.svg";
import strategyIcon from "../images/strategie_it_icon.svg";

function TilesContainer(props) {
  return (
    <div className="tiles-section">
      <div className="tiles-section-header">
        <h1>WRSConsulting</h1>
      </div>
      <div className="tiles-container">
        <Tile
          logo={reseauIcon}
          header="Reseaux & Infrasctructure"
          details="Maîtrisez l’évolution de votre Datacenter, vos Clouds et vos applications Saas."
        />
        <Tile
          logo={developpementIcon}
          header="Développement logiciel"
          details="Maîtrisez vos développements et garantissez la meilleure expérience utilisateur à vos clients."
        />
        <Tile
          logo={editionIcon}
          header="Gestion de projet"
          details="Bordez vos budgets, prévenez vos risques, en garantissant vos coûts, vos délais, et votre qualité logicielle."
        />
        <Tile
          logo={strategyIcon}
          header="Consulting en stratégie IT"
          details="Ayez toujours un coup d’avance en garantissant l’efficacité de votre veille stratégique."
        />
      </div>
    </div>
  );
}

export default TilesContainer;
