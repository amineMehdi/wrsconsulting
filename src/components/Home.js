import React from "react";
import "../style/Home.css";
import Navbar from "./Navbar";
import SlideShow from "./SlideShow";
import SlideImage from "./SlideImage";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
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
          />
          <SlideImage
            src={img2}
            section="Développement logiciel"
            details="Maîtrisez vos développements et garantissez la meilleure expérience utilisateur à vos clients."
          />
          <SlideImage
            src={img3}
            section="Gestion de projet"
            details="Bordez vos budgets, prévenez vos risques, en garantissant vos coûts, vos délais, et votre qualité logicielle."
          />
        </SlideShow>
      </div>
    );
  }
}

export default Home;
