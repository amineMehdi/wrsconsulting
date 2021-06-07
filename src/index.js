import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/index.css";

import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import FooterContainer from "./components/FooterContainer";
import Infrastructure from "./Infrastructure";
import Developpement from "./Developpement";
import GestionLogiciel from "./GestionProjet";

class Index extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a-propos" component={About} />
          <Route path="/infrastructure-reseaux" component={Infrastructure} />
          <Route path="/developpement-logiciel" component={Developpement} />
          <Route path="/gestion-de-projet" component={GestionLogiciel}/>
        </Switch>
        <FooterContainer/>
      </Router>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
