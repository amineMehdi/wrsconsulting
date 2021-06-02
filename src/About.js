import React from "react";
import FooterContainer from "./components/FooterContainer";
import "./style/About.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <h2>Qui Sommes Nous ?</h2>
        <p>
          WRSConsulting est une société qui a été crée en 2010 pour répondre
          aux besoins en service informatique de clients de divers secteurs
          d’activité (ex : banques/assurances, Groupes pharmaceutiques).
        </p>
        <p>
          WRSConsulting est basée à Paris et collabore avec des clients aussi
          bien nationaux qu’internationaux, sur des problématiques d’ingénierie
          de systèmes complexes et hautement stratégiques. Depuis 2010, nous
          n’avons de cesse de collaborer à la refonte et à l’optimisation des
          processus métier de nos clients.
        </p>
        {/* <FooterContainer/> */}
      </div>
      <div className="about-expertise">
          
      </div>
    </div>
  );
}

export default About;
