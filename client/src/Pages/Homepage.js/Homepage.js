import React from "react";
import MiniBoard from "../../components/MiniBoard/MiniBoard";
import "./Homepage.css";
import profileImg from "../../assets/Rectangle 936.png";
import profileOne from "../../assets/Rectangle 892.png";
import profileTwo from "../../assets/Rectangle 894.png";
import profileThree from "../../assets/Rectangle 896.png";
import pawnLogo from "../../assets/Union.png";

function Homepage() {
  return (
    <div className="chesshome-container">
      <div className="nav chesshome-nav">
        <input type="text" placeholder="Search" id="chesshome-search" />
        <div>
          <img src={profileOne} />
        </div>
      </div>
      <header className="main-header">
        <nav className="nav chesshome-nav">
          <div id="chesshome-flex">
            <h1>
              <img src={pawnLogo} id="pawnLogo" /> Chess
            </h1>
            <div>
              <button id="arrow-button">
                <i className="arrow down"></i>
              </button>
            </div>
          </div>
          <div className="chesshome-profileImg">
            <img src={profileImg} />
            <div className="chesshome-profile profileOne">
              <img
                src={profileOne}
                style={{ border: "1px solid #fff", borderRadius: "4px" }}
              />
            </div>
            <div className="chesshome-profile profileTwo">
              <img
                src={profileTwo}
                style={{ border: "1px solid #fff", borderRadius: "4px" }}
              />
            </div>
            <div className="chesshome-profile profileThree">
              <img
                src={profileThree}
                style={{ border: "1px solid #fff", borderRadius: "4px" }}
              />
            </div>
            <p className="text-300">300</p>
          </div>
        </nav>
      </header>
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
