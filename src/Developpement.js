import React from "react";
import "./style/Developpement.css";
import FooterContainer from "./components/FooterContainer";
import developpementImg from "./images/developpement-1.jpg";
function Developpement() {
  return (
    <div>
      <div className="developpement-container">
        <div className="developpement-header">
          <header>
            <strong>WRSConsulting:</strong> <span>Developpement Logiciel</span>
          </header>
        </div>
        <div className="developpement-intro">
          <div
            className="developpement-intro-img"
            style={{ backgroundImage: `url(${developpementImg})` }}
          ></div>
          <div className="developpement-intro-details">
            <p>
              L’avènement des applications mobiles et des nouvelles technologies
              Web présentent à vous de nouveaux défis.
            </p>
            <p>
              Garantir une expérience utilisateur au-delà des attentes clients
              nécessite une maitrise totale du cycle de développement logiciel.
            </p>
            <p>
              L’expérience de nos consultants est là pour vous aider à mettre en
              place l’organisation optimale permettant la maîtrise de votre
              cycle de développement logiciel.
            </p>
            <p>
              Nous vous proposons également des équipes de développeurs aguerris
              aux technologies réclamés par vos exigences business.
            </p>
            <p>
              Vous pouvez également nous sous-traiter tout ou partie de votre
              besoin logiciel, nous le prenons en charge de sa conception à sa
              livraison aux utilisateurs finaux.
            </p>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}

export default Developpement;
