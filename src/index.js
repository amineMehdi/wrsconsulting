import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";

import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/index.css";
class Index extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/a-propos" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById("root"));
