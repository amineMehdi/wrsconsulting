import React from "react";
import "./style/ConsultingIT.css";
import consultingImg from "./images/consulting-1.jpg";
function ConsultingIT() {
  return (
    <div className="consulting-container">
      <div className="consulting-header">
        <header>
          <strong>WRSConsulting : </strong>
          <span>Business expertise & IT strategy consulting</span>
        </header>
      </div>
      <div className="consulting-intro">
        <div
          className="consulting-intro-img"
          style={{ backgroundImage: `url(${consultingImg})` }}
        ></div>
        <div className="consulting-intro-details">
          <p>
            Le choix et la maitrise d’architectures ambitieuses et efficientes
            nécessite une grande expertise technologique.
          </p>
          <p>
            Le panel diversifié des experts estampillés WRS consulting vous
            garantit une maitrise de votre implémentation et de par conséquent
            des coûts de votre projet.
          </p>
          <p>
            De l’audit de l’existant et du conseil sont également à votre
            disposition dans des domaines aussi variés.
          </p>
        </div>
      </div>

      <div className="consulting-list-container">
        <div className="consulting-list-header">
          <header>On vous propose</header>
        </div>
        <div className="consulting-list-section">
          <ul>
            <li>Technologies web et mobile</li>
            <li>Architectures et implémentations Big Data,</li>
            <li>Informatique décisionnelle</li>
            <li>Dématérialisation et la gestion électronique des documents,</li>
            <li>Digitalisation Cloud et Saas</li>
            <li>ERP</li>
            <li>Portail, collaboratif et réseau social d’entreprise</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConsultingIT;
