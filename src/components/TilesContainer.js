import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "../style/TilesContainer.css";
import developpementIcon from "../images/developpement_logiciel_icon.svg";
import editionIcon from "../images/edition_logiciel_icon.svg";
import reseauIcon from "../images/reseaux_infrastructure_icon.svg";
import strategyIcon from "../images/strategie_it_icon.svg";
import anime from "animejs/lib/anime.es";

const allTiles = document.querySelectorAll(".tile");
const animationTimer = 1500;
function TilesContainer(props) {
  // const [mobileSize, setMobileSize] = useState(false);
  useEffect(() => {
    // console.log(window.screen.width);
    // if (window.screen.width < 1010) setMobileSize(true);
    // else setMobileSize(false);
    // Desktop version
    if (window.screen.width > 1010) {
      console.log("desktop");
      allTiles.forEach((tile) => {
        tile.addEventListener("mouseenter", () => {
          tile.classList.add("tile-active");
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
          tile.classList.remove("tile-active");
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
    // Mobile version
    // else {
    //   allTiles.forEach((tile) => {
    //     let tileArrow = tile.querySelector(".tile-arrow");
    //     tileArrow.addEventListener("click", () => {
    //       anime({
    //         targets: tile,
    //         height: "40vh",
    //         duration: animationTimer,
    //       });
    //       tile.querySelector(".tile-details").style = "display: block";
    //       tile.querySelector(".tile-learn-more").style = "display: block";
    //       anime({
    //         targets: tile.querySelector(".tile-learn-more"),
    //         opacity: ["0", "1"],
    //         delay: 500,
    //         duration: animationTimer,
    //       });
    //       tileArrowDown.classList.add("tile-arrow-up");
    //       tileArrowDown.classList.remove("tile-arrow-down");
    //       console.log("arrow");
    //     });
    //     if(tile)
    //     let tileArrowUp = tile.querySelector(".tile-arrow-up");
    //     tileArrowUp.addEventListener("click", () => {
    //       tile.querySelector(".tile-details").style= "display: none";
    //       tile.querySelector(".tile-learn-more").style= "display: none";

    //       tileArrowUp.classList.add("tile-arrow-down");
    //       tileArrowUp.classList.remove("tile-arrow-up");

    //     });
    //   });
    // }
  }, []);
  const [arrowDown, setArrowDown] = useState(true);
  useEffect(() => {
    if (window.screen.width <= 1010) {
      allTiles.forEach((tile) => {
        const tileArrow = tile.querySelector(".tile-arrow");
        console.log(arrowDown);
        if (arrowDown) {
          console.log("ml");
          tileArrow.addEventListener("click", () => {
            anime({
              targets: tile,
              height: "40vh",
              duration: animationTimer,
            });
            tile.querySelector(".tile-details").style = "display: block";
            tile.querySelector(".tile-learn-more").style = "display: block";
            anime({
              targets: tile.querySelector(".tile-learn-more"),
              opacity: ["0", "1"],
              delay: 500,
              duration: animationTimer,
            });
            tileArrow.classList.add("arrow-up");
            tileArrow.classList.remove("arrow-down");
            console.log("arrow-down");
            // setArrowDown(false);
          });
        } else {
          tileArrow.addEventListener();
        }
      });
    }
  }, [arrowDown]);
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
