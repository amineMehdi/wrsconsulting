import React, { useEffect } from "react";
import "./style/Infrastructure.css";
import infrastructureImg from "./images/infrastructure-1.jpg";
function Infrastructure() {
  return (
    <div>
      <div className="infrastructure-container">
        <div className="infrastructure-header">
          <header>
            <strong>WRS Consulting : </strong>
            <span>Infrastructure & reseaux</span>
          </header>
          <p>Développez le cœur de réseau de votre entreprise</p>
        </div>
        <div className="infrastructure-intro">
          <div className="infrastructure-intro-img" style={{backgroundImage: `url(${infrastructureImg})`}}>
          </div>
          <p>
            L’infrastructure est le pilier de votre réseau informatique et la
            base de votre système d’informations. C’est aussi le cœur de notre
            métier.
            <br />
            Nous vous accompagnons dans la conception et le dimensionnement de
            votre environnement de travail en tenant compte de vos contraintes
            fonctionnelles et budgétaires. <br />
            Nous veillons également à ce que nos solutions soient cohérentes
            avec votre stratégie de développement.
          </p>
        </div>
        <div className="infrastructure-tiles-container">
          <div className="infrastructure-tiles-header">
            <header>On vous propose</header>
          </div>
          <div className="infrastructure-tiles-section">
            <div className="infrastructure-tile">
              <header> Gestion, des comptes et des machines du réseau</header>
              <p>
                Assure la gestion des comptes et des machines du réseau
                informatique des entreprises.
              </p>
            </div>

            <div className="infrastructure-tile">
              <header> Administrateur système</header>
              <p>
                Assiste à distance les utilisateurs dans leur environnement
                informatique et numérique.
              </p>
            </div>
            <div className="infrastructure-tile">
              <header> Serveurs de l'entreprise</header>
              <p>
                Gère aussi les postes de travail et les serveurs de
                l’entreprise.
              </p>
            </div>
            <div className="infrastructure-tile">
              <header>Conception des réseaux</header>
              <p>
                Assure la conception des réseaux de télécommunications (WAN,
                LAN, MAN, SAN)
              </p>
            </div>
            <div className="infrastructure-tile">
              <header> Architecture du réseau</header>
              <p>
                L’analyse technique nécessaire à la conception du diagramme de
                l’architecture du réseau en liaison avec les solutions
                informatiques
              </p>
            </div>
          </div>

          <div className="infrastructure-list-container">
            <div className="infrastructure-list-header">
              <header>Nous assurons</header>
            </div>
            <div className="infrastructure-list-section">
              <ul>
                <li>Protégez et restaurez facilement vos données.</li>
                <li>
                  Démarrez rapidement votre infrastructure en cas de crise
                  majeure.
                </li>
                <li>
                  Etendez votre réseau à vos sites distants de manière
                  sécurisée.
                </li>
                <li>Protégez et restaurez facilement vos données.</li>
                <li>
                  Redémarrez rapidement votre infrastructure en cas de crise
                  majeure.
                </li>
                <li>
                  Étendez votre réseau à vos sites distants de manière
                  sécurisée.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
