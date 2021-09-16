import React from "react";
import MiniBoard from "../../components/MiniBoard/MiniBoard";
import "./Homepage.css";
import Header from "../../components/Header/Header";


function Homepage() {
  return (
    <div className="chesshome-container">
     <Header />
      <div className="chesshome-rules-holder">
        <button className="chesshome-rules">Game Rules</button>
      </div>
      <div className="app__container">
        <div className="mini-one">
          <MiniBoard id="234" playerOne="Emmie4sure" playerTwo="techlead" />
        </div>
        <div className="mini-two">
          <MiniBoard id="234" playerOne="simideletaiwo" playerTwo="techyNkem" />
        </div>
        <div className="mini-three">
          <MiniBoard id="234" playerOne="whynotdoris" playerTwo="trustieee" />
        </div>
        <div className="mini-four">
          <MiniBoard id="234" playerOne="dejavu" playerTwo="" />
        </div>
        <div className="mini-five">
          <MiniBoard id="234" playerOne="pgirl" playerTwo="" />
        </div>
        <div className="mini-six">
          <MiniBoard id="234" playerOne="" playerTwo="" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
