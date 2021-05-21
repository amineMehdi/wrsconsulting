import React from "react";
import "../style/Home.css";
import Navbar from "./Navbar";
import SlideShow from "./SlideShow";
import SlideImage from "./SlideImage";
import Tile from "./TilesContainer";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <SlideShow>
          <SlideImage
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
          />
        </SlideShow>
        <Tile/>
      </div>
    );
  }
}

export default Home;
