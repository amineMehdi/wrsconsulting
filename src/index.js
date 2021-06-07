import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./style/index.css";

import Navbar from "./components/Navbar";
import FooterContainer from "./components/FooterContainer";

import Home from "./Home";
import About from "./About";
import Infrastructure from "./Infrastructure";
import Developpement from "./Developpement";
import GestionLogiciel from "./GestionProjet";
import ConsultingIT from "./ConsultingIT";




class Index extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a-propos" component={About} />
          <Route path="/infrastructure-reseaux" component={Infrastructure} />
          <Route path="/developpement-logiciel" component={Developpement} />
          <Route path="/gestion-de-projet" component={GestionLogiciel} />
          <Route path="/consulting-en-strategie-it" component={ConsultingIT} />
        </Switch>
        <FooterContainer />
      </Router>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
// basename={process.env.PUBLIC_URL}