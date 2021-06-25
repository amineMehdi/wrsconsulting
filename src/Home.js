import React from "react";
import "./style/Home.css";
// import Navbar from "./components/Navbar";
import SlideShow1 from "./components/SlideShow1";
import SlideImage from "./components/SlideImage";
import Tile from "./components/Tile";
import TilesContainer from "./components/TilesContainer";
import ContactContainer from "./components/ContactContainer";

import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
import img4 from "./images/img-4.jpg";

import developpementIcon from "./images/expertise-icons/developpement_logiciel_icon.svg";
import editionIcon from "./images/expertise-icons/edition_logiciel_icon.svg";
import reseauIcon from "./images/expertise-icons/reseaux_infrastructure_icon.svg";
import strategyIcon from "./images/expertise-icons/strategie_it_icon.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <SlideShow1>
          {/* <SlideImage
            src={img1}
            section="Reseaux & Infrastructure"
            details="Maîtrisez l’évolution de votre Datacenter, vos Clouds et vos applications Saas."
            link="infrastructure-reseaux"
          />
          <SlideImage
            src={img2}
            section="Développement logiciel"
            details="Maîtrisez vos développements et garantissez la meilleure expérience utilisateur à vos clients."
            link="developpement-logiciel"
          />
          <SlideImage
            src={img3}
            section="Gestion de projet"
            details="Bordez vos budgets, prévenez vos risques, en garantissant vos coûts, vos délais, et votre qualité logicielle."
            link="gestion-de-projet"
          />
          <SlideImage
            src={img4}
            section="Consulting en stratégie IT"
            details="Ayez toujours un coup d’avance en garantissant l’efficacité de votre veille stratégique."
            link="consulting-en-strategie-it"
          /> */}
        </SlideShow1>
        <TilesContainer>
          <Tile
            logo={reseauIcon}
            header="Reseaux & Infrastructure"
            details="Maîtrisez l’évolution de votre Datacenter, vos Clouds et vos applications Saas."
            link="infrastructure-reseaux"
          />
          <Tile
            logo={developpementIcon}
            header="Développement logiciel"
            details="Maîtrisez vos développements et garantissez la meilleure expérience utilisateur à vos clients."
            link="developpement-logiciel"
          />
          <Tile
            logo={editionIcon}
            header="Gestion de projet"
            details="Bordez vos budgets, prévenez vos risques, en garantissant vos coûts, vos délais, et votre qualité logicielle."
            link="gestion-de-projet"
          />
          <Tile
            logo={strategyIcon}
            header="Consulting en stratégie IT"
            details="Ayez toujours un coup d’avance en garantissant l’efficacité de votre veille stratégique."
            link="consulting-en-strategie-it"
          />
        </TilesContainer>
        <ContactContainer />
      </div>
    );
  }
}

export default Home;
