import React from "react";
import MiniBoard from "../../components/MiniBoard/MiniBoard";

import "./Homepage.css";

function Homepage() {
  return (
    <div className="App">
      <header className="main-header">
        <nav className="nav">
          <h1>Chess Board Room Plugin</h1>
        </nav>
      </header>
      <div className="app__container">
        <div className="mini-one">
          <MiniBoard id="234" playerOne="Annietah" playerTwo="codeJonin" />
        </div>
        <div className="mini-two">
          <MiniBoard id="234" playerOne="" playerTwo="odiri" />
        </div>
        <div className="mini-three">
          <MiniBoard id="234" playerOne="Vermilion" playerTwo="" />
        </div>
        <div className="mini-four">
          <MiniBoard id="234" playerOne="" playerTwo="" />
        </div>
        <div className="mini-five">
          <MiniBoard id="234" playerOne="SOI" playerTwo="Realice" />
        </div>
        <div className="mini-six">
          <MiniBoard id="234" playerOne="DevPriest" playerTwo="bombos" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
