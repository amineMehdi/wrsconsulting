import React, { useEffect } from "react";
import "./style/Realisations.css";
import RealisationsTile from "./components/RealisationsTile";
import AxaLogo from "./images/AXA-1.png";
import AllianzLogo from "./images/allianz-1.png";
import CreditLogo from "./images/ca-1.png";
import SanofiLogo from "./images/sanofi-1.png";
import AssuranceImg from "./images/network-1.jpg";
import anime from "animejs/lib/anime.es";
function Realisations() {
  const AxaData = {
    src: AxaLogo,
    header: "AXA France Services",
    details: [
      "Gestion de projets Infrastructures et migrations postes de travail",
      "Gestion de projets Innovation",
    ],
  };

  const AllianzData = {
    src: AllianzLogo,
    header: "Allianz Assurance",
    details: [
      "Création d’un logiciel de suivi de portefeuille projets",
      "Création d’un outils de suivi de projet et suivi de la norme CMMI",
    ],
  };

  const CreditData = {
    src: CreditLogo,
    header: "Crédit Agricole",
    details: [
      "Direction de programmes Infrastructures et Urbanisation de système d’informations",
    ],
  };

  const SanofiData = {
    src: SanofiLogo,
    header: "Sanofi",
    details: [
      "Gestion de projets Infrastructures",
      "Projet Qualité de production",
      "Projet SAP : outil de reporting sur les audits de production",
      "Projet Oracle : outils de gestion de la logistique et transports",
    ],
  };
  const AssuranceData = {
    src: AssuranceImg,
    header: "CSAG Assurance",
    details: [
      "Création d’un logiciel de gestion des contrats",
      "Outil de suivi financier",
      "Création d’un CRM pour le suivi commercial",
      "Gestion Infrastructures et Reseaux",
    ],
  };

  useEffect(() => {
    const realisationTiles = document.querySelectorAll(".realisations-tile");
    if (window.innerWidth > 1010) {
      realisationTiles.forEach((tile) => {
        tile.addEventListener("mouseenter", () => {
          console.log("mouseenter");
          realisationTiles.forEach((otherTile) => {
            if (!otherTile.isSameNode(tile)) {
              // anime({
              //   targets: otherTile,
              //   opacity : ["1","0"],
              //   duration: 1500,
              // });
              otherTile.style.display = "none";
            }
          });
          // anime({
          //   targets: tile.querySelector(".realisations-tile-img"),
          //   top: "25%",
          //   duration: 1000,
          // });
          // anime({
          //   targets: tile,
          //   width: "100%",
          //   height: "60vh",
          //   duration: 2000,
          //   easing: "easeOutExpo",
          // });
          // tile
          //   .querySelectorAll(
          //     ".realisations-tile-header, .realisations-tile-details"
          //   )
          //   .forEach((el) => {
          //     el.style.display = "block";
          //   });
        });

        tile.addEventListener("mouseleave", () => {
          // console.log("mouseleave");
          // anime({
          //   targets: tile.querySelector(".realisations-tile-img"),
          //   top: "50%",
          //   duration: 1000,
          //   easing: "linear",
          // });

          // anime({
          //   targets: tile,
          //   width: "24vw",
          //   height: "22vh",
          //   duration: 2000,
          //   easing: "easeOutExpo",
          // });

          // tile
          //   .querySelectorAll(
          //     ".realisations-tile-header, .realisations-tile-details"
          //   )
          //   .forEach((el) => {
          //     el.style.display = "none";
          //   });

          realisationTiles.forEach((otherTile) => {
            if (!otherTile.isSameNode(tile)) {
              // anime({
              //   targets: otherTile,
              //   opacity : ["0","1"],
              //   duration: 1500,
              // });
              otherTile.style.display = "block";
            }
          });
          // anime({
          //   targets: tile.querySelector(".realisations-tile-img"),
          //   opacity: ["0", "1"],
          //   duration: 500,
          //   easing: "linear"
          // });
        });
      });
    }
  }, []);

  return (
    <div className="realisations-container">
      <div className="realisations-header">
        <header>Nos Realisations</header>
      </div>
      <div className="realisations-tiles-section">
        <RealisationsTile data={AxaData} />
        <RealisationsTile data={AllianzData} />
        <RealisationsTile data={CreditData} />
        <RealisationsTile data={SanofiData} />
        <RealisationsTile data={AssuranceData} />
      </div>
    </div>
  );
}

export default Realisations;
