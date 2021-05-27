import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "../style/TilesContainer.css";
import developpementIcon from "../images/developpement_logiciel_icon.svg";
import editionIcon from "../images/edition_logiciel_icon.svg";
import reseauIcon from "../images/reseaux_infrastructure_icon.svg";
import strategyIcon from "../images/strategie_it_icon.svg";
import anime from "animejs/lib/anime.es";

const animationTimer = 1500;
function TilesContainer(props) {
  // Desktop version
  useEffect(() => {
    const allTiles = document.querySelectorAll(".tile");

    if (window.screen.width > 1010) {
      allTiles.forEach((tile) => {
        tile.addEventListener("mouseenter", () => {
          anime({
            targets: tile,
            width: "100%",
            duration: animationTimer,
          });

          anime({
            targets: tile.querySelector(".tile-logo"),
            width: "55px",
            height: "55px",
            top: "12%",
            borderRadius: "10px",
            duration: animationTimer,
          });
          tile.querySelector(".tile-details").style.display = "block";
          tile.querySelector(".tile-learn-more").style.display = "block";
          allTiles.forEach((otherTile) => {
            if (!otherTile.isSameNode(tile)) {
              anime({
                targets: otherTile,
                opacity: ["1", "0"],
                duration: animationTimer,
              });
              otherTile.querySelector(".tile-header").style.display = "none";
            }
          });
        });

        tile.addEventListener("mouseleave", () => {
          anime({
            targets: tile.querySelector(".tile-logo"),
            top: "-15%",
            duration: animationTimer,
            borderRadius: "50%",
          });
          anime({
            targets: tile,
            width: "25vw",
            duration: animationTimer,
          });
          tile.querySelector(".tile-details").style.display = "none";
          tile.querySelector(".tile-learn-more").style.display = "none";
          allTiles.forEach((otherTile) => {
            if (!otherTile.isSameNode(tile)) {
              anime({
                targets: otherTile,
                opacity: ["0.25", "1"],
                width: "25vw",
                duration: animationTimer,
              });
              otherTile.querySelector(".tile-header").style =
                "display:block; opacity: 0";

              anime({
                targets: otherTile.querySelector(".tile-header"),
                opacity: ["0", "1"],
                duration: 3000,
                delay: 500,
              });
            }
          });
        });
      });
    }
  }, []);
  return (
    <div className="tiles-section">
      <div className="tiles-section-header">
        <p>Nos Expertises</p>
      </div>
      <div className="tiles-container">
        <Tile
          logo={reseauIcon}
          header="Reseaux & Infrastructure"
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

// const [isMobile, setMobile] = useState(false);
// useEffect(() => {
//   if (window.screen.width < 1010) setMobile(true);
//   if (isMobile) {
//     const allTiles = document.querySelectorAll(".tile");
//     allTiles.forEach((tile) => {
//       const tileArrow = tile.querySelector(".tile-arrow");
//       if (tileArrow.classList.contains("arrow-down")) {
//         tileArrow.addEventListener("click", () => {
//           anime({
//             targets: tile,
//             height: "40vh",
//             duration: animationTimer,
//           });
//           tile.querySelector(".tile-details").style = "display: block";
//           tile.querySelector(".tile-learn-more").style = "display: block";
//           anime({
//             targets: tile.querySelector(".tile-learn-more"),
//             opacity: ["0", "1"],
//             delay: 500,
//             duration: animationTimer,
//           });
//           tileArrow.classList.add("arrow-up");
//           tileArrow.classList.remove("arrow-down");
//           console.log("arrow");
//         });
//       }
//       if (tileArrow.classList.contains("arrow-up")) {
//         console.log("arrow-up");
//         tileArrow.addEventListener("click", () => {
//           tile.querySelector(".tile-details").style = "display: none";
//           tile.querySelector(".tile-learn-more").style = "display: none";

//           tileArrow.classList.add("arrow-down");
//           tileArrow.classList.remove("arrow-up");
//         });
//       }
//     });
//   }
// }, [isMobile]);
