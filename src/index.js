import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./style/index.css";


// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar_new";
import FooterContainer from "./components/FooterContainer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./Home";
import About from "./About";
import Infrastructure from "./Infrastructure";
import Developpement from "./Developpement";
import GestionLogiciel from "./GestionProjet";
import ConsultingIT from "./ConsultingIT";
import Realisations from "./Realisations";
import Contact from "./Contact";
import EntrepriseContact from "./EntrepriseContact";
import Candidature from "./Candidature";
import ArrowTop from "./components/ArrowTop";

class Index extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a-propos" component={About} />
          <Route path="/infrastructure-reseaux" component={Infrastructure} />
          <Route path="/developpement-logiciel" component={Developpement} />
          <Route path="/gestion-de-projet" component={GestionLogiciel} />
          <Route path="/consulting-en-strategie-it" component={ConsultingIT} />
          <Route path="/realisations" component={Realisations}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/entreprise" exact component={EntrepriseContact}/>
          <Route path="/candidature" component={Candidature}/>
        </Switch>
        <FooterContainer />
        <ArrowTop/>
      </Router>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));