import React from "react";
import "../style/Home.css";
import Navbar from "./Navbar";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Home;
