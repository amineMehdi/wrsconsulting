import React from "react";
import "./style/Infrastructure.css";
import infrastructureImg from "./images/infrastructure-1.jpg";
function Infrastructure() {
  return (
    <div className="infrastructure-container">
      <div className="infrastructure-header">
        <header>
          <strong>WRS Consulting :</strong> Infrastructure & reseaux
        </header>
        <p>Développez le cœur de réseau de votre entreprise</p>
      </div>
      <div className="infrastructure-intro">
        <img src={infrastructureImg} alt="infrastructure Image" />
        <p>
          L’infrastructure est le pilier de votre réseau informatique et la base
          de votre système d’informations. C’est aussi le cœur de notre métier.
          <br />
          Nous vous accompagnons dans la conception et le dimensionnement de
          votre environnement de travail en tenant compte de vos contraintes
          fonctionnelles et budgétaires. <br />
          Nous veillons également à ce que nos solutions soient cohérentes avec
          votre stratégie de développement.
        </p>
      </div>
    </div>
  );
}

export default Infrastructure;
