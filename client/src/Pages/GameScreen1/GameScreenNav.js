import React from "react";
import "./GameScreen1.css";
import profileImg from "../../assets/Rectangle 936.png";
import profileOne from "../../assets/Rectangle 892.png";
import profileTwo from "../../assets/Rectangle 894.png";
import profileThree from "../../assets/Rectangle 896.png";
import pawnLogo from "../../assets/Union.png";

const GameScreenNav = () => {
  return (
    <div id="gamescreen-nav">
      <div className="navbar chesshome-navbar">
        <input type="text" placeholder="Search" className="chesshome-search" />
        <div></div>
      </div>

      <header className="main-header">
        <nav className="navbar chesshome-navbar">
          <div id="chesshome-flex">
            <h1>
              <img src={pawnLogo} id="pawnLogo" /> Chess Plugin
            </h1>
            <div>
              <button id="arrow-button">
                <i className="arrow down"></i>
              </button>
            </div>
          </div>
          <div className="chesshome-profileImg">
            <img src={profileImg} />
            <div className="chesshome-profilepix profileOne">
              <img
                src={profileOne}
                style={{ border: "1px solid #fff", borderRadius: "4px" }}
              />
            </div>
            <div className="chesshome-profilepix profileTwo">
              <img
                src={profileTwo}
                style={{ border: "1px solid #fff", borderRadius: "4px" }}
              />
            </div>
            <div className="chesshome-profilepix profileThree">
              <img
                src={profileThree}
                style={{ border: "1px solid #fff", borderRadius: "4px" }}
              />
            </div>
            <p id="text-300">300</p>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default GameScreenNav;
